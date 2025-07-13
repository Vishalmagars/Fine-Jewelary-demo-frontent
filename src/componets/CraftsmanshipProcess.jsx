import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  ChevronLeft, 
  ChevronRight,
  Eye,
  Clock,
  Users,
  Award,
  Sparkles,
  Gem,
  Hammer,
  Scissors,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Heart,
  Shield
} from 'lucide-react';

const CraftsmanshipProcess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);

  // Craftsmanship process steps with YouTube URLs
  const processSteps = [
    {
      id: 1,
      title: "Design & Conceptualization",
      description: "Our master artisans begin with detailed sketches and 3D modeling to bring your vision to life",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      duration: "2-3 Days",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-purple-500 to-violet-600",
      highlights: [
        "Hand-drawn initial sketches",
        "3D CAD modeling",
        "Client consultation",
        "Material selection"
      ]
    },
    {
      id: 2,
      title: "Precious Metal Preparation",
      description: "Premium gold, silver, and platinum are carefully refined and prepared for crafting",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      duration: "1-2 Days",
      icon: <Gem className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-600",
      highlights: [
        "Metal purity testing",
        "Alloy preparation",
        "Quality verification",
        "Hallmarking process"
      ]
    },
    {
      id: 3,
      title: "Stone Selection & Cutting",
      description: "Each gemstone is hand-selected and precisely cut to maximize brilliance and beauty",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      duration: "3-5 Days",
      icon: <Scissors className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      highlights: [
        "GIA certified stones",
        "Precision cutting",
        "Clarity grading",
        "Color matching"
      ]
    },
    {
      id: 4,
      title: "Handcrafted Assembly",
      description: "Master craftsmen use traditional techniques combined with modern precision tools",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      duration: "5-7 Days",
      icon: <Hammer className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      highlights: [
        "Hand-forged details",
        "Precision setting",
        "Traditional techniques",
        "Quality checkpoints"
      ]
    },
    {
      id: 5,
      title: "Setting & Mounting",
      description: "Gemstones are carefully set using time-honored techniques for maximum security",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      duration: "2-3 Days",
      icon: <Zap className="w-8 h-8" />,
      color: "from-rose-500 to-pink-600",
      highlights: [
        "Prong setting",
        "Bezel mounting",
        "Security testing",
        "Alignment perfection"
      ]
    },
    {
      id: 6,
      title: "Finishing & Polishing",
      description: "Final touches include polishing, engraving, and quality assurance checks",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      duration: "1-2 Days",
      icon: <Star className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-600",
      highlights: [
        "Mirror polishing",
        "Surface perfection",
        "Final inspection",
        "Quality certification"
      ]
    }
  ];

  const craftsmanshipStats = [
    { number: "50+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
    { number: "25+", label: "Master Craftsmen", icon: <Users className="w-6 h-6" /> },
    { number: "10,000+", label: "Pieces Crafted", icon: <Gem className="w-6 h-6" /> },
    { number: "100%", label: "Handmade Quality", icon: <Award className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Bridal Customer",
      content: "The craftsmanship is absolutely extraordinary. Every detail is perfection.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Collector",
      content: "Traditional techniques meet modern precision. Truly exceptional work.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Designer",
      content: "Their attention to detail and quality is unmatched in the industry.",
      rating: 5
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, processSteps.length]);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % processSteps.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + processSteps.length) % processSteps.length);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex items-center justify-center mb-6">
              <Hammer className="w-8 h-8 text-amber-500 mr-3 animate-pulse" />
              <span className="text-sm font-medium text-gray-600 tracking-widest uppercase">Artisan Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Our Craftsmanship 
              <span className="block font-extralight text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-rose-600 to-purple-700">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Witness the intricate journey from concept to creation, where traditional craftsmanship 
              meets modern precision in every exquisite piece.
            </p>
          </div>

          {/* Craftsmanship Stats */}
        

          {/* Featured Video Player */}
          <div className={`mb-20 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200/50">
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Video Player */}
                <div className="lg:col-span-2">
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl bg-gray-900">
                    <iframe
                      src={processSteps[currentVideo].videoUrl}
                      title={processSteps[currentVideo].title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    
                    {/* Video Controls Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none">
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                        <button
                          onClick={prevVideo}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        
                        <div className="flex space-x-2">
                          {processSteps.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentVideo(index)}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentVideo === index 
                                  ? 'bg-amber-500 scale-125' 
                                  : 'bg-white/50 hover:bg-white/70'
                              }`}
                            />
                          ))}
                        </div>
                        
                        <button
                          onClick={nextVideo}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${processSteps[currentVideo].color} flex items-center justify-center text-white mr-4`}>
                        {processSteps[currentVideo].icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-light text-gray-900">
                          {processSteps[currentVideo].title}
                        </h3>
                        <p className="text-amber-600 text-sm font-medium">
                          {processSteps[currentVideo].duration}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {processSteps[currentVideo].description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Process Highlights</h4>
                    <ul className="space-y-2">
                      {processSteps[currentVideo].highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-gray-600 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-lg py-3 px-6 hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                      <Eye className="w-4 h-4 mr-2" />
                      Watch Full Process
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className={`mb-20 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-purple-600 rounded-full"></div>
              
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <div key={step.id} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-amber-500 flex items-center justify-center shadow-lg z-10">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white`}>
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                    </div>

                    {/* Process Card */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="flex items-center mb-4">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mr-4`}>
                            {step.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-gray-900">{step.title}</h4>
                            <p className="text-amber-600 text-sm">{step.duration}</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                        
                        <button 
                          onClick={() => setCurrentVideo(index)}
                          className="flex items-center text-amber-600 hover:text-amber-700 transition-colors font-medium text-sm"
                        >
                          <Play className="w-4 h-4 mr-1" />
                          Watch Process
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Customer Testimonials */}
         

        </div>
      </div>

      <style jsx="true">{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 7s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CraftsmanshipProcess;