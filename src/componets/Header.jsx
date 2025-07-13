import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Globe, Menu, X, ChevronDown, 
  Diamond, Award, Shield, Star, Search, User, Heart, ShoppingBag, 
  Instagram, Facebook, Linkedin, Twitter 
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const contactInfo = [
    { icon: Phone, text: '+91 98765 43210', href: 'tel:+919876543210', color: 'from-emerald-400 to-teal-500' },
    { icon: Mail, text: 'export@jewelryhouse.com', href: 'mailto:export@jewelryhouse.com', color: 'from-blue-400 to-cyan-500' },
    { icon: MapPin, text: 'Aurangabad, Maharashtra, India', href: '#location', color: 'from-rose-400 to-pink-500' },
    { icon: Clock, text: '24/7 Export Support', href: '#support', color: 'from-purple-400 to-indigo-500' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' }
  ];

  const mainNavigation = [
    { name: 'Home', href: '/', icon: Diamond },
    { 
      name: 'Collections', href: '/page', icon: Star, 
      dropdown: [
        { name: 'Gold Jewelry', href: '/page#gold', description: 'Exquisite gold pieces' },
        { name: 'Silver Jewelry', href: '/page#silver', description: 'Premium silver designs' },
        { name: 'Diamond Jewelry', href: '/page#diamond', description: 'Certified diamonds' },
        { name: 'Platinum Jewelry', href: '/page#platinum', description: 'Luxury platinum pieces' },
        { name: 'Custom Designs', href: '/custom', description: 'Bespoke jewelry' }
      ]
    },
    { 
      name: 'Export & Shipping', href: '/b', icon: Globe, 
      dropdown: [
        { name: 'Wholesale Export', href: '/b#wholesale', description: 'Bulk jewelry export' },
        { name: 'Private Label', href: '/b#private-label', description: 'Custom branding' },
        { name: 'Quality Assurance', href: '/b#quality', description: 'BIS certified' },
        { name: 'Shipping & Insurance', href: '/b#shipping', description: 'Worldwide delivery' },
        { name: 'Export Documents', href: '/dac', description: 'Documentation support' }
      ]
    },
    { name: 'Certifications', href: '/certifications', icon: Award },
    { name: 'About Us', href: '/about', icon: Shield },
    { name: 'FAQs', href: '/d', icon: Star },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className="relative z-50">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="group flex items-center gap-2 hover:text-amber-300 transition-all duration-300"
                  aria-label={contact.text}
                >
                  <span className={`w-6 h-6 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="w-3.5 h-3.5 text-white" />
                  </span>
                  <span className="font-medium tracking-tight">{contact.text}</span>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white/20 ${social.color}`}
                    aria-label={`Visit our ${social.icon.name}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <div className="h-4 w-px bg-white/30"></div>
              <div className="flex items-center gap-2 text-sm">
                <Globe className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span className="font-medium tracking-tight">Global Export</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white/95 backdrop-blur-md shadow-md sticky top-0 transition-all duration- בנית חתימה דיגיטלית ${isScrolled ? 'py-3' : 'py-5'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <a href="/" className="group flex items-center gap-3" aria-label="Elite Exports Home">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-amber-400/30 transition-all duration-300">
                  <Diamond className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
                    Elite
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 ml-1">
                      Exports
                    </span>
                  </h1>
                  <p className="text-xs text-gray-500 font-medium tracking-tight">Fine Jewelry • Global Reach</p>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {mainNavigation.map((item, index) => (
                <div key={index} className="relative group" onMouseLeave={() => item.dropdown && setActiveDropdown(null)}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-gray-700 hover:text-amber-600 font-medium text-sm tracking-tight transition-all duration-300 relative"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                    aria-label={item.name}
                  >
                    <item.icon className="w-4 h-4" aria-hidden="true" />
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''}`} aria-hidden="true" />
                    )}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-600 transition-all duration-300 group-hover:w-full"></div>
                  </a>
                  {item.dropdown && activeDropdown === index && (
                    <div className="absolute top-full left-0 mt-3 w-64 bg-white shadow-lg rounded-lg border border-gray-100 p-4 z-50">
                      {item.dropdown.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-3 py-2 rounded-md hover:bg-amber-50 transition-colors duration-200"
                          aria-label={subItem.name}
                        >
                          <div className="font-semibold text-gray-800 text-sm">{subItem.name}</div>
                          <p className="text-xs text-gray-500">{subItem.description}</p>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Search Bar */}
              <div className="flex items-center gap-2">
                <a
                  href="/page1"
                  className="p-2 rounded-full bg-gray-100 hover:bg-amber-100 transition-colors duration-300"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5 text-gray-700" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-gray-700 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
              <div className="flex flex-col p-4 space-y-2">
                {mainNavigation.map((item, index) => (
                  <div key={index}>
                    <button
                      className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-amber-50 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-400"
                      onClick={() => item.dropdown ? handleDropdownToggle(index) : setIsMenuOpen(false)}
                      aria-label={item.name}
                      aria-expanded={item.dropdown && activeDropdown === index}
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className="w-5 h-5" aria-hidden="true" />
                        <span>{item.name}</span>
                      </div>
                      {item.dropdown && (
                        <ChevronDown
                          className={`w-5 h-5......

 transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      )}
                    </button>
                    {item.dropdown && activeDropdown === index && (
                      <div className="pl-6 mt-2 space-y-2">
                        {item.dropdown.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block p-2 text-gray-600 hover:bg-amber-50 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label={subItem.name}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {/* Mobile Search */}
                <a
                  href="/page1"
                  className="flex items-center gap-2 p-3 text-gray-700 hover:bg-amber-50 rounded-md text-sm font-medium"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;