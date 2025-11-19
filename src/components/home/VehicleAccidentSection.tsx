"use client";
import { Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const VehicleAccidentSection = () => {
  const router = useRouter();

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary/10 flex items-center justify-center mx-auto animate-scale-in">
            <Car className="w-16 h-16 md:w-20 md:h-20 text-primary" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Been in a Vehicle Accident?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            If you've been involved in an auto accident, you may be entitled to
            compensation for your injuries, medical bills, lost wages, and pain
            and suffering. Our network of experienced attorneys can help you
            navigate the complex legal process and fight for the maximum
            settlement you deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={() => router.push("/case-review")}
              className="bg-accent hover:bg-accent/90 text-white font-bold px-8"
              size="lg"
            >
              Get Free Consultation
            </Button>
            <Button
              onClick={() => router.push("/resources")}
              variant="outline"
              className="font-semibold px-8"
              size="lg"
            >
              Learn More
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            ✓ No upfront costs &nbsp;•&nbsp; ✓ Free case evaluation
            &nbsp;•&nbsp; ✓ Available 24/7
          </p>
        </div>
      </div>
    </section>
  );
};

export default VehicleAccidentSection;
