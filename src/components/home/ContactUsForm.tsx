"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    caseType: "Auto Accident",
    message: "",
  });
  const [smsConsent, setSmsConsent] = useState(false);
  const [termsConsent, setTermsConsent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!termsConsent) {
      alert(
        "Please review and accept our Terms and Conditions and Privacy Policy."
      );
      return;
    }

    console.log("Form submitted:", {
      ...formData,
      smsConsent,
      termsConsent,
      timestamp: new Date().toISOString(),
    });
    alert(
      "Message sent successfully! We will be in touch with you in less than 24 hours."
    );
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Info Section */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-3">
                CONTACT US
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
            </div>

            <p className="text-gray-500 leading-relaxed">
              Please fill out the following form and we&apos;ll be in <br /> touch
              with you in less than 24 hours.
            </p>
          </div>

          {/* Right Side - Form Section */}
          <div className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder-gray-400"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder-gray-400"
                />
              </div>
            </div>

            {/* Phone and Case Type Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone (optional)"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder-gray-400"
                />
              </div>

              <div>
                <select
                  name="caseType"
                  value={formData.caseType}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white text-gray-700"
                >
                  <option value="Auto Accident">Auto Accident</option>
                  <option value="Slip and Fall">Slip and Fall</option>
                  <option value="Medical Malpractice">
                    Medical Malpractice
                  </option>
                  <option value="Workplace Injury">Workplace Injury</option>
                  <option value="Product Liability">Product Liability</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Message Field */}
            <div>
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Message..."
                className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none placeholder-gray-400"
              ></textarea>
            </div>

            {/* Checkbox 1: SMS Consent */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="contactSmsConsent"
                checked={smsConsent}
                onChange={(e) => setSmsConsent(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer flex-shrink-0"
              />
              <label
                htmlFor="contactSmsConsent"
                className="text-xs text-gray-600 leading-relaxed cursor-pointer"
              >
                By checking this box, I agree to receive SMS messages from
                Accident Payments, including appointment reminders and
                notifications. Message frequency varies. Message and data rates
                may apply. Reply STOP to unsubscribe. Reply HELP for help.
                Consent is not a condition of purchase.
              </label>
            </div>

            {/* Checkbox 2: Terms & Privacy */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="contactTermsConsent"
                checked={termsConsent}
                onChange={(e) => setTermsConsent(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer flex-shrink-0"
              />
              <label
                htmlFor="contactTermsConsent"
                className="text-xs text-gray-600 leading-relaxed cursor-pointer"
              >
                I have reviewed and accept Accident Payments&apos;{" "}
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

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-200"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
