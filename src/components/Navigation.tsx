import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm p-2">BYD</span>
            </div>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-200 ${isActive('/')
                ? 'text-red-600 font-semibold'
                : 'text-gray-700 hover:text-red-600'
                }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`transition-colors duration-200 ${isActive('/menu')
                ? 'text-red-600 font-semibold'
                : 'text-gray-700 hover:text-red-600'
                }`}
            >
              Menu
            </Link>

            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <a href="tel:+447405421830" className="hover:text-red-600 transition-colors">
                  +44-7405421830
                </a>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>209 Shenley Road,
                  Borehamwood,  WD6 1AT,
                  United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md transition-colors duration-200 ${isActive('/')
                  ? 'text-red-600 bg-red-50 font-semibold'
                  : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                  }`}
              >
                Home
              </Link>
              <Link
                to="/menu"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md transition-colors duration-200 ${isActive('/menu')
                  ? 'text-red-600 bg-red-50 font-semibold'
                  : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                  }`}
              >
                Menu
              </Link>
              <div className="px-3 py-2 text-sm text-gray-600 space-y-1">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+44-7405421830</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>209 Shenley Road,
                    Borehamwood,  WD6 1AT,
                    United Kingdom</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;