import React, { useState } from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Using placeholder images - you can replace these with actual dish images
import chilliPaneer from '../../public/images/chillipaneer.png'
import paneercrispy from '../../public/images/paneercrispy.png'
import cholebhature from '../../public/images/cholebhature.png'
import dalmakhni from '../../public/images/dalmakhni.png'
import kadhaipaneer from '../../public/images/kadhaipaneer.png'
import rajmamasala from '../../public/images/rajmamasala.png'
import palakpaneer from '../../public/images/palakpaneer.png'
import aloogobi from '../../public/images/aloogobi.png'

type MenuItem = {
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
    spicy: boolean,
    popular: boolean,
    vegetarian: boolean
}

const indoCateringItems: MenuItem[] = [
    {
        id: 1,
        name: "Bathure Chole",
        description: "Fluffy fried bread served with spicy chickpea curry, a classic North Indian combination.",
        price: 10.50,
        image: cholebhature, // placeholder - replace with actual image
        spicy: true,
        popular: true,
        vegetarian: true
    },
    {
        id: 2,
        name: "Dal Makhni",
        description: "Rich and creamy black lentils slow-cooked with butter, cream, and aromatic spices.",
        price: 10.50,
        image: dalmakhni, // placeholder - replace with actual image
        spicy: false,
        popular: true,
        vegetarian: true
    },
    {
        id: 3,
        name: "Kadhai Paneer",
        description: "Fresh cottage cheese cooked with bell peppers, onions, and tomatoes in traditional kadhai spices.",
        price: 10.50,
        image: kadhaipaneer, // placeholder - replace with actual image
        spicy: true,
        popular: false,
        vegetarian: true
    },
    {
        id: 4,
        name: "Rajma Masala",
        description: "Red kidney beans cooked in rich tomato-onion gravy with traditional North Indian spices.",
        price: 9.99,
        image: rajmamasala, // placeholder - replace with actual image
        spicy: true,
        popular: false,
        vegetarian: true
    },
    {
        id: 5,
        name: "Palak Paneer",
        description: "Fresh cottage cheese cubes in a creamy spinach gravy infused with aromatic spices.",
        price: 10.50,
        image: palakpaneer, // placeholder - replace with actual image
        spicy: false,
        popular: true,
        vegetarian: true
    },
    {
        id: 6,
        name: "Aloo Gobi",
        description: "Traditional dry curry with potatoes and cauliflower cooked with turmeric and spices.",
        price: 9.99,
        image: aloogobi, // placeholder - replace with actual image
        spicy: false,
        popular: false,
        vegetarian: true
    }
];

const IndoCatering = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = indoCateringItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50 pt-8 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button and Header */}
                <div className="mb-8">
                    <Link
                        to="/menu"
                        className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 mb-6"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Menu</span>
                    </Link>

                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Indian Catering
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Authentic North Indian dishes perfect for catering events.
                            Traditional recipes passed down through generations.
                        </p>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="mb-8">
                    <div className="relative max-w-md mx-auto">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search Indian catering dishes..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4 flex space-x-2">
                                    {item.popular && (
                                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                            Popular
                                        </span>
                                    )}
                                    {item.spicy && (
                                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                            🌶️ Spicy
                                        </span>
                                    )}
                                    {item.vegetarian && (
                                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                            🌱 Veg
                                        </span>
                                    )}
                                </div>
                                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
                                    <span className="text-lg font-bold text-red-600">£{item.price}</span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col ">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                                <div className="bg-gradient-to-r from-orange-100 to-red-100 p-3 rounded-lg">
                                    <p className="text-sm text-gray-700 self-end">
                                        <span className="font-semibold">Perfect for catering:</span> Available in bulk quantities for events and celebrations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-12">
                        <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No dishes found</h3>
                        <p className="text-gray-500">Try adjusting your search criteria</p>
                    </div>
                )}

                {/* Catering Info */}
                <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
                    <h2 className="text-3xl font-bold mb-4">Catering Services Available</h2>
                    <p className="text-lg mb-6 opacity-90">
                        Planning an event? We offer bulk orders and catering services for all occasions.
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
            </div>
        </div>
    );
};

export default IndoCatering; 