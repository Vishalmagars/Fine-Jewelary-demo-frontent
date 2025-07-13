import React, { useState } from 'react';
import { Clock, Shield, CheckCircle, Truck, Globe, Award, ArrowRight, Star } from 'lucide-react';

const LeadtimesInsurance = () => {
  const [activeService, setActiveService] = useState('lead-times');

  const services = {
    'lead-times': {
      icon: Clock,
      title: 'Lead Times & Handling',
      subtitle: 'Precision in Every Timeline',
      color: 'from-amber-500 to-yellow-600',
      features: [
        {
          title: 'Custom Jewelry',
          timeline: '14-21 days',
          description: 'Handcrafted pieces with meticulous attention to detail',
          icon: Star
        },
        {
          title: 'Standard Collections',
          timeline: '7-10 days',
          description: 'Ready-to-ship luxury pieces from our curated selection',
          icon: CheckCircle
        },
        {
          title: 'Bulk Orders',
          timeline: '21-35 days',
          description: 'Large quantity orders with dedicated quality assurance',
          icon: Globe
        }
      ]
    },
    'insurance': {
      icon: Shield,
      title: 'Insurance & Guarantees',
      subtitle: 'Your Investment Protected',
      color: 'from-emerald-500 to-teal-600',
      features: [
        {
          title: 'Full Coverage Insurance',
          timeline: '100% Value',
          description: 'Comprehensive protection during transit and delivery',
          icon: Shield
        },
        {
          title: 'Authenticity Guarantee',
          timeline: 'Lifetime',
          description: 'Certified authenticity with detailed documentation',
          icon: Award
        },
        {
          title: 'Quality Assurance',
          timeline: '2 Year Warranty',
          description: 'Craftsmanship warranty on all custom pieces',
          icon: CheckCircle
        }
      ]
    }
  };

  const ServiceCard = ({ service, isActive, onClick }) => {
    const IconComponent = service.icon;
    return (
      <div 
        className={`relative overflow-hidden rounded-2xl p-8 cursor-pointer transition-all duration-500 ${
          isActive 
            ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl scale-105' 
            : 'bg-white text-gray-800 hover:bg-gray-50 shadow-lg hover:shadow-xl'
        }`}
        onClick={onClick}
      >
        <div className="relative z-10">
          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
            <IconComponent size={32} className="text-white" />
          </div>
          
          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
          <p className={`text-sm ${isActive ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            {service.subtitle}
          </p>
          
          <div className="space-y-4">
            {service.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 mt-1`}>
                    <FeatureIcon size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-lg">{feature.title}</h4>
                      <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {feature.timeline}
                      </span>
                    </div>
                    <p className={`text-sm ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${service.color} opacity-10`}></div>
        <div className={`absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-gradient-to-br ${service.color} opacity-5`}></div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full text-white font-semibold mb-6 shadow-lg">
            <Truck size={20} className="mr-2" />
            Professional Services
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Excellence in Every
            <span className="block bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Detail
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From meticulous craftsmanship timelines to comprehensive protection, 
            we ensure your fine jewelry investment is handled with the utmost care and professionalism.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {Object.entries(services).map(([key, service]) => (
            <ServiceCard 
              key={key}
              service={service}
              isActive={activeService === key}
              onClick={() => setActiveService(key)}
            />
          ))}
        </div>

        {/* Process Flow */}
      
      </div>
    </section>
  );
};

export default LeadtimesInsurance;