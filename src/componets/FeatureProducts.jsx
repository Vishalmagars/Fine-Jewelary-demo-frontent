import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Star, Heart, ShoppingBag } from 'lucide-react';

const FeatureProducts = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const featuredProducts = [
    {
      id: 1,
      name: "Diamond Eternity Ring",
      category: "Diamond Rings",
      price: "$2,499",
      originalPrice: "$3,199",
      badge: "Best Seller",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 127
    },
    {
      id: 2,
      name: "Gold Pearl Necklace",
      category: "Pearl Jewelry",
      price: "$1,899",
      originalPrice: "$2,299",
      badge: "Premium",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "Emerald Drop Earrings",
      category: "Gemstone Jewelry",
      price: "$3,299",
      originalPrice: "$4,199",
      badge: "Exclusive",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Sapphire Tennis Bracelet",
      category: "Bracelets",
      price: "$4,599",
      originalPrice: "$5,799",
      badge: "New Arrival",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      reviews: 203
    },
    {
      id: 5,
      name: "Ruby Heart Pendant",
      category: "Pendants",
      price: "$1,299",
      originalPrice: "$1,699",
      badge: "Hot Deal",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 94
    },
    {
      id: 6,
      name: "Diamond Stud Earrings",
      category: "Diamond Earrings",
      price: "$2,199",
      originalPrice: "$2,799",
      badge: "Classic",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 178
    },
    {
      id: 7,
      name: "Platinum Wedding Band",
      category: "Wedding Rings",
      price: "$1,799",
      originalPrice: "$2,199",
      badge: "Trending",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 112
    },
    {
      id: 8,
      name: "Amethyst Cocktail Ring",
      category: "Fashion Rings",
      price: "$999",
      originalPrice: "$1,299",
      badge: "Limited",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 67
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(4); // 2x2 grid on mobile
      } else {
        setItemsPerPage(8); // 2x4 grid on desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(featuredProducts.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getBadgeAccent = (badge) => {
    switch(badge) {
      case 'Best Seller': return 'border-amber-200 text-amber-700 bg-amber-50';
      case 'Premium': return 'border-purple-200 text-purple-700 bg-purple-50';
      case 'Exclusive': return 'border-blue-200 text-blue-700 bg-blue-50';
      case 'New Arrival': return 'border-emerald-200 text-emerald-700 bg-emerald-50';
      case 'Hot Deal': return 'border-red-200 text-red-700 bg-red-50';
      case 'Classic': return 'border-gray-200 text-gray-700 bg-gray-50';
      case 'Trending': return 'border-cyan-200 text-cyan-700 bg-cyan-50';
      case 'Limited': return 'border-violet-200 text-violet-700 bg-violet-50';
      default: return 'border-amber-200 text-amber-700 bg-amber-50';
    }
  };

  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const handleProductClick = (productId) => {
    console.log(`Clicked product ${productId}`);
  };

  const handleAddToCart = (productId, e) => {
    e.stopPropagation();
    console.log(`Added product ${productId} to cart`);
  };

  const getCurrentPageProducts = () => {
    const startIndex = currentPage * itemsPerPage;
    return featuredProducts.slice(startIndex, startIndex + itemsPerPage);
  };

  const visibleProducts = getCurrentPageProducts();

  return (
    <div className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Enhanced background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-amber-300 to-transparent opacity-30"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-8 h-px bg-amber-400"></div>
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">Featured Collection</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
            <div className="w-8 h-px bg-amber-400"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Fine Jewelry
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Discover our curated collection of premium pieces crafted with precision and elegance
          </p>
        </div>

        {/* Enhanced Navigation */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">
              Page {currentPage + 1} of {totalPages}
            </span>
            <div className="flex space-x-1">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? 'bg-amber-500 w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={prevPage}
              className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center group border border-gray-200"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
            </button>
            
            <button
              onClick={nextPage}
              className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center group border border-gray-200"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
            </button>
          </div>
        </div>

        {/* Enhanced Grid Layout - 2x4 on desktop, 2x2 on mobile */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {visibleProducts.map((product, index) => (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleProductClick(product.id)}
                className={`group relative bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl ${
                  hoveredCard === product.id ? 'transform -translate-y-3 shadow-2xl' : 'shadow-md'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Enhanced Image Container */}
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Enhanced badge */}
                  <div className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm border ${getBadgeAccent(product.badge)}`}>
                    {product.badge}
                  </div>
                  
                  {/* Favorite button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(product.id);
                    }}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:bg-white ${
                      favorites.has(product.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${favorites.has(product.id) ? 'fill-current' : ''}`} />
                  </button>
                  
                  {/* Enhanced hover actions */}
                  <div className={`absolute bottom-3 left-3 right-3 flex items-center justify-between transition-all duration-300 ${
                    hoveredCard === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product.id);
                      }}
                      className="bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 group/btn"
                    >
                      <span className="hidden sm:inline">View</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                    
                    <button
                      onClick={(e) => handleAddToCart(product.id, e)}
                      className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Enhanced Product Info */}
                <div className="p-4">
                  {/* Category */}
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                    {product.category}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-sm md:text-base font-medium text-gray-900 mb-2 line-clamp-2 leading-tight">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-3">
                    <Star className="w-3 h-3 text-amber-400 fill-current" />
                    <span className="text-xs text-gray-600 font-medium">{product.rating}</span>
                    <span className="text-xs text-gray-400">({product.reviews})</span>
                  </div>

                  {/* Price section */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                      <span className="text-base md:text-lg font-semibold text-gray-900">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    
                    {/* Enhanced save indicator */}
                    <div className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-full">
                      -{Math.round((1 - parseFloat(product.price.replace('$', '').replace(',', '')) / parseFloat(product.originalPrice.replace('$', '').replace(',', ''))) * 100)}%
                    </div>
                  </div>
                </div>

                {/* Enhanced hover border effect */}
                <div className={`absolute inset-0 border-2 border-amber-200 rounded-2xl transition-opacity duration-300 ${
                  hoveredCard === product.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced bottom section */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200">
            <span>View All Collections</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default FeatureProducts;