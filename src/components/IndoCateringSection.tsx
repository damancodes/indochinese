import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Utensils } from 'lucide-react';

// Import the actual images
import cholebhature from '../../public/images/cholebhature.png';
import dalmakhni from '../../public/images/dalmakhni.png';
import kadhaipaneer from '../../public/images/kadhaipaneer.png';

const IndoCateringSection = () => {
    const featuredDishes = [
        {
            name: "Bathure Chole",
            description: "Fluffy fried bread served with spicy chickpea curry, a classic North Indian combination",
            price: "£12.99",
            image: cholebhature,
            category: "North Indian"
        },
        {
            name: "Dal Makhni",
            description: "Rich and creamy black lentils slow-cooked with butter, cream, and aromatic spices",
            price: "£11.99",
            image: dalmakhni,
            category: "Vegetarian"
        },
        {
            name: "Kadhai Paneer",
            description: "Fresh cottage cheese cooked with bell peppers, onions, and tomatoes in traditional kadhai spices",
            price: "£13.99",
            image: kadhaipaneer,
            category: "Paneer"
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-red-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 rounded-full">
                            <Utensils className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Indian Catering Specialties
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Authentic North Indian dishes perfect for your special events and celebrations.
                        Traditional recipes passed down through generations.
                    </p>
                </div>

                {/* Featured Dishes Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {featuredDishes.map((dish, index) => (
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
                                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {dish.category}
                                </div>
                                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
                                    <span className="text-lg font-bold text-red-600">{dish.price}</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{dish.name}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">{dish.description}</p>
                                <div className="bg-gradient-to-r from-orange-100 to-red-100 p-3 rounded-lg">
                                    <p className="text-sm text-gray-700">
                                        <span className="font-semibold">Perfect for catering:</span> Available in bulk quantities
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Catering Info Card */}
                <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Planning an Event?</h3>
                    <p className="text-lg mb-6 opacity-90">
                        We offer professional catering services for weddings, parties, corporate events, and celebrations of all sizes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="tel:+447405421830"
                            className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Call for Catering: +44-7405421830
                        </a>
                        <span className="text-sm opacity-75">Minimum order quantities apply</span>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        to="/indo-catering"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <span>View Full Indian Catering Menu</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default IndoCateringSection; 