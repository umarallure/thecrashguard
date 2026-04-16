import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseServer } from "@/lib/supabase-server";
import { createAlowareContact } from "@/lib/aloware";
import {
  CHECKBOX_SMS_TEXT,
  CHECKBOX_TERMS_TEXT,
  PRIVACY_POLICY_VERSION,
  TERMS_VERSION,
} from "@/lib/sms-compliance";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// E.164-ish: optional +, 10-15 digits. Accepts user-typed formats like
// "(555) 123-4567" by stripping non-digits before validation.
const normalizePhone = (raw: string): string => {
  const digits = raw.replace(/\D+/g, "");
  if (!digits) return "";
  // US default: prepend +1 if 10 digits and not already prefixed.
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return `+${digits}`;
};

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().toLowerCase().email("Enter a valid email address"),
  phone: z.string().trim().optional().default(""),
  smsConsent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to receive SMS messages" }),
  }),
  termsConsent: z.literal(true, {
    errorMap: () => ({
      message: "You must accept the Terms and Privacy Policy",
    }),
  }),
});

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        details: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { firstName, lastName, email, phone, smsConsent, termsConsent } =
    parsed.data;

  const normalizedPhone = phone ? normalizePhone(phone) : "";
  // Phone is not asterisked on the form per A2P 10DLC guidance, but
  // functionally a user can't receive SMS without one. Reject submissions
  // that lack a usable phone number with a clear message.
  if (!normalizedPhone || normalizedPhone.replace(/\D+/g, "").length < 11) {
    return NextResponse.json(
      {
        error: "Validation failed",
        details: { phone: ["Enter a valid US mobile phone number"] },
      },
      { status: 400 }
    );
  }

  const headers = request.headers;
  const ip =
    headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    headers.get("x-real-ip") ||
    null;
  const userAgent = headers.get("user-agent") || null;
  const pageUrl = headers.get("referer") || null;

  // 1. Forward to Aloware first. We record the outcome in the same insert
  //    below so the audit row always reflects what actually happened.
  const aloware = await createAlowareContact({
    first_name: firstName,
    last_name: lastName,
    email,
    phone_number: normalizedPhone,
    lead_source: "Website SMS Opt-In",
    notes: `Consent captured ${new Date().toISOString()} from ${pageUrl ?? "unknown page"}`,
  });

  if (!aloware.ok) {
    console.error("Aloware forwarding failed:", aloware.status, aloware.body);
  }

  // 2. Write the consent record. No .select() — returning the inserted row
  //    would trigger a SELECT RLS check, and we intentionally have no SELECT
  //    policy (audit integrity). A single insert avoids that entirely.
  const { error: insertError } = await supabaseServer
    .from("sms_consents")
    .insert({
      first_name: firstName,
      last_name: lastName,
      email,
      phone: normalizedPhone,
      sms_consent: smsConsent,
      terms_consent: termsConsent,
      checkbox_sms_text: CHECKBOX_SMS_TEXT,
      checkbox_terms_text: CHECKBOX_TERMS_TEXT,
      privacy_policy_version: PRIVACY_POLICY_VERSION,
      terms_version: TERMS_VERSION,
      ip_address: ip,
      user_agent: userAgent,
      page_url: pageUrl,
      aloware_forwarded: aloware.ok,
      aloware_response: aloware.body as never,
      aloware_error: aloware.ok ? null : `HTTP ${aloware.status}`,
    });

  if (insertError) {
    console.error("sms_consents insert failed:", insertError);
    return NextResponse.json(
      { error: "Could not save your signup. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
