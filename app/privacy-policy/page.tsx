import Link from "next/link";
import {
  COMPANY_NAME,
  PRIVACY_POLICY_UPDATED_LABEL,
  SMS_PROGRAM_MESSAGE_TYPES,
  WEBSITE_HOSTNAME,
  WEBSITE_URL,
} from "@/lib/sms-compliance";

export const metadata = {
  title: "Privacy Policy | Accident Payments",
  description:
    "Learn how Accident Payments collects, uses, shares, and protects personal information, including SMS consent and mobile data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-orange-100">Last updated: {PRIVACY_POLICY_UPDATED_LABEL}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-gray max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {COMPANY_NAME} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the
              website <strong>{WEBSITE_HOSTNAME}</strong>. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website, request services from us, or opt in to receive
              SMS or other communications from us.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to
              us when you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Fill out a contact form or case review form on our website</li>
              <li>Provide a mobile number and opt in to receive SMS messages</li>
              <li>Subscribe to our communications</li>
              <li>Communicate with us through our website or by text message</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              The types of personal information we may collect include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Contact Information:</strong> First name, last name, email
                address, and mobile phone number
              </li>
              <li>
                <strong>Case Information:</strong> Details about your legal matter,
                including accident type, location, and description
              </li>
              <li>
                <strong>SMS Consent and Preference Data:</strong> Records of your
                consent to receive text messages, including checkbox selections,
                timestamps, policy versions, IP address, page URL, and user agent
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with
                our website, collected automatically through cookies and analytics
                tools
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To respond to your inquiries and provide case review services</li>
              <li>
                To review your request and, when appropriate and requested by you,
                help facilitate contact with an independent attorney or law firm
              </li>
              <li>
                To send SMS messages you have specifically opted in to receive,
                including {SMS_PROGRAM_MESSAGE_TYPES}
              </li>
              <li>To improve our website, services, and user experience</li>
              <li>
                To maintain consent records and satisfy legal, carrier, and
                compliance requirements
              </li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* SMS/Text Messaging */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              SMS/Text Messaging Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you opt in to receive SMS text messages from {COMPANY_NAME}:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Message types may include {SMS_PROGRAM_MESSAGE_TYPES}
              </li>
              <li>Message frequency varies</li>
              <li>Message and data rates may apply</li>
              <li>
                You may opt out at any time by replying <strong>STOP</strong> to any
                text message
              </li>
              <li>
                Reply <strong>HELP</strong> to any text message for support, or use
                the contact options available on our website
              </li>
              <li>Consent to receive SMS is not a condition of purchase or service</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Submitting a case review or contact request does not, by itself,
              enroll you in SMS. We send text messages only after you provide your
              mobile number and affirmatively check the SMS consent box displayed
              with the required disclosures.
            </p>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Sharing and Third Parties
            </h2>
            <p className="text-gray-700 leading-relaxed font-semibold bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
              We do not share, sell, rent, or trade your personal information,
              including mobile numbers or SMS opt-in data, with third parties or
              affiliates for their marketing or promotional purposes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your information only in the following limited
              circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Requested Service Fulfillment:</strong> With an independent
                attorney or law firm only when you have asked us to help facilitate
                a case review or similar requested service
              </li>
              <li>
                <strong>Service Providers:</strong> With trusted service providers
                who assist in operating our website and services (such as hosting,
                analytics, form processing, and messaging delivery), each bound by
                appropriate confidentiality and data-protection obligations
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law, court
                order, or governmental regulation
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Text messaging originator opt-in data and consent will not be shared
              with any third parties except vendors, platforms, and carriers that
              help us deliver the messaging services you requested.
            </p>
          </section>

          {/* Cookies and Analytics */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cookies and Analytics
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website uses cookies and similar technologies, including Google
              Analytics, to analyze website traffic and improve your experience.
              These tools may collect information such as your IP address, browser
              type, pages visited, and time spent on the site. This data is
              collected in aggregate and does not personally identify you. You can
              control cookie settings through your browser preferences.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement reasonable administrative, technical, and physical
              security measures to protect your personal information from
              unauthorized access, use, or disclosure. However, no method of
              transmission over the Internet or electronic storage is 100% secure,
              and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information only for as long as necessary to
              fulfill the purposes described in this Privacy Policy, or as required
              by law. SMS consent records are retained for the duration of your
              subscription and for a reasonable period after you opt out, as needed
              for legal, carrier, and compliance purposes.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your personal information</li>
              <li>
                The right to opt out of SMS communications at any time by replying
                STOP
              </li>
              <li>The right to withdraw consent for data processing</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise any of these rights, please contact us using the
              information provided below.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We
              do not knowingly collect personal information from children. If you
              believe we have inadvertently collected information from a child,
              please contact us immediately so we can delete it.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will
              be posted on this page with a revised &quot;Last updated&quot; date. We
              encourage you to review this Privacy Policy periodically to stay
              informed about how we protect your information.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or our
              data practices, please contact us:
            </p>
            <div className="mt-4 bg-gray-50 rounded-lg p-6">
              <p className="text-gray-900 font-semibold text-lg">
                {COMPANY_NAME}
              </p>
              <p className="text-gray-700 mt-2">
                Website:{" "}
                <a
                  href={WEBSITE_URL}
                  className="text-orange-500 hover:text-orange-600"
                >
                  {WEBSITE_HOSTNAME}
                </a>
              </p>
              <p className="text-gray-700 mt-2">
                SMS Support: Reply <strong>HELP</strong> to any message sent through
                our SMS program.
              </p>
            </div>
          </section>

          {/* Links */}
          <section className="border-t border-gray-200 pt-8 mt-8">
            <p className="text-gray-600 text-sm">
              See also:{" "}
              <Link
                href="/terms"
                className="text-orange-500 hover:text-orange-600 underline"
              >
                Terms and Conditions
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
