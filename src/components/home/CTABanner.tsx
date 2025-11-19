"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CTABanner = () => {
  const router = useRouter();

  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Find Law Firm Near You
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Connect with qualified personal injury attorneys in your area. Free consultation, no obligation.
          </p>
          <Button
            onClick={() => router.push('/case-review')}
            size="lg"
            className="bg-white hover:bg-white/90 text-primary font-bold text-lg h-14 px-12 mt-6"
          >
            Find Attorney Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
