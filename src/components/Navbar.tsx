"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Scale, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/resources", label: "Resources" },
    { to: "/case-review", label: "Free Case Review" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between relative">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Scale className="h-10 w-10 text-accent" />
          <span className="bg-gradient-to-r from-accent to-orange-600 bg-clip-text text-transparent">
          Accident Payments
          </span>
        </Link>

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
