import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">
              Specialist Suite
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-black transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-black transition"
            >
              About
            </Link>

            <Link
              to="/services"
              className="text-gray-700 hover:text-black transition"
            >
              Services
            </Link>

            <Link
              to="/portfolio"
              className="text-gray-700 hover:text-black transition"
            >
              Portfolio
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-black transition"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} className="text-gray-900" />
            ) : (
              <Menu size={28} className="text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200">
            <nav className="flex flex-col gap-5">
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>

              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>

              <Link to="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>

              <Link to="/portfolio" onClick={() => setIsOpen(false)}>
                Portfolio
              </Link>

              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-black text-white text-center py-3 rounded-lg"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;