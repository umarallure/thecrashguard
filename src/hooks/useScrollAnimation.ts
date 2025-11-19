import { useEffect, useRef } from "react";

type AnimationType =
  | "fade-in-up"
  | "fade-in"
  | "slide-in-left"
  | "slide-in-right"
  | "scale-in";

interface UseScrollAnimationProps {
  delay?: number;
  animationType?: AnimationType;
}

export const useScrollAnimation = ({
  delay = 0,
  animationType = "fade-in-up",
}: UseScrollAnimationProps = {}) => {
  const ref = useRef<HTMLElement | HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation after delay
            setTimeout(() => {
              const element = entry.target as HTMLElement;
              element.classList.add(`animate-${animationType}`);
              element.style.animationDelay = `${delay}ms`;
            }, 0);

            // Stop observing after animation triggers
            observer.unobserve(entry.target);
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
  }, [delay, animationType]);

  return ref;
};
