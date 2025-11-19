"use client";
import { Zap, Star, UserCheck, Briefcase } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const benefits = [
  {
    icon: Zap,
    title: "Connect Instantly",
  },
  {
    icon: Star,
    title: "Top Injury Lawyers",
  },
  {
    icon: UserCheck,
    title: "Free Consultation",
  },
  {
    icon: Briefcase,
    title: "Max Compensation",
  },
];

const WhyChooseUs = () => {
  const handleCaseReview = () => {
    window.location.href = "/case-review";
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left Side - Tag and Heading */}
          <AnimatedSection animationType="slide-in-left">
            <div className="space-y-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                WE ARE Accident Payments
              </p>
              <h2 className="text-2xl md:text-4xl font-semibold text-[#1e3a8a] leading-tight mt-0 md:-mt-6">
                Don't Let Insurance Companies
                <br />
                Take Advantage
              </h2>
            </div>
          </AnimatedSection>

          {/* Right Side - Paragraph and Icons */}
          <AnimatedSection animationType="slide-in-right">
            <div className="space-y-8">
              <p className="text-base text-gray-600 leading-relaxed">
                <span className="text-orange-500 font-bold text-5xl float-left mr-2 leading-none">
                  A
                </span>
                ccident Payments.com is inspired by our simple and important mission:
                "Ensure everyone in America gets fast and free access to legal
                advice and pursues the claims they are entitled to." That means
                we've thoughtfully built our network of attorneys for every type
                of claimant who may come our way.
              </p>

              {/* Benefits Icons - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded border border-gray-300 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-gray-700" />
                      </div>
                      <h4 className="font-semibold text-base text-[#1e3a8a]">
                        {benefit.title}
                      </h4>
                    </div>
                  );
                })}
              </div>

              {/* Button */}
              <div className="pt-4">
                <button
                  onClick={handleCaseReview}
                  className="inline-flex items-center gap-2 text-gray-800 font-semibold text-base hover:gap-3 transition-all"
                >
                  Free Case Review
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
