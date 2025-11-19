"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animationType?:
    | "fade-in-up"
    | "fade-in"
    | "slide-in-left"
    | "slide-in-right"
    | "scale-in";
  delay?: number;
  className?: string;
}

export const AnimatedSection = ({
  children,
  animationType = "fade-in-up",
  delay = 0,
  className = "",
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? `animate-${animationType}` : "opacity-0"
      }`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
};
