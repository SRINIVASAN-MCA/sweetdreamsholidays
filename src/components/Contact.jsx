import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions? Reach out to us through any of the following channels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Phone */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Call Us</h3>
            <p className="text-gray-600 mb-3 text-sm text-center">Mon-Sat, 9AM-7PM</p>
            <a
              href="tel:+919876543210"
              className="block text-center text-blue-600 font-semibold hover:text-blue-700 text-lg"
            >
              +91 98765 43210
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Email Us</h3>
            <p className="text-gray-600 mb-3 text-sm text-center">24hr response</p>
            <a
              href="mailto:info@sweetdreamsholidays.com"
              className="block text-center text-green-600 font-semibold hover:text-green-700 break-words text-sm"
            >
              info@sweetdreams.com
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">WhatsApp</h3>
            <p className="text-gray-600 mb-3 text-sm text-center">Instant chat</p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all mx-auto"
            >
              Chat Now
            </a>
          </div>

          {/* Office */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-gradient-to-br from-orange-600 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Visit Us</h3>
            <p className="text-gray-700 text-center text-sm leading-relaxed">
              123 Main Street<br />
              Anna Nagar, Chennai<br />
              Tamil Nadu 600040
            </p>
          </div>
        </div>

        {/* Office Hours */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="bg-blue-600 p-4 rounded-full">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Office Hours</h3>
                <div className="space-y-1 text-gray-700">
                  <p><strong>Monday - Saturday:</strong> 9:00 AM - 7:00 PM</p>
                  <p><strong>Sunday:</strong> 10:00 AM - 5:00 PM</p>
                  <p className="text-sm text-gray-600 mt-2">We're here to help you plan your perfect vacation!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
