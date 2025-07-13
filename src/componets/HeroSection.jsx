import React, { useState, useEffect } from 'react';
import { ChevronDown, Star, Globe, Award, Sparkles, Play, ArrowRight, Diamond, Crown, Gem, MapPin, Users, TrendingUp, Shield } from 'lucide-react';

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const features = [
        "Premium Craftsmanship",
        "Global Export Excellence",
        "Certified Authenticity",
        "Bespoke Collections"
    ];

    const stats = [
        { number: "25+", label: "Years Experience", icon: Award },
        { number: "50+", label: "Countries Served", icon: Globe },
        { number: "10K+", label: "Happy Clients", icon: Users },
        { number: "99%", label: "Customer Satisfaction", icon: Star }
    ];

    const exportHighlights = [
        { icon: Globe, title: "Worldwide Shipping", desc: "Direct export to 50+ countries" },
        { icon: Shield, title: "Quality Assurance", desc: "International certifications" },
        { icon: TrendingUp, title: "Bulk Orders", desc: "Competitive wholesale pricing" },
        { icon: MapPin, title: "Trade Shows", desc: "Global jewelry exhibitions" }
    ];

    const jewelryImages = [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ];

    useEffect(() => {
        setIsVisible(true);

        // Check if mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % features.length);
        }, 3000);

        const imageInterval = setInterval(() => {
            setActiveImageIndex((prev) => (prev + 1) % jewelryImages.length);
        }, 4000);

        return () => {
            clearInterval(interval);
            clearInterval(imageInterval);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-48 h-48 lg:w-80 lg:h-80 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/3 w-40 h-40 lg:w-72 lg:h-72 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse delay-2000"></div>
            </div>

            {/* Floating Jewelry Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(isMobile ? 8 : 12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-float opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${4 + Math.random() * 3}s`
                        }}
                    >
                        <Diamond className="w-2 h-2 md:w-3 md:h-3 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
                    </div>
                ))}
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 min-h-screen">
                {/* Mobile Layout */}
                <div className="lg:hidden">
                    <div className="px-4 py-8 min-h-screen flex flex-col">
                        <div className={`flex-1 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>

                            {/* Mobile Main Content */}
                            <div className="mb-8">
                                <h1 className="text-3xl md:text-4xl font-extralight text-gray-900 leading-tight mb-4">
                                    Exquisite{" "}
                                    <span className="text-4xl md:text-5xl font-thin text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 animate-shimmer">
                                        JEWELRY
                                    </span>
                                </h1>
                                <div className="flex items-center space-x-2 mt-4">
                                    <div className="h-0.5 w-16 bg-gradient-to-r from-amber-500 to-yellow-500"></div>
                                    <span className="text-lg text-gray-600">for Global Markets</span>
                                </div>
                            </div>

                            {/* Mobile Description */}
                            <div className="mb-8">
                                <p className="text-lg text-gray-700 leading-relaxed font-light text-left mb-6">
                                    Discover our premium collection of fine jewelry, meticulously crafted for discerning clients worldwide.
                                </p>

                                {/* Mobile Dynamic Features */}
                                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-amber-200/30 shadow-lg">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
                                            <Sparkles className="w-5 h-5 text-white animate-pulse" />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-semibold text-gray-800 text-left">
                                                {features[currentSlide]}
                                            </h3>
                                            <p className="text-sm text-gray-600 text-left">Excellence in every detail</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Action Buttons - Single Row */}
                            <div className="flex gap-3 mb-8">
                                <button className="flex-1 group px-4 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-semibold hover:from-amber-700 hover:to-yellow-700 transition duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 rounded-lg">
                                    <span className="flex items-center justify-center text-sm">
                                        <Globe className="w-4 h-4 mr-2" />
                                        Export Catalog
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>

                                <button className="flex-1 group px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-amber-300 text-amber-700 font-semibold hover:border-amber-500 hover:bg-amber-50 transition duration-300 transform hover:-translate-y-1 rounded-lg shadow-lg">
                                    <span className="flex items-center justify-center text-sm">
                                        <Play className="w-4 h-4 mr-2" />
                                        Watch Process
                                    </span>
                                </button>
                            </div>

                            {/* Mobile Image Section */}
                            <div className="mb-8">
                                <div className="aspect-square relative group overflow-hidden rounded-2xl shadow-2xl">
                                    <img
                                        src={jewelryImages[activeImageIndex]}
                                        alt="Premium Jewelry Collection"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                                            <h3 className="font-semibold text-gray-800 text-sm mb-1 text-left">Featured Collection</h3>
                                            <p className="text-xs text-gray-600 text-left">Handcrafted with precision</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile Thumbnail Gallery */}
                                <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                                    {jewelryImages.map((img, index) => (
                                        <div
                                            key={index}
                                            className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${index === activeImageIndex ? 'ring-2 ring-amber-500 scale-110' : 'opacity-60'}`}
                                            onClick={() => setActiveImageIndex(index)}
                                        >
                                            <img
                                                src={img}
                                                alt={`Jewelry ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-left">
                                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-amber-200/50">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <stat.icon className="w-4 h-4 text-amber-600" />
                                                <div className="text-xl font-light text-amber-700">
                                                    {stat.number}
                                                </div>
                                            </div>
                                            <div className="text-xs text-gray-600 font-medium">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile Certifications */}
                            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 border border-amber-200/50">
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <Award className="w-4 h-4 text-amber-600" />
                                        <span className="text-xs font-semibold text-gray-600">ISO 9001:2015</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Shield className="w-4 h-4 text-amber-600" />
                                        <span className="text-xs font-semibold text-gray-600">BIS Hallmarked</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Globe className="w-4 h-4 text-amber-600" />
                                        <span className="text-xs font-semibold text-gray-600">Export Excellence</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-5 min-h-screen pb-64"> {/* Added padding-bottom to prevent overlap */}
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-3 flex flex-col justify-center px-12 py-20">
                        <div className={`max-w-4xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>

                            {/* Desktop Main Heading */}
                            <div className="mb-12">
                                <h1 className="text-5xl xl:text-6xl font-extralight text-gray-900 leading-tight mb-6">
                                    Exquisite{" "}
                                    <span className="text-6xl xl:text-7xl font-thin text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 animate-shimmer">
                                        JEWELRY
                                    </span>
                                </h1>

                                <div className="flex items-center space-x-6 mt-6">
                                    <div className="h-0.5 w-24 bg-gradient-to-r from-amber-500 to-yellow-500"></div>
                                    <span className="text-3xl xl:text-4xl font-light text-gray-600">for Global Markets</span>
                                </div>
                            </div>

                            {/* Desktop Description */}
                            <div className="mb-12 space-y-8">
                                <p className="text-l xl:text-xl text-gray-700 leading-relaxed font-light max-w-3xl">
                                    Discover our premium collection of fine jewelry, meticulously crafted for discerning
                                    clients worldwide. From traditional artisanship to contemporary elegance.
                                </p>

                                {/* Desktop Dynamic Features */}
                                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-amber-200/30 shadow-lg">
                                    <div className="flex items-center space-x-6">
                                        <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
                                            <Sparkles className="w-8 h-8 text-white animate-pulse" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                                {features[currentSlide]}
                                            </h3>
                                            <p className="text-lg text-gray-600">Excellence in every detail</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Action Buttons */}
                            <div className="flex items-center gap-6 mb-12">
                                <button className="group px-6 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-semibold hover:from-amber-700 hover:to-yellow-700 transition duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 rounded-lg">
                                    <span className="flex items-center">
                                        <Globe className="w-6 h-6 mr-3" />
                                        Export Catalog
                                        <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>

                                <button className="group px-6 py-4 bg-white/80 backdrop-blur-sm border-2 border-amber-300 text-amber-700 font-semibold hover:border-amber-500 hover:bg-amber-50 transition duration-300 transform hover:-translate-y-1 rounded-lg shadow-lg">
                                    <span className="flex items-center">
                                        <Play className="w-6 h-6 mr-3" />
                                        Watch Process
                                    </span>
                                </button>
                            </div>

                            {/* Desktop Export Highlights */}

                        </div>
                    </div>

                    {/* Right Column - Larger Image Gallery */}
                    <div className="lg:col-span-2 relative">
                        <div className={`h-full transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                            <div className="sticky top-0 h-screen flex flex-col p-8 space-y-6">
                                {/* Main Large Image - Bigger on Desktop */}
                                <div className="flex-1 relative group overflow-hidden rounded-2xl shadow-2xl">
                                    <img
                                        src={jewelryImages[activeImageIndex]}
                                        alt="Premium Jewelry Collection"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6">
                                            <h3 className="font-semibold text-gray-800 text-xl mb-2">Featured Collection</h3>
                                            <p className="text-gray-600">Handcrafted with precision and care</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex space-x-3 overflow-x-auto pb-2">
                                    {jewelryImages.map((img, index) => (
                                        <div
                                            key={index}
                                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${index === activeImageIndex ? 'ring-2 ring-amber-500 scale-110' : 'opacity-60 hover:opacity-100'}`}
                                            onClick={() => setActiveImageIndex(index)}
                                        >
                                            <img
                                                src={img}
                                                alt={`Jewelry ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Bottom Stats Section */}
                <div className="hidden lg:block absolute bottom-0 left-0 right-0 bg-transparent ">
                    <div className="container mx-auto px-12 py-10">
                        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            {/* Desktop Stats Grid */}
                            <div className="grid grid-cols-4 gap-8 mb-10">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center group">
                                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-200/50">
                                            <div className="flex items-center justify-center space-x-3 mb-3">
                                                <stat.icon className="w-6 h-6 text-amber-600" />
                                                <div className="text-3xl font-light text-amber-700 group-hover:scale-110 transition-transform duration-300">
                                                    {stat.number}
                                                </div>
                                            </div>
                                            <div className="text-base text-gray-600 font-medium">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop Certifications */}
                            <div className="text-center">
                                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-8 border border-amber-200/50">
                                    <div className="flex items-center justify-center gap-12 text-gray-600">
                                        <div className="flex items-center space-x-3">
                                            <Award className="w-6 h-6 text-amber-600" />
                                            <span className="text-base font-semibold">ISO 9001:2015 Certified</span>
                                        </div>
                                        <div className="h-6 w-px bg-amber-300"></div>
                                        <div className="flex items-center space-x-3">
                                            <Shield className="w-6 h-6 text-amber-600" />
                                            <span className="text-base font-semibold">BIS Hallmarked</span>
                                        </div>
                                        <div className="h-6 w-px bg-amber-300"></div>
                                        <div className="flex items-center space-x-3">
                                            <Globe className="w-6 h-6 text-amber-600" />
                                            <span className="text-base font-semibold">Export Excellence Award</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animate-shimmer {
                    background-size: 200% auto;
                    animation: shimmer 3s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default HeroSection;