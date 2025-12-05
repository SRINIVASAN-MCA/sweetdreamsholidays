import { Facebook, Instagram, Twitter, Phone, MessageCircle } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-blue-600 text-white py-2 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm">

        {/* Left Social Icons */}
        <div className="flex items-center space-x-4 mb-2 md:mb-0">
          <a href="https://facebook.com" target="_blank" className="hover:text-gray-200">
            <Facebook size={18} />
          </a>

          <a href="https://instagram.com" target="_blank" className="hover:text-gray-200">
            <Instagram size={18} />
          </a>

          <a href="https://twitter.com" target="_blank" className="hover:text-gray-200">
            <Twitter size={18} />
          </a>
        </div>

        {/* Right WhatsApp + Phone */}
        <div className="flex items-center space-x-4">
          <a href="https://wa.me/919876543210" target="_blank" className="flex items-center hover:text-gray-200">
            <MessageCircle size={18} className="mr-1" />
            WhatsApp
          </a>

          <a href="tel:+919876543210" className="flex items-center hover:text-gray-200">
            <Phone size={18} className="mr-1" />
            +91 98765 43210
          </a>
        </div>

      </div>
    </div>
  );
}
