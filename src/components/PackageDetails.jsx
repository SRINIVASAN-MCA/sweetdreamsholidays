import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { tourPackages } from "./tourData";

export default function PackageDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const pkg = tourPackages.find((p) => p.slug === slug);

  if (!pkg) {
    return (
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Package not found</h1>
          <p className="text-gray-600 mb-6">
            The package you are looking for does not exist.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex justify-center items-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm md:text-base font-semibold hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Image */}
        <div className="flex flex-col lg:flex-row gap-8 mb-10">
          <div className="lg:w-1/2">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-2">
              Domestic Tour Package
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {pkg.title}
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-2">{pkg.duration}</p>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              {pkg.shortDesc}
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-800 text-sm md:text-base hover:bg-gray-100 transition"
              >
                Back
              </button>

              <Link
                to="/"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm md:text-base font-semibold hover:bg-blue-700 transition"
              >
                Home
              </Link>
            </div>
          </div>
        </div>

        {/* Day-wise Itinerary */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Day-wise Itinerary
          </h2>

          <div className="space-y-4">
            {pkg.itinerary.map((dayInfo) => (
              <div
                key={dayInfo.day}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-4 sm:p-5 md:p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    Day {dayInfo.day}
                  </p>
                  <p className="text-base md:text-lg font-semibold text-gray-900 mt-1 sm:mt-0">
                    {dayInfo.title}
                  </p>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {dayInfo.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
