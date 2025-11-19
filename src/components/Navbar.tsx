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
          TheCrashGuard
          </span>
        </Link>

        {/* Desktop Navigation (show only CTA) */}
        <div className="hidden md:block">
          <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2">
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link href="/case-review">Get Free Case Review</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  href={link.to}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-accent hover:bg-accent/90 mt-4">
                <Link href="/case-review" onClick={() => setIsOpen(false)}>
                  Get Free Case Review
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
