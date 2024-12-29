import React from 'react';
import { ArrowRight, CheckCircle, Monitor, Shield, Wifi, MessageSquare } from 'lucide-react';
import { ServiceItem, BenefitItem } from '../types';

const HomePage: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: <Monitor className="w-6 h-6 mb-4 text-blue-500" />,
      title: "IT Infrastructure",
      description: "Modern infrastructure solutions designed to scale with your business needs"
    },
    {
      icon: <Shield className="w-6 h-6 mb-4 text-green-500" />,
      title: "Cybersecurity",
      description: "Protect your business with enterprise-grade security solutions"
    },
    {
      icon: <Wifi className="w-6 h-6 mb-4 text-purple-500" />,
      title: "Cloud Services",
      description: "Seamless cloud integration and migration services"
    },
    {
      icon: <MessageSquare className="w-6 h-6 mb-4 text-pink-500" />,
      title: "IT Consulting",
      description: "Strategic technology consulting to drive your business forward"
    }
  ];

  const benefits: BenefitItem[] = [
    { text: "24/7 Technical Support" },
    { text: "Custom Solution Design" },
    { text: "Industry Leading Expertise" },
    { text: "Competitive Pricing" }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Services Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-16 text-white">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-5 sm:p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300"
              >
                {service.icon}
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-16 text-white">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 bg-gray-700 p-4 rounded-lg"
              >
                <CheckCircle className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-200">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-white">Ready to Get Started?</h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 text-gray-300">
            Contact us today for a free consultation and let us help you achieve your technology goals.
          </p>
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2">
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;