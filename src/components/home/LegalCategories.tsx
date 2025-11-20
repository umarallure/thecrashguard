// "use client";
// import { useState, useEffect } from "react";
// import {
//   Car,
//   User,
//   HardHat,
//   AlertTriangle,
//   Stethoscope,
//   Gavel,
// } from "lucide-react";
// import { useRouter } from "next/navigation";

// const categories = [
//   {
//     number: "01.",
//     title: "Auto Accident",
//     icon: "https://cdn.prod.website-files.com/5d51b2f2cab8fe67a35631d8/5d5333ed64234cda8dd49833_Auto%20Accident.png",
//     items: ["Car", "Hit and run", "Motorcycle", "Commercial"],
//   },
//   {
//     number: "02.",
//     title: "Personal Injury",
//     icon: "https://cdn.prod.website-files.com/5d51b2f2cab8fe67a35631d8/5d5333ed64234cda8dd49833_Auto%20Accident.png",
//     items: [
//       "Dog Bite",
//       "Wrongful death",
//       "Wrongful Death",
//       "Nursing Home Abuse",
//     ],
//   },
//   {
//     number: "03.",
//     title: "Workplace Injury",
//     icon: HardHat,
//     items: [
//       "Injured at work",
//       "ERISA disability",
//       "Disability Insurance",
//       "Denied compensation",
//     ],
//   },
//   {
//     number: "04.",
//     title: "Slip & Fall",
//     icon: AlertTriangle,
//     items: [
//       "Broken bones",
//       "Cuts and bruises",
//       "Spine or nerve damage",
//       "Sprained ankles / wrists",
//     ],
//   },
//   {
//     number: "05.",
//     title: "Medical Malpractice",
//     icon: Stethoscope,
//     items: ["Child birth", "Negligence", "Misdiagnosis", "Wrongful Death"],
//   },
//   {
//     number: "06.",
//     title: "Disability Benefits",
//     icon: Gavel,
//     items: [
//       "Unable to Work",
//       "Work Place Injury",
//       "Medical Malpractice",
//       "Long Term Disability",
//     ],
//   },
// ];

// const LegalCategories = () => {
//   const router = useRouter();
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
//       <div className="container max-w-7xl mx-auto px-4">
//         <div className="text-center mb-12 space-y-4 animate-fadeIn">
//           <p className="text-sm font-semibold text-accent uppercase tracking-wide">
//             LEGAL AREAS
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-black">
//             Most Common Legal Categories
//           </h2>
//           <div className="w-20 h-1 bg-accent mx-auto" />
//         </div>

//         {/* Desktop Grid View */}
//         <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {categories.map((category, index) => {
//             const Icon = category.icon;
//             return (
//               <div
//                 key={index}
//                 className="group cursor-pointer"
//                 style={{
//                   animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
//                 }}
//               >
//                 <div className="bg-white rounded-lg border border-gray-200 p-8 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-accent/50">
//                   <div className="flex justify-center mb-6">
//                     <div className="w-32 h-32 bg-[#1e3a8a] rounded-lg flex items-center justify-center group-hover:bg-accent transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
//                       <Icon
//                         className="w-16 h-16 text-white"
//                         strokeWidth={1.5}
//                       />
//                     </div>
//                   </div>

//                   <h3 className="text-2xl font-bold mb-3">
//                     <span className="text-[#1e3a8a] group-hover:text-accent transition-colors duration-300">
//                       {category.title}
//                     </span>
//                   </h3>

//                   <div className="w-16 h-0.5 bg-accent mx-auto mb-6 group-hover:w-32 transition-all duration-500" />

//                   {/* Centered Items List */}
//                   <ul className="space-y-2.5 text-center">
//                     {category.items.map((item, idx) => (
//                       <li
//                         key={idx}
//                         className="text-sm text-gray-600 group-hover:text-gray-800 transition-all duration-300"
//                       >
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Mobile Carousel View */}
//         <div className="md:hidden mb-6">
//           <div className="relative">
//             {/* Carousel Container */}
//             <div className="overflow-hidden">
//               <div
//                 className="flex transition-transform duration-500 ease-out"
//                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//               >
//                 {categories.map((category, index) => {
//                   const Icon = category.icon;
//                   return (
//                     <div key={index} className="w-full flex-shrink-0 px-4">
//                       <div className="bg-white rounded-lg border border-gray-200 p-8 text-center shadow-lg">
//                         <div className="flex justify-center mb-6">
//                           <div className="w-32 h-32 bg-[#1e3a8a] rounded-lg flex items-center justify-center shadow-lg">
//                             <Icon
//                               className="w-16 h-16 text-white"
//                               strokeWidth={1.5}
//                             />
//                           </div>
//                         </div>

