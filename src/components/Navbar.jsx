
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "services" },
    { name: "About Us", to: "about" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-bold text-2xl tracking-tight text-gray-900">
            AUTO<span className="text-blue-700">CARE</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-gray-600 font-medium hover:text-blue-700 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="px-5 py-2.5 text-blue-700 font-semibold border border-blue-700 rounded-lg hover:bg-blue-50 transition duration-200"
          >
            Log In
          </Link>

          <Link
            to="/register"
            className="px-5 py-2.5 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800 text-2xl focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-4">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 font-medium hover:text-blue-700 transition"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-3">
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="text-center w-full py-2.5 border border-blue-700 text-blue-700 rounded-lg font-semibold"
            >
              Log In
            </Link>

            <Link
              to="/register"
              onClick={() => setIsMenuOpen(false)}
              className="text-center w-full py-2.5 bg-blue-700 text-white rounded-lg font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
