import { Scale, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from 'next/link';

const Footer = () => {
  const practiceAreas = [
    "Car Accident Resources",
    "Medical Malpractice",
    "SSDI Benefits",
    "Workers Compensation",
  ];

  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maryland",
  ];

  const aboutLinks = [
    { label: "About Us", to: "/" },
    { label: "Contact Us", to: "/" },
    { label: "Terms", to: "/" },
    { label: "Become Law Firm Partner", to: "/" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">PRACTICE AREAS</h3>
            <ul className="space-y-2">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* States */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-4">STATES</h3>
            <div className="grid grid-cols-2 gap-2">
              {states.map((state) => (
                <a
                  key={state}
                  href="#"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {state}
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">ABOUT ACCIDENT.COM</h3>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.to}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-accent" />
              <span className="font-bold text-lg">
                <span className="text-accent">Accident</span>.com
              </span>
            </div>
            <p className="text-sm text-primary-foreground/60 text-center">
              © {new Date().getFullYear()} Accident.com. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
