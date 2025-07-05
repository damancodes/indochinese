import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Highlights = () => {
  const dishes = [
    {
      name: "Hakka Noodles",
      description: "Stir-fried noodles with fresh vegetables and aromatic spices",
      price: "$14.99",
      image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "Noodles"
    },
    {
      name: "Chicken Manchurian",
      description: "Crispy chicken balls in tangy Indo-Chinese sauce",
      price: "$16.99",
      image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "Chicken"
    },
    {
      name: "Szechuan Fried Rice",
      description: "Spicy fried rice with Szechuan peppercorns and vegetables",
      price: "$13.99",
      image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "Rice"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Signature Dishes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our most beloved creations, each dish crafted with authentic ingredients 
            and traditional cooking techniques.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {dish.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{dish.name}</h3>
                  <span className="text-xl font-bold text-red-600">{dish.price}</span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{dish.description}</p>
                {/* <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                  Add to Order
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/menu"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Highlights;