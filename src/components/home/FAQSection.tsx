"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from 'react';
import { Plus } from "lucide-react";

const faqsAbout = [
  {
    question: "How does TheCrashGuard work?",
    answer: `1. Personal injury lawyers throughout the US tell us the types of cases they specialize in.

2. Claimants (like you) submit their case details. The closest attorney, who accepts your claim type, is immediately notified.

3. Your TheCrashGuard lawyer reaches out immediately to discuss your case or schedule a free consultation.`,
  },
  {
    question: "How will my lawyer help me? Do I need a lawyer?",
    answer:
      "A personal injury lawyer can help you navigate the complex legal process, negotiate with insurance companies, and ensure you receive the maximum compensation you deserve. They work on a contingency basis, meaning you don't pay unless you win your case.",
  },
  {
    question: "What types of cases do you handle?",
    answer:
      "We handle a wide variety of personal injury cases including auto accidents, medical malpractice, workplace injuries, slip and fall accidents, wrongful death, and disability claims. If you're unsure whether your case qualifies, submit your information and we'll help you determine if you have a claim.",
  },
  {
    question: "How long do I have to file a claim?",
    answer:
      "The statute of limitations varies by state and type of case, but generally ranges from 1-3 years from the date of injury. It's important to act quickly as waiting too long can result in losing your right to compensation. Contact us today for a free case evaluation.",
  },
];

const faqsWhyHire = [
  {
    question: "Why should I hire a personal injury lawyer?",
    answer:
      "A personal injury lawyer can protect your rights, negotiate with insurance companies, and pursue the maximum compensation you deserve. They handle paperwork, evidence, and legal strategy so you can focus on recovery.",
  },
  {
    question: "Will hiring a lawyer cost me money up front?",
    answer:
      "Most personal injury lawyers work on contingency, which means you pay nothing unless they recover compensation for you. Fees are deducted from the settlement only if you win.",
  },
  {
    question: "How do I choose the right personal injury lawyer?",
    answer:
      "Look for experience handling cases like yours, a track record of results, transparent communication, and contingent fee arrangements. We connect you to qualified attorneys near you.",
  },
];

const faqsDefault = faqsAbout; // Use About as default for now

const FAQSection = () => {
  const [category, setCategory] = useState<'about' | 'whyHire' | 'faq'>('about');
  const selectedFaqs = category === 'whyHire' ? faqsWhyHire : faqsDefault;
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Nav */}
          <aside className="hidden md:block md:col-span-3">
            <nav className="space-y-4">
              <button onClick={() => setCategory('about')} className={`w-full text-left rounded-md px-6 py-3 font-medium ${category === 'about' ? 'bg-black text-white' : 'text-foreground hover:bg-muted/10'}`}>About Us</button>
              <button onClick={() => setCategory('whyHire')} className={`w-full text-left rounded-md px-6 py-3 font-medium ${category === 'whyHire' ? 'bg-black text-white' : 'text-foreground hover:bg-muted/10'}`}>Why Hire a Lawyer</button>
              <button onClick={() => setCategory('faq')} className={`w-full text-left rounded-md px-6 py-3 font-medium ${category === 'faq' ? 'bg-black text-white' : 'text-foreground hover:bg-muted/10'}`}>FAQ</button>
            </nav>
          </aside>

          {/* Accordion */}
          <div className="md:col-span-9">
            <Accordion type="single" collapsible className="w-full space-y-4">
          {selectedFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-md px-4 py-2 data-[state=open]:border-accent"
            >
              <AccordionTrigger className="flex items-center gap-4 text-left font-bold text-foreground text-xl md:text-2xl hover:text-accent hover:no-underline">
                <Plus className="h-5 w-5 text-primary data-[state=open]:rotate-45 transition-transform" />
                <span className="flex-1">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
