import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { 
  ChevronDown, 
  Filter, 
  Search, 
  Heart, 
  ShoppingBag, 
  Star, 
  ArrowRight,
  X,
  Grid3X3,
  List,
  SlidersHorizontal,
  RefreshCw,
  Eye // Added missing Eye icon import
} from 'lucide-react';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-20">
          <h3 className="text-xl font-medium text-gray-900 mb-2">Something went wrong</h3>
          <p className="text-gray-500">Please try refreshing the page</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedBadges, setSelectedBadges] = useState([]);
  const searchRef = useRef(null);

  const productsPerPage = 12;

  const allProducts = useMemo(() => [
    {
      id: 1,
      name: "Diamond Eternity Ring",
      category: "rings",
      price: 2499,
      originalPrice: 3199,
      badge: "Best Seller",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 127,
      description: "Elegant eternity ring with brilliant diamonds",
      tags: ["diamond", "wedding", "luxury"]
    },
    {
      id: 2,
      name: "Gold Pearl Necklace",
      category: "necklaces",
      price: 1899,
      originalPrice: 2299,
      badge: "Premium",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 89,
      description: "Lustrous pearl necklace in 18k gold",
      tags: ["pearl", "gold", "elegant"]
    },
    {
      id: 3,
      name: "Emerald Drop Earrings",
      category: "earrings",
      price: 3299,
      originalPrice: 4199,
      badge: "Exclusive",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 156,
      description: "Stunning emerald earrings with diamond accents",
      tags: ["emerald", "diamond", "luxury"]
    },
    {
      id: 4,
      name: "Sapphire Tennis Bracelet",
      category: "bracelets",
      price: 4599,
      originalPrice: 5799,
      badge: "New Arrival",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      reviews: 203,
      description: "Exquisite sapphire tennis bracelet",
      tags: ["sapphire", "tennis", "luxury"]
    },
    {
      id: 5,
      name: "Ruby Heart Pendant",
      category: "pendants",
      price: 1299,
      originalPrice: 1699,
      badge: "Hot Deal",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 94,
      description: "Romantic ruby heart pendant",
      tags: ["ruby", "heart", "romantic"]
    },
    {
      id: 6,
      name: "Diamond Stud Earrings",
      category: "earrings",
      price: 2199,
      originalPrice: 2799,
      badge: "Classic",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 178,
      description: "Timeless diamond stud earrings",
      tags: ["diamond", "classic", "everyday"]
    },
    {
      id: 7,
      name: "Platinum Wedding Band",
      category: "rings",
      price: 1799,
      originalPrice: 2199,
      badge: "Trending",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 112,
      description: "Premium platinum wedding band",
      tags: ["platinum", "wedding", "band"]
    },
    {
      id: 8,
      name: "Amethyst Cocktail Ring",
      category: "rings",
      price: 999,
      originalPrice: 1299,
      badge: "Limited",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 67,
      description: "Bold amethyst cocktail ring",
      tags: ["amethyst", "cocktail", "statement"]
    },
    {
      id: 9,
      name: "Diamond Tennis Necklace",
      category: "necklaces",
      price: 5999,
      originalPrice: 7299,
      badge: "Luxury",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 234,
      description: "Spectacular diamond tennis necklace",
      tags: ["diamond", "tennis", "luxury"]
    },
    {
      id: 10,
      name: "Rose Gold Charm Bracelet",
      category: "bracelets",
      price: 899,
      originalPrice: 1199,
      badge: "Popular",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      reviews: 145,
      description: "Delicate rose gold charm bracelet",
      tags: ["rose-gold", "charm", "delicate"]
    },
    {
      id: 11,
      name: "Tanzanite Halo Ring",
      category: "rings",
      price: 3899,
      originalPrice: 4699,
      badge: "Rare",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 78,
      description: "Rare tanzanite ring with diamond halo",
      tags: ["tanzanite", "halo", "rare"]
    },
    {
      id: 12,
      name: "Pearl Drop Earrings",
      category: "earrings",
      price: 1599,
      originalPrice: 1999,
      badge: "Elegant",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 123,
      description: "Elegant pearl drop earrings",
      tags: ["pearl", "drop", "elegant"]
    },
    {
      id: 13,
      name: "Citrine Statement Necklace",
      category: "necklaces",
      price: 2299,
      originalPrice: 2899,
      badge: "Bold",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      reviews: 89,
      description: "Bold citrine statement necklace",
      tags: ["citrine", "statement", "bold"]
    },
    {
      id: 14,
      name: "White Gold Chain Bracelet",
      category: "bracelets",
      price: 1199,
      originalPrice: 1499,
      badge: "Minimalist",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      reviews: 156,
      description: "Minimalist white gold chain bracelet",
      tags: ["white-gold", "chain", "minimalist"]
    },
    {
      id: 15,
      name: "Moonstone Pendant",
      category: "pendants",
      price: 799,
      originalPrice: 999,
      badge: "Mystical",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.4,
      reviews: 67,
      description: "Mystical moonstone pendant",
      tags: ["moonstone", "mystical", "pendant"]
    },
    {
      id: 16,
      name: "Garnet Cluster Earrings",
      category: "earrings",
      price: 1399,
      originalPrice: 1799,
      badge: "Vintage",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 91,
      description: "Vintage-inspired garnet cluster earrings",
      tags: ["garnet", "cluster", "vintage"]
    },
    {
      id: 17,
      name: "Opal Infinity Ring",
      category: "rings",
      price: 1899,
      originalPrice: 2399,
      badge: "Symbolic",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 134,
      description: "Symbolic opal infinity ring",
      tags: ["opal", "infinity", "symbolic"]
    },
    {
      id: 18,
      name: "Turquoise Bead Necklace",
      category: "necklaces",
      price: 699,
      originalPrice: 899,
      badge: "Bohemian",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.3,
      reviews: 78,
      description: "Bohemian turquoise bead necklace",
      tags: ["turquoise", "bead", "bohemian"]
    },
    {
      id: 19,
      name: "Silver Cuff Bracelet",
      category: "bracelets",
      price: 599,
      originalPrice: 799,
      badge: "Modern",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      reviews: 112,
      description: "Modern silver cuff bracelet",
      tags: ["silver", "cuff", "modern"]
    },
    {
      id: 20,
      name: "Jade Butterfly Pendant",
      category: "pendants",
      price: 1099,
      originalPrice: 1399,
      badge: "Artistic",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      reviews: 89,
      description: "Artistic jade butterfly pendant",
      tags: ["jade", "butterfly", "artistic"]
    }
  ], []);

  const categories = useMemo(() => [
    { id: 'all', name: 'All Products', count: allProducts.length },
    { id: 'rings', name: 'Rings', count: allProducts.filter(p => p.category === 'rings').length },
    { id: 'necklaces', name: 'Necklaces', count: allProducts.filter(p => p.category === 'necklaces').length },
    { id: 'earrings', name: 'Earrings', count: allProducts.filter(p => p.category === 'earrings').length },
    { id: 'bracelets', name: 'Bracelets', count: allProducts.filter(p => p.category === 'bracelets').length },
    { id: 'pendants', name: 'Pendants', count: allProducts.filter(p => p.category === 'pendants').length }
  ], [allProducts]);

  const sortOptions = useMemo(() => [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' },
    { value: 'popular', label: 'Most Popular' }
  ], []);

  const badges = useMemo(() => [
    'Best Seller', 'Premium', 'Exclusive', 'New Arrival', 
    'Hot Deal', 'Classic', 'Trending', 'Limited'
  ], []);

  // Initialize products
  useEffect(() => {
    setProducts(allProducts);
    setFilteredProducts(allProducts);
    setDisplayedProducts(allProducts.slice(0, productsPerPage));
  }, [allProducts]);

  // Search suggestions
  const getSearchSuggestions = useCallback((term) => {
    if (!term) return [];
    const lowerTerm = term.toLowerCase();
    const uniqueSuggestions = new Set();
    
    allProducts.forEach(product => {
      if (product.name.toLowerCase().includes(lowerTerm)) {
        uniqueSuggestions.add(product.name);
      }
      product.tags.forEach(tag => {
        if (tag.toLowerCase().includes(lowerTerm)) {
          uniqueSuggestions.add(tag);
        }
      });
    });
    
    return Array.from(uniqueSuggestions).slice(0, 5);
  }, [allProducts]);

  useEffect(() => {
    setSearchSuggestions(getSearchSuggestions(searchTerm));
  }, [searchTerm, getSearchSuggestions]);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (selectedRating > 0) {
      filtered = filtered.filter(product => product.rating >= selectedRating);
    }

    if (selectedBadges.length > 0) {
      filtered = filtered.filter(product => selectedBadges.includes(product.badge));
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return filtered;
  }, [products, searchTerm, selectedCategory, priceRange, sortBy, selectedRating, selectedBadges]);

  useEffect(() => {
    setFilteredProducts(filteredAndSortedProducts);
    setDisplayedProducts(filteredAndSortedProducts.slice(0, productsPerPage));
    setCurrentPage(1);
  }, [filteredAndSortedProducts]);

  const loadMoreProducts = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const startIndex = (nextPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const newProducts = filteredProducts.slice(startIndex, endIndex);
      
      setDisplayedProducts(prev => [...prev, ...newProducts]);
      setCurrentPage(nextPage);
      setIsLoading(false);
    }, 800);
  }, [currentPage, filteredProducts]);

  const toggleFavorite = useCallback((productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  }, []);

  const toggleBadge = useCallback((badge) => {
    setSelectedBadges(prev => 
      prev.includes(badge) 
        ? prev.filter(b => b !== badge)
        : [...prev, badge]
    );
  }, []);

  const clearAllFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedCategory('all');
    setPriceRange([0, 10000]);
    setSelectedRating(0);
    setSelectedBadges([]);
    setSortBy('featured');
  }, []);

  const getBadgeAccent = useMemo(() => {
    const badgeColors = {
      'Best Seller': 'border-amber-200 text-amber-700 bg-amber-50',
      'Premium': 'border-purple-200 text-purple-700 bg-purple-50',
      'Exclusive': 'border-blue-200 text-blue-700 bg-blue-50',
      'New Arrival': 'border-emerald-200 text-emerald-700 bg-emerald-50',
      'Hot Deal': 'border-red-200 text-red-700 bg-red-50',
      'Classic': 'border-gray-200 text-gray-700 bg-gray-50',
      'Trending': 'border-cyan-200 text-cyan-700 bg-cyan-50',
      'Limited': 'border-violet-200 text-violet-700 bg-violet-50'
    };
    return (badge) => badgeColors[badge] || 'border-amber-200 text-amber-700 bg-amber-50';
  }, []);

  const handlePriceRangeChange = useCallback((index, value) => {
    const newValue = Math.max(0, Math.min(10000, parseInt(value) || 0));
    const newRange = [...priceRange];
    
    if (index === 0) {
      newRange[0] = Math.min(newValue, priceRange[1] - 100);
    } else {
      newRange[1] = Math.max(newValue, priceRange[0] + 100);
    }
    
    setPriceRange(newRange);
  }, [priceRange]);

  const hasMoreProducts = displayedProducts.length < filteredProducts.length;

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-amber-100/30 to-orange-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Sticky Header */}
          <div className="sticky top-0 z-30 bg-white shadow-md border-b border-gray-200 mb-8">
            <div className="py-6 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <h1 className="text-3xl font-serif text-gray-900">
                  Premium Jewelry Collection
                </h1>

                <div className="flex items-center space-x-4">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      ref={searchRef}
                      type="text"
                      placeholder="Search jewelry..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      aria-label="Search jewelry"
                    />
                    {searchSuggestions.length > 0 && searchTerm && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                        {searchSuggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSearchTerm(suggestion);
                              setSearchSuggestions([]);
                            }}
                            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                            aria-label={`Search for ${suggestion}`}
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`hidden lg:block p-2 rounded-lg transition-all duration-200 ${
                        viewMode === 'grid' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      aria-label="Grid view"
                    >
                      <Grid3X3 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`hidden lg:block p-2 rounded-lg transition-all duration-200 ${
                        viewMode === 'list' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      aria-label="List view"
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>

                  <button
                    onClick={() => setShowFilters(true)}
                    className="flex items-center space-x-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
                    aria-label="Open filters"
                  >
                    <SlidersHorizontal className="w-5 h-5" />
                    <span>Filters</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div
              className={`fixed inset-0 z-50 bg-white lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:w-64 flex-shrink-0 transition-all duration-500 ease-in-out transform ${
                showFilters ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 lg:translate-y-0 lg:opacity-100'
              } lg:block overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100`}
            >
              <div className="lg:bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-6 sticky top-0 bg-white z-10 py-4 lg:static">
                  <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={clearAllFilters}
                      className="text-sm text-gray-500 hover:text-gray-700"
                      aria-label="Clear all filters"
                    >
                      Clear All
                    </button>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="lg:hidden p-1 hover:bg-gray-100 rounded"
                      aria-label="Close filters"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Categories */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">Categories</h4>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      aria-label="Select category"
                    >
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">Price Range</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">${priceRange[0].toLocaleString()}</span>
                        <span className="text-sm text-gray-600">${priceRange[1].toLocaleString()}</span>
                      </div>
                      <div className="relative">
                        <div className="h-2 bg-gray-200 rounded-lg">
                          <div
                            className="absolute h-2 bg-amber-500 rounded-lg"
                            style={{
                              left: `${(priceRange[0] / 10000) * 100}%`,
                              width: `${((priceRange[1] - priceRange[0]) / 10000) * 100}%`
                            }}
                          />
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="10000"
                          step="100"
                          value={priceRange[0]}
                          onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                          className="w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer absolute top-0"
                          aria-label="Minimum price"
                        />
                        <input
                          type="range"
                          min="0"
                          max="10000"
                          step="100"
                          value={priceRange[1]}
                          onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                          className="w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer absolute top-0"
                          aria-label="Maximum price"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="number"
                          placeholder="Min"
                          value={priceRange[0]}
                          onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                          className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          aria-label="Minimum price input"
                        />
                        <input
                          type="number"
                          placeholder="Max"
                          value={priceRange[1]}
                          onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                          className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          aria-label="Maximum price input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Rating Filter */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">Minimum Rating</h4>
                    <div className="space-y-2">
                      {[0, 4, 4.5, 4.8].map(rating => (
                        <button
                          key={rating}
                          onClick={() => setSelectedRating(rating)}
                          className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                            selectedRating === rating
                              ? 'bg-amber-50 text-amber-700 border border-amber-200'
                              : 'hover:bg-gray-50 text-gray-700'
                          }`}
                          aria-label={`Filter by ${rating === 0 ? 'All Ratings' : `${rating}+ Stars`}`}
                        >
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                              {[1, 2, 3, 4, 5].map(star => (
                                <Star
                                  key={star}
                                  className={`w-4 h-4 ${
                                    star <= (rating || 0) ? 'text-amber-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm">
                              {rating === 0 ? 'All Ratings' : `${rating}+ Stars`}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Badges Filter */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">Badges</h4>
                    <div className="flex flex-wrap gap-2">
                      {badges.map(badge => (
                        <button
                          key={badge}
                          onClick={() => toggleBadge(badge)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                            selectedBadges.includes(badge)
                              ? getBadgeAccent(badge)
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                          aria-label={`Filter by ${badge}`}
                        >
                          {badge}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort Options */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">Sort By</h4>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      aria-label="Sort products"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="sticky bottom-0 bg-white p-4 border-t border-gray-200 lg:hidden">
                  <button
                    onClick={() => setShowFilters(false)}
                    className="w-full px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
                    aria-label="Apply filters"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    {filteredProducts.length} Products Found
                  </h2>
                  <p className="text-sm text-gray-500">
                    Showing {displayedProducts.length} of {filteredProducts.length} products
                  </p>
                </div>

                {(searchTerm || selectedCategory !== 'all' || selectedRating > 0 || selectedBadges.length > 0) && (
                  <div className="flex flex-wrap gap-2 mt-4 sm:mt-0">
                    {searchTerm && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        Search: {searchTerm}
                        <button
                          onClick={() => setSearchTerm('')}
                          className="ml-1 hover:text-amber-900"
                          aria-label="Clear search filter"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    {selectedCategory !== 'all' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {categories.find(c => c.id === selectedCategory)?.name}
                        <button
                          onClick={() => setSelectedCategory('all')}
                          className="ml-1 hover:text-blue-900"
                          aria-label="Clear category filter"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    {selectedRating > 0 && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {selectedRating}+ Stars
                        <button
                          onClick={() => setSelectedRating(0)}
                          className="ml-1 hover:text-green-900"
                          aria-label="Clear rating filter"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    {selectedBadges.map(badge => (
                      <span key={badge} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        {badge}
                        <button
                          onClick={() => toggleBadge(badge)}
                          className="ml-1 hover:text-purple-900"
                          aria-label={`Clear ${badge} filter`}
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="transition-all duration-1000">
                {isLoading && displayedProducts.length === 0 ? (
                  <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {[...Array(productsPerPage)].map((_, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-md animate-pulse">
                        <div className="aspect-square bg-gray-200 rounded-t-xl"></div>
                        <div className="p-4 space-y-3">
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : displayedProducts.length > 0 ? (
                  <div className={`grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${
                    viewMode === 'list' && window.innerWidth >= 1024 ? 'lg:grid-cols-1' : ''
                  }`}>
                    {displayedProducts.map((product, index) => (
                      <div
                        key={product.id}
                        onMouseEnter={() => setHoveredCard(product.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`group relative bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl ${
                          hoveredCard === product.id ? 'transform -translate-y-2' : ''
                        } ${viewMode === 'list' && window.innerWidth >= 1024 ? 'flex' : ''}`}
                        style={{
                          animation: `fadeInUp 0.5s ease-out ${index * 100}ms both`
                        }}
                      >
                        <div className={`relative bg-gray-200 overflow-hidden ${
                          viewMode === 'list' && window.innerWidth >= 1024 ? 'w-64 h-64' : 'aspect-square'
                        }`}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                            onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${getBadgeAccent(product.badge)}`}>
                            {product.badge}
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(product.id);
                            }}
                            className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:bg-white ${
                              favorites.has(product.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                            }`}
                            aria-label={favorites.has(product.id) ? 'Remove from favorites' : 'Add to favorites'}
                          >
                            <Heart className={`w-4 h-4 ${favorites.has(product.id) ? 'fill-current' : ''}`} />
                          </button>
                          <div className={`absolute bottom-3 left-3 right-3 flex items-center justify-between transition-all duration-300 ${
                            hoveredCard === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}>
                            <button className="bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-2 group/btn">
                              <Eye className="w-4 h-4" />
                              <span className="hidden sm:inline">Quick View</span>
                            </button>
                            <button className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-200 shadow-md hover:shadow-lg">
                              <ShoppingBag className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className={`p-4 ${viewMode === 'list' && window.innerWidth >= 1024 ? 'flex-1' : ''}`}>
                          <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                            {product.category}
                          </div>
                          <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2">
                            {product.name}
                          </h3>
                          {(viewMode === 'list' && window.innerWidth >= 1024) && (
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {product.description}
                            </p>
                          )}
                          <div className="flex items-center space-x-1 mb-3">
                            <div className="flex items-center space-x-1">
                              {[1, 2, 3, 4, 5].map(star => (
                                <Star
                                  key={star}
                                  className={`w-3 h-3 ${
                                    star <= product.rating ? 'text-amber-400 fill-current' : 'text-gray-300'
                                  }`}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-600 font-medium">{product.rating}</span>
                            <span className="text-xs text-gray-400">({product.reviews} reviews)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-col space-y-1">
                              <span className="text-lg font-semibold text-gray-900">
                                ${product.price.toLocaleString()}
                              </span>
                              <span className="text-sm text-gray-400 line-through">
                                ${product.originalPrice.toLocaleString()}
                              </span>
                            </div>
                            <div className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-full">
                              Save ${(product.originalPrice - product.price).toLocaleString()}
                            </div>
                          </div>
                          {(viewMode === 'list' && window.innerWidth >= 1024) && (
                            <div className="flex flex-wrap gap-1 mt-3">
                              {product.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                    <p className="text-gray-500 mb-6">Try adjusting your filters or search terms</p>
                    <button
                      onClick={clearAllFilters}
                      className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
                      aria-label="Clear all filters"
                    >
                      <RefreshCw className="w-5 h-5 mr-2" />
                      Clear All Filters
                    </button>
                  </div>
                )}
              </div>

              {hasMoreProducts && displayedProducts.length > 0 && (
                <div className="text-center mt-12">
                  <button
                    onClick={loadMoreProducts}
                    disabled={isLoading}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Load more products"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                        Loading...
                      </>
                    ) : (
                      <>
                        <span>Load More Products</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                  <p className="text-sm text-gray-500 mt-3">
                    Showing {displayedProducts.length} of {filteredProducts.length} products
                  </p>
                </div>
              )}
            </div>
          </div>

          {showFilters && (
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setShowFilters(false)}
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ProductsPage;