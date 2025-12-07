import { useState, useEffect } from "react";
import { Menu, X, MapPin, Compass } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/sweetdreams_logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Domestic", path: "/domestic" },
    { name: "International", path: "/international" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/98 backdrop-blur-lg shadow-xl border-b border-gray-100"
        : "bg-white shadow-md border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-3.5">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={logo}
                alt="Sweetdreams Holidays"
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Compass className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Sweet Dreams
              </h1>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Holidays
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive(link.path)
                    ? "text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/30"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                >
                  {link.name}
                  {!isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              </li>
            ))}
            <li>
              <button className="ml-2 px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange-500/40 transform hover:-translate-y-0.5 transition-all duration-300">
                Book Now
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="bg-gradient-to-b from-white to-blue-50/30 px-5 pb-4 space-y-2 border-t border-gray-100">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive(link.path)
                  ? "text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-md"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <button className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Book Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
