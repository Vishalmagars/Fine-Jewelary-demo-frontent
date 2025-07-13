import React, { useState, useCallback, useEffect } from 'react';
import { Filter, Sparkles, Crown, ChevronDown, ChevronUp, ImageIcon, Plus } from 'lucide-react';

// Sample portfolio data (replace with API data in production)
const portfolioData = [
  {
    id: 1,
    category: 'rings',
    subcategory: 'Engagement',
    name: 'Eternal Sparkle',
    image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D',
    materials: '18K White Gold, 1.5ct Diamond',
    description: 'A timeless engagement ring with a brilliant-cut diamond set in white gold.',
  },
  {
    id: 2,
    category: 'necklaces',
    subcategory: 'Pendant',
    name: 'Moonlit Sapphire',
    image: 'https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D',
    materials: 'Platinum, 2ct Sapphire, 0.5ct Diamonds',
    description: 'A stunning sapphire pendant necklace with diamond accents, perfect for evening wear.',
  },
  {
    id: 3,
    category: 'earrings',
    subcategory: 'Drop',
    name: 'Emerald Cascade',
    image: 'https://images.unsplash.com/photo-1590166223826-12dee1677420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D',
    materials: '18K Yellow Gold, 1ct Emeralds',
    description: 'Elegant drop earrings featuring vibrant emeralds in a cascading design.',
  },
  {
    id: 4,
    category: 'bracelets',
    subcategory: 'Tennis',
    name: 'Diamond Line',
    image: 'https://images.unsplash.com/photo-1522001947148-8b4dfe064edc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D',
    materials: '14K White Gold, 3ct Diamonds',
    description: 'A classic tennis bracelet with a continuous line of sparkling diamonds.',
  },
  {
    id: 5,
    category: 'rings',
    subcategory: 'Statement',
    name: 'Ruby Royale',
    image: 'https://images.unsplash.com/photo-1633934542430-0905ccb5f050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D',
    materials: '18K Rose Gold, 2ct Ruby',
    description: 'A bold statement ring with a vibrant ruby centerpiece.',
  },
  {
    id: 6,
    category: 'sets',
    subcategory: 'Bridal',
    name: 'Forever Suite',
    image: 'https://images.unsplash.com/photo-1633934542430-0905ccb5f050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D',
    materials: 'Platinum, 2ct Diamonds, 1ct Pearls',
    description: 'A bridal set including a necklace, earrings, and ring with diamonds and pearls.',
  },
  {
    id: 7,
    category: 'necklaces',
    subcategory: 'Chain',
    name: 'Golden Harmony',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVja2xhY2V8ZW58MHx8MHx8fDA%3D',
    materials: '22K Gold, Hand-crafted Links',
    description: 'An elegant gold chain necklace with intricate hand-crafted links.',
  },
  {
    id: 8,
    category: 'earrings',
    subcategory: 'Stud',
    name: 'Pearl Elegance',
    image: 'https://images.unsplash.com/photo-1596944946297-5c5c2f2ca91d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVhcmwlMjBlYXJyaW5nc3xlbnwwfHwwfHx8MA%3D%3D',
    materials: 'Akoya Pearls, 14K White Gold',
    description: 'Classic pearl stud earrings with lustrous Akoya pearls.',
  },
  {
    id: 9,
    category: 'bracelets',
    subcategory: 'Bangle',
    name: 'Twisted Elegance',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVja2xhY2V8ZW58MHx8MHx8fDA%3D',
    materials: '18K Rose Gold, Twisted Design',
    description: 'A sophisticated twisted bangle bracelet in rose gold.',
  },
  {
    id: 10,
    category: 'rings',
    subcategory: 'Wedding',
    name: 'Infinity Bond',
    image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D',
    materials: 'Platinum, Diamond Band',
    description: 'A beautiful wedding ring with an infinity symbol design.',
  },
  {
    id: 11,
    category: 'necklaces',
    subcategory: 'Choker',
    name: 'Velvet Dreams',
    image: 'https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D',
    materials: 'Black Velvet, Diamond Accents',
    description: 'A luxurious velvet choker with sparkling diamond accents.',
  },
  {
    id: 12,
    category: 'earrings',
    subcategory: 'Hoop',
    name: 'Diamond Hoops',
    image: 'https://images.unsplash.com/photo-1590166223826-12dee1677420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D',
    materials: '14K Gold, 1ct Diamonds',
    description: 'Classic diamond hoop earrings with brilliant-cut diamonds.',
  },
];

