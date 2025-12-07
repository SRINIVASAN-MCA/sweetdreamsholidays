import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plane, MapPinned, Calendar } from "lucide-react";

export default function HeroSlider() {
  const slides = [
    {
      image: require("../images/baner11.webp"),
      title: "Discover Kerala's Backwaters",
      subtitle: "Experience the tranquil beauty of God's Own Country",
      highlight: "Starting from ₹15,999"
    },
    {
      image: require("../images/bannerimage.jpg"),
      title: "Adventure Awaits in the Hills",
      subtitle: "Explore breathtaking mountain destinations",
      highlight: "Book Your Dream Escape"
    },
    {
      image: require("../images/Goa-Vacation.webp"),
      title: "Goa Beach Paradise",
      subtitle: "Sun, sand, and unforgettable memories",
      highlight: "Limited Time Offer"
    },
    {
      image: require("../images/Kerala_11.jpg"),
      title: "Cultural Kerala Experience",
      subtitle: "Immerse yourself in rich traditions",
      highlight: "Exclusive Packages"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length, isAutoPlay]);

  const nextSlide = () => {
    setIsAutoPlay(false);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlay(false);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
            }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-5 w-full">
          <div className="max-w-3xl">
            {/* Animated Content */}
            <div
              key={current}
              className="animate-fadeIn"
            >
              <div className="flex items-center gap-2 mb-4">
                <Plane className="w-6 h-6 text-cyan-400" />
                <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
                  {slides[current].highlight}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {slides[current].title}
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                {slides[current].subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                  <MapPinned className="w-5 h-5" />
                  Explore Packages
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Plan Your Trip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 w-full flex justify-center items-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setIsAutoPlay(false);
            }}
            className={`transition-all duration-300 rounded-full ${current === index
                ? "w-12 h-3 bg-white"
                : "w-3 h-3 bg-white/50 hover:bg-white/75"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-20 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 border border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-200 text-sm">Tour Packages</div>
            </div>
            <div className="text-center border-l border-r border-white/20 md:border-0">
              <div className="text-3xl font-bold text-white mb-1">10K+</div>
              <div className="text-gray-200 text-sm">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-gray-200 text-sm">Destinations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
