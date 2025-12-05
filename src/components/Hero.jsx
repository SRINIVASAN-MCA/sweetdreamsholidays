import { useState, useEffect } from "react";

export default function HeroSlider() {
  const images = [
    require("../images/baner11.webp"),
    require("../images/bannerimage.jpg"),
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 
            ${index === current ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-70 p-10 rounded-lg text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Discover Your Dream Vacation
          </h2>
          <p className="text-gray-700 mb-6">
            Explore the world's most beautiful destinations with Sweetdreams Holidays. Unforgettable experiences await!
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
            Explore Packages
          </button>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition 
              ${current === index ? "bg-white" : "bg-gray-400"}`}
          ></div>
        ))}
      </div>
    </section>
  );
}
