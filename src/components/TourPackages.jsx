import React from "react";
import { Link } from "react-router-dom";
import { tourPackages } from "./tourData";

export default function TourPackages() {
  return (
    <section className="py-16 bg-gray-100" id="tour-packages">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left">
          Our Tour Packages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tourPackages.map((pkg) => (
            <div
              key={pkg.slug}
              className="flex flex-col bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-52 sm:h-60 md:h-64 object-cover"
              />

              <div className="flex flex-col flex-1 p-5">
                <h5 className="text-lg md:text-xl font-semibold text-gray-900">
                  {pkg.title}
                </h5>
                <p className="text-sm text-blue-600 font-medium mt-1">
                  {pkg.duration}
                </p>
                <p className="text-gray-600 text-sm md:text-base mt-2 flex-1">
                  {pkg.shortDesc}
                </p>

                <Link
                  to={`/package/${pkg.slug}`}
                  className="mt-4 inline-flex justify-center items-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
