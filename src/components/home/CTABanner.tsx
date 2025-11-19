// "use client";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";

// const CTABanner = () => {
//   const router = useRouter();

//   return (
//     <section
//       className="py-12 md:py-16 relative"
//       style={{
//         backgroundImage: "url('/cta_img.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="container relative z-10">
//         <div className="max-w-4xl mx-auto text-center space-y-6">
//           <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
//             Find Law Firm Near You
//           </h2>
//           <p className="text-xl text-white/90 max-w-2xl mx-auto">
//             Connect with qualified personal injury attorneys in your area. Free
//             consultation, no obligation.
//           </p>
//           <Button
//             onClick={() => router.push("/case-review")}
//             size="lg"
//             className="bg-white hover:bg-white/90 text-primary font-bold text-lg h-14 px-12 mt-6"
//           >
//             Find Attorney Now
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTABanner;

"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CTABanner = () => {
  const router = useRouter();

  return (
    <section
      className="py-16 md:py-20 relative"
      style={{
        backgroundImage: "url('/cta_img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight text-center md:text-left">
            Get a Free Consultation Today!
          </h2>
          <Button
            onClick={() => router.push("/case-review")}
            size="lg"
            variant="outline"
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold text-base md:text-lg h-12 md:h-14 px-8 md:px-10 whitespace-nowrap animate-scale-in"
            style={{ animationDelay: "200ms" }}
          >
            WHAT'S MY CASE WORTH?
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
