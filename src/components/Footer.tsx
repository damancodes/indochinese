
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">龍</span>
              </div>
              <span className="text-xl font-bold">BYD events and catering ltd.</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Serving authentic Indochinese cuisine. Experience the perfect
              fusion of flavors in every dish.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-400">   209 Shenley Road,
                  Borehamwood,  WD6 1AT,
                  United Kingdom</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-400">+44-7405421830</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-400">n.sharma77@yahoo.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Mon - Sunday</span>
                <span className="text-gray-300">5 PM - 11 PM</span>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Menu
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Reservations
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Catering
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 BYD events and catering ltd. All rights reserved. Made with ❤️ for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;