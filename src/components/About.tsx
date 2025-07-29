import React from 'react';
import { Award, Clock, Heart, Users } from 'lucide-react';
const features = [
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in authentic Indochinese cuisine"
  },
  // {
  //   icon: Clock,
  //   title: "25 Years Legacy",
  //   description: "Serving the community with traditional recipes since 1999"
  // },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish prepared with passion and attention to detail"
  },
  {
    icon: Users,
    title: "Family Owned",
    description: "Three generations of culinary expertise in one kitchen"
  }
];
const About = () => {
  const features: { icon: any, title: string, description: string }[] = []

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Chef preparing authentic Asian cuisine"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-red-600 to-orange-500 text-white p-6 rounded-xl shadow-xl">
              <div className="text-2xl font-bold">4.9★</div>
              <div className="text-sm">Customer Rating</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              A Journey Through
              <span className="block text-red-600">Indochinese Heritage</span>
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              BYD events and catering  has been the cornerstone of authentic Indochinese dining for over two decades.
              Our master chefs bring together the bold flavors of Chinese cuisine with the aromatic spices
              of Southeast Asia, creating a unique culinary experience that tells the story of cultural fusion.
            </p>

            <p className="text-gray-600 mb-10 leading-relaxed">
              From our signature Hakka noodles to the perfectly balanced Manchurian dishes, every recipe
              has been perfected through generations of family tradition and culinary innovation.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;