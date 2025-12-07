import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import logo from '../images/sweetdreams_logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Sweet Dreams Holidays" className="h-12 w-auto object-contain" />
              <div>
                <h3 className="text-white font-bold text-lg">Sweet Dreams</h3>
                <p className="text-sm text-gray-400">Holidays</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Creating unforgettable travel experiences since 2009. Your trusted partner for domestic and international tours.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-600 p-2 rounded-full transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-pink-600 p-2 rounded-full transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-400 p-2 rounded-full transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-blue-400">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/domestic" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-blue-400">›</span> Domestic Tours
                </Link>
              </li>
              <li>
                <Link to="/international" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-blue-400">›</span> International Tours
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-blue-400">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-blue-400">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/package/kerala-backwaters-hills" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-blue-400">›</span> Kerala
                </Link>
              </li>
              <li>
                <Link to="/package/goa-3-days" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-blue-400">›</span> Goa
                </Link>
              </li>
              <li>
                <Link to="/package/thailand-bangkok-pattaya" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-blue-400">›</span> Thailand
                </Link>
              </li>
              <li>
                <Link to="/package/dubai-luxury-experience" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-blue-400">›</span> Dubai
                </Link>
              </li>
              <li>
                <Link to="/package/singapore-gardens" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-blue-400">›</span> Singapore
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  123 Main Street, Anna Nagar<br />
                  Chennai, Tamil Nadu 600040
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@sweetdreamsholidays.com" className="text-gray-400 hover:text-white transition-colors text-sm break-words">
                  info@sweetdreams.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">Office Hours:</p>
              <p className="text-sm text-gray-400">Mon-Sat: 9AM - 7PM</p>
              <p className="text-sm text-gray-400">Sunday: 10AM - 5PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-5 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Sweet Dreams Holidays. All rights reserved.
            </p>

            <div className="flex items-center gap-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>in India</span>
            </div>

            <div className="flex gap-6 text-sm">
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}