//                         <h3 className="text-2xl font-bold mb-3 text-[#1e3a8a]">
//                           {category.title}
//                         </h3>

//                         <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />

//                         {/* Centered Items List */}
//                         <ul className="space-y-2.5 text-center">
//                           {category.items.map((item, idx) => (
//                             <li key={idx} className="text-sm text-gray-600">
//                               {item}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Dots Indicator - Below Cards but above Button */}
//           <div className="flex justify-center gap-2 mt-6 mb-6">
//             {categories.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   currentSlide === index
//                     ? "bg-accent w-8"
//                     : "bg-gray-300 w-2 hover:bg-gray-400"
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes slideInUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease-out;
//         }

//         .animate-fadeInUp {
//           animation: fadeInUp 1s ease-out 0.6s both;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default LegalCategories;
"use client";
import { useState, useEffect } from "react";

const categories = [
  {
    number: "01.",
    title: "Auto Accident",
    image:
      "https://cdn.prod.website-files.com/5d51b2f2cab8fe67a35631d8/5d5333ed64234cda8dd49833_Auto%20Accident.png",
    items: ["Car", "Hit and run", "Motorcycle", "Commercial"],
  },
  {
    number: "02.",
    title: "Personal Injury",
    image:
      "https://cdn.prod.website-files.com/5d51b2f2cab8fe67a35631d8/5d5336e232c94a355821725a_accidentCom_injury_blue.svg",
    items: [
      "Dog Bite",
      "Wrongful death",
      "Wrongful Death",
      "Nursing Home Abuse",
    ],
  },
  {
    number: "03.",
    title: "Workplace Injury",
    image:
      "https://cdn.prod.website-files.com/5d51b2f2cab8fe67a35631d8/5d5ff640b6d68d61e204033c_accidentCom_workers_comp_blue.png",
    items: [
      "Injured at work",
      "ERISA disability",
      "Disability Insurance",
      "Denied compensation",
    ],
  },
  {
    number: "04.",
    title: "Slip & Fall",
    image:
      "https://cdn.prod.website-files.com/5d51b2f2cab8fe67a35631d8/619c2595b91174b49ac85e60_Asset%203.png",
    items: [
      "Broken bones",
      "Cuts and bruises",
      "Spine or nerve damage",
      "Sprained ankles / wrists",
    ],
  },
  {
    number: "05.",
    title: "Medical Malpractice",
    image:
      "https://cdn.prod.website-files.com/5d51b2f2cab8fe67a35631d8/5d53355232c94a7b2e216293_Medical%20(1).png",
    items: ["Child birth", "Negligence", "Misdiagnosis", "Wrongful Death"],
  },
  {
    number: "06.",
    title: "Disability Benefits",
    image:
      "https://cdn.prod.website-files.com/5d51b2f2cab8fe67a35631d8/5d5335525c5ff36299792c53_Wrongful%20Death.png",
    items: [
      "Unable to Work",
      "Work Place Injury",
      "Medical Malpractice",
      "Long Term Disability",
    ],
  },
];

export default function LegalCategories() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-fadeIn">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
            LEGAL AREAS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Most Common Legal Categories
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto" />
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-500/50">
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32  rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg p-4">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  <span className="text-blue-900 group-hover:text-orange-500 transition-colors duration-300">
                    {category.title}
                  </span>
                </h3>

                <div className="w-16 h-0.5 bg-orange-500 mx-auto mb-6 group-hover:w-32 transition-all duration-500" />

                <ul className="space-y-2.5 text-center">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 group-hover:text-gray-800 transition-all duration-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden mb-6">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {categories.map((category, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-lg border border-gray-200 p-8 text-center shadow-lg">
                      <div className="flex justify-center mb-6">
                        <div className="w-32 h-32  rounded-lg flex items-center justify-center shadow-lg p-4">
                          <img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 text-blue-900">
                        {category.title}
                      </h3>

                      <div className="w-16 h-0.5 bg-orange-500 mx-auto mb-6" />

                      <ul className="space-y-2.5 text-center">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 mb-6">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-orange-500 w-8"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}
