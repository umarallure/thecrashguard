// "use client";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function Testimonials() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       name: "Lynda",
//       location: "Knoxville, Tennessee",
//       image:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
//       title: "Worth Pursuing",
//       quote:
//         "I was in the supermarket and the floor was slippery. Unfortunately, there was no wet floor sign and I fell on my back. I came across this free case evaluation service and my premises liability lawyer told me that my case was worth pursuing.",
//       rating: 5,
//     },
//     {
//       id: 2,
//       name: "Robert",
//       location: "Nashville, Tennessee",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
//       title: "Excellent Service",
//       quote:
//         "After my car accident, I didn't know where to turn. The team connected me with an amazing attorney who fought for my rights and got me the compensation I deserved. Highly recommend their services!",
//       rating: 5,
//     },
//     {
//       id: 3,
//       name: "Maria",
//       location: "Memphis, Tennessee",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
//       title: "Life Changing",
//       quote:
//         "I was injured at work and felt overwhelmed by the legal process. Thanks to this service, I found a compassionate lawyer who guided me every step of the way. The outcome exceeded my expectations.",
//       rating: 5,
//     },
//     {
//       id: 4,
//       name: "James",
//       location: "Chattanooga, Tennessee",
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
//       title: "Professional & Caring",
//       quote:
//         "Dealing with a personal injury case was stressful, but the attorney I was matched with made everything easier. They were professional, responsive, and truly cared about my well-being.",
//       rating: 5,
//     },
//     {
//       id: 5,
//       name: "James",
//       location: "Chattanooga, Tennessee",
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
//       title: "Professional & Caring",
//       quote:
//         "Dealing with a personal injury case was stressful, but the attorney I was matched with made everything easier. They were professional, responsive, and truly cared about my well-being.",
//       rating: 5,
//     },
//     {
//       id: 6,
//       name: "James",
//       location: "Chattanooga, Tennessee",
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
//       title: "Professional & Caring",
//       quote:
//         "Dealing with a personal injury case was stressful, but the attorney I was matched with made everything easier. They were professional, responsive, and truly cared about my well-being.",
//       rating: 5,
//     },
//   ];

//   const handlePrevious = () => {
//     setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   const renderStars = (rating) => {
//     return (
//       <div className="flex justify-center gap-1 mb-6">
//         {[...Array(rating)].map((_, i) => (
//           <svg key={i} className="w-6 h-6 fill-amber-400" viewBox="0 0 24 24">
//             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//           </svg>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center p-8">
//       <div className="max-w-4xl w-full">
//         {/* Profile Pictures */}
//         <div className="flex justify-center gap-4 mb-12">
//           {testimonials.map((testimonial, index) => (
//             <button
//               key={testimonial.id}
//               onClick={() => setActiveIndex(index)}
//               className={`rounded-full transition-all duration-300 ${
//                 activeIndex === index
//                   ? "ring-4 ring-amber-400 scale-110"
//                   : "ring-2 ring-slate-600 hover:ring-slate-400 opacity-60 hover:opacity-100"
//               }`}
//             >
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className="w-20 h-20 rounded-full object-cover"
//               />
//             </button>
//           ))}
//         </div>

//         {/* Testimonial Card */}
//         <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-slate-700">
//           {/* Title */}
//           <h2 className="text-3xl font-bold text-white text-center mb-8 italic">
//             "{testimonials[activeIndex].title}"
//           </h2>

//           {/* Quote */}
//           <div className="relative mb-8">
//             <svg
//               className="absolute -top-4 -left-4 w-16 h-16 text-slate-600 opacity-50"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
//             </svg>
//             <p className="text-xl text-slate-200 leading-relaxed italic text-center px-8">
//               {testimonials[activeIndex].quote}
//             </p>
//             <svg
//               className="absolute -bottom-4 -right-4 w-16 h-16 text-slate-600 opacity-50 rotate-180"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
//             </svg>
//           </div>

