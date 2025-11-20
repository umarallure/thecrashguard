"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Lynda",
      location: "Knoxville, Tennessee",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      title: "Worth Pursuing",
      quote:
        "I was in the supermarket and the floor was slippery. Unfortunately, there was no wet floor sign and I fell on my back. I came across this free case evaluation service and my premises liability lawyer told me that my case was worth pursuing.",
      rating: 5,
    },
    {
      id: 2,
      name: "Robert",
      location: "Nashville, Tennessee",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      title: "Excellent Service",
      quote:
        "After my car accident, I didn't know where to turn. The team connected me with an amazing attorney who fought for my rights and got me the compensation I deserved. Highly recommend their services!",
      rating: 5,
    },
    {
      id: 3,
      name: "Maria",
      location: "Memphis, Tennessee",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      title: "Life Changing",
      quote:
        "I was injured at work and felt overwhelmed by the legal process. Thanks to this service, I found a compassionate lawyer who guided me every step of the way. The outcome exceeded my expectations.",
      rating: 5,
    },
    {
      id: 4,
      name: "James",
      location: "Chattanooga, Tennessee",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      title: "Professional & Caring",
      quote:
        "Dealing with a personal injury case was stressful, but the attorney I was matched with made everything easier. They were professional, responsive, and truly cared about my well-being.",
      rating: 5,
    },
  ];

  // Auto-scroll to center the active image
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeElement = container.children[activeIndex];
      if (activeElement) {
        const elementLeft = activeElement.offsetLeft;
        const elementWidth = activeElement.offsetWidth;
        const containerWidth = container.offsetWidth;
        const scrollPosition =
          elementLeft - containerWidth / 2 + elementWidth / 2;

        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const renderStars = (rating) => {
    return (
      <div className="flex justify-center gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 fill-amber-400" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-slate-800 py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Profile Images Carousel */}
        <div className="relative mb-8">
          <button
            onClick={handlePrevious}
            className="absolute left-0 md:left-20 top-1/2 -translate-y-1/2 z-10 bg-slate-700/50 hover:bg-slate-600 text-white rounded-full p-2 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex justify-center items-center gap-4 px-16">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "ring-4 ring-amber-400 scale-110"
                    : "ring-2 ring-slate-600 opacity-50 hover:opacity-100"
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                />
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 md:right-20 top-1/2 -translate-y-1/2 z-10 bg-slate-700/50 hover:bg-slate-600 text-white rounded-full p-2 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 italic">
          "{testimonials[activeIndex].title}"
        </h2>

        {/* Quote */}
        <div className="relative max-w-3xl mx-auto mb-6 px-8">
          <svg
            className="absolute -top-2 -left-2 w-10 h-10 text-slate-600 opacity-40"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
          <p className="text-base md:text-lg text-slate-200 leading-relaxed italic">
            {testimonials[activeIndex].quote}
          </p>
          <svg
            className="absolute -bottom-2 -right-2 w-10 h-10 text-slate-600 opacity-40 rotate-180"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
        </div>

        {/* Stars */}
        {renderStars(testimonials[activeIndex].rating)}

        {/* Author Info */}
        <div>
          <p className="text-lg font-semibold text-white">
            {testimonials[activeIndex].name}{" "}
            <span className="text-slate-400 font-normal">
              — {testimonials[activeIndex].location}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
