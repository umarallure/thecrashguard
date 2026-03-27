"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SmsSignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [smsConsent, setSmsConsent] = useState(false);
  const [termsConsent, setTermsConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill in your first name, last name, and email.");
      return;
    }

    if (!smsConsent) {
      alert("Please agree to receive SMS messages to continue.");
      return;
    }

    if (!termsConsent) {
      alert(
        "Please review and accept our Terms and Conditions and Privacy Policy."
      );
      return;
    }

    console.log("SMS Signup submitted:", {
      ...formData,
      smsConsent,
      termsConsent,
      timestamp: new Date().toISOString(),
    });

    setSubmitted(true);
  };

  if (submitted) {
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
            Thank you for signing up. You will receive SMS notifications at the
            number provided. Reply STOP at any time to unsubscribe.
          </p>
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Stay Updated with Accident Payments
          </h1>
          <p className="text-orange-100 text-lg">
            Sign up to receive important updates and notifications via text
            message.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* First Name */}
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
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder-gray-400"
                placeholder="Enter your first name"
              />
            </div>

            {/* Last Name */}
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
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder-gray-400"
                placeholder="Enter your last name"
              />
            </div>

            {/* Email */}
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
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder-gray-400"
                placeholder="Enter your email address"
              />
            </div>

            {/* Mobile Phone - OPTIONAL per compliance */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-1.5"
              >
                Mobile Phone{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder-gray-400"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 pt-5" />

            {/* Checkbox 1: SMS Consent */}
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
                id="termsConsent"
                checked={termsConsent}
                onChange={(e) => setTermsConsent(e.target.checked)}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer flex-shrink-0"
              />
              <label
                htmlFor="termsConsent"
                className="text-sm text-gray-700 leading-relaxed cursor-pointer"
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

            {/* Consent Disclosure */}
            <div className="bg-gray-50 rounded-lg p-4 mt-2">
              <p className="text-xs text-gray-500 leading-relaxed">
                By entering my email and phone number on this form and clicking
                sign up, I consent to receive calls, emails, and text messages
                from Accident Payments, including messages sent via automation
                using the contact information provided above. Consent is not a
                condition of purchase. Message and data rates may apply. Message
                frequency varies. You may unsubscribe any time by reply STOP via
                text message or clicking the unsubscribe link via email. Reply
                Help anytime for assistance.
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-lg"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
