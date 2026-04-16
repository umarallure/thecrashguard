import Link from "next/link";
import {
  COMPANY_NAME,
  SMS_PROGRAM_MESSAGE_TYPES,
  TERMS_UPDATED_LABEL,
  WEBSITE_HOSTNAME,
  WEBSITE_URL,
} from "@/lib/sms-compliance";

export const metadata = {
  title: "Terms and Conditions | Accident Payments",
  description:
    "Terms and Conditions for using Accident Payments website and services, including SMS messaging terms and support instructions.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-orange-100">Last updated: {TERMS_UPDATED_LABEL}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-gray max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using the website{" "}
              <strong>{WEBSITE_HOSTNAME}</strong> (&quot;the Site&quot;) operated by{" "}
              {COMPANY_NAME} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be
              bound by these Terms and Conditions. If you do not agree with any part
              of these terms, you must not use the Site or our services.
            </p>
          </section>

          {/* Description of Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Description of Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {COMPANY_NAME} is an information and case-intake platform. We provide
              educational resources related to personal injury, car accidents,
              medical malpractice, workers&apos; compensation, SSDI benefits, and
              other legal matters. If you request a case review, we may help
              facilitate contact with an independent attorney or law firm that may
              be able to evaluate your matter.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-4">
              <p className="text-gray-800 font-semibold">Important Disclaimer:</p>
              <p className="text-gray-700 mt-1">
                {COMPANY_NAME} is <strong>not a law firm</strong> and does not
                provide legal advice. The information on this website is for general
                educational purposes only and should not be construed as legal
                advice. No attorney-client relationship is formed by using this
                website or submitting a case review. Any legal matter should be
                discussed with a licensed attorney in your jurisdiction.
              </p>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              User Responsibilities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using this Site, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>You are at least 18 years of age</li>
              <li>
                The information you provide is accurate, complete, and current
              </li>
              <li>
                You will not use the Site for any unlawful or prohibited purpose
              </li>
              <li>
                You will not attempt to interfere with the proper functioning of the
                Site
              </li>
              <li>
                You will not submit false or misleading information through any
                form on the Site
              </li>
            </ul>
          </section>

          {/* SMS Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              SMS/Text Messaging Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By opting in to receive SMS text messages from {COMPANY_NAME}, you
              agree to the following messaging terms:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                You consent to receive text messages from {COMPANY_NAME} at the
                mobile phone number you provided, including messages sent via
                automated technology where permitted by law
              </li>
              <li>Message types may include {SMS_PROGRAM_MESSAGE_TYPES}</li>
              <li>Message frequency varies</li>
              <li>Message and data rates may apply</li>
              <li>
                Consent to receive SMS messages is <strong>not</strong> a condition
                of purchase or receiving any services
              </li>
              <li>
                You may opt out at any time by replying <strong>STOP</strong> to any
                message we send
              </li>
              <li>
                For assistance, reply <strong>HELP</strong> to any message or
                visit{" "}
                <a
                  href={WEBSITE_URL}
                  className="text-orange-500 hover:text-orange-600 underline"
                >
                  {WEBSITE_HOSTNAME}
                </a>
              </li>
              <li>
                We send SMS only after you separately consent through a form that
                clearly discloses the program terms
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Your SMS consent applies only to messages from {COMPANY_NAME}; it does
              not authorize unrelated third-party marketing texts. You understand
              that wireless carriers are not liable for delayed or undelivered
              messages.
            </p>
          </section>

          {/* Case Review */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Case Review Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              When you submit a case review request, your information may be shared
              with an independent attorney or law firm for the purpose of evaluating
              your legal matter. Submitting a case review does not guarantee
              representation by any attorney. Any attorney-client relationship is
              formed directly between you and the attorney, subject to their own
              terms and agreements. Submitting a case review does not automatically
              enroll you in SMS messaging; text messaging requires separate opt-in
              consent.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All content on the Site, including text, graphics, logos, images,
              articles, and software, is the property of Accident Payments or its
              content providers and is protected by copyright and intellectual
              property laws. You may not reproduce, distribute, modify, or create
              derivative works from any content on this Site without our prior
              written consent.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, Accident Payments and its
              affiliates, officers, employees, and agents shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages
              arising out of or related to your use of the Site or services. This
              includes, without limitation, damages for loss of profits, data, or
              other intangible losses, even if we have been advised of the
              possibility of such damages.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Site and its content are provided on an &quot;as is&quot; and &quot;as
              available&quot; basis without warranties of any kind, either express or
              implied. We do not warrant that the Site will be uninterrupted,
              error-free, or free of viruses or other harmful components. We make no
              guarantees regarding the accuracy, completeness, or reliability of any
              content or information on the Site.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Site may contain links to third-party websites or services that
              are not owned or controlled by Accident Payments. We are not
              responsible for the content, privacy policies, or practices of any
              third-party sites. Accessing third-party links is at your own risk.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Indemnification
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless Accident Payments, its
              affiliates, officers, employees, and agents from any claims,
              liabilities, damages, losses, or expenses (including reasonable
              attorney&apos;s fees) arising out of your use of the Site, violation of
              these Terms, or infringement of any rights of a third party.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of the United States. Any disputes arising
              under these terms shall be subject to the exclusive jurisdiction of
              the courts in the applicable jurisdiction.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to These Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify or replace these Terms and Conditions
              at any time. Changes will be posted on this page with a revised
              &quot;Last updated&quot; date. Your continued use of the Site after any
              changes constitutes acceptance of the revised terms.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms and Conditions, please
              contact us:
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
                SMS Help: Reply <strong>HELP</strong> to any text message from our
                SMS program.
              </p>
            </div>
          </section>

          {/* Links */}
          <section className="border-t border-gray-200 pt-8 mt-8">
            <p className="text-gray-600 text-sm">
              See also:{" "}
              <Link
                href="/privacy-policy"
                className="text-orange-500 hover:text-orange-600 underline"
              >
                Privacy Policy
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
