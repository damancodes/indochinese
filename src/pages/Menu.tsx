import React, { useState } from 'react';
import { Search, Filter, ArrowRight, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

import chickenlolipop from '../../public/images/chickenlolipop.jpeg'
import prawnpuri from '../../public/images/prawnpuri.png'
import chillichicken from '../../public/images/chilichicken.png'
import vegmonchowsoup from '../../public/images/vegmonchowsoup.png'
import sweetcornsoup from '../../public/images/sweetcornsoup.png'
import hotandsour from '../../public/images/hot&sour.png'
import chickenclearsoup from '../../public/images/chickenclearsoup.png'

import vegfriedrice from '../../public/images/vegfriedrice.png'
import eggfriedrice from '../../public/images/eggfriedrice.png';
import chickenManch from '../../public/images/chickenManchurian.png'

import paneercrispy from '../../public/images/paneercrispy.png'
import vegManchGravy from '../../public/images/vegManchuriangravy.png'

import chickenNoodle from '../../public/images/chickennoodle.png'


import vegNoodle from '../../public/images/vegnoodle.png'
import cauliflower65 from '../../public/images/cauliflower65.png'
import chilliPaneer from '../../public/images/chillipaneer.png'
import chlliGarlicMogo from '../../public/images/chilligarlicmogo.png'
import springroll from '../../public/images/springroll.png'

import crispyChicken from '../../public/images/crispyChicken.png'
import chickenSpringRoll from '../../public/images/chickenspringroll.png'
import chickenTender from '../../public/images/chickentender.png'
import chickenfriedrice from '../../public/images/chickenfriedrice.png'
import prawnNoodles from '../../public/images/prawnnoodles.png'


type CategoryId = "all" | "vegstarter" | "nonvegstarter" | "noodles" | "rice" | "soup";

type Category = {
  id: CategoryId
  name: string,
  count: number
}

type MenuItem = {
  id: number,
  name: string,
  description: string,
  price: number,
  category: CategoryId,

  image: string,
  spicy: boolean,
  popular: boolean
}

const categories: Category[] = [
  { id: "all", name: "All Items", count: 0 },
  { id: "vegstarter", name: "Veg Starters", count: 0 },
  { id: "nonvegstarter", name: "Non-Veg Starters", count: 0 },
  { id: "soup", name: "Soups", count: 0 },
  { id: "noodles", name: "Noodles", count: 0 },
  { id: "rice", name: "Rice & Mains", count: 0 }
];


const menuItems: MenuItem[] = [
  // Veg Starters
  {
    id: 1,
    name: "Chili garlic mogo",
    description: "Crispy cassava tossed in a fiery chili garlic sauce for a bold, flavorful kick.",
    price: 5.50,
    category: "vegstarter",
    image: chlliGarlicMogo,
    spicy: true,
    popular: true
  },
  {
    id: 2,
    name: "Veg spring roll",
    description: "Crispy golden rolls filled with seasoned vegetables, served with a tangy dip.",
    price: 4.90,
    category: "vegstarter",
    image: springroll,
    spicy: true,
    popular: false
  },
  {
    id: 3,
    name: "Gobi 65",
    description: "Battered cauliflower florets tossed in Indo-Chinese sauce.",
    price: 4.90,
    category: "vegstarter",
    image: cauliflower65,
    spicy: true,
    popular: false
  },
  {
    id: 4,
    name: "Chilli Paneer",
    description: "Paneer cubes in spicy chili sauce with onions and peppers.",
    price: 4.90,
    category: "vegstarter",
    image: chilliPaneer,
    spicy: true,
    popular: true
  },

  // Non-Veg Starters
  // {
  //   id: 5,
  //   name: "Fried Chicken",
  //   description: "Crispy chicken with flavorful seasoning.",
  //   price: 4.90,
  //   category: "nonvegstarter",
  //   image: friedChicken,
  //   spicy: false,
  //   popular: true
  // },
  {
    id: 5,
    name: "Chicken Tender",
    description: "Crispy chicken with flavorful seasoning.",
    price: 4.90,
    category: "nonvegstarter",
    image: chickenTender,
    spicy: false,
    popular: true
  },
  {
    id: 6,
    name: "Chicken Crispy",
    description: "Fried chicken tossed in spicy garlic sauce.",
    price: 4.90,
    category: "nonvegstarter",
    image: crispyChicken,
    spicy: true,
    popular: false
  },
  {
    id: 7,
    name: "Chicken Spring Roll",
    description: "Golden spring rolls filled with chicken and herbs.",
    price: 4.50,
    category: "nonvegstarter",
    image: chickenSpringRoll,
    spicy: true,
    popular: false
  },
  {
    id: 8,
    name: "Chicken Lollipop",
    description: "Spicy deep-fried chicken lollipops.",
    price: 4.50,
    category: "nonvegstarter",
    image: chickenlolipop,
    spicy: true,
    popular: true
  },
  {
    id: 9,
    name: "Prawn Puri",
    description: "Mini puris topped with spicy prawns and chutney.",
    price: 5.50,
    category: "nonvegstarter",
    image: prawnpuri,
    spicy: false,
    popular: false
  },
  {
    id: 10,
    name: "Chilli Chicken",
    description: "Tender chicken cubes in spicy Indo-Chinese sauce.",
    price: 5.50,
    category: "nonvegstarter",
    image: chillichicken,
    spicy: true,
    popular: true
  },

  // Soups
  {
    id: 11,
    name: "Veg Manchow Soup",
    description: "Spicy hot-and-sour veg soup with crispy noodles.",
    price: 7.50,
    category: "soup",
    image: vegmonchowsoup,
    spicy: true,
    popular: true
  },
  {
    id: 12,
    name: "Sweet Corn Soup",
    description: "Creamy corn soup with veggies or chicken.",
    price: 6.50,
    category: "soup",
    image: sweetcornsoup,
    spicy: false,
    popular: false
  },
  {
    id: 13,
    name: "Hot & Sour Soup",
    description: "Tangy, spicy soup with fresh herbs and mixed vegetables.",
    price: 7.50,
    category: "soup",
    image: hotandsour,
    spicy: true,
    popular: false
  },
  {
    id: 14,
    name: "Chicken Clear Soup",
    description: "Light clear chicken broth with herbs and spring onions.",
    price: 7.50,
    category: "soup",
    image: chickenclearsoup,
    spicy: false,
    popular: false
  },

  // Rice & Mains
  {
    id: 15,
    name: "Veg Fried Rice",
    description: "Stir-fried rice with colorful vegetables and soy sauce.",
    price: 8.99,
    category: "rice",
    image: vegfriedrice,
    spicy: false,
    popular: false
  },
  {
    id: 16,
    name: "Egg Fried Rice",
    description: "Basmati rice stir-fried with eggs and green onions.",
    price: 8.99,
    category: "rice",
    image: eggfriedrice,
    spicy: false,
    popular: true
  },
  {
    id: 34,
    name: "Chicken Fried Rice",
    description: "Basmati rice stir-fried with chicken and green onions.",
    price: 9.99,
    category: "rice",
    image: chickenfriedrice,
    spicy: false,
    popular: true
  },
  {
    id: 17,
    name: "Chicken Manchurian",
    description: "Chicken tossed in rich Manchurian sauce.",
    price: 10.50,
    category: "rice",
    image: chickenManch,
    spicy: true,
    popular: false
  },
  {
    id: 18,
    name: "Paneer Crispy (Main)",
    description: "Main course-style crispy paneer served with sauces.",
    price: 10.50,
    category: "vegstarter",
    image: paneercrispy,
    spicy: true,
    popular: false
  },
  {
    id: 19,
    name: "Veg Manchurian Gravy",
    description: "Fried veg balls in Indo-Chinese Manchurian sauce.",
    price: 10.50,
    category: "rice",
    image: vegManchGravy,
    spicy: true,
    popular: false
  },

  // Noodles
  {
    id: 20,
    name: "Veg Noodles",
    description: "Stir-fried Hakka noodles with vegetables.",
    price: 9.99,
    category: "noodles",
    image: vegNoodle,
    spicy: false,
    popular: true
  },
  {
    id: 21,
    name: "Chicken Noodles",
    description: "Hakka noodles stir-fried with chicken and soy.",
    price: 9.99,
    category: "noodles",
    image: chickenNoodle,
    spicy: true,
    popular: true
  },

  {
    id: 22,
    name: "Prawn Noodles",
    description: "Savory noodles tossed with succulent prawns, aromatic spices, and a rich, flavorful broth.",
    price: 9.99,
    category: "noodles",
    image: prawnNoodles,
    spicy: false,
    popular: true
  }
];


menuItems.forEach(item => {

  const catIndex = categories.findIndex((c) => c.id == item.category)
  console.log("catindex ", catIndex)

  categories[catIndex].count++;

})

categories[0].count = menuItems.length;

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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

        {/* Indo Catering Sub Menu */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center shadow-xl">
            <div className="flex justify-center mb-4">
              <Utensils className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Indo Catering</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Explore our authentic North Indian catering menu featuring traditional dishes like
              Bathur Chole, Dal Makhni, and Kadhai Paneer - perfect for events and celebrations.
            </p>
            <Link
              to="/indo-catering"
              className="inline-flex items-center space-x-2 bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <span>View Indo Catering Menu</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
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
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 ${activeCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
                  }`}
              >
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${activeCategory === category.id
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
                  <span className="text-lg font-bold text-red-600">£{item.price}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                {/* <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Add to Order
                </button> */}
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