//           {/* Stars */}
//           {renderStars(testimonials[activeIndex].rating)}

//           {/* Author Info */}
//           <div className="text-center">
//             <p className="text-lg font-semibold text-white">
//               {testimonials[activeIndex].name}
//             </p>
//             <p className="text-slate-400">
//               {testimonials[activeIndex].location}
//             </p>
//           </div>
//         </div>

//         {/* Navigation Arrows */}
//         <div className="flex justify-center gap-4 mt-8">
//           <button
//             onClick={handlePrevious}
//             className="bg-slate-700 hover:bg-slate-600 text-white rounded-full p-3 transition-colors duration-200"
//             aria-label="Previous testimonial"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button
//             onClick={handleNext}
//             className="bg-slate-700 hover:bg-slate-600 text-white rounded-full p-3 transition-colors duration-200"
//             aria-label="Next testimonial"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center gap-2 mt-6">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 activeIndex === index
//                   ? "bg-amber-400 w-8"
//                   : "bg-slate-600 hover:bg-slate-500"
//               }`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
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
    {
      id: 5,
      name: "Sarah",
      location: "Memphis, Tennessee",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      title: "Highly Recommended",
      quote:
        "The legal support I received was outstanding. My attorney was knowledgeable and fought hard for my case. I'm grateful for their dedication.",
      rating: 5,
    },
    {
      id: 6,
      name: "Michael",
      location: "Knoxville, Tennessee",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      title: "Amazing Experience",
      quote:
        "From start to finish, the process was smooth and professional. I felt supported every step of the way.",
      rating: 5,
    },
    {
      id: 7,
      name: "Emily",
      location: "Nashville, Tennessee",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
      title: "Great Results",
      quote:
        "I couldn't be happier with the outcome of my case. The attorney was compassionate and extremely skilled.",
      rating: 5,
    },
    {
      id: 8,
      name: "David",
      location: "Chattanooga, Tennessee",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      title: "Trustworthy Team",
      quote:
        "Finding the right attorney was easy with this service. They matched me with someone who truly cared about my situation.",
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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="flex justify-center gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-6 h-6 fill-amber-400" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Profile Pictures with Horizontal Scroll */}
        <div className="relative mb-12">
          {/* Left Scroll Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-slate-700/80 hover:bg-slate-600 text-white rounded-full p-2 transition-colors duration-200 shadow-lg"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-12 py-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "ring-4 ring-amber-400 scale-110"
                    : "ring-2 ring-slate-600 hover:ring-slate-400 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Right Scroll Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-slate-700/80 hover:bg-slate-600 text-white rounded-full p-2 transition-colors duration-200 shadow-lg"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Testimonial Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-slate-700">
          {/* Title */}
          <h2 className="text-3xl font-bold text-white text-center mb-8 italic">
            "{testimonials[activeIndex].title}"
          </h2>

          {/* Quote */}
          <div className="relative mb-8">
            <svg
              className="absolute -top-4 -left-4 w-16 h-16 text-slate-600 opacity-50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
            <p className="text-xl text-slate-200 leading-relaxed italic text-center px-8">
              {testimonials[activeIndex].quote}
            </p>
            <svg
              className="absolute -bottom-4 -right-4 w-16 h-16 text-slate-600 opacity-50 rotate-180"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
          </div>

          {/* Stars */}
          {renderStars(testimonials[activeIndex].rating)}

          {/* Author Info */}
          <div className="text-center">
            <p className="text-lg font-semibold text-white">
              {testimonials[activeIndex].name}
            </p>
            <p className="text-slate-400">
              {testimonials[activeIndex].location}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrevious}
            className="bg-slate-700 hover:bg-slate-600 text-white rounded-full p-3 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="bg-slate-700 hover:bg-slate-600 text-white rounded-full p-3 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6 flex-wrap max-w-md mx-auto">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-amber-400 w-8"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
