import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft, Clock, MapPin, Star, Phone, Mail, CheckCircle,
  ChevronRight, Car, Coffee, X, Package, Sparkles, Info
} from "lucide-react";
import { tourPackages } from "./tourData";

export default function PackageDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("itinerary");

  const pkg = tourPackages.find((p) => p.slug === slug);

  if (!pkg) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">😕</span>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Package Not Found</h1>
            <p className="text-gray-600 mb-8 text-lg">
              The package you are looking for does not exist or has been removed.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
              <Link
                to="/"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Image */}
      <div className="relative h-[400px] md:h-[500px]">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

        {/* Breadcrumb */}
        <div className="absolute top-8 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-5">
            <div className="flex items-center gap-2 text-sm text-white/90">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/#tour-packages" className="hover:text-white transition-colors">Packages</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-semibold">{pkg.title}</span>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="max-w-7xl mx-auto px-5">
            {/* Category Badge */}
            {pkg.category && (
              <div className="inline-block bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                {pkg.category}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {pkg.title}
            </h1>

            <p className="text-xl text-white/90 mb-6 max-w-3xl">
              {pkg.shortDesc}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="font-semibold">{pkg.duration}</span>
              </div>

              {pkg.rating && (
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold">{pkg.rating}</span>
                  {pkg.reviews && (
                    <span className="text-sm text-white/80">({pkg.reviews} reviews)</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Back Button - Floating */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 right-5 md:right-8 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 -mt-20 relative z-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description Card */}
            {pkg.description && (
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6 text-blue-600" />
                  Tour Description
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {pkg.description}
                </p>
              </div>
            )}

            {/* Highlights Card */}
            {pkg.highlights && pkg.highlights.length > 0 && (
              <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl shadow-xl p-8 border border-orange-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-orange-600" />
                  Tour Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {pkg.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Transport Details */}
            {pkg.transport && (
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Car className="w-6 h-6 text-blue-600" />
                  Transport Details
                </h2>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">{pkg.transport.type}</h3>
                      <p className="text-gray-700">{pkg.transport.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tabs for Itinerary & Inclusions */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Tab Headers */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("itinerary")}
                  className={`flex-1 px-6 py-4 font-semibold transition-colors ${activeTab === "itinerary"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  <MapPin className="w-5 h-5 inline mr-2" />
                  Detailed Itinerary
                </button>
                <button
                  onClick={() => setActiveTab("inclusions")}
                  className={`flex-1 px-6 py-4 font-semibold transition-colors ${activeTab === "inclusions"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  <Package className="w-5 h-5 inline mr-2" />
                  Inclusions & Exclusions
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-8">
                {activeTab === "itinerary" && (
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 hidden md:block" />

                    <div className="space-y-6">
                      {pkg.itinerary.map((dayInfo, index) => (
                        <div key={dayInfo.day} className="relative">
                          {/* Timeline Dot */}
                          <div className="absolute left-0 md:left-3.5 -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full border-4 border-white shadow-lg z-10 hidden md:flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>

                          {/* Content */}
                          <div className="md:ml-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-100">
                            <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                              <div className="flex items-center gap-3 flex-wrap">
                                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                  Day {dayInfo.day}
                                </div>
                                {index === 0 && (
                                  <span className="text-xs text-blue-600 font-semibold bg-blue-100 px-2 py-1 rounded-full">START</span>
                                )}
                                {index === pkg.itinerary.length - 1 && (
                                  <span className="text-xs text-blue-600 font-semibold bg-blue-100 px-2 py-1 rounded-full">END</span>
                                )}
                              </div>
                              {dayInfo.meals && (
                                <div className="flex items-center gap-2 text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                                  <Coffee className="w-4 h-4" />
                                  {dayInfo.meals}
                                </div>
                              )}
                            </div>

                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                              {dayInfo.title}
                            </h3>

                            <p className="text-gray-700 leading-relaxed">
                              {dayInfo.details}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "inclusions" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Inclusions */}
                    {pkg.inclusions && pkg.inclusions.length > 0 && (
                      <div>
                        <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                          <CheckCircle className="w-6 h-6" />
                          What's Included
                        </h3>
                        <div className="space-y-3">
                          {pkg.inclusions.map((item, index) => (
                            <div key={index} className="flex items-start gap-3 bg-green-50 p-3 rounded-lg border border-green-100">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Exclusions */}
                    {pkg.exclusions && pkg.exclusions.length > 0 && (
                      <div>
                        <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                          <X className="w-6 h-6" />
                          What's Not Included
                        </h3>
                        <div className="space-y-3">
                          {pkg.exclusions.map((item, index) => (
                            <div key={index} className="flex items-start gap-3 bg-red-50 p-3 rounded-lg border border-red-100">
                              <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Pricing Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <p className="text-gray-600 text-sm mb-2">Starting from</p>
                  {pkg.price ? (
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {pkg.price}
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-gray-700">Contact for Price</div>
                  )}
                  <p className="text-gray-500 text-sm mt-1">per person</p>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300 mb-3">
                  Book Now
                </button>

                <button className="w-full py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300">
                  Customize Package
                </button>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Need Help?</h3>

                <div className="space-y-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Call us</p>
                      <p className="font-semibold">+91 98765 43210</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@sweetdreamsholidays.com"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Email us</p>
                      <p className="font-semibold text-sm">info@sweetdreams.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
