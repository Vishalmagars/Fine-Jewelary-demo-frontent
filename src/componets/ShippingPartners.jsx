import React, { useState, useEffect } from 'react';
import {
  Plane,
  Ship,
  Truck,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Globe,
  Package,
  Zap,
  Award,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Users,
  Activity,
  Target,
  Layers,
  ChevronDown,
  Filter,
  Search
} from 'lucide-react';

const ShippingPartners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('express');
  const [expandedPartner, setExpandedPartner] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const shippingPartners = [
    {
      id: 'fedex',
      name: 'FedEx',
      logo: '🚀',
      tier: 'premium',
      deliveryScore: 96,
      reliability: 'Excellent',
      coverage: '220+ Countries',
      avgDelivery: '2.1 days',
      priceRange: '$45-125',
      strengths: ['Speed', 'Premium Service', 'Global Network', 'Technology'],
      contact: '+1-800-463-3339',
      description: 'Industry leader in express shipping with cutting-edge tracking technology.',
      features: ['Real-time tracking', 'Same-day delivery', 'International express', 'Customs clearance']
    },
    {
      id: 'dhl',
      name: 'DHL Express',
      logo: '✈️',
      tier: 'premium',
      deliveryScore: 94,
      reliability: 'Excellent',
      coverage: '190+ Countries',
      avgDelivery: '2.3 days',
      priceRange: '$35-110',
      strengths: ['International Focus', 'Customs Expertise', 'European Network', 'B2B Solutions'],
      contact: '+1-800-225-5345',
      description: 'World\'s leading international express service with unmatched global reach.',
      features: ['Door-to-door delivery', 'Express worldwide', 'Import/export solutions', 'Supply chain']
    },
    {
      id: 'ups',
      name: 'UPS',
      logo: '📦',
      tier: 'standard',
      deliveryScore: 89,
      reliability: 'Very Good',
      coverage: '180+ Countries',
      avgDelivery: '3.1 days',
      priceRange: '$25-105',
      strengths: ['Ground Network', 'Supply Chain', 'Logistics', 'Cost Effective'],
      contact: '+1-800-742-5877',
      description: 'Comprehensive logistics solutions with robust ground and air networks.',
      features: ['Ground shipping', 'Air freight', 'Logistics solutions', 'Package tracking']
    },
    {
      id: 'ems',
      name: 'India Post EMS',
      logo: '🏛️',
      tier: 'economy',
      deliveryScore: 82,
      reliability: 'Good',
      coverage: '200+ Countries',
      avgDelivery: '5.2 days',
      priceRange: '$8-35',
      strengths: ['Cost Effective', 'Government Backed', 'Wide Reach', 'Local Expertise'],
      contact: '+91-1800-266-6868',
      description: 'Official postal service with extensive domestic and international reach.',
      features: ['Registered post', 'Speed post', 'International mail', 'COD services']
    },
    {
      id: 'aramex',
      name: 'Aramex',
      logo: '🌍',
      tier: 'standard',
      deliveryScore: 87,
      reliability: 'Very Good',
      coverage: '240+ Countries',
      avgDelivery: '3.8 days',
      priceRange: '$20-70',
      strengths: ['Middle East Expert', 'Emerging Markets', 'Flexibility', 'Regional Focus'],
      contact: '+971-600-554-000',
      description: 'Leading provider for Middle East and emerging markets with flexible solutions.',
      features: ['Express delivery', 'Freight forwarding', 'E-commerce solutions', 'Cash on delivery']
    },
    {
      id: 'tnt',
      name: 'TNT Express',
      logo: '⚡',
      tier: 'standard',
      deliveryScore: 85,
      reliability: 'Good',
      coverage: '200+ Countries',
      avgDelivery: '4.1 days',
      priceRange: '$25-90',
      strengths: ['European Strength', 'Time Definite', 'Industry Focus', 'B2B Solutions'],
      contact: '+31-88-393-9393',
      description: 'European-focused express delivery with specialized industry solutions.',
      features: ['Time-definite delivery', 'European network', 'B2B solutions', 'Express services']
    }
  ];

  const shippingMethods = [
    {
      id: 'express',
      name: 'Express',
      icon: Zap,
      gradient: 'from-red-500 via-pink-500 to-rose-600',
      time: '1-3 Days',
      description: 'Lightning-fast delivery',
      partners: ['fedex', 'dhl', 'ups']
    },
    {
      id: 'standard',
      name: 'Standard',
      icon: Package,
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
      time: '3-8 Days',
      description: 'Balanced speed & cost',
      partners: ['fedex', 'dhl', 'ups', 'aramex', 'tnt']
    },
    {
      id: 'economy',
      name: 'Economy',
      icon: Ship,
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      time: '7-21 Days',
      description: 'Cost-effective shipping',
      partners: ['ems', 'aramex', 'tnt']
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getMethodPartners = (methodId) => {
    const method = shippingMethods.find(m => m.id === methodId);
    return method ? shippingPartners.filter(p => method.partners.includes(p.id)) : [];
  };

  const getTierColor = (tier) => {
    switch (tier) {
      case 'premium': return 'from-amber-400 to-yellow-500';
      case 'standard': return 'from-blue-400 to-indigo-500';
      case 'economy': return 'from-green-400 to-emerald-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getTierBadge = (tier) => {
    switch (tier) {
      case 'premium': return { color: 'bg-amber-100 text-amber-800', text: 'Premium' };
      case 'standard': return { color: 'bg-blue-100 text-blue-800', text: 'Standard' };
      case 'economy': return { color: 'bg-green-100 text-green-800', text: 'Economy' };
      default: return { color: 'bg-gray-100 text-gray-800', text: 'Basic' };
    }
  };

  const methodPartners = getMethodPartners(selectedMethod);

  return (
    <div className="min-h-screen bg-gradient-to-tl from-gray-100 via-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}


      {/* Geometric Pattern */}


      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 sm:px-6 pt-10 sm:pt-20">
          <div className={`text-left mb-8 sm:mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>


            <h2 className="text-1xl sm:text-3xl md:text-4xl xl:text-5xl font-light text-gray-900 mb-4 sm:mb-6 leading-tight">Our Shipping <span className=" bg-clip-text  text-amber-600">Pattners</span></h2>


            <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-4xl font-light mb-8">
              Partner with the world's most trusted logistics providers for seamless global jewelry delivery.
            </p>
          </div>
        </div>

        {/* Method Filter Bar */}
        <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-4">
                {shippingMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`flex items-center px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedMethod === method.id
                      ? `bg-gradient-to-r ${method.gradient} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    <method.icon className="w-4 h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">{method.name}</span>
                    <span className="sm:hidden">{method.name.slice(0, 3)}</span>
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <div className="text-sm text-gray-600">
                  {methodPartners.length} Partners
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 py-8">
          {/* Quick Stats */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-gray-200/50">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">98.7%</div>
              <div className="text-xs sm:text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-gray-200/50">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">240+</div>
              <div className="text-xs sm:text-sm text-gray-600">Countries</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-gray-200/50">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">2.5</div>
              <div className="text-xs sm:text-sm text-gray-600">Avg Days</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-gray-200/50">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-xs sm:text-sm text-gray-600">Support</div>
            </div>
          </div>

          {/* Partners Grid */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {methodPartners.map((partner, index) => (
                <div
                  key={partner.id}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Partner Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-2xl mr-4">
                          {partner.logo}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{partner.name}</h3>
                          <p className="text-sm text-gray-600">{partner.coverage}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getTierBadge(partner.tier).color}`}>
                          {getTierBadge(partner.tier).text}
                        </div>
                        <div className="text-lg font-bold text-gray-900 mt-1">{partner.deliveryScore}%</div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">{partner.description}</p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm font-bold text-gray-900">{partner.avgDelivery}</div>
                        <div className="text-xs text-gray-600">Avg Delivery</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm font-bold text-gray-900">{partner.priceRange}</div>
                        <div className="text-xs text-gray-600">Price Range</div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <div className="border-t border-gray-200/50">
                    <button
                      onClick={() => setExpandedPartner(expandedPartner === partner.id ? null : partner.id)}
                      className="w-full px-6 py-4 text-left hover:bg-gray-50/50 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">View Details</span>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${expandedPartner === partner.id ? 'rotate-180' : ''
                          }`} />
                      </div>
                    </button>

                    {expandedPartner === partner.id && (
                      <div className="px-6 pb-6 animate-fadeIn">
                        <div className="space-y-4">
                          {/* Strengths */}
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">Strengths</h4>
                            <div className="flex flex-wrap gap-2">
                              {partner.strengths.map((strength, idx) => (
                                <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                  {strength}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Features */}
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">Features</h4>
                            <div className="space-y-1">
                              {partner.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center text-sm">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  <span className="text-gray-700">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Contact */}
                          <div className="pt-4 border-t border-gray-200/50">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center text-sm text-gray-600">
                                <Phone className="w-4 h-4 mr-2" />
                                <span>{partner.contact}</span>
                              </div>
                              <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                                Get Quote
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ShippingPartners;