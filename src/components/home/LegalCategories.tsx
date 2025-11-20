// "use client";
// import { useState, useEffect } from "react";
// import {
//   Car,
//   User,
//   HardHat,
//   AlertTriangle,
//   Stethoscope,
//   Gavel,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";

// const categories = [
//   {
//     number: "01.",
//     title: "Auto Accident",
//     icon: Car,
//     items: ["Car", "Motorcycle", "Commercial", "Hit and run"],
//   },
//   {
//     number: "02.",
//     title: "Personal Injury",
//     icon: User,
//     items: [
//       "Wrongful death",
//       "Dog Bite",
//       "Nursing Home Abuse",
//       "Wrongful Death",
//     ],
//   },
//   {
//     number: "03.",
//     title: "Workplace Injury",
//     icon: HardHat,
//     items: [
//       "Injured at work",
//       "Disability Insurance",
//       "ERISA disability",
//       "Denied compensation",
//     ],
//   },
//   {
//     number: "04.",
//     title: "Slip & Fall",
//     icon: AlertTriangle,
//     items: [
//       "Broken bones",
//       "Sprained ankles / wrists",
//       "Spine or nerve damage",
//       "Cuts and bruises",
//     ],
//   },
//   {
//     number: "05.",
//     title: "Medical Malpractice",
//     icon: Stethoscope,
//     items: ["Misdiagnosis", "Negligence", "Child birth", "Wrongful Death"],
//   },
//   {
//     number: "06.",
//     title: "Disability Benefits",
//     icon: Gavel,
//     items: [
//       "Long Term Disability",
//       "Unable to Work",
//       "Work Place Injury",
//       "Medical Malpractice",
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

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % categories.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + categories.length) % categories.length
//     );
//   };

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
//           <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">
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
//                         className="flex items-center justify-center gap-2 text-sm text-gray-600 transition-all duration-300"
//                       >
//                         <span className="text-gray-400 group-hover:text-accent transition-colors duration-300">
//                           •
//                         </span>
//                         <span className="group-hover:text-gray-800 transition-colors duration-300">
//                           {item}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Mobile Carousel View */}
//         <div className="md:hidden mb-12">
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
//                             <li
//                               key={idx}
//                               className="flex items-center justify-center gap-2 text-sm text-gray-600"
//                             >
//                               <span className="text-gray-400">•</span>
//                               <span>{item}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Navigation Arrows */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
//               aria-label="Previous"
//             >
//               <ChevronLeft className="w-6 h-6 text-[#1e3a8a]" />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
//               aria-label="Next"
//             >
//               <ChevronRight className="w-6 h-6 text-[#1e3a8a]" />
//             </button>
//           </div>

//           {/* Dots Indicator */}
//           <div className="flex justify-center gap-2 mt-6">
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

//         <div className="text-center animate-fadeInUp space-y-6">
//           <div className="flex flex-col md:flex-row items-center justify-center gap-4">
//             <p className="text-lg text-gray-700">
//               Don't see your injury type?{" "}
//               <span className="font-semibold text-[#1e3a8a]">
//                 You may still have a claim.
//               </span>
//             </p>
//             <Button
//               onClick={() => router.push("/case-review")}
//               className="bg-accent hover:bg-accent/90 text-white font-bold hover:scale-105 active:scale-95 transition-transform duration-300 shadow-lg hover:shadow-xl px-10 py-6 text-base rounded-lg whitespace-nowrap"
//               size="lg"
//             >
//               Ask an Attorney
//             </Button>
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
import {
  Car,
  User,
  HardHat,
  AlertTriangle,
  Stethoscope,
  Gavel,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const categories = [
  {
    number: "01.",
    title: "Auto Accident",
    icon: Car,
    items: ["Car", "Hit and run", "Motorcycle", "Commercial"],
  },
  {
    number: "02.",
    title: "Personal Injury",
    icon: User,
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
    icon: HardHat,
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
    icon: AlertTriangle,
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
    icon: Stethoscope,
    items: ["Child birth", "Negligence", "Misdiagnosis", "Wrongful Death"],
  },
  {
    number: "06.",
    title: "Disability Benefits",
    icon: Gavel,
    items: [
      "Unable to Work",
      "Work Place Injury",
      "Medical Malpractice",
      "Long Term Disability",
    ],
  },
];

const LegalCategories = () => {
  const router = useRouter();
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-fadeIn">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">
            LEGAL AREAS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">
            Most Common Legal Categories
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="bg-white rounded-lg border border-gray-200 p-8 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-accent/50">
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 bg-[#1e3a8a] rounded-lg flex items-center justify-center group-hover:bg-accent transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                      <Icon
                        className="w-16 h-16 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    <span className="text-[#1e3a8a] group-hover:text-accent transition-colors duration-300">
                      {category.title}
                    </span>
                  </h3>

                  <div className="w-16 h-0.5 bg-accent mx-auto mb-6 group-hover:w-32 transition-all duration-500" />

                  {/* Centered Items List */}
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
            );
          })}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden mb-6">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center shadow-lg">
                        <div className="flex justify-center mb-6">
                          <div className="w-32 h-32 bg-[#1e3a8a] rounded-lg flex items-center justify-center shadow-lg">
                            <Icon
                              className="w-16 h-16 text-white"
                              strokeWidth={1.5}
                            />
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-3 text-[#1e3a8a]">
                          {category.title}
                        </h3>

                        <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />

                        {/* Centered Items List */}
                        <ul className="space-y-2.5 text-center">
                          {category.items.map((item, idx) => (
                            <li key={idx} className="text-sm text-gray-600">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dots Indicator - Below Cards but above Button */}
          <div className="flex justify-center gap-2 mt-6 mb-6">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-accent w-8"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center animate-fadeInUp space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-lg text-gray-700">
              Don't see your injury type?{" "}
              <span className="font-semibold text-[#1e3a8a]">
                You may still have a claim.
              </span>
            </p>
            <Button
              onClick={() => router.push("/case-review")}
              className="bg-accent hover:bg-accent/90 text-white font-bold hover:scale-105 active:scale-95 transition-transform duration-300 shadow-lg hover:shadow-xl px-10 py-6 text-base rounded-lg whitespace-nowrap"
              size="lg"
            >
              Ask an Attorney
            </Button>
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out 0.6s both;
        }
      `}</style>
    </section>
  );
};

export default LegalCategories;
