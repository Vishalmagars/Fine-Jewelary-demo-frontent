import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Plane, 
  Ship, 
  Truck, 
  Clock, 
  Shield, 
  Package, 
  MapPin, 
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  AlertCircle,
  Calendar,
  DollarSign,
  Award
} from 'lucide-react';

const ExportShippingInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeRegion, setActiveRegion] = useState('north-america');
  const [selectedCountry, setSelectedCountry] = useState(null);

  const exportRegions = [
    {
      id: 'north-america',
      name: 'North America',
      icon: '🌎',
      color: 'from-amber-500 to-yellow-600',
      bgColor: 'from-amber-50 to-yellow-50',
      countries: [
        { name: 'United States', code: 'US', flag: '🇺🇸', delivery: '5-7 days', shipping: '$25-45', popular: true },
        { name: 'Canada', code: 'CA', flag: '🇨🇦', delivery: '6-8 days', shipping: '$30-50', popular: true },
        { name: 'Mexico', code: 'MX', flag: '🇲🇽', delivery: '7-10 days', shipping: '$35-55', popular: false }
      ],
      stats: { orders: '2,500+', value: '$12M+', satisfaction: '98%' },
      description: 'Our largest market with premium delivery services and established trade partnerships.'
    },
    {
      id: 'europe',
      name: 'Europe',
      icon: '🌍',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'from-rose-50 to-pink-50',
      countries: [
        { name: 'United Kingdom', code: 'GB', flag: '🇬🇧', delivery: '4-6 days', shipping: '$30-50', popular: true },
        { name: 'Germany', code: 'DE', flag: '🇩🇪', delivery: '5-7 days', shipping: '$28-48', popular: true },
        { name: 'France', code: 'FR', flag: '🇫🇷', delivery: '5-7 days', shipping: '$28-48', popular: true },
        { name: 'Italy', code: 'IT', flag: '🇮🇹', delivery: '6-8 days', shipping: '$32-52', popular: false },
        { name: 'Spain', code: 'ES', flag: '🇪🇸', delivery: '6-8 days', shipping: '$32-52', popular: false },
        { name: 'Netherlands', code: 'NL', flag: '🇳🇱', delivery: '5-7 days', shipping: '$30-50', popular: false },
        { name: 'Switzerland', code: 'CH', flag: '🇨🇭', delivery: '5-7 days', shipping: '$35-55', popular: false },
        { name: 'Austria', code: 'AT', flag: '🇦🇹', delivery: '6-8 days', shipping: '$32-52', popular: false }
      ],
      stats: { orders: '3,200+', value: '$18M+', satisfaction: '97%' },
      description: 'Sophisticated European markets with stringent quality standards and luxury preferences.'
    },
    {
      id: 'middle-east',
      name: 'Middle East',
      icon: '🏛️',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-50 to-indigo-50',
      countries: [
        { name: 'United Arab Emirates', code: 'AE', flag: '🇦🇪', delivery: '3-5 days', shipping: '$20-35', popular: true },
        { name: 'Saudi Arabia', code: 'SA', flag: '🇸🇦', delivery: '4-6 days', shipping: '$25-40', popular: true },
        { name: 'Qatar', code: 'QA', flag: '🇶🇦', delivery: '3-5 days', shipping: '$22-38', popular: false },
        { name: 'Kuwait', code: 'KW', flag: '🇰🇼', delivery: '4-6 days', shipping: '$25-40', popular: false },
        { name: 'Bahrain', code: 'BH', flag: '🇧🇭', delivery: '4-6 days', shipping: '$25-40', popular: false },
        { name: 'Oman', code: 'OM', flag: '🇴🇲', delivery: '5-7 days', shipping: '$30-45', popular: false }
      ],
      stats: { orders: '1,800+', value: '$22M+', satisfaction: '99%' },
      description: 'High-value luxury markets with appreciation for premium craftsmanship and heritage designs.'
    },
    {
      id: 'asia-pacific',
      name: 'Asia Pacific',
      icon: '🌏',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50',
      countries: [
        { name: 'Australia', code: 'AU', flag: '🇦🇺', delivery: '5-7 days', shipping: '$35-55', popular: true },
        { name: 'Japan', code: 'JP', flag: '🇯🇵', delivery: '4-6 days', shipping: '$30-50', popular: true },
        { name: 'Singapore', code: 'SG', flag: '🇸🇬', delivery: '3-5 days', shipping: '$25-40', popular: true },
        { name: 'Hong Kong', code: 'HK', flag: '🇭🇰', delivery: '3-5 days', shipping: '$25-40', popular: false },
        { name: 'South Korea', code: 'KR', flag: '🇰🇷', delivery: '4-6 days', shipping: '$28-45', popular: false },
        { name: 'New Zealand', code: 'NZ', flag: '🇳🇿', delivery: '6-8 days', shipping: '$40-60', popular: false },
        { name: 'Malaysia', code: 'MY', flag: '🇲🇾', delivery: '4-6 days', shipping: '$22-38', popular: false },
        { name: 'Thailand', code: 'TH', flag: '🇹🇭', delivery: '4-6 days', shipping: '$22-38', popular: false }
      ],
      stats: { orders: '4,100+', value: '$25M+', satisfaction: '96%' },
      description: 'Growing markets with increasing demand for authentic Indian jewelry and modern designs.'
    },
    {
      id: 'south-america',
      name: 'South America',
      icon: '🌎',
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50',
      countries: [
        { name: 'Brazil', code: 'BR', flag: '🇧🇷', delivery: '8-12 days', shipping: '$45-65', popular: true },
        { name: 'Argentina', code: 'AR', flag: '🇦🇷', delivery: '9-13 days', shipping: '$50-70', popular: false },
        { name: 'Chile', code: 'CL', flag: '🇨🇱', delivery: '8-12 days', shipping: '$48-68', popular: false },
        { name: 'Colombia', code: 'CO', flag: '🇨🇴', delivery: '8-12 days', shipping: '$45-65', popular: false },
        { name: 'Peru', code: 'PE', flag: '🇵🇪', delivery: '9-13 days', shipping: '$50-70', popular: false }
      ],
      stats: { orders: '800+', value: '$5M+', satisfaction: '95%' },
      description: 'Emerging markets with growing appreciation for fine jewelry and cultural significance.'
    }
  ];

  const shippingMethods = [
    {
      name: 'Express Air',
      icon: Plane,
      time: '3-7 days',
      cost: '$25-65',
      features: ['Fastest delivery', 'Real-time tracking', 'Insurance included'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Standard Air',
      icon: Plane,
      time: '5-10 days',
      cost: '$15-45',
      features: ['Reliable delivery', 'Basic tracking', 'Cost-effective'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Sea Freight',
      icon: Ship,
      time: '15-30 days',
      cost: '$8-25',
      features: ['Bulk orders', 'Economical', 'Eco-friendly'],
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const exportServices = [
    { icon: Shield, title: 'Customs Clearance', desc: 'Complete documentation and customs handling' },
    { icon: Package, title: 'Secure Packaging', desc: 'Premium packaging with tamper-evident seals' },
    { icon: Award, title: 'Quality Certification', desc: 'Hallmark and authenticity certificates' },
    { icon: Clock, title: 'Order Tracking', desc: 'Real-time shipment tracking and updates' }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const activeRegionData = exportRegions.find(region => region.id === activeRegion);

  const handleCountryClick = (country) => {
    setSelectedCountry(selectedCountry?.code === country.code ? null : country);
  };

  const handleRegionChange = (regionId) => {
    setActiveRegion(regionId);
    setSelectedCountry(null); // Reset selected country when changing regions
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-left mb-10">
           
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
About 
              <span className="block font-light text-amber-600">
                Shipping
              </span>
            </h1>
            
            <div className="max-w-7xl mx-auto space-y-4 text-gray-600">
              <p className="text-base sm:text-lg leading-relaxed">
                We specialize in secure international shipping of premium jewelry to over 50 countries worldwide. 
                Our comprehensive export services ensure your precious pieces reach you safely, complete with 
                authenticity certificates and full insurance coverage.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed">
                Every shipment includes professional packaging, complete customs documentation, and real-time 
                tracking. We work with trusted logistics partners to provide reliable delivery times and 
                competitive shipping rates across all major international markets.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed">
                Whether you're ordering a single piece or bulk quantities, our experienced export team handles 
                all regulatory requirements and provides dedicated customer support throughout the shipping process. 
                Experience hassle-free international jewelry delivery with our premium shipping services.
              </p>
            </div>
          </div>

          {/* Shipping Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {shippingMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center mb-4`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{method.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{method.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span className="text-sm">{method.cost}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {method.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Export Services */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {exportServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-lg border border-gray-100">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{service.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Regional Navigation */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">Export Regions & Countries</h2>
              <p className="text-gray-600">Select a region to view detailed shipping information</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
              {exportRegions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => handleRegionChange(region.id)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                    activeRegion === region.id
                      ? `bg-gradient-to-r ${region.color} text-white shadow-lg`
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <span className="mr-1 sm:mr-2">{region.icon}</span>
                  <span className="hidden sm:inline">{region.name}</span>
                  <span className="sm:hidden">{region.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Region Details - Fixed Height Container */}
          <div className="min-h-[600px] sm:min-h-[500px]">
            {activeRegionData && (
              <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-xl border border-gray-100 mb-2">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                  
                  {/* Region Info */}
                  <div className="lg:col-span-1 order-2 lg:order-1">
                    <div className={`bg-gradient-to-r ${activeRegionData.bgColor} rounded-xl p-4 sm:p-6`}>
                      <div className="flex items-center mb-4">
                        <span className="text-3xl sm:text-4xl mr-3">{activeRegionData.icon}</span>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{activeRegionData.name}</h3>
                          <p className="text-gray-600 text-sm mt-1">{activeRegionData.countries.length} Countries</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm mb-6">{activeRegionData.description}</p>
                      
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-base sm:text-lg font-semibold text-gray-900">{activeRegionData.stats.orders}</div>
                          <div className="text-xs text-gray-600">Orders</div>
                        </div>
                        <div>
                          <div className="text-base sm:text-lg font-semibold text-gray-900">{activeRegionData.stats.value}</div>
                          <div className="text-xs text-gray-600">Value</div>
                        </div>
                        <div>
                          <div className="text-base sm:text-lg font-semibold text-gray-900">{activeRegionData.stats.satisfaction}</div>
                          <div className="text-xs text-gray-600">Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Countries Grid */}
                  <div className="lg:col-span-2 order-1 lg:order-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {activeRegionData.countries.map((country) => (
                        <div
                          key={country.code}
                          onClick={() => handleCountryClick(country)}
                          className={`relative p-3 sm:p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                            selectedCountry?.code === country.code
                              ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300 shadow-lg'
                              : 'bg-gray-50 border border-gray-200 hover:shadow-md hover:bg-white'
                          }`}
                        >
                          {country.popular && (
                            <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                              <Star className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                            </div>
                          )}
                          
                          <div className="flex items-center mb-3">
                            <span className="text-xl sm:text-2xl mr-2 sm:mr-3">{country.flag}</span>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate">{country.name}</h4>
                              <p className="text-xs text-gray-600">{country.code}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center text-xs text-gray-600">
                              <Clock className="w-3 h-3 mr-1 flex-shrink-0" />
                              <span>{country.delivery}</span>
                            </div>
                            <div className="flex items-center text-xs text-gray-600">
                              <DollarSign className="w-3 h-3 mr-1 flex-shrink-0" />
                              <span>{country.shipping}</span>
                            </div>
                          </div>
                          
                          {selectedCountry?.code === country.code && (
                            <div className="mt-3 pt-3 border-t border-amber-200">
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-600">Click for quote</span>
                                <ArrowRight className="w-3 h-3 text-amber-600" />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Important Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-2">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 mr-3" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Shipping Requirements</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Minimum order value: $500 for international shipping</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>All jewelry includes authenticity certificates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Full insurance coverage included in shipping cost</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Customs documentation handled by our team</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Real-time tracking available for all shipments</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 mr-3" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Processing Times</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Order Processing</span>
                  <span className="text-sm font-medium text-gray-900">1-2 business days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Quality Check</span>
                  <span className="text-sm font-medium text-gray-900">1 business day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Packaging & Documentation</span>
                  <span className="text-sm font-medium text-gray-900">1 business day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Customs Clearance</span>
                  <span className="text-sm font-medium text-gray-900">1-3 business days</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">Total Processing</span>
                    <span className="text-sm font-semibold text-amber-600">4-7 business days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportShippingInfo;