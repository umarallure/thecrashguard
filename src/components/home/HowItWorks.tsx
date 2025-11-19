import { FileText, Phone, DollarSign } from "lucide-react";

const steps = [
  {
    number: "01.",
    title: "Provide Case Details",
    description:
      "Submit a contact form via desktop or mobile device. Our algorithm will connect you to an injury attorney located near you.",
    icon: FileText,
  },
  {
    number: "02.",
    title: "Free Consultation",
    description:
      "We connect your attorney to you. Your lawyer will immediately contact you for a free, no obligation, case consultation.",
    icon: Phone,
  },
  {
    number: "03.",
    title: "Get Max Compensation",
    description:
      "Find out what your claim is worth and if your case is worth pursuing. Don't let insurance companies take advantage.",
    icon: DollarSign,
  },
];

const HowItWorks = ({ compact = false }: { compact?: boolean }) => {
  return (
    <section
      className={`${
        compact ? "py-6 bg-transparent" : "py-12 md:py-16 bg-muted/20"
      }`}
    >
      <div className={`container ${compact ? 'max-w-lg' : 'max-w-6xl'}`}>
        <div className={`${compact ? 'text-left mb-6' : 'text-center mb-8 space-y-2'}`}>
          {!compact && (
            <>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">OUR PROCESS</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">How it Works</h2>
              <div className="w-24 sm:w-32 md:w-48 lg:w-64 h-1 bg-accent mx-auto" />
            </>
          )}
          {compact && (
            <>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">How it Works</h3>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
                <div
                  key={index}
                  className={`${compact ? 'text-left' : 'text-center'} space-y-4 animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                <div className="flex justify-center">
                  <div className={`${compact ? 'w-16 h-16' : 'w-20 h-20'} rounded-full bg-accent/10 flex items-center justify-center`}>
                    <Icon className={`${compact ? 'h-8 w-8' : 'h-10 w-10'} text-accent`} />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                  <span className="text-foreground text-3xl">{step.number}</span>
                  <br />
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
