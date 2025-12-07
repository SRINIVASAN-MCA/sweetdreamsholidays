import React, { useEffect, useState, useRef } from "react";
import Testimonials1 from "../images/testimonial.jpg";
import Testimonials2 from "../images/testimonial2.jpg";
import Testimonials3 from "../images/testimonial3.jpg";

export default function Testimonials({ autoplay = true, interval = 4000 }) {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      quote: "Wonderful experience with Sweet Dreams!",
      img: Testimonials1,
    },
    {
      name: "Priya Sharma",
      quote: "Affordable packages & great service.",
      img: Testimonials2,
    },
    {
      name: "Manikandan",
      quote: "Highly recommended travel agency.",
      img: Testimonials3,
    },
  ];

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!autoplay) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [autoplay, interval, testimonials.length]);

  const prev = () => {
    clearInterval(timerRef.current);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    clearInterval(timerRef.current);
    setIndex((i) => (i + 1) % testimonials.length);
  };

  return (
  
     <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
         What Our Clients Say
        </h2>

        <div className="relative max-w-2xl mx-auto">
          {/* Slides */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 px-6 py-8 text-center"
                  aria-hidden={i !== index}
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    className="mx-auto rounded-full mb-4 w-20 h-20 object-cover"
                    width="80"
                    height="80"
                  />
                  <p className="text-lg font-medium italic text-gray-700 mb-2">“{t.quote}”</p>
                  <h5 className="text-sm font-semibold text-gray-900">{t.name}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-md rounded-full p-2 focus:outline-none"
            aria-label="Previous testimonial"
            title="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 15.707a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-md rounded-full p-2 focus:outline-none"
            aria-label="Next testimonial"
            title="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-180" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 15.707a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  clearInterval(timerRef.current);
                  setIndex(i);
                }}
                className={`w-3 h-3 rounded-full focus:outline-none ${
                  i === index ? "bg-gray-800" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
