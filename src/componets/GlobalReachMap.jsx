import React, { useState, useEffect } from 'react';
import { Globe, MapPin, Star, Award, Package, Users, ArrowRight, Sparkles } from 'lucide-react';

const GlobalReachMap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeRegion, setActiveRegion] = useState(null);
  const [animatedStats, setAnimatedStats] = useState({});

  // Export destinations data
  const exportRegions = [
    {
      id: 'north-america',
      name: 'North America',
      countries: ['United States', 'Canada', 'Mexico'],
      color: 'from-amber-400 to-yellow-500',
      position: 'top-20 left-20',
      stats: { orders: '2.5K+', value: '$12M+' }
    },
    {
      id: 'europe',
      name: 'Europe',
      countries: ['United Kingdom', 'Germany', 'France', 'Italy', 'Spain', 'Netherlands'],
      color: 'from-rose-400 to-pink-500',
      position: 'top-16 left-1/2',
      stats: { orders: '3.2K+', value: '$18M+' }
    },
    {
      id: 'middle-east',
      name: 'Middle East',
      countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait'],
      color: 'from-purple-400 to-indigo-500',
      position: 'top-32 right-1/3',
      stats: { orders: '1.8K+', value: '$22M+' }
    },
    {
      id: 'asia-pacific',
      name: 'Asia Pacific',
      countries: ['Australia', 'Japan', 'Singapore', 'Hong Kong', 'South Korea'],
      color: 'from-emerald-400 to-teal-500',
      position: 'top-40 right-20',
      stats: { orders: '4.1K+', value: '$25M+' }
    },
    {
      id: 'south-america',
      name: 'South America',
      countries: ['Brazil', 'Argentina', 'Chile'],
      color: 'from-orange-400 to-red-500',
      position: 'bottom-32 left-32',
      stats: { orders: '800+', value: '$5M+' }
    }
  ];

  const globalStats = [
    { icon: Globe, label: 'Countries Served', value: '50+', color: 'text-amber-600' },
    { icon: Package, label: 'Orders Delivered', value: '12K+', color: 'text-rose-600' },
    { icon: Award, label: 'Export Value', value: '$82M+', color: 'text-purple-600' },
    { icon: Users, label: 'Global Partners', value: '200+', color: 'text-emerald-600' }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', desc: 'Quality Management' },
    { name: 'Hallmark Certified', desc: 'Purity Guarantee' },
    { name: 'Export Excellence', desc: 'Government Recognition' },
    { name: 'Conflict-Free', desc: 'Ethical Sourcing' }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Animate stats counter
    const timer = setTimeout(() => {
      globalStats.forEach((stat, index) => {
        setTimeout(() => {
          setAnimatedStats(prev => ({ ...prev, [index]: true }));
        }, index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleRegionHover = (region) => {
    setActiveRegion(region);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-amber-100/30 to-yellow-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-rose-100/30 to-pink-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-purple-100/30 to-indigo-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-amber-500 mr-3 animate-pulse" />
              <span className="text-sm font-medium text-gray-600 tracking-widest uppercase">Global Presence</span>
              <Sparkles className="w-8 h-8 text-amber-500 ml-3 animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-light text-gray-900 mb-6">
              Exporting Excellence
              <span className="block font-extralight text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700">
                Worldwide
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
              From the heart of India to jewelry lovers across the globe, we've been crafting and exporting 
              premium fine jewelry to over 50 countries for more than two decades.
            </p>
          </div>

          {/* Global Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {globalStats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50 group">
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color === 'text-amber-600' ? 'from-amber-100 to-yellow-100' : 
                    stat.color === 'text-rose-600' ? 'from-rose-100 to-pink-100' : 
                    stat.color === 'text-purple-600' ? 'from-purple-100 to-indigo-100' : 
                    'from-emerald-100 to-teal-100'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-2xl font-light ${stat.color} mb-2 text-center transition-all duration-500 ${animatedStats[index] ? 'scale-110' : 'scale-100'}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium text-center tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive World Map */}
          <div className={`mb-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-light text-gray-900 mb-4">Our Global Footprint</h2>
                <p className="text-gray-600">Hover over regions to explore our export destinations</p>
              </div>
              
              {/* Stylized World Map */}
              <div className="relative h-96 bg-gradient-to-br from-slate-100 to-gray-200 rounded-xl overflow-hidden">
                {/* Map Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-100/50"></div>
                
                {/* Export Regions */}
                {exportRegions.map((region) => (
                  <div
                    key={region.id}
                    className={`absolute w-16 h-16 rounded-full bg-gradient-to-r ${region.color} opacity-80 hover:opacity-100 cursor-pointer transform hover:scale-125 transition-all duration-300 flex items-center justify-center shadow-lg ${region.position}`}
                    onMouseEnter={() => handleRegionHover(region)}
                    onMouseLeave={() => setActiveRegion(null)}
                  >
                    <MapPin className="w-8 h-8 text-white animate-pulse" />
                    
                    {/* Ripple Effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${region.color} animate-ping opacity-20`}></div>
                    
                    {/* Region Info Popup */}
                    {activeRegion?.id === region.id && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-lg shadow-xl p-4 min-w-64 z-10 border border-gray-200">
                        <h3 className="font-semibold text-gray-900 mb-2 text-center">{region.name}</h3>
                        <div className="grid grid-cols-2 gap-4 mb-3">
                          <div className="text-center">
                            <div className="text-lg font-medium text-amber-600">{region.stats.orders}</div>
                            <div className="text-xs text-gray-500">Orders</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-medium text-emerald-600">{region.stats.value}</div>
                            <div className="text-xs text-gray-500">Value</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">
                          <div className="font-medium mb-1">Countries:</div>
                          <div className="flex flex-wrap gap-1">
                            {region.countries.map((country, idx) => (
                              <span key={idx} className="text-xs bg-gray-100 rounded px-2 py-1">
                                {country}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Connecting Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#eab308" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    {exportRegions.map((region, idx) => (
                      <line
                        key={idx}
                        x1="50%"
                        y1="50%"
                        x2={region.position.includes('left') ? '25%' : region.position.includes('right') ? '75%' : '50%'}
                        y2={region.position.includes('top') ? '25%' : region.position.includes('bottom') ? '75%' : '50%'}
                        stroke="url(#lineGradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        className="animate-pulse"
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Export Highlights */}
          <div className={`grid md:grid-cols-2 gap-12 mb-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {/* Top Export Destinations */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200/50">
              <h3 className="text-2xl font-light text-gray-900 mb-6 flex items-center">
                <Star className="w-6 h-6 text-amber-500 mr-3" />
                Top Export Destinations
              </h3>
              <div className="space-y-4">
                {[
                  { country: 'United States', percentage: '35%', flag: '🇺🇸' },
                  { country: 'United Kingdom', percentage: '22%', flag: '🇬🇧' },
                  { country: 'United Arab Emirates', percentage: '18%', flag: '🇦🇪' },
                  { country: 'Australia', percentage: '12%', flag: '🇦🇺' },
                  { country: 'Germany', percentage: '8%', flag: '🇩🇪' }
                ].map((dest, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{dest.flag}</span>
                      <span className="font-medium text-gray-800">{dest.country}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 h-2 bg-gray-200 rounded-full mr-3">
                        <div 
                          className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-1000"
                          style={{ width: isVisible ? dest.percentage : '0%' }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{dest.percentage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Export Categories */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200/50">
              <h3 className="text-2xl font-light text-gray-900 mb-6 flex items-center">
                <Package className="w-6 h-6 text-rose-500 mr-3" />
                Export Categories
              </h3>
              <div className="space-y-4">
                {[
                  { category: 'Diamond Jewelry', share: '45%', color: 'from-amber-400 to-yellow-500' },
                  { category: 'Gold Jewelry', share: '30%', color: 'from-rose-400 to-pink-500' },
                  { category: 'Silver Jewelry', share: '15%', color: 'from-purple-400 to-indigo-500' },
                  { category: 'Gemstone Jewelry', share: '10%', color: 'from-emerald-400 to-teal-500' }
                ].map((cat, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-800">{cat.category}</span>
                      <span className="text-sm font-medium text-gray-600">{cat.share}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div 
                        className={`h-full bg-gradient-to-r ${cat.color} rounded-full transition-all duration-1000`}
                        style={{ width: isVisible ? cat.share : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Compliance */}
          <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200/50 mb-20 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Global Certifications & Compliance</h3>
              <p className="text-gray-600">Ensuring quality and authenticity across all international markets</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-amber-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center bg-gradient-to-r from-amber-600 to-yellow-600 rounded-xl p-12 shadow-xl transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h3 className="text-3xl font-light text-white mb-4">Ready to Export Excellence?</h3>
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
              Join our global network of satisfied customers and experience the finest in Indian jewelry craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group bg-white text-amber-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <span className="flex items-center">
                  Request Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-amber-600 transition-all duration-300 transform hover:-translate-y-1">
                <span className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Export Catalog
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GlobalReachMap;