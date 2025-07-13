import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Award, 
  Shield, 
  CheckCircle, 
  Download, 
  Eye, 
  Globe, 
  Stamp,
  Scale,
  Lock,
  Star,
  ArrowRight,
  Sparkles,
  FileCheck,
  Crown,
  Diamond,
  BadgeCheck,
  Scroll,
  Building,
  ChevronRight,
  Clock,
  Users,
  Zap
} from 'lucide-react';

const ExportDocumentation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('certificates');
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [hoveredDoc, setHoveredDoc] = useState(null);

  const documentCategories = [
    {
      id: 'certificates',
      name: 'Certificates',
      icon: Award,
      color: 'from-amber-500 to-yellow-600',
      bgColor: 'from-amber-50 to-yellow-50',
      description: 'Authenticity and quality certifications',
      count: 4
    },
    {
      id: 'trade-docs',
      name: 'Trade Documents',
      icon: FileText,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50',
      description: 'Commercial and shipping documentation',
      count: 4
    },
    {
      id: 'compliance',
      name: 'Compliance',
      icon: BadgeCheck,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-50 to-indigo-50',
      description: 'Regulatory and compliance documents',
      count: 3
    },
    {
      id: 'customs',
      name: 'Customs',
      icon: Building,
      color: 'from-rose-500 to-pink-600',
      bgColor: 'from-rose-50 to-pink-50',
      description: 'Customs clearance documentation',
      count: 3
    }
  ];

  const documents = {
    certificates: [
      {
        id: 'coo',
        title: 'Certificate of Origin',
        description: 'Official document certifying the country of manufacture',
        icon: Globe,
        validity: 'Per Shipment',
        authority: 'Chamber of Commerce',
        processing: '2-3 days',
        features: ['Government authenticated', 'Embassy attested', 'Digitally signed'],
        premium: true,
        complexity: 'High'
      },
      {
        id: 'hallmark',
        title: 'Hallmark Certificate',
        description: 'Precious metal purity certification',
        icon: Crown,
        validity: 'Permanent',
        authority: 'Bureau of Indian Standards',
        processing: 'Instant',
        features: ['BIS certified', 'Purity guaranteed', 'Tamper-proof'],
        premium: true,
        complexity: 'Medium'
      },
      {
        id: 'gemstone',
        title: 'Gemstone Certificate',
        description: 'Detailed gemstone authenticity and grading',
        icon: Diamond,
        validity: 'Lifetime',
        authority: 'Certified Gemologists',
        processing: '5-7 days',
        features: ['Expert graded', 'Detailed analysis', 'International standards'],
        premium: false,
        complexity: 'High'
      },
      {
        id: 'quality',
        title: 'Quality Assurance',
        description: 'Manufacturing quality and craftsmanship certification',
        icon: Award,
        validity: '1 Year',
        authority: 'Internal QA Team',
        processing: '1 day',
        features: ['Craftsmanship verified', 'Quality tested', 'Warranty included'],
        premium: false,
        complexity: 'Low'
      }
    ],
    'trade-docs': [
      {
        id: 'commercial-invoice',
        title: 'Commercial Invoice',
        description: 'Detailed invoice for international trade',
        icon: FileText,
        validity: 'Per Transaction',
        authority: 'Company Issued',
        processing: 'Same day',
        features: ['Itemized billing', 'Currency conversion', 'Tax breakdown'],
        premium: false,
        complexity: 'Medium'
      },
      {
        id: 'packing-list',
        title: 'Packing List',
        description: 'Detailed inventory of packaged items',
        icon: FileCheck,
        validity: 'Per Shipment',
        authority: 'Shipping Department',
        processing: 'Same day',
        features: ['Item details', 'Weight & dimensions', 'Package count'],
        premium: false,
        complexity: 'Low'
      },
      {
        id: 'insurance',
        title: 'Insurance Certificate',
        description: 'Comprehensive shipping insurance coverage',
        icon: Shield,
        validity: 'Per Shipment',
        authority: 'Insurance Provider',
        processing: '1-2 days',
        features: ['Full coverage', 'Transit protection', 'Claim support'],
        premium: true,
        complexity: 'Medium'
      },
      {
        id: 'shipping-bill',
        title: 'Shipping Bill',
        description: 'Export declaration and shipping authorization',
        icon: Scroll,
        validity: 'Per Shipment',
        authority: 'Customs Authority',
        processing: '1-2 days',
        features: ['Export permit', 'Customs cleared', 'Shipping approved'],
        premium: false,
        complexity: 'High'
      }
    ],
    compliance: [
      {
        id: 'kp-certificate',
        title: 'Kimberley Process Certificate',
        description: 'Conflict-free diamond certification',
        icon: Diamond,
        validity: 'Per Shipment',
        authority: 'Kimberley Process',
        processing: '3-5 days',
        features: ['Conflict-free certified', 'Ethical sourcing', 'International compliance'],
        premium: true,
        complexity: 'High'
      },
      {
        id: 'environmental',
        title: 'Environmental Compliance',
        description: 'Eco-friendly manufacturing certification',
        icon: Globe,
        validity: '1 Year',
        authority: 'Environmental Agency',
        processing: '7-10 days',
        features: ['Sustainable practices', 'Eco-friendly', 'Carbon neutral'],
        premium: false,
        complexity: 'Medium'
      },
      {
        id: 'labor',
        title: 'Fair Labor Certificate',
        description: 'Ethical labor practices certification',
        icon: BadgeCheck,
        validity: '1 Year',
        authority: 'Labor Standards Board',
        processing: '5-7 days',
        features: ['Fair wages', 'Safe working conditions', 'Ethical practices'],
        premium: false,
        complexity: 'Medium'
      }
    ],
    customs: [
      {
        id: 'duty-drawback',
        title: 'Duty Drawback Certificate',
        description: 'Tax refund documentation for exports',
        icon: FileText,
        validity: 'Per Transaction',
        authority: 'Customs Department',
        processing: '3-5 days',
        features: ['Tax refund eligible', 'Customs approved', 'Export incentive'],
        premium: false,
        complexity: 'Medium'
      },
      {
        id: 'gst-refund',
        title: 'GST Refund Certificate',
        description: 'Goods and Services Tax refund documentation',
        icon: Scale,
        validity: 'Per Transaction',
        authority: 'Tax Department',
        processing: '5-7 days',
        features: ['GST refund', 'Tax compliance', 'Government approved'],
        premium: false,
        complexity: 'Medium'
      },
      {
        id: 'carnet',
        title: 'ATA Carnet',
        description: 'Temporary export/import documentation',
        icon: Stamp,
        validity: '1 Year',
        authority: 'International Chamber',
        processing: '7-10 days',
        features: ['Temporary exports', 'Multiple countries', 'Duty-free'],
        premium: true,
        complexity: 'High'
      }
    ]
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const activeCategoryData = documentCategories.find(cat => cat.id === activeCategory);
  const categoryDocuments = documents[activeCategory] || [];

  const handleDocumentClick = (document) => {
    setSelectedDocument(selectedDocument?.id === document.id ? null : document);
  };

  const getComplexityColor = (complexity) => {
    switch(complexity) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-amber-100/20 to-yellow-100/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-emerald-100/20 to-teal-100/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-r from-purple-100/20 to-indigo-100/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-600 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section with Unique Layout */}
          <div className={`mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Content */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-600 mr-4"></div>
                  <span className="text-sm font-medium text-gray-600 tracking-widest uppercase">Export Documentation</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-light text-gray-900 mb-6 leading-tight">
                  Complete Export
                  <span className="block font-extralight text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700">
                    Documentation Suite
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
                  Comprehensive documentation ensuring smooth customs clearance and compliance with international trade regulations.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="group bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-medium hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                    <span className="flex items-center justify-center">
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <button className="group bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
                    <span className="flex items-center justify-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Documentation Guide
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Column - Stats Cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 transform hover:-translate-y-2 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">14+</div>
                  <div className="text-sm text-gray-600">Document Types</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 transform hover:-translate-y-2 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 transform hover:-translate-y-2 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">24H</div>
                  <div className="text-sm text-gray-600">Processing</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 transform hover:-translate-y-2 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Authentic</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Navigation Layout */}
          <div className={`grid lg:grid-cols-4 gap-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            
            {/* Sidebar - Category Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Categories</h2>
                {documentCategories.map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200/50 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <category.icon className="w-5 h-5" />
                        <div>
                          <div className="font-medium">{category.name}</div>
                          <div className={`text-xs ${activeCategory === category.id ? 'text-white/80' : 'text-gray-500'}`}>
                            {category.count} documents
                          </div>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${activeCategory === category.id ? 'rotate-90' : ''}`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Category Header */}
              {activeCategoryData && (
                <div className="mb-8">
                  <div className={`bg-gradient-to-r ${activeCategoryData.bgColor} rounded-2xl p-6 shadow-lg border border-gray-200/50`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${activeCategoryData.color} flex items-center justify-center shadow-lg`}>
                          <activeCategoryData.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{activeCategoryData.name}</h3>
                          <p className="text-gray-600 text-sm">{activeCategoryData.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">{categoryDocuments.length}</div>
                        <div className="text-xs text-gray-600">Available</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Documents Masonry Grid */}
              <div className="space-y-6">
                {categoryDocuments.map((document, index) => (
                  <div
                    key={document.id}
                    onMouseEnter={() => setHoveredDoc(document.id)}
                    onMouseLeave={() => setHoveredDoc(null)}
                    onClick={() => handleDocumentClick(document)}
                    className={`relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group ${
                      selectedDocument?.id === document.id ? 'ring-2 ring-amber-400 shadow-2xl' : ''
                    } ${hoveredDoc === document.id ? 'scale-[1.02]' : ''}`}
                  >
                    {/* Document Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${activeCategoryData.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          <document.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="text-lg font-semibold text-gray-900">{document.title}</h4>
                            {document.premium && (
                              <Crown className="w-4 h-4 text-amber-500" />
                            )}
                          </div>
                          <p className="text-gray-600 text-sm">{document.description}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(document.complexity)}`}>
                        {document.complexity}
                      </span>
                    </div>

                    {/* Document Info Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Clock className="w-4 h-4 text-gray-500 mx-auto mb-1" />
                        <div className="text-xs text-gray-500">Processing</div>
                        <div className="text-sm font-medium text-gray-900">{document.processing}</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Zap className="w-4 h-4 text-gray-500 mx-auto mb-1" />
                        <div className="text-xs text-gray-500">Validity</div>
                        <div className="text-sm font-medium text-gray-900">{document.validity}</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-4 h-4 text-gray-500 mx-auto mb-1" />
                        <div className="text-xs text-gray-500">Authority</div>
                        <div className="text-sm font-medium text-gray-900">{document.authority.split(' ')[0]}</div>
                      </div>
                    </div>

                    {/* Features Pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {document.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-amber-100 text-amber-800">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <button className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-lg hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 text-sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                      <button className="flex-1 flex items-center justify-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 text-sm">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </button>
                    </div>

                    {/* Expanded Content */}
                    {selectedDocument?.id === document.id && (
                      <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-gray-900 mb-3">Complete Feature Set</h5>
                            <ul className="space-y-2">
                              {document.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-sm text-gray-600">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-gray-900 mb-3">Document Details</h5>
                            <div className="space-y-3 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Issuing Authority:</span>
                                <span className="font-medium text-gray-900">{document.authority}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Processing Time:</span>
                                <span className="font-medium text-gray-900">{document.processing}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Validity Period:</span>
                                <span className="font-medium text-gray-900">{document.validity}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Hover Indicator */}
                    <div className="absolute top-4 right-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {selectedDocument?.id === document.id ? (
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ExportDocumentation;