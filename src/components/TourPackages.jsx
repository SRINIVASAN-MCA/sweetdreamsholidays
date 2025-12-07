import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Star, ArrowRight, Compass } from "lucide-react";
import { tourPackages as allTourPackages } from "./tourData";

export default function TourPackages({ packages = allTourPackages, title = "Our Tour Packages", subtitle = "Carefully curated domestic tour packages for unforgettable experiences" }) {
  const getCategoryColor = (category) => {
    const colors = {
      Bestseller: "bg-gradient-to-r from-yellow-500 to-orange-500",
      Popular: "bg-gradient-to-r from-blue-500 to-cyan-500",
      Trending: "bg-gradient-to-r from-purple-500 to-pink-500",
      "Hot Deal": "bg-gradient-to-r from-red-500 to-orange-500",
      New: "bg-gradient-to-r from-green-500 to-teal-500",
      Budget: "bg-gradient-to-r from-indigo-500 to-blue-500",
      Exclusive: "bg-gradient-to-r from-pink-500 to-rose-500",
      Premium: "bg-gradient-to-r from-amber-500 to-yellow-500",
      Weekend: "bg-gradient-to-r from-teal-500 to-emerald-500"
    };
    return colors[category] || "bg-blue-500";
  };

  return (
    <section className="py-16 bg-white" id="tour-packages">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Compass className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Explore
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.slug}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Category Badge */}
                {pkg.category && (
                  <div className={`absolute top-4 left-4 ${getCategoryColor(pkg.category)} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm`}>
                    {pkg.category}
                  </div>
                )}

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-xs font-semibold text-gray-800">{pkg.duration}</span>
                </div>

                {/* Rating - Bottom Left */}
                {pkg.rating && (
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-bold text-gray-800">{pkg.rating}</span>
                    {pkg.reviews && (
                      <span className="text-xs text-gray-600">({pkg.reviews})</span>
                    )}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 min-h-[56px]">
                  {pkg.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[40px]">
                  {pkg.shortDesc}
                </p>

                {/* Itinerary Summary */}
                {pkg.itinerary && pkg.itinerary.length > 0 && (
                  <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span className="line-clamp-1">
                      {pkg.itinerary.length} day itinerary included
                    </span>
                  </div>
                )}

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  {pkg.price ? (
                    <div>
                      <div className="text-sm text-gray-500 mb-0.5">Starting from</div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        {pkg.price}
                      </div>
                    </div>
                  ) : (
                    <div className="text-gray-500 text-sm">Price on request</div>
                  )}

                  <Link
                    to={`/package/${pkg.slug}`}
                    className="group/btn flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    View
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for?
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange-500/40 transform hover:-translate-y-0.5 transition-all duration-300">
            Customize Your Package
          </button>
        </div>
      </div>
    </section>
  );
}

