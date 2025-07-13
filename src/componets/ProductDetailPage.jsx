import React, { useState, useEffect, useRef } from 'react';
import {
    ChevronLeft, ChevronRight, ChevronDown, Star, Heart, Truck, Shield, Award, Play, Phone, Mail, MapPin, Package, Users, ArrowRight, Minus, Plus, Download, Share2, FileText, Camera, RotateCcw, Send, Clock, CheckCircle, X, Star as StarIcon, ZoomIn
} from 'lucide-react';

const ProductDetailPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedVariant, setSelectedVariant] = useState('18k-gold');
    const [quantity, setQuantity] = useState(100);
    const [activeTab, setActiveTab] = useState('description');
    const [isFavorite, setIsFavorite] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [showQuantityDropdown, setShowQuantityDropdown] = useState(false);
    const [showQuoteForm, setShowQuoteForm] = useState(false);
    const [viewMode, setViewMode] = useState('photos');
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const tabsRef = useRef(null);

    const productImages = [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601821765780-754fa98637c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ];

    const variants = [
        { id: '18k-gold', name: '18K Gold', color: '#FFD700', available: true, price: 2499 },
        { id: '14k-gold', name: '14K Gold', color: '#DAA520', available: true, price: 2299 },
        { id: 'platinum', name: 'Platinum', color: '#E5E4E2', available: true, price: 2899 },
        { id: 'white-gold', name: 'White Gold', color: '#F8F8FF', available: true, price: 2399 },
        { id: 'rose-gold', name: 'Rose Gold', color: '#E8B4A0', available: true, price: 2449 }
    ];

    const quantityOptions = [
        { label: '1-49 pieces', value: 25, tier: 'starter' },
        { label: '50-199 pieces', value: 100, tier: 'business' },
        { label: '200-499 pieces', value: 300, tier: 'wholesale' },
        { label: '500-999 pieces', value: 750, tier: 'distributor' },
        { label: '1000+ pieces', value: 1000, tier: 'manufacturer' }
    ];

    const pricingTiers = [
        { minQty: 1, maxQty: 49, price: 2499, unit: 'piece', discount: null, label: 'Retail' },
        { minQty: 50, maxQty: 199, price: 2299, unit: 'piece', discount: '8%', label: 'Business' },
        { minQty: 200, maxQty: 499, price: 1999, unit: 'piece', discount: '20%', label: 'Wholesale' },
        { minQty: 500, maxQty: 999, price: 1799, unit: 'piece', discount: '28%', label: 'Distributor' },
        { minQty: 1000, maxQty: null, price: 1599, unit: 'piece', discount: '36%', label: 'Manufacturer' }
    ];

    const specifications = {
        'Product Code': 'DER-18K-001',
        'Material': '18K Gold with VS1 Diamonds',
        'Weight': '3.2 grams',
        'Ring Size': '6 (Resizable)',
        'Dimensions': '12mm x 8mm x 2.5mm',
        'Stone Count': '24 diamonds',
        'Total Carat Weight': '0.75 ct',
        'Diamond Color': 'G-H',
        'Diamond Clarity': 'VS1-VS2',
        'Diamond Cut': 'Round Brilliant',
        'Setting Type': 'Prong Setting',
        'Finish': 'High Polish',
        'Hallmark': 'BIS Certified',
        'Origin': 'Jaipur, India',
        'Certification': 'GIA Certified',
        'Packaging': 'Luxury Gift Box',
        'Warranty': 'Lifetime Warranty'
    };

    const certifications = [
        { name: 'GIA Certified', icon: '💎', verified: true },
        { name: 'BIS Hallmark', icon: '🏆', verified: true },
        { name: 'Export Quality', icon: '🌍', verified: true },
        { name: 'Conflict Free', icon: '✨', verified: true }
    ];

    const tabData = [
        { id: 'description', label: 'Description', icon: FileText },
        { id: 'specifications', label: 'Specifications', icon: FileText },
        { id: 'certifications', label: 'Certifications', icon: Award },
        { id: 'packaging', label: 'Packaging', icon: Package },
        { id: 'shipping', label: 'Shipping', icon: Truck },
        { id: 'reviews', label: 'Reviews', icon: StarIcon }
    ];

    const [quoteForm, setQuoteForm] = useState({
        name: '',
        email: '',
        company: '',
        country: '',
        message: '',
        quantity: 100
    });

    useEffect(() => {
        setIsVisible(true);
        return () => {
            setShowQuoteForm(false);
            setShowQuantityDropdown(false);
            setIsImageModalOpen(false);
            setIsVideoModalOpen(false);
        };
    }, []);

    const getCurrentPrice = () => {
        const selectedVariantData = variants.find(v => v.id === selectedVariant);
        const basePrice = selectedVariantData ? selectedVariantData.price : 2499;
        const tier = pricingTiers.find(tier =>
            quantity >= tier.minQty && (tier.maxQty === null || quantity <= tier.maxQty)
        );
        return Math.round(basePrice * (tier ? tier.price / 2499 : 1));
    };

    const getCurrentDiscount = () => {
        const tier = pricingTiers.find(tier =>
            quantity >= tier.minQty && (tier.maxQty === null || quantity <= tier.maxQty)
        );
        return tier ? tier.discount : null;
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
    };

    const handleQuantityChange = (value) => {
        setQuantity(Math.max(1, Math.min(50000, value)));
    };

    const handleQuoteSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            alert('Quote request submitted successfully!');
            setShowQuoteForm(false);
            setQuoteForm({
                name: '',
                email: '',
                company: '',
                country: '',
                message: '',
                quantity: 100
            });
        }, 500);
    };

    const handleSampleOrder = () => {
        alert('Sample order request submitted!');
    };

    // Handle clicks outside modal to close
    const handleModalClose = (e, type) => {
        if (e.target === e.currentTarget) {
            if (type === 'image') setIsImageModalOpen(false);
            if (type === 'video') setIsVideoModalOpen(false);
            if (type === 'quote') setShowQuoteForm(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 relative">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center space-x-4 w-full sm:w-auto">
                            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Back">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <div>
                                <h1 className="text-lg sm:text-xl font-bold text-gray-900">Premium Diamond Eternity Ring</h1>
                                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600 mt-1">
                                    <span>SKU: DER-18K-001</span>
                                    <span className="hidden sm:inline">•</span>
                                    <span>Export Quality</span>
                                    <span className="hidden sm:inline">•</span>
                                    <span className="text-green-600 font-medium">In Stock</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Share">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setIsFavorite(!isFavorite)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                            >
                                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Quote Form Modal */}
            {showQuoteForm && (
                <div
                    className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center animate-slide-up"
                    onClick={(e) => handleModalClose(e, 'quote')}
                >
                    <div className="bg-white w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg sm:text-xl font-semibold">Request a Quote</h3>
                            <button
                                onClick={() => setShowQuoteForm(false)}
                                className="text-gray-600 hover:text-gray-800"
                                aria-label="Close quote form"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <form onSubmit={handleQuoteSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    value={quoteForm.name}
                                    onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    required
                                    aria-required="true"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={quoteForm.email}
                                    onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    required
                                    aria-required="true"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="company">Company</label>
                                <input
                                    id="company"
                                    type="text"
                                    value={quoteForm.company}
                                    onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="country">Country</label>
                                <input
                                    id="country"
                                    type="text"
                                    value={quoteForm.country}
                                    onChange={(e) => setQuoteForm({ ...quoteForm, country: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    required
                                    aria-required="true"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="quantity">Quantity</label>
                                <input
                                    id="quantity"
                                    type="number"
                                    value={quoteForm.quantity}
                                    onChange={(e) => setQuoteForm({ ...quoteForm, quantity: parseInt(e.target.value) || 1 })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    min="1"
                                    required
                                    aria-required="true"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    value={quoteForm.message}
                                    onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    rows="4"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2"
                            >
                                <Send className="w-5 h-5" />
                                <span>Submit Quote</span>
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Media Section */}
                    <div className={`w-full lg:w-1/2 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex flex-wrap gap-2 mb-4 bg-white rounded-lg p-1 shadow-sm">
                            <button
                                onClick={() => setViewMode('photos')}
                                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-all ${viewMode === 'photos' ? 'bg-amber-100 text-amber-800' : 'text-gray-600 hover:bg-gray-100'}`}
                                aria-label="View Photos"
                            >
                                <Camera className="w-4 h-4" />
                                <span>Photos</span>
                            </button>
                            <button
                                onClick={() => setViewMode('video')}
                                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-all ${viewMode === 'video' ? 'bg-amber-100 text-amber-800' : 'text-gray-600 hover:bg-gray-100'}`}
                                aria-label="View Video"
                            >
                                <Play className="w-4 h-4" />
                                <span>Video</span>
                            </button>
                            <button
                                onClick={() => setViewMode('360')}
                                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-all ${viewMode === '360' ? 'bg-amber-100 text-amber-800' : 'text-gray-600 hover:bg-gray-100'}`}
                                aria-label="View 360"
                            >
                                <RotateCcw className="w-4 h-4" />
                                <span>360°</span>
                            </button>
                        </div>

                        <div className="relative aspect-square bg-white rounded-xl overflow-hidden shadow-lg">
                            {viewMode === 'photos' && (
                                <img
                                    src={productImages[currentImageIndex]}
                                    alt={`Product Image ${currentImageIndex + 1}`}
                                    className="w-full h-full object-contain cursor-pointer"
                                    onClick={() => setIsImageModalOpen(true)}
                                    loading="lazy"
                                />
                            )}
                            {viewMode === 'video' && (
                                <div
                                    className="w-full h-full bg-black cursor-pointer"
                                    onClick={() => setIsVideoModalOpen(true)}
                                >
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
                                        title="Product Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </div>
                            )}
                            {viewMode === '360' && (
                                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
                                            <RotateCcw className="w-8 h-8 text-white" />
                                        </div>
                                        <p className="text-sm text-gray-600">Drag to rotate</p>
                                    </div>
                                </div>
                            )}

                            <div className="absolute top-2 left-2 flex flex-col gap-2">
                                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">Export Quality</span>
                                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">GIA Certified</span>
                            </div>

                            <div className="absolute top-2 right-2 flex flex-col gap-2">
                                {viewMode === 'photos' && (
                                    <button
                                        onClick={() => setIsImageModalOpen(true)}
                                        className="bg-white/90 rounded-full p-1.5 hover:bg-white transition-all"
                                        aria-label="Zoom Image"
                                    >
                                        <ZoomIn className="w-4 h-4 text-gray-600" />
                                    </button>
                                )}
                                <button
                                    className="bg-white/90 rounded-full p-1.5 hover:bg-white transition-all"
                                    aria-label="Download Image"
                                >
                                    <Download className="w-4 h-4 text-gray-600" />
                                </button>
                            </div>

                            {viewMode === 'photos' && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                                        aria-label="Previous Image"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                                        aria-label="Next Image"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </>
                            )}
                        </div>

                        {viewMode === 'photos' && (
                            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                                {productImages.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${currentImageIndex === index ? 'border-amber-500' : 'border-gray-200 hover:border-gray-300'}`}
                                        aria-label={`Select Image ${index + 1}`}
                                    >
                                        <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
                                    </button>
                                ))}
                            </div>
                        )}

                        <div className="mt-6 bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                            <h3 className="text-base sm:text-lg font-semibold mb-4">Certifications & Quality</h3>
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                                        <span className="text-xl sm:text-2xl">{cert.icon}</span>
                                        <div>
                                            <p className="text-xs sm:text-sm font-medium">{cert.name}</p>
                                            <p className="text-xs text-green-600">✓ Verified</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className={`w-full lg:w-1/2 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-3 sm:w-4 h-3 sm:h-4 ${i < 4 ? 'text-amber-400 fill-current' : 'text-gray-300'}`} />
                                        ))}
                                    </div>
                                    <span className="text-xs sm:text-sm text-gray-600">(4.8 · 127 reviews)</span>
                                </div>
                            </div>

                            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Premium Diamond Eternity Ring</h1>
                            <p className="text-sm text-gray-600 mb-4">Exquisite handcrafted jewelry featuring VS1 diamonds in premium gold setting.</p>

                            <div className="mb-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-xl sm:text-2xl font-bold text-gray-900">${getCurrentPrice().toLocaleString()}</span>
                                    {getCurrentDiscount() && (
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Save {getCurrentDiscount()}</span>
                                    )}
                                    <span className="text-xs sm:text-sm text-gray-500">per piece</span>
                                </div>
                                <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                                    <span>MOQ: 1 piece</span>
                                    <span className="hidden sm:inline">•</span>
                                    <span>FOB Price: Jaipur, India</span>
                                    <span className="hidden sm:inline">•</span>
                                    <span className="text-green-600">✓ Export Ready</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-semibold mb-2">Volume Pricing</h3>
                                <div className="space-y-2">
                                    {pricingTiers.map((tier, index) => (
                                        <div key={index} className={`flex items-center justify-between p-2 rounded-lg border ${quantity >= tier.minQty && (tier.maxQty === null || quantity <= tier.maxQty) ? 'border-amber-200 bg-amber-50' : 'border-gray-200'}`}>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs sm:text-sm font-medium">{tier.minQty}{tier.maxQty ? `-${tier.maxQty}` : '+'} pieces</span>
                                                <span className="text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-full">{tier.label}</span>
                                                {tier.discount && (
                                                    <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded-full">{tier.discount} OFF</span>
                                                )}
                                            </div>
                                            <div className="text-right">
                                                <span className="text-sm font-semibold">${tier.price.toLocaleString()}</span>
                                                <p className="text-xs text-gray-500">per piece</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-semibold mb-2">Material Options</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {variants.map((variant) => (
                                        <button
                                            key={variant.id}
                                            onClick={() => setSelectedVariant(variant.id)}
                                            className={`p-2 rounded-lg border text-left ${selectedVariant === variant.id ? 'border-amber-500 bg-amber-50' : 'border-gray-200 hover:border-gray-300'}`}
                                            aria-label={`Select ${variant.name}`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: variant.color }} />
                                                    <span className="text-xs sm:text-sm font-medium">{variant.name}</span>
                                                </div>
                                                <span className="text-xs font-semibold">${variant.price}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="quantity-select">Quantity</label>
                                <div className="relative">
                                    <button
                                        onClick={() => setShowQuantityDropdown(!showQuantityDropdown)}
                                        className="w-full flex items-center justify-between p-2 border border-gray-300 rounded-lg hover:border-gray-400"
                                        aria-label="Select Quantity"
                                    >
                                        <span className="text-sm">{quantity.toLocaleString()} pieces</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${showQuantityDropdown ? 'rotate-180' : ''}`} />
                                    </button>
                                    {showQuantityDropdown && (
                                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                            <div className="p-2 border-b border-gray-200">
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Quick Select</label>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {quantityOptions.map((option) => (
                                                        <button
                                                            key={option.value}
                                                            onClick={() => {
                                                                setQuantity(option.value);
                                                                setShowQuantityDropdown(false);
                                                            }}
                                                            className="p-1.5 text-left hover:bg-gray-50 rounded text-xs"
                                                            aria-label={`Select ${option.label}`}
                                                        >
                                                            {option.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="p-2">
                                                <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="custom-quantity">Custom Quantity</label>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => handleQuantityChange(quantity - 10)}
                                                        className="p-1.5 hover:bg-gray-100 rounded"
                                                        aria-label="Decrease Quantity"
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <input
                                                        id="custom-quantity"
                                                        type="number"
                                                        value={quantity}
                                                        onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                                                        className="flex-1 text-center border border-gray-300 rounded px-2 py-1 text-sm"
                                                        min="1"
                                                        max="50000"
                                                        aria-required="true"
                                                    />
                                                    <button
                                                        onClick={() => handleQuantityChange(quantity + 10)}
                                                        className="p-1.5 hover:bg-gray-100 rounded"
                                                        aria-label="Increase Quantity"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-2 text-sm text-gray-600">
                                    Total Value: <span className="font-semibold text-gray-900">${(getCurrentPrice() * quantity).toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleSampleOrder}
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                                    aria-label="Order Sample"
                                >
                                    <Package className="w-5 h-5" />
                                    <span>Order Sample ($99)</span>
                                </button>
                                <button
                                    onClick={() => setShowQuoteForm(true)}
                                    className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2"
                                    aria-label="Request Quote"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Request Quote</span>
                                </button>
                            </div>

                            <div className="border-t border-gray-200 pt-4 mt-4">
                                <h3 className="text-base sm:text-lg font-semibold mb-3">Supplier Information</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-gray-600">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-sm">Jaipur, India</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-600">
                                        <Phone className="w-4 h-4" />
                                        <span className="text-sm">+91 123 456 7890</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-600">
                                        <Mail className="w-4 h-4" />
                                        <span className="text-sm">contact@jewelryexport.com</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span className="text-sm">Verified Supplier (Since 2010)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="mt-6 bg-white rounded-xl shadow-lg">
                    <div
                        ref={tabsRef}
                        className="flex border-b border-gray-200 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                    >
                        {tabData.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 px-4 py-3 text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${activeTab === tab.id ? 'border-b-2 border-amber-500 text-amber-600' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
                                aria-label={`View ${tab.label}`}
                            >
                                <tab.icon className="w-4 h-4" />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    <div className="p-4 sm:p-6">
                        {activeTab === 'description' && (
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold mb-3">Product Description</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    The Premium Diamond Eternity Ring is a masterpiece of craftsmanship, featuring 24 VS1 diamonds set in a luxurious 18K gold band. Handcrafted in Jaipur, India, this ring combines traditional artistry with modern precision.
                                </p>
                                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span>Handcrafted with precision</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span>24 VS1 diamonds for maximum brilliance</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span>Available in multiple material options</span>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {activeTab === 'specifications' && (
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold mb-3">Product Specifications</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {Object.entries(specifications).map(([key, value]) => (
                                        <div key={key} className="flex justify-between p-2 bg-gray-50 rounded-lg">
                                            <span className="text-xs sm:text-sm font-medium text-gray-700">{key}</span>
                                            <span className="text-xs sm:text-sm text-gray-600">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'certifications' && (
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold mb-3">Certifications</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                                            <span className="text-xl">{cert.icon}</span>
                                            <div>
                                                <p className="text-xs sm:text-sm font-medium">{cert.name}</p>
                                                <p className="text-xs text-green-600">✓ Verified</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'packaging' && (
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold mb-3">Packaging Details</h3>
                                <p className="text-sm text-gray-600 mb-3">Each ring is elegantly packaged in a luxury gift box, designed to enhance the unboxing experience.</p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center space-x-2">
                                        <Package className="w-4 h-4 text-amber-500" />
                                        <span>Velvet-lined jewelry box</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <Package className="w-4 h-4 text-amber-500" />
                                        <span>Protective outer carton</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <Package className="w-4 h-4 text-amber-500" />
                                        <span>Certificate of authenticity</span>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {activeTab === 'shipping' && (
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold mb-3">Shipping Information</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                                        <Truck className="w-4 h-4 text-amber-500" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-medium">Worldwide Shipping</p>
                                            <p className="text-xs text-gray-600">Available to over 150 countries</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                                        <Clock className="w-4 h-4 text-amber-500" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-medium">Estimated Delivery</p>
                                            <p className="text-xs text-gray-600">5-7 business days</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                                        <Shield className="w-4 h-4 text-amber-500" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-medium">Insured Shipping</p>
                                            <p className="text-xs text-gray-600">Full insurance for all shipments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold mb-3">Customer Reviews</h3>
                                <div className="space-y-3">
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Users className="w-4 h-4 text-amber-500" />
                                            <span className="text-sm font-medium">Sarah M.</span>
                                            <span className="text-xs text-gray-500">• Verified Buyer</span>
                                        </div>
                                        <div className="flex items-center space-x-1 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-3 h-3 ${i < 5 ? 'text-amber-400 fill-current' : 'text-gray-300'}`} />
                                            ))}
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600">Absolutely stunning ring! The diamonds sparkle beautifully.</p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Users className="w-4 h-4 text-amber-500" />
                                            <span className="text-sm font-medium">James L.</span>
                                            <span className="text-xs text-gray-500">• Verified Buyer</span>
                                        </div>
                                        <div className="flex items-center space-x-1 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-3 h-3 ${i < 4 ? 'text-amber-400 fill-current' : 'text-gray-300'}`} />
                                            ))}
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600">Great quality and fast shipping.</p>
                                    </div>
                                    <button className="mt-3 text-amber-600 text-sm font-medium hover:underline flex items-center space-x-1">
                                        <span>Show All Reviews</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Image Modal */}
                {isImageModalOpen && (
                    <div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in"
                        onClick={(e) => handleModalClose(e, 'image')}
                    >
                        <div className="relative w-full max-w-4xl mx-4 sm:mx-6">
                            <button
                                onClick={() => setIsImageModalOpen(false)}
                                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-all"
                                aria-label="Close Image Modal"
                            >
                                <X className="w-5 h-5 text-gray-600" />
                            </button>
                            <div className="relative overflow-hidden rounded-lg">
                                <img
                                    src={productImages[currentImageIndex]}
                                    alt={`Product Image ${currentImageIndex + 1}`}
                                    className="w-full h-auto max-h-[80vh] object-contain"
                                    style={{ touchAction: 'pinch-zoom' }}
                                    loading="lazy"
                                />
                                <button
                                    onClick={prevImage}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                                    aria-label="Previous Image"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                                    aria-label="Next Image"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="flex gap-2 mt-4 justify-center overflow-x-auto">
                                {productImages.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${currentImageIndex === index ? 'border-amber-500' : 'border-gray-200 hover:border-gray-300'}`}
                                        aria-label={`Select Image ${index + 1}`}
                                    >
                                        <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Video Modal */}
                {isVideoModalOpen && (
                    <div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in"
                        onClick={(e) => handleModalClose(e, 'video')}
                    >
                        <div className="relative w-full max-w-4xl mx-4 sm:mx-6">
                            <button
                                onClick={() => setIsVideoModalOpen(false)}
                                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-all"
                                aria-label="Close Video Modal"
                            >
                                <X className="w-5 h-5 text-gray-600" />
                            </button>
                            <div className="relative overflow-hidden rounded-lg aspect-video">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Product Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Custom CSS */}
            <style jsx>{`
                @keyframes slide-up {
                    from {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                .animate-slide-up {
                    animation: slide-up 0.3s ease-out;
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
                .scrollbar-thin {
                    scrollbar-width: thin;
                    scrollbar-color: #d1d5db #f3f4f6;
                }
                .scrollbar-thin::-webkit-scrollbar {
                    height: 8px;
                }
                .scrollbar-thin::-webkit-scrollbar-track {
                    background: #f3f4f6;
                    border-radius: 4px;
                }
                .scrollbar-thin::-webkit-scrollbar-thumb {
                    background: #d1d5db;
                    border-radius: 4px;
                }
                .scrollbar-thin::-webkit-scrollbar-thumb:hover {
                    background: #9ca3af;
                }
                @media (max-width: 640px) {
                    .scrollbar-thin {
                        -webkit-overflow-scrolling: touch;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProductDetailPage;