import React, { useEffect, useState, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Testimonials1 from "../images/testimonial.jpg";
import Testimonials2 from "../images/testimonial2.jpg";
import Testimonials3 from "../images/testimonial3.jpg";

export default function Testimonials({ autoplay = true, interval = 5000 }) {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      rating: 5,
      quote: "Wonderful experience with Sweet Dreams! The Kerala package was perfectly planned. Every detail was taken care of, from hotel bookings to sightseeing. Highly professional team!",
      img: Testimonials1,
      package: "Kerala Backwaters & Hills"
    },
    {
      name: "Priya Sharma",
      location: "Delhi, India",
      rating: 5,
      quote: "Affordable packages with great service. We booked the Golden Triangle tour and it exceeded our expectations. The guide was knowledgeable and friendly. Will definitely book again!",
      img: Testimonials2,
      package: "Golden Triangle Tour"
    },
    {
      name: "Manikandan R",
      location: "Chennai, Tamil Nadu",
      rating: 4.5,
      quote: "Highly recommended travel agency. Excellent customer support and well-organized itinerary for our Goa trip. The family had a wonderful time at the beaches!",
      img: Testimonials3,
      package: "Goa Beach Paradise"
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

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-5 h-5 text-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 absolute top-0 left-0" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        </div>
      );
    }
    const remaining = 5 - Math.ceil(rating);
    for (let i = 0; i < remaining; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      );
    }
    return stars;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Quote className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Read genuine reviews from travelers who experienced unforgettable journeys with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Slides */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 px-4"
                  aria-hidden={i !== index}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 relative">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-10">
                      <Quote className="w-20 h-20 text-blue-600" />
                    </div>

                    <div className="relative z-10">
                      {/* User Info */}
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                        <img
                          src={t.img}
                          alt={t.name}
                          className="rounded-full w-24 h-24 object-cover border-4 border-blue-100 shadow-lg"
                        />
                        <div className="text-center md:text-left">
                          <h3 className="text-2xl font-bold text-gray-800 mb-1">{t.name}</h3>
                          <p className="text-gray-600 mb-2">{t.location}</p>
                          <div className="flex items-center gap-1 justify-center md:justify-start mb-2">
                            {renderStars(t.rating)}
                            <span className="ml-2 text-sm text-gray-600 font-semibold">
                              {t.rating} / 5
                            </span>
                          </div>
                          <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {t.package}
                          </div>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="relative">
                        <p className="text-lg text-gray-700 leading-relaxed italic">
                          "{t.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-blue-600 text-gray-800 hover:text-white shadow-xl rounded-full p-3 focus:outline-none transition-all duration-300 hover:scale-110 border border-gray-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-blue-600 text-gray-800 hover:text-white shadow-xl rounded-full p-3 focus:outline-none transition-all duration-300 hover:scale-110 border border-gray-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  clearInterval(timerRef.current);
                  setIndex(i);
                }}
                className={`transition-all duration-300 rounded-full focus:outline-none ${i === index
                    ? "w-12 h-3 bg-gradient-to-r from-blue-600 to-cyan-600"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              10K+
            </div>
            <p className="text-gray-600">Happy Travelers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              4.8/5
            </div>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <p className="text-gray-600">Tour Packages</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <p className="text-gray-600">Destinations</p>
          </div>
        </div>
      </div>
    </section>
  );
}
