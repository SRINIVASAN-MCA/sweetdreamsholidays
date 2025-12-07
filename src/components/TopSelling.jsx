import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Star, TrendingUp, ArrowRight, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { tourPackages } from "./tourData";

export default function TopSelling() {
  const scrollContainerRef = useRef(null);

  // Select top packages - mix of domestic and international
  const topPackages = [
    tourPackages.find(p => p.slug === 'kerala-backwaters-hills'),
    tourPackages.find(p => p.slug === 'thailand-bangkok-pattaya'),
    tourPackages.find(p => p.slug === 'goa-3-days'),
    tourPackages.find(p => p.slug === 'dubai-luxury-experience'),
    tourPackages.find(p => p.slug === 'golden-triangle-delhi-agra-jaipur'),
    tourPackages.find(p => p.slug === 'singapore-gardens'),
    tourPackages.find(p => p.slug === 'ooty-kodaikanal'),
    tourPackages.find(p => p.slug === 'bali-island-paradise'),
  ].filter(Boolean); // Remove any undefined packages

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <TrendingUp className="w-6 h-6 text-orange-600" />
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
              Most Popular
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
            Top Selling Packages
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our most popular domestic and international tour packages
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-blue-600 text-gray-800 hover:text-white shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 border border-gray-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-blue-600 text-gray-800 hover:text-white shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 border border-gray-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {topPackages.map((pkg) => (
              <div
                key={pkg.slug}
                className="flex-shrink-0 w-80 group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Place Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-start gap-2 text-white">
                      <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <span className="font-bold text-xl drop-shadow-lg line-clamp-2">{pkg.title}</span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  {pkg.category && (
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm ${pkg.category === 'Bestseller' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                          pkg.category === 'Popular' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                            pkg.category === 'Trending' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                              pkg.category === 'Premium' ? 'bg-gradient-to-r from-amber-500 to-yellow-500' :
                                pkg.category === 'New' ? 'bg-gradient-to-r from-green-500 to-teal-500' :
                                  'bg-gradient-to-r from-indigo-500 to-blue-500'
                        }`}>
                        {pkg.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5">
                  {/* Rating */}
                  {pkg.rating && (
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-bold text-gray-800 text-sm">{pkg.rating}</span>
                      </div>
                      {pkg.reviews && (
                        <span className="text-gray-600 text-xs flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          ({pkg.reviews})
                        </span>
                      )}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed h-10">
                    {pkg.shortDesc}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 mb-4 text-gray-700">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-sm">{pkg.duration}</span>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 mb-4"></div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Starting from</div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        {pkg.price}
                      </div>
                    </div>
                    <Link
                      to={`/package/${pkg.slug}`}
                      className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
                    >
                      View
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <Link
            to="/domestic"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300"
          >
            View All Domestic
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/international"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300"
          >
            View All International
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