const jewelryCategories = {
  all: 'All Categories',
  rings: ['Engagement', 'Wedding', 'Statement', 'Cocktail', 'Band', 'Signet'],
  necklaces: ['Pendant', 'Chain', 'Choker', 'Statement', 'Lariat', 'Collar'],
  earrings: ['Stud', 'Drop', 'Hoop', 'Chandelier', 'Huggie', 'Crawler'],
  bracelets: ['Tennis', 'Bangle', 'Chain', 'Cuff', 'Charm', 'Link'],
  brooches: ['Classic', 'Modern', 'Vintage', 'Animal', 'Floral', 'Geometric'],
  sets: ['Bridal', 'Parure', 'Matching', 'Coordinated', 'Collection', 'Suite'],
};

const ITEMS_PER_PAGE = 9;

const CoustomPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [displayedItems, setDisplayedItems] = useState(ITEMS_PER_PAGE);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset displayed items when category changes
  useEffect(() => {
    setDisplayedItems(ITEMS_PER_PAGE);
  }, [selectedCategory]);

  // Filter portfolio items based on selected category
  const filteredPortfolio = selectedCategory === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === selectedCategory);

  // Get items to display based on current page
  const itemsToShow = filteredPortfolio.slice(0, displayedItems);
  const hasMoreItems = displayedItems < filteredPortfolio.length;

  // Toggle card expansion for details
  const toggleCard = useCallback((id) => {
    setExpandedCard(prev => (prev === id ? null : id));
  }, []);

  // Handle category filter change
  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
    setExpandedCard(null);
    setDisplayedItems(ITEMS_PER_PAGE);
  }, []);

  // Load more items
  const loadMoreItems = useCallback(() => {
    setDisplayedItems(prev => prev + ITEMS_PER_PAGE);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 sm:top-32 right-24 sm:right-32 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-amber-200/20 to-yellow-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 sm:bottom-32 left-24 sm:left-32 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-rose-200/20 to-pink-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section - Left Aligned */}
          <div className="text-left mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center mb-6 sm:mb-8 px-6 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 backdrop-blur-sm rounded-full border border-amber-200/50 shadow-lg">
              <Crown className="w-5 h-5 text-amber-600 mr-2" />
              <span className="text-sm sm:text-base font-medium text-amber-800 tracking-wide">Our Past Creations</span>
              <Sparkles className="w-5 h-5 text-amber-600 ml-2" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-4 sm:mb-6 leading-tight">
              Explore Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-rose-600 to-purple-700 font-extralight">
                Custom Portfolio
              </span>
            </h1>
            
            <div className="max-w-2xl">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light mb-3">
                Discover the artistry and craftsmanship behind our bespoke jewelry pieces, tailored to our clients' unique visions.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed font-light mb-6">
                Each piece tells a story of passion, precision, and unparalleled beauty, created with the finest materials and meticulous attention to detail.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-6">
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-amber-600 hover:to-yellow-700">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Start Custom Design
                </button>
                
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12 sm:mb-16">
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {Object.keys(jewelryCategories).map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-xl shadow-amber-500/25'
                      : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg border border-gray-200/50'
                  }`}
                  aria-label={`Filter by ${jewelryCategories[category]}`}
                >
                  {jewelryCategories[category] === 'All Categories' 
                    ? 'All Categories' 
                    : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {itemsToShow.length === 0 ? (
              <div className="col-span-full text-center text-gray-600">
                <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-lg">No projects found in this category.</p>
              </div>
            ) : (
              itemsToShow.map(item => (
                <div
                  key={item.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                  role="button"
                  tabIndex={0}
                  onClick={() => isMobile && toggleCard(item.id)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && isMobile && toggleCard(item.id)}
                  aria-label={`View details for ${item.name}`}
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 sm:h-72 object-cover"
                      loading="lazy"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 sm:p-6 transition-opacity duration-300 ${
                        !isMobile ? 'opacity-0 hover:opacity-100' : expandedCard === item.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="text-white">
                        <h3 className="text-lg sm:text-xl font-semibold">{item.name}</h3>
                        <p className="text-sm sm:text-base">{item.materials}</p>
                        {(expandedCard === item.id || !isMobile) && (
                          <p className="text-sm mt-2">{item.description}</p>
                        )}
                      </div>
                    </div>
                    <button
                      className="absolute top-4 right-4 p-2 bg-gray-800/50 rounded-full text-white hover:bg-gray-800 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCard(item.id);
                      }}
                      aria-label={expandedCard === item.id ? `Collapse ${item.name} details` : `Expand ${item.name} details`}
                    >
                      {expandedCard === item.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                  {isMobile && expandedCard === item.id && (
                    <div className="p-4 sm:p-6 bg-gray-50">
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">Category: {item.category.charAt(0).toUpperCase() + item.category.slice(1)} - {item.subcategory}</p>
                      <p className="text-sm text-gray-600">Materials: {item.materials}</p>
                      <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Load More Button */}
          {hasMoreItems && (
            <div className="text-center mt-12">
              <button
                onClick={loadMoreItems}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-amber-600 hover:to-yellow-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoustomPortfolio;