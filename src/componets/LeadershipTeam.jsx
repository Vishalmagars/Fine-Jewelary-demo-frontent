import React, { useState, useEffect, useRef } from 'react';
import { 
  Crown, 
  Award, 
  Globe, 
  Users, 
  Linkedin, 
  Mail, 
  Phone,
  Star,
  Gem,
  Target,
  Heart,
  Sparkles,
  ChevronRight,
  Quote,
  TrendingUp,
  Eye,
  Zap,
  Shield,
  ChevronDown,
  Play,
  Pause
} from 'lucide-react';

const LeadershipTeam = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLeader, setActiveLeader] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const sectionRef = useRef(null);

  const leadership = [
    {
      name: "Rajesh Patel",
      position: "Founder & CEO",
      experience: "25+ Years",
      category: "executive",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Visionary leader who founded the company with a passion for fine jewelry craftsmanship. Under his guidance, we've grown from a small family business to a global jewelry exporter.",
      specialties: ["Strategic Vision", "Export Excellence", "Quality Assurance"],
      achievements: [
        "Built 50+ international partnerships",
        "Achieved ISO certification standards",
        "Pioneered innovative design techniques"
      ],
      quote: "Every piece of jewelry tells a story. Our mission is to make that story extraordinary.",
      contact: {
        email: "rajesh@company.com",
        phone: "+91 98765 43210",
        linkedin: "rajesh-patel-jewelry"
      }
    },
    {
      name: "Priya Sharma",
      position: "Chief Design Officer",
      experience: "18+ Years",
      category: "creative",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Award-winning designer bringing creativity and innovation to every collection. Her artistic vision has shaped our signature style and contemporary appeal.",
      specialties: ["Creative Design", "Trend Forecasting", "Product Innovation"],
      achievements: [
        "Winner of International Design Award 2023",
        "Created 500+ unique designs",
        "Led digital transformation initiatives"
      ],
      quote: "Design is not just what it looks like – design is how it makes you feel.",
      contact: {
        email: "priya@company.com",
        phone: "+91 98765 43211",
        linkedin: "priya-sharma-designer"
      }
    },
    {
      name: "Michael Chen",
      position: "Head of International Operations",
      experience: "20+ Years",
      category: "operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Global operations expert who has established our presence in over 50 countries. His expertise in international trade has been instrumental in our global expansion.",
      specialties: ["Global Strategy", "Supply Chain", "Market Expansion"],
      achievements: [
        "Expanded to 50+ countries",
        "Established 200+ retail partnerships",
        "Optimized global supply chain"
      ],
      quote: "Excellence in operations creates the foundation for extraordinary customer experiences.",
      contact: {
        email: "michael@company.com",
        phone: "+91 98765 43212",
        linkedin: "michael-chen-operations"
      }
    },
    {
      name: "Aisha Khan",
      position: "Chief Quality Officer",
      experience: "15+ Years",
      category: "quality",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Quality assurance expert ensuring every piece meets the highest standards. Her meticulous attention to detail has earned us certifications and customer trust worldwide.",
      specialties: ["Quality Control", "Certification", "Process Optimization"],
      achievements: [
        "Achieved 99.9% quality standards",
        "Implemented ISO quality systems",
        "Reduced defects by 95%"
      ],
      quote: "Quality is never an accident; it is always the result of intelligent effort.",
      contact: {
        email: "aisha@company.com",
        phone: "+91 98765 43213",
        linkedin: "aisha-khan-quality"
      }
    },
    {
      name: "David Rodriguez",
      position: "Head of Innovation",
      experience: "12+ Years",
      category: "innovation",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Technology innovator driving digital transformation in jewelry manufacturing. His expertise in 3D modeling and automation has revolutionized our production processes.",
      specialties: ["Digital Innovation", "3D Technology", "Process Automation"],
      achievements: [
        "Implemented 3D printing solutions",
        "Reduced production time by 40%",
        "Developed virtual try-on technology"
      ],
      quote: "Innovation is the bridge between traditional craftsmanship and modern excellence.",
      contact: {
        email: "david@company.com",
        phone: "+91 98765 43214",
        linkedin: "david-rodriguez-innovation"
      }
    },
    {
      name: "Sarah Williams",
      position: "Head of Sustainability",
      experience: "10+ Years",
      category: "sustainability",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Sustainability champion leading our environmental initiatives. Her commitment to ethical practices has made us a pioneer in responsible jewelry manufacturing.",
      specialties: ["Sustainable Practices", "Ethical Sourcing", "Environmental Impact"],
      achievements: [
        "Achieved carbon-neutral operations",
        "Established ethical sourcing network",
        "Reduced waste by 80%"
      ],
      quote: "Sustainability is not just our responsibility – it's our legacy for future generations.",
      contact: {
        email: "sarah@company.com",
        phone: "+91 98765 43215",
        linkedin: "sarah-williams-sustainability"
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All', icon: <Users className="w-4 h-4" /> },
    { id: 'executive', label: 'Executive', icon: <Crown className="w-4 h-4" /> },
    { id: 'creative', label: 'Creative', icon: <Gem className="w-4 h-4" /> },
    { id: 'operations', label: 'Operations', icon: <Globe className="w-4 h-4" /> },
    { id: 'quality', label: 'Quality', icon: <Award className="w-4 h-4" /> },
    { id: 'innovation', label: 'Innovation', icon: <Zap className="w-4 h-4" /> },
    { id: 'sustainability', label: 'Sustainability', icon: <Heart className="w-4 h-4" /> }
  ];

  const filteredLeadership = selectedCategory === 'all' 
    ? leadership 
    : leadership.filter(leader => leader.category === selectedCategory);

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

  return (
    <div className="py-16 bg-gradient-to-br from-amber-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-20 animate-float"
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
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-amber-500 mr-2" />
              <span className="text-sm font-medium text-gray-600 tracking-widest uppercase">Leadership Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Meet Our 
              <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600">
                Leaders
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals driving innovation and excellence in jewelry craftsmanship
            </p>
          </div>

          {/* Category Filter */}
          

          {/* Featured Leader */}
          <div className={`mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-200/50">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="relative">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={filteredLeadership[0]?.image} 
                      alt={filteredLeadership[0]?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full p-2">
                    <Crown className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="mb-4">
                    <h3 className="text-2xl font-light text-gray-900 mb-1">
                      {filteredLeadership[0]?.name}
                    </h3>
                    <p className="text-amber-600 font-medium mb-2">
                      {filteredLeadership[0]?.position}
                    </p>
                    <div className="flex items-center text-gray-600 mb-3">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      <span className="text-sm">{filteredLeadership[0]?.experience}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Quote className="w-6 h-6 text-amber-500 mb-2" />
                    <blockquote className="text-gray-700 italic text-sm leading-relaxed">
                      "{filteredLeadership[0]?.quote}"
                    </blockquote>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {filteredLeadership[0]?.bio}
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <a href={`mailto:${filteredLeadership[0]?.contact.email}`} className="bg-amber-500 text-white p-2 rounded-lg hover:bg-amber-600 transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                    <a href={`https://linkedin.com/in/${filteredLeadership[0]?.contact.linkedin}`} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Grid */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLeadership.slice(1).map((leader, index) => (
                <div 
                  key={index + 1}
                  className="group bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onMouseEnter={() => setHoveredCard(index + 1)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {hoveredCard === index + 1 && (
                        <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center">
                          <div className="flex space-x-1">
                            <a href={`mailto:${leader.contact.email}`} className="bg-white/80 rounded-full p-1 hover:bg-white transition-colors">
                              <Mail className="w-3 h-3 text-gray-700" />
                            </a>
                            <a href={`https://linkedin.com/in/${leader.contact.linkedin}`} className="bg-white/80 rounded-full p-1 hover:bg-white transition-colors">
                              <Linkedin className="w-3 h-3 text-gray-700" />
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-medium text-gray-900 mb-1 truncate">{leader.name}</h4>
                      <p className="text-amber-600 font-medium text-sm mb-1 truncate">{leader.position}</p>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Star className="w-3 h-3 mr-1 text-yellow-500" />
                        <span className="text-xs">{leader.experience}</span>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                        {leader.bio}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="flex flex-wrap gap-1">
                      {leader.specialties.slice(0, 2).map((specialty, idx) => (
                        <span key={idx} className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-medium">
                          {specialty}
                        </span>
                      ))}
                      {leader.specialties.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          +{leader.specialties.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default LeadershipTeam;