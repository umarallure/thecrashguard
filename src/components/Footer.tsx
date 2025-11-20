// import { Scale, Facebook, Twitter, Linkedin } from "lucide-react";
// import Link from "next/link";

// const Footer = () => {
//   const practiceAreas = [
//     "Car Accident Resources",
//     "Medical Malpractice",
//     "SSDI Benefits",
//     "Workers Compensation",
//   ];

//   const states = [
//     "Alabama",
//     "Alaska",
//     "Arizona",
//     "Arkansas",
//     "California",
//     "Colorado",
//     "Connecticut",
//     "Delaware",
//     "Florida",
//     "Georgia",
//     "Hawaii",
//     "Idaho",
//     "Illinois",
//     "Indiana",
//     "Iowa",
//     "Kansas",
//     "Kentucky",
//     "Louisiana",
//     "Maryland",
//   ];

//   const aboutLinks = [
//     { label: "About Us", to: "/" },
//     { label: "Contact Us", to: "/" },
//     { label: "Terms", to: "/" },
//     { label: "Become Law Firm Partner", to: "/" },
//   ];

//   return (
//     <footer className="bg-white text-blue-900">
//       <div className="container py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Practice Areas */}
//           <div>
//             <h3 className="font-bold text-lg mb-4 text-blue-900">
//               PRACTICE AREAS
//             </h3>
//             <ul className="space-y-2">
//               {practiceAreas.map((area) => (
//                 <li key={area}>
//                   <a
//                     href="#"
//                     className="text-sm text-blue-700 hover:text-blue-900 transition-colors"
//                   >
//                     {area}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* States */}
//           <div className="lg:col-span-2">
//             <h3 className="font-bold text-lg mb-4 text-blue-900">STATES</h3>
//             <div className="grid grid-cols-2 gap-2">
//               {states.map((state) => (
//                 <a
//                   key={state}
//                   href="#"
//                   className="text-sm text-blue-700 hover:text-blue-900 transition-colors"
//                 >
//                   {state}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* About */}
//           <div>
//             <h3 className="font-bold text-lg mb-4 text-blue-900">
//               ABOUT Accident Payments
//             </h3>
//             <ul className="space-y-2">
//               {aboutLinks.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     href={link.to}
//                     className="text-sm text-blue-700 hover:text-blue-900 transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* Social Icons */}
//             <div className="flex gap-4 mt-6">
//               <a
//                 href="#"
//                 className="text-blue-700 hover:text-orange-500 transition-colors"
//               >
//                 <Facebook className="h-5 w-5" />
//               </a>
//               <a
//                 href="#"
//                 className="text-blue-700 hover:text-orange-500 transition-colors"
//               >
//                 <Twitter className="h-5 w-5" />
//               </a>
//               <a
//                 href="#"
//                 className="text-blue-700 hover:text-orange-500 transition-colors"
//               >
//                 <Linkedin className="h-5 w-5" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-12 pt-8 border-t border-blue-200">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             <div className="flex items-center gap-2">
//               <Scale className="h-5 w-5 text-orange-500" />
//               <span className="font-bold text-lg text-blue-900">
//                 <span className="text-orange-500">Accident Payments</span>.com
//               </span>
//             </div>
//             <p className="text-sm text-blue-600 text-center">
//               © {new Date().getFullYear()} Accident Payments. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Scale, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const practiceAreas = [
    "Car Accident Resources",
    "Medical Malpractice",
    "SSDI Benefits",
    "Workers Compensation",
  ];

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
  ];

  const aboutLinks = [
    { label: "About Us", to: "/" },
    { label: "Contact Us", to: "/" },
    { label: "Terms", to: "/" },
    { label: "Become Law Firm Partner", to: "/" },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-50 via-white to-orange-50 text-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Practice Areas */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-black tracking-wide">
              PRACTICE AREAS
            </h3>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-orange-500 transition-colors duration-200"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* States */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 text-black tracking-wide">
              STATES
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
              {states.map((state) => (
                <a
                  key={state}
                  href="#"
                  className="text-sm text-gray-700 hover:text-orange-500 transition-colors duration-200 whitespace-nowrap"
                >
                  {state}
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-black tracking-wide">
              ABOUT ACCIDENT PAYMENTS
            </h3>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.to}
                    className="text-sm text-gray-700 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-white hover:bg-orange-500 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-white hover:bg-orange-500 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-white hover:bg-orange-500 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg">
                <Scale className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-black">
                <span className="text-orange-500">Accident Payments</span>.com
              </span>
            </div>
            <p className="text-sm text-gray-600 text-center">
              © {new Date().getFullYear()} Accident Payments. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
