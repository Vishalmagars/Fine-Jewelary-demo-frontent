import React, { useState, useEffect } from 'react';
import { ArrowRight, Diamond, Circle, Star, Gem, Heart, Crown, Zap, Gift, ShoppingBag, ChevronDown } from 'lucide-react';

const Categories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const collections = [
    {
      id: 1,
      name: "Diamond Rings",
      description: "Timeless elegance",
      icon: Diamond,
      itemCount: 156,
      price: "$2,500+",
      color: "from-blue-500 to-purple-600",
      bg: "bg-blue-50"
    },
    {
      id: 2,
      name: "Gold Necklaces",
      description: "Luxurious chains",
      icon: Circle,
      itemCount: 234,
      price: "$1,200+",
      color: "from-amber-500 to-yellow-600",
      bg: "bg-amber-50"
    },
    {
      id: 3,
      name: "Pearl Jewelry",
      description: "Classic sophistication",
      icon: Star,
      itemCount: 89,
      price: "$800+",
      color: "from-rose-500 to-pink-600",
      bg: "bg-rose-50"
    },
    {
      id: 4,
      name: "Gemstone Earrings",
      description: "Vibrant designs",
      icon: Gem,
      itemCount: 178,
      price: "$950+",
      color: "from-emerald-500 to-teal-600",
      bg: "bg-emerald-50"
    },
    {
      id: 5,
      name: "Bridal Collection",
      description: "Special day pieces",
      icon: Heart,
      itemCount: 124,
      price: "$3,500+",
      color: "from-violet-500 to-purple-600",
      bg: "bg-violet-50"
    },
    {
      id: 6,
      name: "Luxury Watches",
      description: "Precision timepieces",
      icon: Crown,
      itemCount: 67,
      price: "$8,500+",
      color: "from-gray-600 to-slate-700",
      bg: "bg-gray-50"
    },
    {
      id: 7,
      name: "Limited Edition",
      description: "Exclusive masterpieces",
      icon: Zap,
      itemCount: 23,
      price: "$12,000+",
      color: "from-orange-500 to-red-600",
      bg: "bg-orange-50"
    },
    {
      id: 8,
      name: "Gift Sets",
      description: "Curated collections",
      icon: Gift,
      itemCount: 94,
      price: "$1,800+",
      color: "from-indigo-500 to-blue-600",
      bg: "bg-indigo-50"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCategoryClick = (categoryId) => {
    console.log(`Clicked category ${categoryId}`);
  };

  return (
    <div className="py-8 sm:py-12 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className={`text-center mb-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full px-4 py-2 mb-4">
            <Diamond className="w-4 h-4 text-amber-600 mr-2" />
            <span className="text-sm font-medium text-amber-800">Browse Collections</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-2">Jewelry Categories</h2>
          <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base">
            Discover our curated collections of fine jewelry
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full p-1 shadow-sm border">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                viewMode === 'grid' 
                  ? 'bg-amber-500 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                viewMode === 'list' 
                  ? 'bg-amber-500 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              List View
            </button>
          </div>
        </div>

        {/* Categories Layout */}
        {viewMode === 'grid' ? (
          // Compact Grid Layout
          <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {collections.map((collection, index) => {
              const IconComponent = collection.icon;
              return (
                <div
                  key={collection.id}
                  className={`group relative cursor-pointer transform hover:scale-105 transition-all duration-300 ${collection.bg} hover:shadow-lg rounded-xl p-4 sm:p-5 border border-gray-100 hover:border-gray-200`}
                  onClick={() => handleCategoryClick(collection.id)}
                  onMouseEnter={() => setActiveCategory(collection.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 rounded-full bg-gradient-to-br ${collection.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base group-hover:text-amber-600 transition-colors">
                      {collection.name}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">
                      {collection.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">{collection.itemCount} items</span>
                      <span className="font-medium text-amber-600">{collection.price}</span>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-xl ring-2 ring-transparent group-hover:ring-amber-200 transition-all duration-300"></div>
                </div>
              );
            })}
          </div>
        ) : (
          // Compact List Layout
          <div className={`space-y-2 max-w-4xl mx-auto transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {collections.map((collection, index) => {
              const IconComponent = collection.icon;
              return (
                <div
                  key={collection.id}
                  className="group cursor-pointer bg-white hover:bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
                  onClick={() => handleCategoryClick(collection.id)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${collection.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                          {collection.name}
                        </h3>
                        <p className="text-sm text-gray-600">{collection.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-gray-500">{collection.itemCount} items</span>
                      <span className="font-medium text-amber-600">{collection.price}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Compact CTA */}
        <div className={`mt-8 sm:mt-12 text-center transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-light mb-3">Need Something Custom?</h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Work with our artisans to create your perfect piece
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
              Start Custom Design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;