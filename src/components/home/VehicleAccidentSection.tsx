import React from "react";
import { ChevronRight } from "lucide-react";

export default function ShortFormSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Laptop Image */}
          <div className="relative flex items-center justify-center">
            <img
              src="https://cdn.prod.website-files.com/5d51b2f2cab8fe67a35631d8/5d8a13d8ecc118a3ba3c7025_5d51c8e4a9f828068d022350_Autoform_optimized-p-500.png "
              alt="Laptop showing form"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-4">
                1-3 MINUTE FORM
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Fill Out Short Form
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Submit a short form that takes less than 3 minutes to complete.
                We will use this information to connect you to a top lawyer in
                our network.
              </p>
            </div>

            {/* CTA Link */}
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors group"
              >
                Free Case Review
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
