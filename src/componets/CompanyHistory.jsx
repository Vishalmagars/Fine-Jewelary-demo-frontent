import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  Globe, 
  Award, 
  Users, 
  Heart, 
  Star, 
  ChevronRight,
  Target,
  Gem,
  Crown,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const CompanyHistory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const sectionRef = useRef(null);

  const timelineData = [
    {
      year: "1998",
      title: "Foundation",
      description: "Started as a small family business with a passion for fine jewelry craftsmanship",
      icon: <Gem className="w-6 h-6" />
    },
    {
      year: "2005",
      title: "First Export",
      description: "Expanded internationally, establishing our first export partnerships",
      icon: <Globe className="w-6 h-6" />
    },
    {
      year: "2012",
      title: "Certification",
      description: "Achieved ISO certification and hallmarking standards",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "2018",
      title: "Global Expansion",
      description: "Reached 50+ countries with premium jewelry collections",
      icon: <Crown className="w-6 h-6" />
    },
    {
      year: "2024",
      title: "Excellence Award",
      description: "Recognized as leading jewelry exporter with innovation in design",
      icon: <Star className="w-6 h-6" />
    }
  ];

  const missionValues = [
    {
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      title: "Passion for Perfection",
      description: "Every piece is crafted with meticulous attention to detail and unwavering commitment to quality"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Global Excellence",
      description: "Bringing the finest jewelry to customers worldwide with international quality standards"
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: "Customer First",
      description: "Building lasting relationships through exceptional service and personalized experiences"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      title: "Innovation & Heritage",
      description: "Blending traditional craftsmanship with contemporary design and modern techniques"
    }
  ];

  const achievements = [
    { number: "25+", label: "Years of Excellence" },
    { number: "50+", label: "Countries Served" },
    { number: "10K+", label: "Happy Clients" },
    { number: "500+", label: "Unique Designs" }
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
        setActiveTimeline((prev) => (prev + 1) % timelineData.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, timelineData.length]);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-30 animate-float"
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
              <Clock className="w-8 h-8 text-amber-500 mr-3 animate-pulse" />
              <span className="text-sm font-medium text-gray-600 tracking-widest uppercase">Our Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              A Legacy of 
              <span className="block font-extralight text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              For over two decades, we have been crafting exceptional jewelry and building lasting relationships 
              with customers worldwide. Our story is one of passion, precision, and unwavering commitment to quality.
            </p>
          </div>

          {/* Timeline Section */}
          <div className={`mb-20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
              <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">Our Milestones</h3>
              
              {/* Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-200 to-yellow-200 rounded-full"></div>
                
                <div className="space-y-12">
                  {timelineData.map((item, index) => (
                    <div 
                      key={index}
                      className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                    >
                      {/* Timeline Node */}
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
                        activeTimeline === index 
                          ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white scale-110 shadow-lg' 
                          : 'bg-white text-amber-600 border-2 border-amber-200'
                      }`}>
                        {item.icon}
                      </div>
                      
                      {/* Timeline Content */}
                      <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <div className={`bg-white rounded-lg p-6 shadow-lg border border-gray-200/50 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                          activeTimeline === index ? 'ring-2 ring-amber-200' : ''
                        }`}>
                          <div className="text-2xl font-light text-amber-600 mb-2">{item.year}</div>
                          <h4 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
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

          {/* Values Section */}
          <div className={`mb-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light text-gray-900 mb-4">Our Core Values</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do and shape our commitment to excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {missionValues.map((value, index) => (
                <div key={index} className="group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200/50 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-medium text-gray-900 mb-4">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl p-8 shadow-2xl text-white">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-light mb-4">Our Achievements</h3>
                <p className="text-amber-100 max-w-2xl mx-auto">
                  Numbers that reflect our commitment to excellence and customer satisfaction
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-light mb-2 animate-pulse">
                      {achievement.number}
                    </div>
                    <div className="text-amber-100 text-sm font-medium tracking-wide">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CompanyHistory;