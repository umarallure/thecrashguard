"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

const accidentTypes = [
  {
    value: "auto-accident",
    label: "Auto Accident",
    icon: "https://cdn.prod.website-files.com/5d51b2f2cab8fe67a35631d8/5d5333ed64234cda8dd49833_Auto%20Accident.png",
  },
  {
    value: "malpractice",
    label: "Malpractice",
    icon: "https://cdn.prod.website-files.com/5d51b2f2cab8fe67a35631d8/5d53355232c94a7b2e216293_Medical%20(1).png",
  },
  {
    value: "personal-injury",
    label: "Personal Injury",
    icon: "https://cdn.prod.website-files.com/5d51b2f2cab8fe67a35631d8/5d5336e232c94a355821725a_accidentCom_injury_blue.svg",
  },
  {
    value: "workers-comp",
    label: "Workers Comp",
    icon: "https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/5eea6d2e2b910eb2f3e54ca4_5d51b4f777dd5094a86c6527_accidentCom_workers_orange.png",
  },
  {
    value: "slip-and-fall",
    label: "Slip And Fall",
    icon: "https://cdn.prod.website-files.com/5d51b2f2cab8fe67a35631d8/5d53373229b8f7fbfe99e5bc_accidentCom_slip_and_fall_blue.png",
  },
  {
    value: "ssdi",
    label: "Social Security (SSDI)",
    icon: "https://cdn.prod.website-files.com/5d51b2f2cab8fe67a35631d8/5d5335525c5ff36299792c53_Wrongful%20Death.png",
  },
];

const HeroSection = () => {
  const [selectedType, setSelectedType] = useState("auto-accident");
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleFindLawyer = () => {
    // Next.js app router: pass via query params
    const url = `/case-review?type=${encodeURIComponent(
      selectedType
    )}&location=${encodeURIComponent(location)}`;
    router.push(url);
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with image only */}
      <div className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/5d51b2f2cab8fe67a35631d8/5d8a1714e424805b3ee164b5_5d51b5d56d01f3f2e34e4a38_LadyLibertyGradient_.jpg')] bg-cover bg-center" />

      <div className="container relative z-10 py-12">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="space-y-3 mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-left">
              Get Your Free Consultation
            </h1>
            <h3 className="text-xl md:text-2xl text-white/90 text-left">
              Injured in an Accident? Speak to a Lawyer Near You.
            </h3>
          </div>

          {/* Main Form Card */}
          <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-3xl font-semibold text-accent text-left">
                What's my claim worth?
              </h2>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline text-sm"
              >
                En Español
              </a>
            </div>

            {/* Accident Type Selector */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {accidentTypes.map((type) => {
                const isSelected = selectedType === type.value;
                return (
                  <button
                    key={type.value}
                    onClick={() => setSelectedType(type.value)}
                    className="flex flex-col items-center gap-3 group transition-all"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 relative">
                      <img
                        src={type.icon}
                        alt={type.label}
                        className="w-full h-full object-contain transition-all"
                        style={
                          isSelected
                            ? {
                                filter:
                                  "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(360deg) brightness(104%) contrast(97%)",
                              }
                            : { filter: "grayscale(100%) brightness(0.6)" }
                        }
                      />
                    </div>
                    <span
                      className={`text-xs md:text-sm font-medium text-center ${
                        isSelected ? "text-black" : "text-gray-500"
                      }`}
                    >
                      {type.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Location and Submit */}
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1">
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-full h-12 md:h-14 text-base bg-gray-50 border-gray-200">
                    <SelectValue placeholder="Select accident type" />
                  </SelectTrigger>
                  <SelectContent>
                    {accidentTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-[2]">
                <Input
                  placeholder="City, State or ZIP Code"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full h-12 md:h-14 text-base px-4 bg-gray-50 border-gray-200"
                />
              </div>

              <Button
                onClick={handleFindLawyer}
                className="bg-accent hover:bg-accent/90 text-white font-bold text-lg h-12 md:h-14 px-8 w-full md:w-auto"
              >
                Find Lawyer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
