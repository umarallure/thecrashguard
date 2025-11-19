"use client";
import { Car, User, HardHat, AlertTriangle, Stethoscope, Gavel } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    items: ["Wrongful death", "Dog Bite", "Nursing Home Abuse", "Wrongful Death"],
  },
  {
    number: "03.",
    title: "Workplace Injury",
    icon: HardHat,
    items: ["Injured at work", "Disability Insurance", "ERISA disability", "Denied compensation"],
  },
  {
    number: "04.",
    title: "Slip & Fall",
    icon: AlertTriangle,
    items: ["Broken bones", "Sprained ankles / wrists", "Spine or nerve damage", "Cuts and bruises"],
  },
  {
    number: "05.",
    title: "Medical Malpractice",
    icon: Stethoscope,
    items: ["Misdiagnosis", "Negligence", "Child birth", "Wrongful Death"],
  },
  {
    number: "6.",
    title: "Disability Benefits",
    icon: Gavel,
    items: ["Long Term Disability", "Unable to Work", "Work Place Injury", "Medical Malpractice"],
  },
];

const LegalCategories = () => {
  const router = useRouter();

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">LEGAL AREAS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Most Common Legal Categories</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg group"
              >
                <CardHeader className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 group-hover:bg-accent/10 flex items-center justify-center transition-colors">
                      <Icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">
                    <span className="text-accent">{category.number}</span> {category.title}
                  </CardTitle>
                  <div className="w-12 h-0.5 bg-accent mx-auto" />
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-accent">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-lg mb-4">
            Don't see your injury type?{" "}
            <span className="font-semibold text-primary">You may still have a claim.</span>
          </p>
          <Button
            onClick={() => router.push('/case-review')}
            className="bg-accent hover:bg-accent/90 text-white font-bold"
            size="lg"
          >
            Ask an Attorney
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LegalCategories;
