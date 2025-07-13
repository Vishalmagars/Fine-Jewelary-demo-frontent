import React, { useState, useEffect } from 'react';
import {
    Palette,
    Clock,
    Shield,
    Eye,
    Users,
    Award,
    Gem,
    Crown,
    Diamond,
    Play,
    ChevronRight,
    Lightbulb,
    Hammer,
    Package,
    Globe,
    Phone,
    Mail,
    Quote,
    TrendingUp,
    Settings,
    Zap as Lightning,
} from 'lucide-react';

const CustomOrderIntro = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredFeature, setHoveredFeature] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);

    const designProcess = [
        {
            id: 'design',
            title: 'Design Consultation',
            icon: Lightbulb,
            gradient: 'from-amber-500 via-yellow-500 to-orange-600',
            duration: '3-5 Days',
            description: 'Collaborate with our master designers to bring your vision to life',
            details: [
                'Initial consultation & concept discussion',
                'Detailed requirement analysis',
                'Material selection & recommendation',
                'Sketch creation & design refinement',
                'CAD modeling & 3D visualization'
            ],
            deliverables: ['Concept sketches', '3D CAD models', 'Material specifications', 'Timeline proposal']
        },
        {
            id: 'approval',
            title: 'Design Approval',
            icon: Eye,
            gradient: 'from-blue-500 via-indigo-500 to-purple-600',
            duration: '2-3 Days',
            description: 'Review, refine, and approve your custom design',
            details: [
                'Detailed design presentation',
                'Virtual reality preview session',
                'Modification requests handling',
                'Final approval documentation',
                'Production cost estimation'
            ],
            deliverables: ['Final design approval', 'Production timeline', 'Cost breakdown', 'Quality standards']
        },
        {
            id: 'production',
            title: 'Master Production',
            icon: Hammer,
            gradient: 'from-rose-500 via-pink-500 to-red-600',
            duration: '15-30 Days',
            description: 'Skilled artisans craft your unique piece with precision',
            details: [
                'Premium material sourcing',
                'Expert craftsmanship execution',
                'Quality control at each stage',
                'Regular progress updates',
                'Final inspection & finishing'
            ],
            deliverables: ['Handcrafted jewelry', 'Quality certificates', 'Progress documentation', 'Authenticity guarantee']
        },
        {
            id: 'export',
            title: 'Global Export',
            icon: Globe,
            gradient: 'from-green-500 via-emerald-500 to-teal-600',
            duration: '3-7 Days',
            description: 'Secure packaging and worldwide delivery',
            details: [
                'Premium packaging & protection',
                'International shipping coordination',
                'Customs documentation',
                'Real-time tracking provision',
                'Secure delivery confirmation'
            ],
            deliverables: ['Luxury packaging', 'Shipping documentation', 'Insurance coverage', 'Delivery confirmation']
        }
    ];

    const customFeatures = [
        {
            icon: Crown,
            title: 'Royal Craftsmanship',
            description: 'Master artisans with 25+ years of experience',
            color: 'from-purple-500 to-indigo-600',
            stats: '99.8% Satisfaction'
        },
        {
            icon: Diamond,
            title: 'Premium Materials',
            description: 'Ethically sourced gems and precious metals',
            color: 'from-blue-500 to-cyan-600',
            stats: 'GIA Certified'
        },
        {
            icon: Palette,
            title: 'Unlimited Customization',
            description: 'Every aspect tailored to your exact specifications',
            color: 'from-pink-500 to-rose-600',
            stats: '∞ Design Options'
        },
        {
            icon: Shield,
            title: 'Lifetime Guarantee',
            description: 'Quality assurance and lifetime service support',
            color: 'from-green-500 to-emerald-600',
            stats: 'Forever Protected'
        }
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveStep(prev => (prev + 1) % designProcess.length);
        }, 5000);

        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);

        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const StepCard = ({ step, index, isActive }) => (
        <div
            className={`relative group cursor-pointer transition-all duration-300 ease-in-out ${
                isActive ? 'scale-102 z-10 opacity-100' : 'scale-98 opacity-90'
            }`}
            onClick={() => setActiveStep(index)}
        >
            <div className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
                isActive ? 'ring-1 ring-amber-400/30' : ''
            }`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-300 ease-in-out`}></div>

                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 ease-in-out group-hover:scale-105`}>
                            <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-right">
                            <div className="text-sm font-medium text-gray-500 mb-1">Step {index + 1}</div>
                            <div className="flex items-center text-amber-600">
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm font-semibold">{step.duration}</span>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300 ease-in-out">
                        {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{step.description}</p>

                    <div className="space-y-2">
                        {step.details.slice(0, 3).map((detail, idx) => (
                            <div key={idx} className="flex items-start text-xs text-gray-500">
                                <ChevronRight className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0 text-amber-500" />
                                {detail}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const FeatureCard = ({ feature, index }) => (
        <div
            onMouseEnter={() => setHoveredFeature(index)}
            onMouseLeave={() => setHoveredFeature(null)}
            className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300 ease-in-out`}
        >
            <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-3 transition-opacity duration-300 ease-in-out`}></div>

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 ease-in-out group-hover:scale-105`}>
                        <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                        <div className="text-xs font-medium text-gray-500 mb-1">Quality</div>
                        <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
                            {feature.stats}
                        </div>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300 ease-in-out">
                    {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                </p>

                <div className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600 font-medium text-sm transition-all duration-300 ease-in-out group-hover:translate-x-1">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-2 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 relative overflow-hidden" onMouseMove={handleMouseMove}>
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute w-96 h-96 bg-gradient-to-r from-amber-200/30 to-yellow-200/30 rounded-full mix-blend-multiply filter blur-3xl transition-all duration-1000"
                    style={{
                        left: `${mousePosition.x * 0.05}px`,
                        top: `${mousePosition.y * 0.05}px`,
                        transform: `translateY(${scrollY * 0.1}px)`,
                    }}
                ></div>
                <div
                    className="absolute w-80 h-80 bg-gradient-to-r from-rose-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl transition-all duration-1000"
                    style={{
                        right: `${mousePosition.x * 0.03}px`,
                        bottom: `${mousePosition.y * 0.03}px`,
                        transform: `translateY(${scrollY * 0.15}px)`,
                    }}
                ></div>
                <div
                    className="absolute w-72 h-72 bg-gradient-to-r from-purple-200/20 to-indigo-200/20 rounded-full mix-blend-multiply filter blur-3xl transition-all duration-1000"
                    style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) translateY(${scrollY * 0.08}px)`,
                    }}
                ></div>
            </div>

            <div className="relative z-10">
                <div className="container mx-auto px-6 py-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center min-h-screen">
                        <div className={`lg:col-span-7 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                            <h1 className="text-5xl md:text-6xl xl:text-7xl font-thin text-gray-900 mb-8 leading-tight">
                                Craft Your
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-rose-600 to-purple-700 font-extralight animate-gradient">
                                    Masterpiece
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                                Transform your vision into extraordinary jewelry. Our master artisans combine traditional craftsmanship
                                with modern innovation to create one-of-a-kind pieces that tell your unique story.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                                <button className="group bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl">
                                    <span className="flex items-center">
                                        <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                        Start Design Journey
                                    </span>
                                </button>
                                <button className="group bg-white/80 backdrop-blur-sm border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                                    <span className="flex items-center">
                                        <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                        View Portfolio
                                    </span>
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-8">
                                <div className="text-center group cursor-pointer">
                                    <div className="text-3xl font-bold text-amber-600 mb-1 group-hover:scale-110 transition-transform">25+</div>
                                    <div className="text-sm text-gray-600">Years Experience</div>
                                    <div className="w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="text-center group cursor-pointer">
                                    <div className="text-3xl font-bold text-rose-600 mb-1 group-hover:scale-110 transition-transform">5000+</div>
                                    <div className="text-sm text-gray-600">Custom Pieces</div>
                                    <div className="w-full h-1 bg-gradient-to-r from-rose-500 to-pink-600 mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="text-center group cursor-pointer">
                                    <div className="text-3xl font-bold text-purple-600 mb-1 group-hover:scale-110 transition-transform">150+</div>
                                    <div className="text-sm text-gray-600">Countries</div>
                                    <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            </div>
                        </div>

                        <div className={`lg:col-span-5 relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                            <div className="relative h-96 lg:h-full group">
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-rose-400/20 to-purple-400/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                                    <img
                                        src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=700&fit=crop&crop=center"
                                        alt="Luxury Diamond Ring Collection"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500"></div>
                                    <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center mb-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                                            <Diamond className="w-5 h-5 mr-2 animate-pulse" />
                                            <span className="text-sm font-medium">Signature Collection</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-1 group-hover:text-amber-200 transition-colors duration-300">Eternal Elegance</h3>
                                        <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">Handcrafted with Precision</p>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                                        <span className="text-xs font-medium text-gray-800">Premium Quality</span>
                                    </div>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-60 animate-ping"></div>
                                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full opacity-60 animate-ping" style={{ animationDelay: '1s' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center justify-center mb-8 px-6 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-lg">
                                <Quote className="w-6 h-6 text-purple-600 mr-3" />
                                <span className="text-base font-medium text-purple-800 tracking-wide">Custom Designe</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
                                Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Artistry</span> Meets Innovation
                            </h2>

                            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                                <div className="text-left">
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                        For over two decades, we have been at the forefront of bespoke jewelry creation, combining time-honored techniques with cutting-edge technology. Our master craftsmen, trained in the traditional jewelry-making capitals of the world, bring decades of expertise to every piece they create. We believe that jewelry is not merely an accessory, but a personal expression of one's journey, values, and dreams.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                        Our design philosophy centers on the belief that every individual deserves jewelry as unique as their fingerprint. Using advanced CAD modeling, 3D printing for prototypes, and virtual reality visualization, we ensure that your vision is perfectly captured before the first precious metal is shaped. This marriage of traditional craftsmanship with modern technology allows us to create pieces that are both timeless and contemporary.
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 text-center">
                                            <TrendingUp className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                                            <div className="text-2xl font-bold text-amber-600">98.7%</div>
                                            <div className="text-sm text-gray-600">Client Satisfaction</div>
                                        </div>
                                        <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-6 text-center">
                                            <Lightning className="w-8 h-8 text-rose-600 mx-auto mb-3" />
                                            <div className="text-2xl font-bold text-rose-600">72h</div>
                                            <div className="text-sm text-gray-600">Design Response</div>
                                        </div>
                                        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 text-center">
                                            <Settings className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                                            <div className="text-2xl font-bold text-purple-600">3D</div>
                                            <div className="text-sm text-gray-600">Visualization</div>
                                        </div>
                                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 text-center">
                                            <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
                                            <div className="text-2xl font-bold text-green-600">ISO</div>
                                            <div className="text-sm text-gray-600">Certified</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-lg">
                                <p className="text-lg text-gray-700 text-left leading-relaxed">
                                    What sets us apart is our commitment to ethical sourcing and sustainable practices. Every gemstone and precious metal we use is carefully selected from certified suppliers who share our values of responsible mining and fair trade. We believe that beautiful jewelry should not come at the cost of environmental degradation or human exploitation. Our workshop operates with renewable energy, and we maintain a carbon-neutral shipping process, ensuring that your custom jewelry represents not just beauty, but also conscious luxury.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white/50 backdrop-blur-sm py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                                The Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600">Creation</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Every masterpiece begins with a vision. Our systematic approach ensures excellence at every step, from initial concept to final delivery.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-4 gap-8 mb-16">
                            {designProcess.map((step, index) => (
                                <StepCard key={step.id} step={step} index={index} isActive={index === activeStep} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">Bespoke</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Experience the pinnacle of jewelry craftsmanship with our comprehensive suite of premium services and guarantees.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {customFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className={`${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''} ${index === 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                            >
                                <FeatureCard feature={feature} index={index} />
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-8 border border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Fast Turnaround</h4>
                                    <p className="text-sm text-gray-600">Express delivery available</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">Rush orders completed in 7-10 business days without compromising quality.</p>
                        </div>

                        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 border border-rose-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Expert Consultation</h4>
                                    <p className="text-sm text-gray-600">24/7 design support</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">Personal design consultants available throughout your entire journey.</p>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                                    <Package className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Luxury Packaging</h4>
                                    <p className="text-sm text-gray-600">Premium presentation</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">Elegant packaging that reflects the quality of your custom jewelry.</p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-20">
                    <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-rose-600/10 to-purple-600/10"></div>
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full filter blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
                        </div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center p-6 sm:p-12 lg:p-16">
                            <div>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-thin text-white mb-4 sm:mb-6 leading-tight">
                                    Begin Your
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400 font-extralight">
                                        Masterpiece
                                    </span>
                                </h3>

                                <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                                    Connect with our design specialists and embark on a journey to create jewelry that's as unique as your story. Every piece tells a tale of craftsmanship, passion, and personal expression.
                                </p>

                                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8">
                                    <button className="group bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 transform hover:-translate-y-1 shadow-xl">
                                        <span className="flex items-center justify-center sm:justify-start">
                                            <Palette className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                            Start Design Consultation
                                        </span>
                                    </button>

                                    <button className="group bg-transparent border-2 border-white/40 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold hover:bg-white/10 hover:border-white/60 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm">
                                        <span className="flex items-center justify-center sm:justify-start">
                                            <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                            Schedule Expert Call
                                        </span>
                                    </button>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 text-gray-300">
                                    <div className="flex items-center">
                                        <Mail className="w-4 h-4 mr-2" />
                                        <span className="text-sm">info@bespokejewels.com</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="w-4 h-4 mr-2" />
                                        <span className="text-sm">+1 (555) 123-4567</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                                        <Shield className="w-8 h-8 text-green-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                                        <div className="text-white font-medium">Lifetime Guarantee</div>
                                        <div className="text-gray-300 text-sm">Forever protected</div>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                                        <Award className="w-8 h-8 text-yellow-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                                        <div className="text-white font-medium">Master Craftsmen</div>
                                        <div className="text-gray-300 text-sm">Expert artisans</div>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                                        <Globe className="w-8 h-8 text-blue-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                                        <div className="text-white font-medium">Worldwide Shipping</div>
                                        <div className="text-gray-300 text-sm">Global delivery</div>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                                        <Gem className="w-8 h-8 text-purple-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                                        <div className="text-white font-medium">Premium Quality</div>
                                        <div className="text-gray-300 text-sm">Exceptional materials</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes gradient {
                        0%, 100% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                    }

                    .animate-gradient {
                        background-size: 200% 200%;
                        animation: gradient 3s ease infinite;
                    }

                    .bg-gradient-to-r {
                        background-size: 200% 200%;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default CustomOrderIntro;