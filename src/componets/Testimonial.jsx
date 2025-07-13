import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Globe, Users, Diamond, Crown, Gem, MapPin, CheckCircle, Calendar, Award, Play, Pause, Volume2 } from 'lucide-react';

const Testimonial = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [isPlaying, setIsPlaying] = useState(true);
    const [direction, setDirection] = useState(1);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const intervalRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Martinez",
            position: "Boutique Owner",
            company: "Luxe Jewelry NYC",
            country: "United States",
            rating: 5,
            category: "retail",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            testimonial: "The craftsmanship is absolutely extraordinary. Every piece tells a story of tradition and excellence. Our customers are consistently amazed by the quality and attention to detail.",
            orderValue: "$50,000+",
            orderDate: "March 2024",
            verified: true,
            highlight: "Exceptional Quality",
            videoTestimonial: false
        },
        {
            id: 2,
            name: "Ahmed Hassan",
            position: "Import Manager",
            company: "Golden Palace Jewelry",
            country: "UAE",
            rating: 5,
            category: "wholesale",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            testimonial: "Working with them has transformed our business. The reliability, quality, and competitive pricing for bulk orders makes them our preferred partner for international procurement.",
            orderValue: "$200,000+",
            orderDate: "February 2024",
            verified: true,
            highlight: "Perfect Partnership",
            videoTestimonial: true
        },
        {
            id: 3,
            name: "Elena Rodriguez",
            position: "Creative Director",
            company: "Artisan Collections",
            country: "Spain",
            rating: 5,
            category: "design",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            testimonial: "Their ability to bring custom designs to life is unmatched. The collaborative process and final results exceed expectations every time. True artisans in every sense.",
            orderValue: "$75,000+",
            orderDate: "January 2024",
            verified: true,
            highlight: "Creative Excellence",
            videoTestimonial: false
        },
        {
            id: 4,
            name: "David Thompson",
            position: "Procurement Head",
            company: "Premium Gems Ltd",
            country: "United Kingdom",
            rating: 5,
            category: "wholesale",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            testimonial: "The consistency in quality across large orders is remarkable. Their export expertise and timely delivery make them an invaluable partner for our European operations.",
            orderValue: "$150,000+",
            orderDate: "April 2024",
            verified: true,
            highlight: "Reliable Excellence",
            videoTestimonial: true
        },
        {
            id: 5,
            name: "Priya Sharma",
            position: "Store Manager",
            company: "Heritage Jewels",
            country: "Canada",
            rating: 5,
            category: "retail",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            testimonial: "Every piece is a masterpiece. The traditional techniques combined with modern aesthetics create jewelry that resonates with diverse customer preferences.",
            orderValue: "$35,000+",
            orderDate: "March 2024",
            verified: true,
            highlight: "Artistic Mastery",
            videoTestimonial: false
        },
        {
            id: 6,
            name: "Michael Chen",
            position: "CEO",
            company: "Asia Luxury Imports",
            country: "Singapore",
            rating: 5,
            category: "wholesale",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            testimonial: "Outstanding service and premium quality. Their understanding of Asian markets and cultural preferences makes them our go-to partner for luxury jewelry imports.",
            orderValue: "$180,000+",
            orderDate: "May 2024",
            verified: true,
            highlight: "Market Expertise",
            videoTestimonial: true
        }
    ];

    const categories = [
        { id: 'all', label: 'All Reviews', icon: Users, count: testimonials.length },
        { id: 'retail', label: 'Retail Partners', icon: Crown, count: testimonials.filter(t => t.category === 'retail').length },
        { id: 'wholesale', label: 'Wholesale', icon: Globe, count: testimonials.filter(t => t.category === 'wholesale').length },
        { id: 'design', label: 'Custom Design', icon: Gem, count: testimonials.filter(t => t.category === 'design').length }
    ];

    const filteredTestimonials = activeCategory === 'all' 
        ? testimonials 
        : testimonials.filter(t => t.category === activeCategory);

    useEffect(() => {
        setIsVisible(true);
        setCurrentTestimonial(0);
    }, [activeCategory]);

    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                setDirection(1);
                setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
            }, 7000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [filteredTestimonials.length, isPlaying]);

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextTestimonial();
        }
        if (isRightSwipe) {
            prevTestimonial();
        }
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const currentData = filteredTestimonials[currentTestimonial];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 relative overflow-hidden py-16">
            {/* Modern Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-amber-300 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-amber-500 rounded-full animate-pulse delay-2000"></div>
                </div>
                
                {/* Geometric patterns */}
                <div className="absolute top-20 right-20 w-32 h-32 border border-amber-200/30 rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 border border-amber-300/20 rotate-12 animate-float"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 lg:px-8">
                {/* Compact Header */}
                <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <div className="inline-flex items-center space-x-3 mb-4">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                        <Quote className="w-5 h-5 text-amber-600" />
                        <span className="text-sm font-medium text-amber-700 uppercase tracking-widest">Testimonials</span>
                        <Quote className="w-5 h-5 text-amber-600 rotate-180" />
                        <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">Partners Say</span>
                    </h2>
                    
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Trusted by jewelry businesses worldwide for exceptional quality and service
                    </p>
                </div>

                {/* Main Testimonial Display */}
                <div className={`max-w-6xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        
                        {/* Client Profile */}
                        <div className="order-1">
                            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-amber-200/30 p-8 relative overflow-hidden">
                                {/* Decorative corner */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-transparent rounded-bl-3xl"></div>
                                
                                <div className="relative">
                                    <div className="flex items-start space-x-6 mb-6">
                                        <div className="relative flex-shrink-0">
                                            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden shadow-lg ring-4 ring-amber-500/20">
                                                <img
                                                    src={currentData.image}
                                                    alt={currentData.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            {currentData.videoTestimonial && (
                                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                                                    <Play className="w-3 h-3 text-white fill-current" />
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">{currentData.name}</h3>
                                            <p className="text-amber-700 font-semibold mb-1">{currentData.position}</p>
                                            <p className="text-gray-600 text-sm">{currentData.company}</p>
                                            
                                            <div className="flex items-center space-x-4 mt-3">
                                                <div className="flex items-center space-x-1 text-gray-500">
                                                    <MapPin className="w-3 h-3" />
                                                    <span className="text-xs">{currentData.country}</span>
                                                </div>
                                                
                                                {currentData.verified && (
                                                    <div className="flex items-center space-x-1 text-green-600">
                                                        <CheckCircle className="w-3 h-3" />
                                                        <span className="text-xs">Verified</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center space-x-2 mb-4">
                                        <div className="flex items-center space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < currentData.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600 font-medium">{currentData.rating}.0</span>
                                    </div>

                                    {/* Highlight Badge */}
                                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-yellow-100 px-3 py-1 rounded-full mb-4">
                                        <Diamond className="w-3 h-3 text-amber-600" />
                                        <span className="text-sm font-medium text-amber-800">{currentData.highlight}</span>
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 border border-amber-200/30">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <Award className="w-4 h-4 text-amber-600" />
                                                <span className="text-xs font-medium text-gray-700">Order Value</span>
                                            </div>
                                            <div className="text-lg font-bold text-amber-700">{currentData.orderValue}</div>
                                        </div>
                                        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 border border-amber-200/30">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <Calendar className="w-4 h-4 text-amber-600" />
                                                <span className="text-xs font-medium text-gray-700">Latest Order</span>
                                            </div>
                                            <div className="text-lg font-bold text-amber-700">{currentData.orderDate}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial */}
                        <div className="order-2">
                            <div 
                                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-amber-200/30 p-8 relative overflow-hidden h-full"
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                {/* Large Quote */}
                                <Quote className="w-16 h-16 text-amber-200 mb-6" />
                                
                                <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 relative">
                                    <div className={`transition-all duration-500 ${direction > 0 ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}>
                                        "{currentData.testimonial}"
                                    </div>
                                </blockquote>

                                {/* Enhanced Navigation */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <button
                                            onClick={prevTestimonial}
                                            className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        
                                        <button
                                            onClick={togglePlayPause}
                                            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-300"
                                        >
                                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                                        </button>
                                        
                                        <button
                                            onClick={nextTestimonial}
                                            className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                    
                                    <div className="flex space-x-2">
                                        {filteredTestimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentTestimonial(index)}
                                                className={`h-2 rounded-full transition-all duration-300 ${
                                                    index === currentTestimonial
                                                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 w-8'
                                                        : 'bg-amber-200 w-2 hover:bg-amber-300'
                                                }`}
                                            />
                                        ))}
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
                    50% { transform: translateY(-10px) rotate(5deg); }
                }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes slide-in-right {
                    from { transform: translateX(20px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                
                @keyframes slide-in-left {
                    from { transform: translateX(-20px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
                
                .animate-slide-in-right {
                    animation: slide-in-right 0.5s ease-out;
                }
                
                .animate-slide-in-left {
                    animation: slide-in-left 0.5s ease-out;
                }
            `}</style>
        </div>
    );
};

export default Testimonial;