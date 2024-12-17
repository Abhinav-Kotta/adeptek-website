// src/components/HomePage.tsx
import React from 'react';
import { ArrowRight, CheckCircle, Monitor, Shield, Wifi, MessageSquare } from 'lucide-react';
import { ServiceItem, NavItem, BenefitItem } from '../types';

const HomePage: React.FC = () => {
  const navItems: NavItem[] = [
    { label: 'Services', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' }
  ];

  const services: ServiceItem[] = [
    {
      icon: <Monitor className="w-6 h-6 mb-4" />,
      title: "IT Infrastructure",
      description: "Modern infrastructure solutions designed to scale with your business needs"
    },
    {
      icon: <Shield className="w-6 h-6 mb-4" />,
      title: "Cybersecurity",
      description: "Protect your business with enterprise-grade security solutions"
    },
    {
      icon: <Wifi className="w-6 h-6 mb-4" />,
      title: "Cloud Services",
      description: "Seamless cloud integration and migration services"
    },
    {
      icon: <MessageSquare className="w-6 h-6 mb-4" />,
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-blue-900 text-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Adeptek</div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className="hover:text-blue-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business With Expert IT Solutions
            </h1>
            <p className="text-xl mb-8">
              We provide cutting-edge technology consulting services to help your business thrive in the digital age.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium flex items-center">
              Get Started
              <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-16">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-blue-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Contact us today for a free consultation and let us help you achieve your technology goals.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Adeptek</h3>
              <p className="text-gray-400">
                Delivering innovative IT solutions for modern businesses.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">
                info@adeptek.com<br />
                +1 (555) 123-4567<br />
                123 Tech Street, Silicon Valley, CA
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;