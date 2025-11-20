"use client";
import React, { useState } from "react";
import { Scale, Menu, X, ChevronDown } from "lucide-react";

export default function ModernNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-gray-900">
              <span className="text-orange-500">Accident Payments</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Resources Link */}
            <a
              href="/resources"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
            >
              Resources
            </a>

            {/* CTA Button */}
            <a
              href="/case-review"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Free Case Review
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-orange-500 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 animate-slideDown">
            <div className="flex flex-col gap-4">
              {/* Resources Link */}
              <a
                href="/resources"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                Resources
              </a>

              {/* CTA Button */}
              <a
                href="/case-review"
                className="w-full text-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
              >
                Get Free Case Review
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}
