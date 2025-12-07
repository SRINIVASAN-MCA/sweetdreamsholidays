import { Facebook, Instagram, Twitter, Phone, MessageCircle, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-5 py-2.5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">

          {/* Left - Social Icons */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-gray-600 hidden md:inline">Follow Us:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-1.5 rounded-full bg-white hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5 text-blue-600 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-1.5 rounded-full bg-white hover:bg-pink-600 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-600 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-1.5 rounded-full bg-white hover:bg-blue-400 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5 text-blue-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="flex items-center gap-4 text-xs">
            {/* Email - Hidden on mobile */}
            <a
              href="mailto:info@sweetdreamsholidays.com"
              className="hidden lg:flex items-center gap-1.5 text-gray-700 hover:text-blue-600 transition-colors group"
            >
              <Mail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">info@sweetdreamsholidays.com</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-500 text-white px-3 py-1.5 rounded-full hover:bg-green-600 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <MessageCircle className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span className="font-semibold hidden sm:inline">WhatsApp</span>
              <span className="font-semibold sm:hidden">Chat</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 bg-blue-600 text-white px-3 py-1.5 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">+91 98765 43210</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
