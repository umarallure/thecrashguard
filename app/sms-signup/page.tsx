"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CHECKBOX_SMS_TEXT,
  CHECKBOX_TERMS_TEXT,
  COMPANY_NAME,
} from "@/lib/sms-compliance";

type FieldErrors = Partial<
  Record<
    "firstName" | "lastName" | "email" | "phone" | "termsConsent" | "form",
    string
  >
>;

export default function SmsSignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [smsConsent, setSmsConsent] = useState(false);
  const [termsConsent, setTermsConsent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionWarning, setSubmissionWarning] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!formData.firstName.trim()) next.firstName = "First name is required";
    if (!formData.lastName.trim()) next.lastName = "Last name is required";
    if (!formData.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      next.email = "Enter a valid email address";
    const digits = formData.phone.replace(/\D+/g, "");
    if (digits && (digits.length < 10 || digits.length > 11))
      next.phone = "Enter a valid US mobile phone number";
    if (!termsConsent)
      next.termsConsent = "You must accept the Terms and Privacy Policy";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setErrors({});
    setSubmissionWarning(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/sms-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          smsConsent,
          termsConsent,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data?.details) {
          const fieldErrors: FieldErrors = {};
          for (const [key, messages] of Object.entries(
            data.details as Record<string, string[]>
          )) {
            fieldErrors[key as keyof FieldErrors] = messages?.[0];
          }
          setErrors(fieldErrors);
        } else {
          setErrors({
            form: data?.error || "Something went wrong. Please try again.",
          });
        }
        return;
      }

      setSubmissionWarning(
        typeof data?.warning === "string" ? data.warning : null
      );
      setSubmitted(true);
    } catch {
      setErrors({
        form: "Network error. Please check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    const submittedWithPhone = formData.phone.replace(/\D+/g, "").length > 0;
    const willReceiveSms = submittedWithPhone && smsConsent;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            You&apos;re Signed Up!
          </h2>
          <p className="text-gray-600 mb-6">
            {willReceiveSms
              ? "Thank you for signing up. You will receive SMS notifications at the number provided. Reply STOP at any time to unsubscribe."
              : "Thank you for signing up. Your preferences have been recorded."}
          </p>
          {submissionWarning && (
            <div className="mb-6 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              {submissionWarning}
            </div>
          )}
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const inputBase =
    "block w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder-gray-400";
  const inputOk = "border-gray-300";
  const inputErr = "border-red-400 bg-red-50";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Stay Updated with {COMPANY_NAME}
          </h1>
          <p className="text-orange-100 text-lg">
            Sign up to receive important updates and notifications via text
            message.
          </p>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={`${inputBase} ${errors.firstName ? inputErr : inputOk}`}
                  placeholder="Enter your first name"
                  aria-invalid={!!errors.firstName}
                  aria-describedby={errors.firstName ? "firstName-error" : undefined}
                />
                {errors.firstName && (
                  <p id="firstName-error" className="mt-1 text-sm text-red-600">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={`${inputBase} ${errors.lastName ? inputErr : inputOk}`}
                  placeholder="Enter your last name"
                  aria-invalid={!!errors.lastName}
                  aria-describedby={errors.lastName ? "lastName-error" : undefined}
                />
                {errors.lastName && (
                  <p id="lastName-error" className="mt-1 text-sm text-red-600">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
                  placeholder="Enter your email address"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone field is optional; validate only when a value is provided. */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Mobile Phone{" "}
                  <span className="font-normal text-gray-500">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${inputBase} ${errors.phone ? inputErr : inputOk}`}
                  placeholder="(555) 123-4567"
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-5" />

            <div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="smsConsent"
                  checked={smsConsent}
                  onChange={(e) => setSmsConsent(e.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer flex-shrink-0"
                />
                <label
                  htmlFor="smsConsent"
                  className="text-sm text-gray-700 leading-relaxed cursor-pointer"
                >
                  {CHECKBOX_SMS_TEXT}
                </label>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="termsConsent"
                  checked={termsConsent}
                  onChange={(e) => {
                    setTermsConsent(e.target.checked);
                    if (errors.termsConsent)
                      setErrors((p) => ({ ...p, termsConsent: undefined }));
                  }}
                  className="mt-1 h-5 w-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer flex-shrink-0"
                  aria-invalid={!!errors.termsConsent}
                />
                <label
                  htmlFor="termsConsent"
                  className="text-sm text-gray-700 leading-relaxed cursor-pointer"
                >
                  I have reviewed and accept {COMPANY_NAME}&apos;s{" "}
                  <Link
                    href="/terms"
                    className="text-orange-500 hover:text-orange-600 underline"
                    target="_blank"
                  >
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-orange-500 hover:text-orange-600 underline"
                    target="_blank"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
              {/* Screen-reader-only copy of the exact consent string captured
                  to sms_consents, so the recorded text matches what sighted
                  users see even though the visible version contains links. */}
              <span className="sr-only">{CHECKBOX_TERMS_TEXT}</span>
              {errors.termsConsent && (
                <p className="mt-1 ml-8 text-sm text-red-600">
                  {errors.termsConsent}
                </p>
              )}
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mt-2">
              <p className="text-xs text-gray-500 leading-relaxed">
                By submitting this form, I consent to receive calls and emails
                from {COMPANY_NAME} using the contact information provided
                above. If I check the SMS box, I also agree to receive text
                messages from {COMPANY_NAME}, including messages sent via
                automation. Consent is not a condition of purchase. Message and
                data rates may apply. Message frequency varies. You may
                unsubscribe any time by reply STOP via text message or clicking
                the unsubscribe link via email. Reply HELP anytime for
                assistance.
              </p>
              <div className="flex gap-4 mt-3">
                <Link
                  href="/privacy-policy"
                  className="text-xs text-orange-500 hover:text-orange-600 underline"
                  target="_blank"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-xs text-orange-500 hover:text-orange-600 underline"
                  target="_blank"
                >
                  Terms and Conditions
                </Link>
              </div>
            </div>

            {errors.form && (
              <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
                {errors.form}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-lg"
            >
              {submitting ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
