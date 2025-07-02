import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Delicious Asian cuisine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
          <span className="ml-2 text-white text-sm">4.9/5 • 2,347 reviews</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Authentic
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Indochinese Flavors
          </span>
        </h1>
        
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the perfect fusion of Chinese and Southeast Asian cuisine. 
          Traditional recipes passed down through generations, crafted with the finest ingredients.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/menu"
            className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <a
            href="tel:+15551234567"
            className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-20 transition-all duration-300"
          >
            Make Reservation
          </a>
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">25+</div>
            <div className="text-sm uppercase tracking-wide">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">100+</div>
            <div className="text-sm uppercase tracking-wide">Signature Dishes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">50K+</div>
            <div className="text-sm uppercase tracking-wide">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;