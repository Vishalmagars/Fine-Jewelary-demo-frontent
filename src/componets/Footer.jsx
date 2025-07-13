import React, { useState } from 'react';
import {
  Phone, Mail, MapPin, Clock, Globe, Send, ArrowRight,
  Diamond, Award, Shield, Star, Truck, Heart,
  Instagram, Facebook, Linkedin, Twitter, Youtube,
  CheckCircle, Package, CreditCard, Users, Target,
  ExternalLink, Download, FileText, Scroll
} from 'lucide-react';

const Footer = () => {
  const [emailSubscription, setEmailSubscription] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscription = (e) => {
    e.preventDefault();
    if (emailSubscription.trim()) {
      setIsSubscribed(true);
      setEmailSubscription('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const companyLinks = [
    { name: 'About Elite Exports', href: '/about', icon: Shield },
    { name: 'Our Story', href: '/story', icon: Heart },
    { name: 'Leadership Team', href: '/team', icon: Users },
    { name: 'Mission & Vision', href: '/mission', icon: Target },
    { name: 'Careers', href: '/careers', icon: Star },
    { name: 'FAQs', href: '/d', icon: Star },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  const productCategories = [
    { name: 'Gold Jewelry', href: '/page#gold', badge: 'Popular' },
    { name: 'Silver Jewelry', href: '/page#silver', badge: 'Trending' },
    { name: 'Diamond Jewelry', href: '/page#diamond', badge: 'Premium' },
    { name: 'Platinum Jewelry', href: '/page#platinum', badge: 'Luxury' },
    { name: 'Custom Designs', href: '/custom', badge: 'Exclusive' },
    { name: 'Bulk Orders', href: '/page#bulk', badge: 'Export' }
  ];

  const exportServices = [
    { name: 'Wholesale Export', href: '/b#wholesale', description: 'Bulk jewelry export worldwide' },
    { name: 'Private Label', href: '/b#private-label', description: 'Custom branding solutions' },
    { name: 'Quality Assurance', href: '/b#quality', description: 'BIS & International certifications' },
    { name: 'Shipping & Insurance', href: '/b#shipping', description: 'Secure global delivery' },
    { name: 'Export Documents', href: '/dac', description: 'Documentation support' }
  ];

  const certifications = [
    { name: 'BIS Certification', icon: Award, color: 'from-green-400 to-emerald-500' },
    { name: 'ISO 9001:2015', icon: CheckCircle, color: 'from-blue-400 to-cyan-500' },
    { name: 'Hallmark Certified', icon: Diamond, color: 'from-amber-400 to-yellow-500' },
    { name: 'Export License', icon: Globe, color: 'from-purple-400 to-indigo-500' }
  ];

  const socialPlatforms = [
    { icon: Instagram, href: '#', color: 'hover:text-pink-500', followers: '25K+' },
    { icon: Facebook, href: '#', color: 'hover:text-blue-500', followers: '15K+' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600', followers: '8K+' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500', followers: '12K+' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500', followers: '5K+' }
  ];

  const trustIndicators = [
    { icon: Package, text: '10,000+ Orders Shipped', color: 'from-emerald-400 to-teal-500' },
    { icon: Globe, text: '50+ Countries Served', color: 'from-blue-400 to-cyan-500' },
    { icon: Users, text: '5,000+ Happy Clients', color: 'from-purple-400 to-indigo-500' },
    { icon: Award, text: '15+ Years Experience', color: 'from-amber-400 to-yellow-500' }
  ];

  const quickResources = [
    { name: 'Catalog Download', href: '/catalog', icon: Download },
    { name: 'Price List', href: '/pricing', icon: FileText },
    { name: 'Export Guidelines', href: '/guidelines', icon: Scroll },
    { name: 'Bulk Inquiry', href: '/page#bulk', icon: Package }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
      {/* Trust Indicators */}
      <div className="bg-black/20 py-6">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center gap-3 justify-center">
              <span className={`w-10 h-10 rounded-full bg-gradient-to-r ${indicator.color} flex items-center justify-center`}>
                <indicator.icon className="w-5 h-5 text-white" />
              </span>
              <span className="text-sm font-medium">{indicator.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Column 1 */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
              <Diamond className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Exports</span></h3>
              <p className="text-sm text-gray-400">Fine Jewelry • Global Reach</p>
            </div>
          </div>
          <p className="text-gray-300">
            Leading jewelry export house specializing in premium gold, silver, diamond, and platinum jewelry. Serving global markets with excellence since 2009.
          </p>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-300">Stay Updated</h4>
            <form onSubmit={handleSubscription} className="flex gap-2">
              <input
                type="email"
                value={emailSubscription}
                onChange={(e) => setEmailSubscription(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-label="Email for subscription"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-r-md hover:from-amber-500 hover:to-yellow-700 transition-all duration-300"
                aria-label="Subscribe"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            {isSubscribed && (
              <p className="text-sm text-green-400 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> Subscribed successfully!
              </p>
            )}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold text-amber-300 mb-4">Company</h4>
          <ul className="space-y-3">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="flex items-center gap-2 text-gray-300 hover:text-amber-300">
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-semibold text-amber-300 mb-4">Collections</h4>
          <ul className="space-y-3">
            {productCategories.map((cat, index) => (
              <li key={index}>
                <a href={cat.href} className="flex justify-between items-center text-gray-300 hover:text-amber-300">
                  {cat.name}
                  <span className="text-xs bg-amber-500 text-white px-2 py-1 rounded-full">{cat.badge}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-lg font-semibold text-amber-300 mb-4">Export & Shipping</h4>
          <ul className="space-y-3">
            {exportServices.map((service, index) => (
              <li key={index}>
                <a href={service.href} className="block text-gray-300 hover:text-amber-300">
                  <div className="font-medium">{service.name}</div>
                  <div className="text-sm text-gray-400">{service.description}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social & Contact */}
      <div className="border-t border-white/10 py-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-amber-400" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-amber-400" />
            <span>export@jewelryhouse.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-amber-400" />
            <span>Aurangabad, Maharashtra, India</span>
          </div>
        </div>

        {/* Social Media */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
          {socialPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.href}
              className={`flex flex-col items-center gap-2 text-gray-300 hover:text-white ${platform.color}`}
            >
              <platform.icon className="w-6 h-6" />
              <span className="text-sm">{platform.followers}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20 py-6 text-sm text-gray-400 text-center">
        © 2025 Elite Exports. All rights reserved. | <a href="/privacy" className="hover:text-amber-300">Privacy</a> | <a href="/terms" className="hover:text-amber-300">Terms</a>
      </div>
    </footer>
  );
};

export default Footer;