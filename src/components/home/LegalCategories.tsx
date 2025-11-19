// "use client";
// import {
//   Car,
//   User,
//   HardHat,
//   AlertTriangle,
//   Stethoscope,
//   Gavel,
// } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
// import { AnimatedSection } from "@/components/AnimatedSection";

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
//     number: "6.",
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

//   return (
//     <section className="py-12 md:py-16 bg-muted/30">
//       <div className="container">
//         <div className="text-center mb-12 space-y-4">
//           <p className="text-sm font-semibold text-accent uppercase tracking-wide">
//             LEGAL AREAS
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-primary">
//             Most Common Legal Categories
//           </h2>
//           <div className="w-20 h-1 bg-accent mx-auto" />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           {categories.map((category, index) => {
//             const Icon = category.icon;
//             return (
//               <AnimatedSection
//                 key={index}
//                 animationType="fade-in-up"
//                 delay={index * 100}
//               >
//                 <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg group h-full">
//                   <CardHeader className="text-center space-y-4">
//                     <div className="flex justify-center">
//                       <div className="w-16 h-16 rounded-full bg-primary/10 group-hover:bg-accent/10 flex items-center justify-center transition-colors">
//                         <Icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
//                       </div>
//                     </div>
//                     <CardTitle className="text-lg">
//                       <span className="text-accent">{category.number}</span>{" "}
//                       {category.title}
//                     </CardTitle>
//                     <div className="w-12 h-0.5 bg-accent mx-auto" />
//                   </CardHeader>
//                   <CardContent>
//                     <ul className="space-y-2 text-sm text-muted-foreground">
//                       {category.items.map((item, idx) => (
//                         <li key={idx} className="flex items-center gap-2">
//                           <span className="text-accent">•</span> {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </CardContent>
//                 </Card>
//               </AnimatedSection>
//             );
//           })}
//         </div>

//         <div className="text-center">
//           <p className="text-lg mb-4">
//             Don't see your injury type?{" "}
//             <span className="font-semibold text-primary">
//               You may still have a claim.
//             </span>
//           </p>
//           <Button
//             onClick={() => router.push("/case-review")}
//             className="bg-accent hover:bg-accent/90 text-white font-bold"
//             size="lg"
//           >
//             Ask an Attorney
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LegalCategories;

"use client";
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
    items: ["Car", "Motorcycle", "Commercial", "Hit and run"],
  },
  {
    number: "02.",
    title: "Personal Injury",
    icon: User,
    items: [
      "Wrongful death",
      "Dog Bite",
      "Nursing Home Abuse",
      "Wrongful Death",
    ],
  },
  {
    number: "03.",
    title: "Workplace Injury",
    icon: HardHat,
    items: [
      "Injured at work",
      "Disability Insurance",
      "ERISA disability",
      "Denied compensation",
    ],
  },
  {
    number: "04.",
    title: "Slip & Fall",
    icon: AlertTriangle,
    items: [
      "Broken bones",
      "Sprained ankles / wrists",
      "Spine or nerve damage",
      "Cuts and bruises",
    ],
  },
  {
    number: "05.",
    title: "Medical Malpractice",
    icon: Stethoscope,
    items: ["Misdiagnosis", "Negligence", "Child birth", "Wrongful Death"],
  },
  {
    number: "06.",
    title: "Disability Benefits",
    icon: Gavel,
    items: [
      "Long Term Disability",
      "Unable to Work",
      "Work Place Injury",
      "Medical Malpractice",
    ],
  },
];

const LegalCategories = () => {
  const router = useRouter();

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                {/* Card Container */}
                <div className="bg-white rounded-lg border border-gray-200 p-8 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-accent/50">
                  {/* Icon Container - Large Filled Style */}
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 bg-[#1e3a8a] rounded-lg flex items-center justify-center group-hover:bg-accent transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                      <Icon
                        className="w-16 h-16 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Number and Title */}
                  <h3 className="text-2xl font-bold mb-3">
                    <span className="text-accent">{category.number}</span>{" "}
                    <span className="text-[#1e3a8a] group-hover:text-accent transition-colors duration-300">
                      {category.title}
                    </span>
                  </h3>

                  {/* Divider Line */}
                  <div className="w-16 h-0.5 bg-accent mx-auto mb-6 group-hover:w-32 transition-all duration-500" />

                  {/* Items List */}
                  <ul className="space-y-2.5 text-left">
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600 group-hover:translate-x-1 transition-all duration-300"
                        style={{
                          transitionDelay: `${idx * 50}ms`,
                        }}
                      >
                        <span className="text-gray-400 group-hover:text-accent transition-colors duration-300">
                          •
                        </span>
                        <span className="group-hover:text-gray-800 transition-colors duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
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
