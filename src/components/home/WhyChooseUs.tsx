"use client";
import { Zap, Star, UserCheck, Briefcase, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const benefits = [
  { icon: Zap, title: "Connect Instantly", description: "Quick connection to qualified attorneys" },
  { icon: Star, title: "Top Injury Lawyers", description: "Experienced legal professionals" },
  { icon: UserCheck, title: "Free Consultation", description: "No obligation case review" },
  { icon: Briefcase, title: "Max Compensation", description: "Fight for what you deserve" },
];

const WhyChooseUs = () => {
  const router = useRouter();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl">
        <div className="text-center space-y-6 mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">OUR PARTY</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
            Don't Let Insurance Companies Take Advantage
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto pt-4">
            <span className="text-accent font-bold text-2xl">A</span>ccident.com is inspired by our simple and
            important mission: <span className="font-semibold">"Ensure everyone in America gets fast and free access to legal advice and
            pursues the claims they are entitled to."</span> That means we've thoughtfully built our network of
            attorneys for every type of claimant who may come our way.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-sm text-foreground">{benefit.title}</h4>
                <p className="text-xs text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={() => router.push('/case-review')}
            className="bg-accent hover:bg-accent/90 text-white font-bold px-12"
            size="lg"
          >
            Free Case Review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
