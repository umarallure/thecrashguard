// "use client";
// import { CheckCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";

// export default function AboutUsSection() {
//   const router = useRouter();

//   return (
//     <div className="bg-gray-50 relative">
//       {/* Full-bleed blurred background on the left (visible on md+) */}
//       <div className="hidden md:block absolute inset-y-0 left-0 w-1/2 overflow-hidden height-full z-0">
//         <div
//           className="absolute inset-0 bg-cover bg-center "
//           style={{
//             backgroundImage: "url('/test.jpeg')",
//             filter: "blur(6px) brightness(0.9)",
//             transform: "scale(1.05)",
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-6 md:px-8 py-12 md:py-20">
//         {/* Left Side - blurred background with centered foreground image */}
//         <div className="relative w-full h-72 md:h-[620px] rounded overflow-hidden flex items-center justify-center">
//           {/* Foreground image sits above the full-bleed blurred background on larger screens */}
//           <img
//             src="/test.jpeg"
//             alt="Person typing on laptop"
//             className="w-64 md:w-[520px] rounded-lg shadow-2xl object-cover -translate-y-4 z-10"
//           />
//         </div>

//         {/* Right Side - Content */}
//         <div className="px-2 md:px-6 lg:px-12">
//           <p className="text-sm text-slate-500 mb-2">About Us</p>

//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
//             Every business starts with a simple question.
//           </h2>

//           <p className="text-sm text-slate-600 mb-6">
//             For the Accident.com founders, that question was: "Why is getting
//             paid by insurance companies such a frustrating experience?"
//             Frustrating is an understatement. Navigating the world of insurance
//             is confusing, stressful and a step backward in time (hello, call
//             centers). Even when they know they are covered, people know
//             insurance companies make more money if they pay you less.
//           </p>

//           <div className="space-y-6">
//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0 mt-1">
//                 <CheckCircle className="w-6 h-6 text-amber-400" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-slate-900">
//                   Nationwide Coverage
//                 </h3>
//                 <p className="text-sm text-slate-500">
//                   Personal injury lawyers throughout the US tell us the types of
//                   cases they specialize in.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0 mt-1">
//                 <CheckCircle className="w-6 h-6 text-amber-400" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-slate-900">Legal Areas</h3>
//                 <p className="text-sm text-slate-500">
//                   Claimants (like you) submit their case details. The closest
//                   attorney, who accepts your claim type, is immediately
//                   notified.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0 mt-1">
//                 <CheckCircle className="w-6 h-6 text-amber-400" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-slate-900">
//                   Free Consultations
//                 </h3>
//                 <p className="text-sm text-slate-500">
//                   Your Accident.com lawyer reaches out immediately to discuss
//                   your case or schedule a free consultation.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <hr className="my-8 border-slate-200" />

//           <div className="mt-4">
//             <Button
//               onClick={() => router.push("/case-review")}
//               className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded shadow"
//             >
//               Get Max Compensation
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { CheckCircle } from "lucide-react";

export default function AboutUsSection() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-6 md:px-8 py-12 md:py-20">
        {/* Left Side - Single Image */}
        <div className="relative w-full flex items-center justify-center">
          <img
            src="/test.jpeg"
            alt="Person typing on laptop"
            className="w-full h-auto rounded-lg shadow-2xl object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="px-2 md:px-6 lg:px-12">
          <p className="text-sm text-slate-500 mb-2">About Us</p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Every business starts with a simple question.
          </h2>

          <p className="text-sm text-slate-600 mb-6">
            For the Accident.com founders, that question was: "Why is getting
            paid by insurance companies such a frustrating experience?"
            Frustrating is an understatement. Navigating the world of insurance
            is confusing, stressful and a step backward in time (hello, call
            centers). Even when they know they are covered, people know
            insurance companies make more money if they pay you less.
          </p>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Nationwide Coverage
                </h3>
                <p className="text-sm text-slate-500">
                  Personal injury lawyers throughout the US tell us the types of
                  cases they specialize in.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Legal Areas</h3>
                <p className="text-sm text-slate-500">
                  Claimants (like you) submit their case details. The closest
                  attorney, who accepts your claim type, is immediately
                  notified.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Free Consultations
                </h3>
                <p className="text-sm text-slate-500">
                  Your Accident.com lawyer reaches out immediately to discuss
                  your case or schedule a free consultation.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-8 border-slate-200" />

          {/* CTA Button */}
          <div className="mt-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded shadow transition-colors duration-200">
              Get Max Compensation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
