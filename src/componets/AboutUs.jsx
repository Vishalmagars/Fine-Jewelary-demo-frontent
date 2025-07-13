import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
    Crown,
    Heart,
    Gem,
    Award,
    Users,
    Globe,
    Shield,
    Star,
    Sparkles,
    Calendar,
    MapPin,
    ArrowRight,
    CheckCircle,
    Zap,
    Eye,
    Target,
    TrendingUp,
    Clock,
    Palette,
    Phone,
    Mail,
    ChevronDown,
    PlayCircle
} from 'lucide-react';

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('story');
    const [isLoading, setIsLoading] = useState(true);
    const [expandedCard, setExpandedCard] = useState(null);

    // Memoized data to prevent unnecessary re-renders
    const milestones = useMemo(() => [
        {
            year: '1985',
            title: 'Foundation',
            desc: 'Started as a family business with traditional craftsmanship in Mumbai',
            icon: Crown,
            color: 'from-amber-500 to-yellow-600'
        },
        {
            year: '1995',
            title: 'Expansion',
            desc: 'Opened first flagship showroom with exclusive handcrafted designs',
            icon: MapPin,
            color: 'from-emerald-500 to-teal-600'
        },
        {
            year: '2005',
            title: 'Innovation',
            desc: 'Introduced CAD technology while preserving traditional techniques',
            icon: Zap,
            color: 'from-purple-500 to-indigo-600'
        },
        {
            year: '2015',
            title: 'Global Reach',
            desc: 'Expanded to international markets across 25+ countries',
            icon: Globe,
            color: 'from-blue-500 to-cyan-600'
        },
        {
            year: '2020',
            title: 'Digital Transformation',
            desc: 'Launched e-commerce platform with AR try-on technology',
            icon: TrendingUp,
            color: 'from-pink-500 to-rose-600'
        },
        {
            year: '2024',
            title: 'Excellence Milestone',
            desc: 'Serving customers globally with premium jewelry and exceptional service',
            icon: Award,
            color: 'from-orange-500 to-red-600'
        }
    ], []);

    const coreValues = useMemo(() => [
        {
            icon: Gem,
            title: 'Authenticity',
            description: 'Every piece is crafted with genuine materials and traditional techniques passed down through generations. We guarantee the authenticity of every gemstone and precious metal.',
            color: 'from-amber-500 to-yellow-600',
            bgColor: 'from-amber-50 to-yellow-50',
            features: ['100% Genuine Materials', 'Traditional Techniques', 'Certified Authenticity']
        },
        {
            icon: Heart,
            title: 'Passion',
            description: 'Our love for jewelry design drives us to create pieces that tell stories and capture emotions. Each creation is a labor of love and artistic expression.',
            color: 'from-rose-500 to-pink-600',
            bgColor: 'from-rose-50 to-pink-50',
            features: ['Emotional Connection', 'Artistic Excellence', 'Story-driven Design']
        },
        {
            icon: Shield,
            title: 'Quality',
            description: 'Rigorous quality control ensures every piece meets our exacting standards. We use advanced testing methods and traditional craftsmanship assessment.',
            color: 'from-emerald-500 to-teal-600',
            bgColor: 'from-emerald-50 to-teal-50',
            features: ['Quality Assurance', 'Precision Crafting', 'Lifetime Warranty']
        },
        {
            icon: Eye,
            title: 'Vision',
            description: 'To be the global leader in premium jewelry while preserving cultural heritage and promoting sustainable practices in the industry.',
            color: 'from-purple-500 to-indigo-600',
            bgColor: 'from-purple-50 to-indigo-50',
            features: ['Global Leadership', 'Heritage Preservation', 'Sustainable Practices']
        }
    ], []);

    const achievements = useMemo(() => [
        { number: '40+', label: 'Years of Excellence', icon: Calendar, color: 'text-amber-600' },
        { number: '50+', label: 'Countries Served', icon: Globe, color: 'text-emerald-600' },
        { number: '25K+', label: 'Happy Customers', icon: Users, color: 'text-purple-600' },
        { number: '99%', label: 'Satisfaction Rate', icon: Star, color: 'text-rose-600' }
    ], []);

    const teamMembers = useMemo(() => [
        {
            name: 'Rajesh Sharma',
            role: 'Master Craftsman & Founder',
            experience: '40+ years',
            specialty: 'Traditional Indian Jewelry Design',
            avatar: '👨‍🎨',
            description: 'Founded our legacy with a vision to preserve traditional craftsmanship while embracing modern innovation.',
            achievements: ['Master Craftsman Award', 'Heritage Preservation', 'Industry Pioneer'],
            contact: { email: 'rajesh@timelessjewelry.com', phone: '+91-9876543210' }
        },
        {
            name: 'Priya Patel',
            role: 'Head of Design',
            experience: '15+ years',
            specialty: 'Contemporary & Fusion Designs',
            avatar: '👩‍🎨',
            description: 'Leads our design team in creating modern pieces that blend tradition with contemporary aesthetics.',
            achievements: ['Design Innovation Award', 'Fashion Week Featured', 'Trend Setter'],
            contact: { email: 'priya@timelessjewelry.com', phone: '+91-9876543211' }
        },
        {
            name: 'Arjun Gupta',
            role: 'Export Director',
            experience: '12+ years',
            specialty: 'International Markets',
            avatar: '👨‍💼',
            description: 'Oversees global operations and ensures seamless delivery to customers worldwide.',
            achievements: ['Export Excellence Award', 'Global Expansion', 'Market Leadership'],
            contact: { email: 'arjun@timelessjewelry.com', phone: '+91-9876543212' }
        },
        {
            name: 'Meera Singh',
            role: 'Quality Controller',
            experience: '18+ years',
            specialty: 'Gemstone Authentication',
            avatar: '👩‍🔬',
            description: 'Ensures every piece meets our stringent quality standards and authenticity requirements.',
            achievements: ['Quality Excellence Award', 'Gemologist Certification', 'Standards Developer'],
            contact: { email: 'meera@timelessjewelry.com', phone: '+91-9876543213' }
        }
    ], []);

    const sections = useMemo(() => [
        { id: 'story', title: 'Our Story', icon: Crown, color: 'text-amber-600' },
        { id: 'values', title: 'Our Values', icon: Heart, color: 'text-rose-600' },
        { id: 'journey', title: 'Our Journey', icon: Target, color: 'text-emerald-600' },
        { id: 'team', title: 'Our Team', icon: Users, color: 'text-purple-600' }
    ], []);

    // Optimized scroll handler with throttling
    const handleScroll = useCallback(() => {
        const sections = ['story', 'values', 'journey', 'team'];
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const { offsetTop, offsetHeight } = element;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection(section);
                    break;
                }
            }
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            setIsLoading(false);
        }, 300);

        let timeoutId;
        const throttledScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(handleScroll, 100);
        };

        window.addEventListener('scroll', throttledScroll);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', throttledScroll);
        };
    }, [handleScroll]);

    // Smooth scroll to section
    const scrollToSection = useCallback((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    const toggleCard = useCallback((cardId) => {
        setExpandedCard(prev => prev === cardId ? null : cardId);
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 relative overflow-hidden">
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-r from-amber-100/20 to-yellow-100/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-64 md:w-80 h-64 md:h-80 bg-gradient-to-r from-rose-100/20 to-pink-100/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-56 md:w-72 h-56 md:h-72 bg-gradient-to-r from-purple-100/20 to-indigo-100/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 md:w-2 md:h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-20 animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${4 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            {/* Navigation */}


            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto">

                    {/* Header Section */}
                    <div id="story" className={` mb-16 lg:mb-24 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <div className="relative inline-block mb-6">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4">
                                About&nbsp;
                                <span className="font-extralight text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700">
                                    Timeless Jewelry
                                </span>
                            </h1>
                            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-20 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-full"></div>
                        </div>

                        <div className="text-lg sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-light mx-auto mb-6 space-y-4">
                            <p>
                                For over four decades, we've been creating exquisite jewelry that celebrates life's most precious moments.
                                From the sparkle of an engagement ring to the elegance of a bridal necklace, our work captures emotion and legacy.
                            </p>

                            <p>
                                Blending traditional Indian artistry with modern aesthetics, each piece is a tribute to timeless craftsmanship and passion.
                                Whether you're honoring heritage or embracing contemporary style, our collections tell a story uniquely yours.
                            </p>
                        </div>
                

                        {/* Statistics */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12">
                            {achievements.map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <stat.icon className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 ${stat.color}`} />
                                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{stat.number}</div>
                                        <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Story Section */}
                    <div className={`mb-16 lg:mb-24 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-200/50">
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                <div className="order-2 lg:order-1">
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 flex items-center">
                                        <Crown className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500 mr-3" />
                                        Our Heritage Story
                                    </h2>
                                    <div className="space-y-6 text-gray-600 leading-relaxed  ">
                                        <p>
                                            Born from a passion for preserving India's rich jewelry-making traditions, our journey began in 1985
                                            when master craftsman Rajesh Sharma established our first workshop in the heart of Mumbai's jewelry district.
                                        </p>
                                        <p>
                                            What started as a small family business has grown into a globally recognized brand, yet we've never
                                            forgotten our roots. Every piece we create today still carries the same dedication to quality and
                                            authenticity that defined our founder's vision.
                                        </p>
                                        <p>
                                            From our workshops in Aurangabad, Maharashtra, we blend centuries-old techniques with modern innovation
                                            to create jewelry that resonates with customers across 50+ countries. Each piece is not just an accessory,
                                            but a work of art that celebrates the beauty of Indian craftsmanship.
                                        </p>
                                    </div>
                                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                        <button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                                            <PlayCircle className="w-5 h-5 mr-2" />
                                            Watch Our Story
                                        </button>
                                        <button className="border border-amber-500 text-amber-600 px-8 py-3 rounded-full font-medium hover:bg-amber-50 transition-all duration-300">
                                            View Gallery
                                        </button>
                                    </div>
                                </div>
                                <div className="order-1 lg:order-2">
                                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 sm:p-8">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="text-center group">
                                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                                    <Gem className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                                </div>
                                                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Premium Materials</h3>
                                                <p className="text-xs sm:text-sm text-gray-600">Only the finest gold, silver, and precious stones</p>
                                            </div>
                                            <div className="text-center group">
                                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                                    <Palette className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                                </div>
                                                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Artistic Excellence</h3>
                                                <p className="text-xs sm:text-sm text-gray-600">Traditional techniques meet modern design</p>
                                            </div>
                                            <div className="text-center group">
                                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                                    <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                                </div>
                                                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Quality Assurance</h3>
                                                <p className="text-xs sm:text-sm text-gray-600">Rigorous testing and hallmark certification</p>
                                            </div>
                                            <div className="text-center group">
                                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                                    <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                                </div>
                                                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Personal Touch</h3>
                                                <p className="text-xs sm:text-sm text-gray-600">Custom designs for special occasions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Values Section */}
                    <div id="values" className={`mb-16 lg:mb-24 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 flex items-center justify-center">
                                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-rose-500 mr-3" />
                                Our Core Values
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                The principles that guide every decision we make and every piece we create
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {coreValues.map((value, index) => (
                                <div key={index} className="group">
                                    <div className={`bg-gradient-to-r ${value.bgColor} rounded-2xl p-6 sm:p-8 h-full border border-gray-200/50 hover:shadow-xl transition-all duration-300 cursor-pointer`}
                                        onClick={() => toggleCard(`value-${index}`)}>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                <value.icon className="w-8 h-8 text-white" />
                                            </div>
                                            <ChevronDown className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${expandedCard === `value-${index}` ? 'rotate-180' : ''}`} />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                                        <p className="text-gray-600 mb-4 text-sm sm:text-base">{value.description}</p>

                                        {expandedCard === `value-${index}` && (
                                            <div className="mt-6 space-y-3 animate-fadeIn">
                                                <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                                                {value.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-center">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                                        <span className="text-sm text-gray-600">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Journey Section */}
                    <div id="journey" className={`mb-16 lg:mb-24 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 flex items-center justify-center">
                                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500 mr-3" />
                                Our Journey Through Time
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                Four decades of excellence, innovation, and unwavering commitment to quality
                            </p>
                        </div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-emerald-500 to-purple-500"></div>

                            <div className="space-y-8 md:space-y-12">
                                {milestones.map((milestone, index) => (
                                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                        {/* Timeline dot */}
                                        <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r ${milestone.color} rounded-full flex items-center justify-center z-10 shadow-lg`}>
                                            <milestone.icon className="w-4 h-4 text-white" />
                                        </div>

                                        {/* Content */}
                                        <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 group">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>
                                                        {milestone.year}
                                                    </span>
                                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transition-colors duration-300" />
                                                </div>
                                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                                                <p className="text-gray-600 text-sm sm:text-base">{milestone.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={`mb-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-amber-500 mr-3" />
                                <span className="text-sm font-medium text-gray-600 tracking-widest uppercase">Our Mission</span>
                            </div>
                            <h3 className="text-3xl font-light text-gray-900 mb-6">Crafting Dreams into Reality</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-200/50">
                                <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                                    "To create exquisite jewelry that celebrates life's precious moments,
                                    combining traditional craftsmanship with innovative design to deliver
                                    unparalleled beauty and quality to customers worldwide."
                                </blockquote>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
                                        <Crown className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="font-medium text-gray-900">Rajesh Patel</div>
                                        <div className="text-sm text-gray-600">Founder & CEO</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8 shadow-lg">
                                <h4 className="text-xl font-medium text-gray-900 mb-4">Our Vision</h4>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    To be the world's most trusted name in fine jewelry export,
                                    setting industry standards for quality, authenticity, and customer satisfaction
                                    while preserving the artistry of traditional craftsmanship.
                                </p>
                                <button className="group flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
                                    Learn More About Us
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Enhanced Styles */}
            <style jsx>{`
               @keyframes float {
                   0%, 100% { transform: translateY(0px) rotate(0deg); }
                   50% { transform: translateY(-25px) rotate(180deg); }
               }
               
               @keyframes fadeIn {
                   from { opacity: 0; transform: translateY(10px); }
                   to { opacity: 1; transform: translateY(0); }
               }
               
               .animate-float {
                   animation: float 7s ease-in-out infinite;
               }
               
               .animate-fadeIn {
                   animation: fadeIn 0.3s ease-out forwards;
               }
               
               /* Responsive typography */
               @media (max-width: 640px) {
                   .text-7xl { font-size: 3rem; }
                   .text-6xl { font-size: 2.5rem; }
                   .text-5xl { font-size: 2rem; }
                   .text-4xl { font-size: 1.75rem; }
                   .text-3xl { font-size: 1.5rem; }
               }
               
               /* Smooth scrolling */
               html {
                   scroll-behavior: smooth;
               }
               
               /* Custom scrollbar */
               ::-webkit-scrollbar {
                   width: 8px;
               }
               
               ::-webkit-scrollbar-track {
                   background: #f1f1f1;
               }
               
               ::-webkit-scrollbar-thumb {
                   background: linear-gradient(to bottom, #f59e0b, #eab308);
                   border-radius: 10px;
               }
               
               ::-webkit-scrollbar-thumb:hover {
                   background: linear-gradient(to bottom, #d97706, #ca8a04);
               }
               
               /* Enhanced hover effects */
               .group:hover .group-hover\\:scale-110 {
                   transform: scale(1.1);
               }
               
               .group:hover .group-hover\\:text-amber-500 {
                   color: #f59e0b;
               }
               
               /* Loading animation */
               @keyframes spin {
                   to { transform: rotate(360deg); }
               }
               
               .animate-spin {
                   animation: spin 1s linear infinite;
               }
               
               /* Mobile navigation */
               @media (max-width: 768px) {
                   .fixed.top-4 {
                       display: none;
                   }
               }
               
               /* Improved mobile timeline */
               @media (max-width: 768px) {
                   .md\\:flex-row-reverse {
                       flex-direction: row !important;
                   }
                   
                   .md\\:w-1\\/2 {
                       width: 100% !important;
                   }
                   
                   .md\\:pr-8,
                   .md\\:pl-8 {
                       padding-left: 0 !important;
                       padding-right: 0 !important;
                   }
               }
               
               /* Enhanced button animations */
               button {
                   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
               }
               
               button:hover {
                   transform: translateY(-2px);
               }
               
               button:active {
                   transform: translateY(0);
               }
               
               /* Improved card hover effects */
               .hover\\:shadow-xl:hover {
                   box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
               }
               
               .hover\\:scale-105:hover {
                   transform: scale(1.05);
               }
               
               /* Enhanced gradient text */
               .bg-clip-text {
                   -webkit-background-clip: text;
                   background-clip: text;
               }
               
               /* Improved backdrop blur */
               .backdrop-blur-sm {
                   backdrop-filter: blur(4px);
               }
               
               .backdrop-blur-md {
                   backdrop-filter: blur(12px);
               }
               
               /* Enhanced border animations */
               .border-animate {
                   position: relative;
                   overflow: hidden;
               }
               
               .border-animate::before {
                   content: '';
                   position: absolute;
                   top: 0;
                   left: -100%;
                   width: 100%;
                   height: 100%;
                   background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                   transition: left 0.5s;
               }
               
               .border-animate:hover::before {
                   left: 100%;
               }
               
               /* Responsive grid improvements */
               @media (max-width: 1024px) {
                   .xl\\:grid-cols-4 {
                       grid-template-columns: repeat(2, minmax(0, 1fr));
                   }
               }
               
               @media (max-width: 640px) {
                   .sm\\:grid-cols-2 {
                       grid-template-columns: repeat(1, minmax(0, 1fr));
                   }
               }
           `}</style>
        </div>
    );
};

export default AboutUs;