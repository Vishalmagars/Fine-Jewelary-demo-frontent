import React, { useState, useEffect, useRef } from 'react';
import {
  Award,
  Shield,
  Globe,
  CheckCircle,
  Star,
  Gem,
  Eye,
  TrendingUp,
  Calendar,
  Download,
  FileText,
  Heart,
  Target,
  ChevronRight,
  BookOpen,
  Building,
  Medal,
  Briefcase,
  Zap,
  Lock,
  Sparkles
} from 'lucide-react';

const CertificationsAffiliations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const sectionRef = useRef(null);

  // Enhanced Heart component
  const Heart = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  const certifications = [
    {
      id: 1,
      name: "GIA Certified",
      fullName: "Gemological Institute of America",
      category: "gemology",
      description: "World's foremost authority on diamonds, colored stones, and pearls with over 90 years of expertise",
      validUntil: "2025-12-31",
      certNumber: "GIA-2024-JEX-001",
      driveLink: "https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0J/view?usp=sharing",
      downloadLink: "https://drive.google.com/uc?export=download&id=1A2B3C4D5E6F7G8H9I0J",
      verificationUrl: "https://verify.gia.edu/report-check?reportno=GIA-2024-JEX-001",
      icon: <Gem className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      status: "active",
      priority: "high",
      coverage: "Global"
    },
    {
      id: 2,
      name: "ISO 9001:2015",
      fullName: "International Organization for Standardization",
      category: "quality",
      description: "Premier Quality Management System certification ensuring consistent quality delivery and customer satisfaction",
      validUntil: "2026-03-15",
      certNumber: "ISO-9001-2024-JEX-002",
      driveLink: "https://drive.google.com/file/d/2B3C4D5E6F7G8H9I0J1K/view?usp=sharing",
      downloadLink: "https://drive.google.com/uc?export=download&id=2B3C4D5E6F7G8H9I0J1K",
      verificationUrl: "https://www.iso.org/certificate/ISO-9001-2024-JEX-002",
      icon: <Award className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      status: "active",
      priority: "high",
      coverage: "International"
    },
    {
      id: 3,
      name: "BIS Hallmarking",
      fullName: "Bureau of Indian Standards",
      category: "quality",
      description: "Mandatory government certification ensuring purity and quality standards for precious metals in India",
      validUntil: "2025-08-20",
      certNumber: "BIS-HM-2024-JEX-003",
      driveLink: "https://drive.google.com/file/d/3C4D5E6F7G8H9I0J1K2L/view?usp=sharing",
      downloadLink: "https://drive.google.com/uc?export=download&id=3C4D5E6F7G8H9I0J1K2L",
      verificationUrl: "https://bis.gov.in/verify-hallmark/BIS-HM-2024-JEX-003",
      icon: <Shield className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-600",
      status: "active",
      priority: "critical",
      coverage: "India"
    },
    {
      id: 4,
      name: "GJEPC Member",
      fullName: "Gem & Jewellery Export Promotion Council",
      category: "trade",
      description: "Premier apex body for promoting India's gem and jewelry exports with comprehensive trade facilitation",
      validUntil: "2025-12-31",
      certNumber: "GJEPC-2024-JEX-004",
      driveLink: "https://drive.google.com/file/d/4D5E6F7G8H9I0J1K2L3M/view?usp=sharing",
      downloadLink: "https://drive.google.com/uc?export=download&id=4D5E6F7G8H9I0J1K2L3M",
      verificationUrl: "https://gjepc.org/verify-membership/GJEPC-2024-JEX-004",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      status: "active",
      priority: "high",
      coverage: "International"
    },
    {
      id: 5,
      name: "RJC Certification",
      fullName: "Responsible Jewellery Council",
      category: "ethical",
      description: "Leading certification for ethical practices, responsible sourcing, and sustainable business operations",
      validUntil: "2026-01-10",
      certNumber: "RJC-2024-JEX-005",
      driveLink: "https://drive.google.com/file/d/5E6F7G8H9I0J1K2L3M4N/view?usp=sharing",
      downloadLink: "https://drive.google.com/uc?export=download&id=5E6F7G8H9I0J1K2L3M4N",
      verificationUrl: "https://www.responsiblejewellery.com/verify/RJC-2024-JEX-005",
      icon: <Heart className="w-8 h-8" />,
      color: "from-rose-500 to-rose-600",
      status: "active",
      priority: "high",
      coverage: "Global"
    },
    {
      id: 6,
      name: "Export Excellence Award",
      fullName: "Ministry of Commerce & Industry",
      category: "recognition",
      description: "Prestigious government recognition for outstanding export performance and contribution to national economy",
      validUntil: "2024-12-31",
      certNumber: "EEA-2024-JEX-006",
      driveLink: "https://drive.google.com/file/d/6F7G8H9I0J1K2L3M4N5O/view?usp=sharing",
      downloadLink: "https://drive.google.com/uc?export=download&id=6F7G8H9I0J1K2L3M4N5O",
      verificationUrl: "https://commerce.gov.in/verify-award/EEA-2024-JEX-006",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
      status: "active",
      priority: "medium",
      coverage: "National"
    },
    {
      id: 7,
      name: "Kimberley Process",
      fullName: "Kimberley Process Certification Scheme",
      category: "ethical",
      description: "International certification scheme preventing conflict diamonds from entering the legitimate trade",
      validUntil: "2025-12-31",
      certNumber: "KP-2024-JEX-007",
      driveLink: "https://drive.google.com/file/d/7G8H9I0J1K2L3M4N5O6P/view?usp=sharing",
      downloadLink: "https://drive.google.com/uc?export=download&id=7G8H9I0J1K2L3M4N5O6P",
      verificationUrl: "https://kimberleyprocess.com/verify/KP-2024-JEX-007",
      icon: <Shield className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600",
      status: "active",
      priority: "critical",
      coverage: "International"
    },
    {
      id: 8,
      name: "NABL Accreditation",
      fullName: "National Accreditation Board for Testing and Calibration Laboratories",
      category: "quality",
      description: "Premier accreditation for testing and calibration laboratories ensuring accuracy and reliability",
      validUntil: "2025-09-30",
      certNumber: "NABL-2024-JEX-008",
      driveLink: "https://drive.google.com/file/d/8H9I0J1K2L3M4N5O6P7Q/view?usp=sharing",
      downloadLink: "https://drive.google.com/uc?export=download&id=8H9I0J1K2L3M4N5O6P7Q",
      verificationUrl: "https://nabl-india.org/verify/NABL-2024-JEX-008",
      icon: <Target className="w-8 h-8" />,
      color: "from-teal-500 to-green-600",
      status: "active",
      priority: "high",
      coverage: "International"
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: <Award className="w-5 h-5" />, count: certifications.length },
    { id: 'gemology', name: 'Gemology', icon: <Gem className="w-5 h-5" />, count: certifications.filter(c => c.category === 'gemology').length },
    { id: 'quality', name: 'Quality', icon: <Shield className="w-5 h-5" />, count: certifications.filter(c => c.category === 'quality').length },
    { id: 'trade', name: 'Trade', icon: <Globe className="w-5 h-5" />, count: certifications.filter(c => c.category === 'trade').length },
    { id: 'ethical', name: 'Ethical', icon: <Heart className="w-5 h-5" />, count: certifications.filter(c => c.category === 'ethical').length },
    { id: 'recognition', name: 'Recognition', icon: <Star className="w-5 h-5" />, count: certifications.filter(c => c.category === 'recognition').length }
  ];

  const complianceStats = [
    { number: "100%", label: "Compliance Rate", icon: <CheckCircle className="w-6 h-6" />, color: "text-green-500" },
    { number: "25+", label: "Active Certifications", icon: <Award className="w-6 h-6" />, color: "text-blue-500" },
    { number: "12+", label: "Years Certified", icon: <Calendar className="w-6 h-6" />, color: "text-purple-500" },
    { number: "99.98%", label: "Quality Standard", icon: <Star className="w-6 h-6" />, color: "text-amber-500" }
  ];

  const filteredCertifications = certifications.filter(cert => {
    const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory;
    const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (driveLink, downloadLink, certName) => {
    const link = document.createElement('a');
    link.href = downloadLink;
    link.download = `${certName}_Certificate.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Analytics tracking (if you have analytics)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'certificate_download', {
        certificate_name: certName,
        download_method: 'direct'
      });
    }
  };

  const handleVerify = (verificationUrl, certNumber) => {
    window.open(verificationUrl, '_blank');

    // Analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'certificate_verify', {
        certificate_number: certNumber,
        verification_method: 'online'
      });
    }
  };

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
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Main Header Section - Left Aligned */}
          <div className={`grid lg:grid-cols-2 gap-16 items-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>

            {/* Left Side - Content */}
            <div className="space-y-8">


              <div>
                <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
                  Certifications &
                  <span className="block font-extralight text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700">
                    Accreditations
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Our unwavering commitment to excellence is validated by prestigious certifications from world-renowned organizations. Each certification represents years of dedication to quality, ethics, and innovation in the jewelry industry.
                </p>

                <p>
                  From the Gemological Institute of America's rigorous diamond grading standards to the International Organization for Standardization's quality management systems, we maintain the highest levels of certification across every aspect of our operations.
                </p>

                <p>
                  These certifications ensure that when you choose our jewelry, you're not just selecting beautiful pieces—you're investing in verified quality, ethical sourcing, and international standards of excellence that have been independently verified and continuously monitored.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
                <div className="flex items-center bg-gray-100/80 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-md">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm font-medium text-gray-800">All Certificates Valid</span>
                </div>

                <div className="flex items-center bg-gray-100/80 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-md">
                  <Globe className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-sm font-medium text-gray-800">Globally Recognized</span>
                </div>

                <div className="flex items-center bg-gray-100/80 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-md">
                  <Shield className="w-5 h-5 text-purple-500 mr-2" />
                  <span className="text-sm font-medium text-gray-800">Blockchain Verified</span>
                </div>
              </div>

            </div>

            {/* Right Side - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {complianceStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
                    <div className={`mb-6 flex justify-center group-hover:scale-125 transition-transform duration-500 ${stat.color}`}>
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-light text-gray-900 mb-3">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Categories */}
          <div className={`mb-12 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${selectedCategory === category.id
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg'
                      : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
                    }`}
                >
                  {category.icon}
                  <span className="ml-2 font-medium">{category.name}</span>
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Certifications Grid */}
          <div className={`mb-24 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light text-gray-900 mb-4">
                Complete Certification Portfolio
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive collection of certifications, each representing our commitment to specific areas of excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCertifications.map((cert) => (
                <div key={cert.id} className="group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            {cert.icon}
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-gray-900">{cert.name}</h4>
                            <div className="flex items-center text-green-600 text-sm font-medium">
                              <CheckCircle className="w-4 h-4 mr-1" />
                              {cert.status === 'active' ? 'Active' : 'Pending'}
                            </div>
                          </div>
                        </div>

                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${cert.priority === 'critical' ? 'bg-red-100 text-red-700' :
                            cert.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                              'bg-blue-100 text-blue-700'
                          }`}>
                          {cert.priority}
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                        {cert.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">Valid Until</div>
                          <div className="font-semibold text-gray-900 text-sm">{cert.validUntil}</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">Coverage</div>
                          <div className="font-semibold text-gray-900 text-sm">{cert.coverage}</div>
                        </div>
                      </div>

                      <div className="text-xs text-gray-500 mb-6">
                        <div className="flex items-center">
                          <FileText className="w-3 h-3 mr-1" />
                          Cert #: {cert.certNumber}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleDownload(cert.driveLink, cert.downloadLink, cert.name)}
                          className="flex-1 text-amber-600 border border-amber-600 px-4 py-3 rounded-lg text-sm hover:bg-amber-50 transition-all duration-300 font-medium"
                        >
                          Download
                        </button>
                        <button
                          onClick={() => handleVerify(cert.verificationUrl, cert.certNumber)}
                          className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-3 rounded-lg text-sm hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 font-medium"
                        >
                          Verify
                        </button>
                        <button
                          onClick={() => window.open(cert.driveLink, '_blank')}
                          className="px-4 py-3 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Assurance Section */}
          <div className={`mb-20 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 rounded-3xl p-6 md:p-12 shadow-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700/90 to-gray-600/90"></div>
              <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full -translate-y-32 md:-translate-y-48 translate-x-32 md:translate-x-48"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-white/5 rounded-full translate-y-20 md:translate-y-32 -translate-x-20 md:-translate-x-32"></div>

              <div className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="flex items-center justify-center mb-6 md:mb-8">
                    <div className="flex items-center gap-4">
                      <Shield className="w-12 h-12 md:w-16 md:h-16 animate-pulse" />
                      <Sparkles className="w-12 h-12 md:w-16 md:h-16 animate-pulse delay-300" />
                      <Award className="w-12 h-12 md:w-16 md:h-16 animate-pulse delay-500" />
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-light mb-4 md:mb-6">
                    Your Trust is Our Foundation
                  </h3>

                  <p className="text-gray-200 mb-8 md:mb-12 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Every certification in our portfolio represents years of dedication, rigorous testing,
                    and unwavering commitment to excellence. When you choose us, you're not just selecting
                    a jeweler—you're partnering with a certified leader in quality, ethics, and innovation.
                  </p>

                  <div className="grid gap-6 md:grid-cols-3 mb-8 md:mb-12">
                    {[
                      {
                        Icon: CheckCircle,
                        title: 'Verified Quality',
                        desc: 'Every product meets international standards'
                      },
                      {
                        Icon: Heart,
                        title: 'Ethical Sourcing',
                        desc: 'Responsible practices throughout our supply chain'
                      },
                      {
                        Icon: Globe,
                        title: 'Global Recognition',
                        desc: 'Internationally accepted certifications'
                      }
                    ].map(({ Icon, title, desc }, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-7 h-7" />
                        </div>
                        <h4 className="text-lg md:text-xl font-semibold mb-2">{title}</h4>
                        <p className="text-gray-300 text-sm">{desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                    <button
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = 'https://drive.google.com/drive/folders/1ABCDEFGHIJKLMNOPQRSTUVWXYZ/download';
                        link.download = 'All_Certificates.zip';
                        link.click();
                      }}
                      className="bg-white text-gray-700 px-6 py-3 md:px-10 md:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:-translate-y-1 flex items-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download All Certificates
                    </button>
                    <button
                      onClick={() => setShowVerificationModal(true)}
                      className="border-2 border-white text-white px-6 py-3 md:px-10 md:py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center"
                    >
                      <Shield className="w-5 h-5 mr-2" />
                      Verify All Credentials
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className={`text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-200/50">
              <h3 className="text-3xl font-light text-gray-900 mb-8">
                Additional Resources
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Certification Guide</h4>
                  <p className="text-sm text-gray-600 mb-4">Learn about our certification process</p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Read More <ChevronRight className="w-4 h-4 inline ml-1" />
                  </button>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Industry Standards</h4>
                  <p className="text-sm text-gray-600 mb-4">Our compliance with global standards</p>
                  <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                    Learn More <ChevronRight className="w-4 h-4 inline ml-1" />
                  </button>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Medal className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Awards & Recognition</h4>
                  <p className="text-sm text-gray-600 mb-4">Our industry achievements</p>
                  <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    View All <ChevronRight className="w-4 h-4 inline ml-1" />
                  </button>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Partnership Program</h4>
                  <p className="text-sm text-gray-600 mb-4">Join our certified partner network</p>
                  <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                    Apply Now <ChevronRight className="w-4 h-4 inline ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Modal */}
          {showVerificationModal && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900">Verification Center</h3>
                  <button
                    onClick={() => setShowVerificationModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-white mr-4`}>
                          {cert.icon}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{cert.name}</div>
                          <div className="text-sm text-gray-500">{cert.certNumber}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleVerify(cert.verificationUrl, cert.certNumber)}
                        className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-amber-600 hover:to-yellow-600 transition-all duration-300"
                      >
                        Verify
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx="true">{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(-5px) rotate(240deg); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CertificationsAffiliations;