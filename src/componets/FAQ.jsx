import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Globe, 
  Shield, 
  Clock, 
  Diamond, 
  Package, 
  CreditCard, 
  Truck, 
  Award, 
  Search,
  Sparkles,
  Star,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  Zap,
  Eye,
  Filter,
  X
} from 'lucide-react';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  const faqData = [
    {
      id: 1,
      question: 'What types of jewelry do you export?',
      shortAnswer: 'Fine jewelry including gold, silver, platinum, and precious stones.',
      fullAnswer: 'We specialize in exporting an extensive range of fine jewelry that meets the highest international standards. Our product portfolio includes exquisite gold jewelry ranging from 14k to 22k purity, elegant silver pieces crafted from 925 sterling silver, and luxurious platinum jewelry for discerning customers. Our precious stone collection features certified diamonds, emeralds, rubies, sapphires, and semi-precious stones sourced from trusted suppliers worldwide.\n\nOur manufacturing capabilities span traditional handcrafted pieces that showcase centuries-old Indian artistry, as well as contemporary designs created using cutting-edge CAD/CAM technology. We maintain over 500 unique designs in our portfolio, constantly updating our collection to align with global fashion trends and seasonal demands. Each piece undergoes rigorous quality control to ensure it meets international standards.\n\nFrom delicate everyday wear to statement pieces for special occasions, our diverse range caters to various market segments including luxury retailers, jewelry chains, and boutique stores across different price points. We also offer private label manufacturing services, allowing our clients to develop their own exclusive jewelry lines under their brand names.',
      category: 'general',
      icon: Diamond,
      color: 'from-amber-400 to-yellow-500',
      complexity: 'basic',
      tags: ['jewelry', 'gold', 'silver', 'diamonds', 'export'],
      featured: true
    },
    {
      id: 2,
      question: 'Which countries do you export to?',
      shortAnswer: 'Over 50 countries including USA, Canada, UK, Australia, UAE.',
      fullAnswer: 'We export to over 50 countries worldwide including USA, Canada, UK, Australia, UAE, Singapore, and most European nations. Our extensive network ensures smooth customs clearance and compliance with local regulations in each destination country.',
      category: 'shipping',
      icon: Globe,
      color: 'from-blue-400 to-cyan-500',
      complexity: 'intermediate',
      tags: ['countries', 'export', 'international', 'shipping'],
      featured: false
    },
    {
      id: 3,
      question: 'What is your minimum order quantity?',
      shortAnswer: 'Varies by product: Gold $10k, Silver $5k, Custom $15k.',
      fullAnswer: 'Our minimum order quantity structure is designed to accommodate various business sizes while maintaining operational efficiency. For gold jewelry, we require a minimum order value of $10,000, which typically translates to 50-100 pieces depending on the complexity and weight of the items. Silver jewelry has a lower threshold at $5,000 minimum order value, allowing smaller retailers to access our premium collection. Custom designs require a minimum investment of $15,000 due to the specialized tooling and artisan time involved.\n\nWe understand that different markets have varying requirements, which is why we offer flexible terms for established long-term partnerships. Volume discounts are available for orders exceeding $50,000, with additional benefits for annual contracts. Our tiered pricing structure ensures that larger orders receive better unit costs, helping our clients maintain competitive pricing in their respective markets.\n\nFor new clients, we offer a sample program where you can order smaller quantities initially to test market response. This graduated approach allows businesses to build their relationship with us progressively while minimizing initial investment risks.',
      category: 'ordering',
      icon: Package,
      color: 'from-emerald-400 to-teal-500',
      complexity: 'basic',
      tags: ['minimum', 'order', 'quantity', 'pricing'],
      featured: true
    },
    {
      id: 4,
      question: 'How do you ensure quality standards?',
      shortAnswer: 'BIS hallmarking, certified gemologists, international standards.',
      fullAnswer: 'We follow international quality standards including BIS hallmarking for gold and silver, diamond grading by certified gemologists, and compliance with international jewelry standards. All products undergo rigorous quality checks through our 5-stage quality control process.',
      category: 'quality',
      icon: Award,
      color: 'from-purple-400 to-indigo-500',
      complexity: 'advanced',
      tags: ['quality', 'standards', 'certification', 'hallmark'],
      featured: false
    },
    {
      id: 5,
      question: 'What payment methods do you accept?',
      shortAnswer: 'Bank transfers, L/C, and credit terms for established clients.',
      fullAnswer: 'We maintain a comprehensive payment system designed to accommodate international trade requirements while ensuring security for both parties. Our primary payment method is bank wire transfer through established international banking channels, which provides full traceability and security for high-value jewelry transactions. We also accept Letters of Credit (L/C) from reputable banks, which is particularly popular among our larger institutional clients as it provides additional security guarantees.\n\nFor established clients with proven track records, we offer flexible credit terms ranging from 30 to 90 days, subject to credit evaluation and approval. This facility has helped many of our long-term partners manage their cash flow more effectively while maintaining consistent inventory levels. We also provide early payment discounts for clients who settle invoices within 10 days of delivery.\n\nRecognizing the evolving financial landscape, we have recently introduced cryptocurrency payment options for tech-savvy international buyers, accepting major cryptocurrencies like Bitcoin and Ethereum through secure blockchain transactions. All payments are processed with proper documentation to ensure compliance with international trade regulations and anti-money laundering requirements.',
      category: 'payment',
      icon: CreditCard,
      color: 'from-rose-400 to-pink-500',
      complexity: 'intermediate',
      tags: ['payment', 'methods', 'banking', 'credit'],
      featured: true
    },
    {
      id: 6,
      question: 'What is your typical lead time?',
      shortAnswer: 'Standard orders: 15-20 days, Custom designs: 25-30 days.',
      fullAnswer: 'Lead times vary by product complexity and quantity. Standard jewelry orders take 15-20 business days, while custom designs may take 25-30 days. Rush orders can be accommodated with additional charges, and we provide real-time tracking for all orders.',
      category: 'ordering',
      icon: Clock,
      color: 'from-orange-400 to-red-500',
      complexity: 'basic',
      tags: ['lead time', 'delivery', 'custom', 'rush'],
      featured: false
    },
    {
      id: 7,
      question: 'Do you provide shipping insurance?',
      shortAnswer: 'Yes, full insurance coverage included with all shipments.',
      fullAnswer: 'Yes, all shipments are fully insured for their declared value. We work with reputable insurance providers to ensure complete coverage during transit. Claims are processed quickly in case of any issues, and we maintain a 99.8% safe delivery rate.',
      category: 'shipping',
      icon: Shield,
      color: 'from-green-400 to-emerald-500',
      complexity: 'basic',
      tags: ['insurance', 'shipping', 'coverage', 'protection'],
      featured: false
    },
    {
      id: 8,
      question: 'Can you create custom designs?',
      shortAnswer: 'Yes, full custom design services with skilled artisans.',
      fullAnswer: 'Our custom design services represent the pinnacle of our craftsmanship capabilities, combining traditional Indian jewelry-making techniques with modern design technology. We employ a team of skilled artisans who have inherited generations of jewelry-making knowledge, working alongside qualified designers who are proficient in advanced CAD (Computer-Aided Design) software. This unique combination allows us to create truly exceptional pieces that meet exact specifications while maintaining the highest quality standards.\n\nThe custom design process begins with detailed consultations where we understand your vision, target market, and specific requirements. Our designers then create detailed 3D renderings and technical drawings, allowing you to visualize the final product before production begins. We can incorporate specific gemstones, modify existing designs, create entirely new concepts, or even replicate vintage pieces with modern manufacturing techniques.\n\nOur custom capabilities extend beyond individual pieces to complete jewelry collections, including matching sets, seasonal collections, and branded jewelry lines. We also offer services like custom engraving, personalized packaging, and brand-specific quality certifications. The typical timeline for custom designs is 25-30 days, though complex pieces may require additional time to ensure perfection in every detail.',
      category: 'general',
      icon: Sparkles,
      color: 'from-violet-400 to-purple-500',
      complexity: 'advanced',
      tags: ['custom', 'design', 'artisans', 'CAD'],
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All', count: faqData.length },
    { id: 'general', name: 'General', count: faqData.filter(f => f.category === 'general').length },
    { id: 'ordering', name: 'Ordering', count: faqData.filter(f => f.category === 'ordering').length },
    { id: 'shipping', name: 'Shipping', count: faqData.filter(f => f.category === 'shipping').length },
    { id: 'quality', name: 'Quality', count: faqData.filter(f => f.category === 'quality').length },
    { id: 'payment', name: 'Payment', count: faqData.filter(f => f.category === 'payment').length }
  ];

  const complexityLevels = [
    { id: 'basic', name: 'Basic', color: 'bg-green-100 text-green-800' },
    { id: 'intermediate', name: 'Intermediate', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'advanced', name: 'Advanced', color: 'bg-red-100 text-red-800' }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.fullAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeFilter === 'all' || faq.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  const featuredFAQs = filteredFAQs.filter(faq => faq.featured);
  const regularFAQs = filteredFAQs.filter(faq => !faq.featured);

  const handleFAQClick = (faq) => {
    setSelectedFAQ(selectedFAQ?.id === faq.id ? null : faq);
  };

  const renderFullAnswer = (answer) => {
    return answer.split('\n\n').map((paragraph, index) => (
      <p key={index} className="text-gray-700 leading-relaxed mb-4">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 relative overflow-hidden">
      {/* Unique Hexagonal Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + (i * 1)}s`
            }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 transform rotate-45"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header - Left Aligned */}
          <div className={`text-left mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl mr-6">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-2">
                  Knowledge Center
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  Discover everything about our fine jewelry export services
                </p>
              </div>
            </div>
          </div>

          {/* Control Panel */}
          <div className={`mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                
                {/* Search with Enhanced Design */}
                <div className="relative flex-1 lg:max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search knowledge base..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all duration-300 bg-white"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveFilter(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeFilter === category.id
                          ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                  >
                    <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                    </div>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                  >
                    <div className="w-4 h-4 space-y-1">
                      <div className="bg-current h-0.5 rounded"></div>
                      <div className="bg-current h-0.5 rounded"></div>
                      <div className="bg-current h-0.5 rounded"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Questions - Now with dropdown behavior */}
          {featuredFAQs.length > 0 && (
            <div className={`mb-12 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="flex items-center mb-6">
                <Star className="w-6 h-6 text-amber-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Featured Questions</h2>
              </div>
              <div className="space-y-4">
                {featuredFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 overflow-hidden relative"
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${faq.color}`}></div>
                    
                    <button
                      onClick={() => handleFAQClick(faq)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${faq.color} flex items-center justify-center shadow-md`}>
                          <faq.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{faq.question}</h3>
                          <p className="text-gray-600 text-sm">{faq.shortAnswer}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-full text-xs font-medium">
                          Featured
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${complexityLevels.find(c => c.id === faq.complexity)?.color}`}>
                          {complexityLevels.find(c => c.id === faq.complexity)?.name}
                        </span>
                        {selectedFAQ?.id === faq.id ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>
                    
                    {selectedFAQ?.id === faq.id && (
                      <div className="px-6 pb-6 animate-fade-in">
                        <div className="pl-16 space-y-4">
                          {renderFullAnswer(faq.fullAnswer)}
                          <div className="flex flex-wrap gap-2">
                            {faq.tags.map((tag, index) => (
                              <span key={index} className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Main FAQ Display */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {viewMode === 'grid' ? (
              <div className="grid md:grid-cols-2 gap-6">
                {regularFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    onClick={() => handleFAQClick(faq)}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${faq.color} rounded-bl-full opacity-10`}></div>
                    <div className="flex items-start space-x-4 relative">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${faq.color} flex items-center justify-center shadow-md`}>
                        <faq.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-600 text-sm mb-4">{faq.shortAnswer}</p>
                        {selectedFAQ?.id === faq.id && (
                          <div className="animate-fade-in">
                            {renderFullAnswer(faq.fullAnswer)}
                            <div className="flex flex-wrap gap-2">
                              {faq.tags.map((tag, index) => (
                                <span key={index} className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {regularFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 overflow-hidden"
                  >
                    <button
                      onClick={() => handleFAQClick(faq)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${faq.color} flex items-center justify-center shadow-md`}>
                          <faq.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                          <p className="text-gray-600 text-sm">{faq.shortAnswer}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${complexityLevels.find(c => c.id === faq.complexity)?.color}`}>
                          {complexityLevels.find(c => c.id === faq.complexity)?.name}
                        </span>
                        {selectedFAQ?.id === faq.id ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>
                    
                    {selectedFAQ?.id === faq.id && (
                      <div className="px-6 pb-6 animate-fade-in">
                        <div className="pl-14 space-y-4">
                          {renderFullAnswer(faq.fullAnswer)}
                          <div className="flex flex-wrap gap-2">
                            {faq.tags.map((tag, index) => (
                              <span key={index} className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* No Results State */}
          {filteredFAQs.length === 0 && (
            <div className="text-center py-16">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Results Found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms or browse different categories.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-lg font-medium hover:from-amber-600 hover:to-yellow-700 transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Contact Support Section */}
          <div className={`mt-16 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl p-8 shadow-2xl transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-light text-white mb-4">Need Personal Assistance?</h3>
              <p className="text-amber-100 text-lg max-w-2xl mx-auto mb-8">
                Our jewelry export specialists are ready to provide personalized guidance for your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="group bg-white text-amber-600 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                  <span className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule a Call
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-amber-600 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Support
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-10px) rotate(5deg);
    }
  }

  .animate-float {
    animation: float 10s ease-in-out infinite;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }
`}</style>
 </div>
  );
};

export default FAQ;