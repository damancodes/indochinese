import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Items', count: 24 },
    { id: 'appetizers', name: 'Appetizers', count: 6 },
    { id: 'noodles', name: 'Noodles', count: 8 },
    { id: 'rice', name: 'Rice', count: 5 },
    { id: 'chicken', name: 'Chicken', count: 5 }
  ];

  const menuItems = [
    // Appetizers
    {
      id: 1,
      name: "Chicken Spring Rolls",
      description: "Crispy golden rolls filled with seasoned chicken and fresh vegetables",
      price: 8.99,
      category: "appetizers",
      image: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: false,
      popular: true
    },
    {
      id: 2,
      name: "Honey Chili Potatoes",
      description: "Crispy potato cubes tossed in sweet and spicy honey chili sauce",
      price: 7.99,
      category: "appetizers",
      image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: true,
      popular: false
    },
    {
      id: 3,
      name: "Chicken Lollipops",
      description: "Tender chicken drummettes marinated in aromatic spices and deep fried",
      price: 10.99,
      category: "appetizers",
      image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: false,
      popular: true
    },
    {
      id: 4,
      name: "Paneer Chili",
      description: "Indo-Chinese style paneer cubes with bell peppers in spicy sauce",
      price: 9.99,
      category: "appetizers",
      image: "https://images.pexels.com/photos/1252814/pexels-photo-1252814.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: true,
      popular: false
    },
    {
      id: 5,
      name: "Dragon Chicken",
      description: "Succulent chicken pieces in dragon sauce with onions and peppers",
      price: 11.99,
      category: "appetizers",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: true,
      popular: true
    },
    {
      id: 6,
      name: "Veg Manchurian",
      description: "Mixed vegetable balls in tangy Manchurian sauce",
      price: 8.99,
      category: "appetizers",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: false,
      popular: false
    },

    // Noodles
    {
      id: 7,
      name: "Hakka Noodles",
      description: "Classic stir-fried noodles with fresh vegetables and soy sauce",
      price: 12.99,
      category: "noodles",
      image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: false,
      popular: true
    },
    {
      id: 8,
      name: "Schezwan Noodles",
      description: "Spicy noodles with Schezwan sauce, vegetables, and choice of protein",
      price: 14.99,
      category: "noodles",
      image: "https://images.pexels.com/photos/1853134/pexels-photo-1853134.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: true,
      popular: true
    },
    {
      id: 9,
      name: "Singapore Rice Noodles",
      description: "Thin rice noodles with curry flavor, shrimp, and char siu",
      price: 16.99,
      category: "noodles",
      image: "https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: false,
      popular: false
    },
    {
      id: 10,
      name: "Chicken Chow Mein",
      description: "Crispy noodles topped with chicken and vegetables in savory sauce",
      price: 15.99,
      category: "noodles",
      image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: false,
      popular: true
    },
    {
      id: 11,
      name: "Dan Dan Noodles",
      description: "Szechuan noodles with minced pork in spicy sesame sauce",
      price: 13.99,
      category: "noodles",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: true,
      popular: false
    },
    {
      id: 12,
      name: "Thai Basil Noodles",
      description: "Rice noodles with Thai basil, chili, and choice of meat",
      price: 14.99,
      category: "noodles",
      image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: true,
      popular: false
    },
    {
      id: 13,
      name: "Black Bean Noodles",
      description: "Egg noodles with black bean sauce, vegetables, and tender beef",
      price: 15.99,
      category: "noodles",
      image: "https://images.pexels.com/photos/1907229/pexels-photo-1907229.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: false,
      popular: false
    },
    {
      id: 14,
      name: "Dragon Noodles",
      description: "House special noodles with mixed seafood in dragon sauce",
      price: 18.99,
      category: "noodles",
      image: "https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: true,
      popular: true
    },

    // Rice
    {
      id: 15,
      name: "Szechuan Fried Rice",
      description: "Spicy fried rice with Szechuan peppercorns and mixed vegetables",
      price: 11.99,
      category: "rice",
      image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: true,
      popular: true
    },
    {
      id: 16,
      name: "Yang Chow Fried Rice",
      description: "Classic fried rice with shrimp, char siu, and scrambled eggs",
      price: 13.99,
      category: "rice",
      image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: false,
      popular: true
    },
    {
      id: 17,
      name: "Chicken Fried Rice",
      description: "Aromatic fried rice with tender chicken pieces and vegetables",
      price: 12.99,
      category: "rice",
      image: "https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: false,
      popular: false
    },
    {
      id: 18,
      name: "Pineapple Fried Rice",
      description: "Thai-style fried rice with pineapple, cashews, and curry powder",
      price: 14.99,
      category: "rice",
      image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: false,
      popular: false
    },
    {
      id: 19,
      name: "Dragon Rice",
      description: "House special rice with mixed seafood and dragon sauce",
      price: 16.99,
      category: "rice",
      image: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: true,
      popular: true
    },

    // Chicken
    {
      id: 20,
      name: "Chicken Manchurian",
      description: "Crispy chicken balls in tangy Indo-Chinese Manchurian sauce",
      price: 16.99,
      category: "chicken",
      image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: false,
      popular: true
    },
    {
      id: 21,
      name: "General Tso's Chicken",
      description: "Sweet and spicy battered chicken in General Tso's sauce",
      price: 17.99,
      category: "chicken",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: true,
      popular: true
    },
    {
      id: 22,
      name: "Honey Garlic Chicken",
      description: "Tender chicken glazed with honey garlic sauce",
      price: 15.99,
      category: "chicken",
      image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: false,
      popular: false
    },
    {
      id: 23,
      name: "Szechuan Chicken",
      description: "Spicy chicken with Szechuan peppercorns and dried chilies",
      price: 16.99,
      category: "chicken",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: true,
      popular: false
    },
    {
      id: 24,
      name: "Orange Chicken",
      description: "Crispy chicken with fresh orange zest in sweet citrus sauce",
      price: 16.99,
      category: "chicken",
      image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      spicy: false,
      popular: true
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our authentic Indochinese dishes, each prepared with traditional recipes 
            and the finest ingredients.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
                }`}
              >
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
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
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
                  <span className="text-lg font-bold text-red-600">${item.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No dishes found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;