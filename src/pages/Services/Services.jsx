import React from 'react';
import { motion } from 'framer-motion';

const serviceCards = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
      </svg>
    ),
    title: "Backend Solutions",
    description: "Robust backend architectures with APIs, databases, and cloud infrastructure for enterprise-grade applications.",
    features: ["REST APIs", "GraphQL", "Microservices", "Cloud Architecture"]
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
      </svg>
    ),
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with payment integration, inventory management, and analytics.",
    features: ["Payment Gateways", "Inventory System", "Analytics", "SEO Optimization"]
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: "Performance Optimization",
    description: "Speed optimization, SEO enhancements, and technical improvements to boost your website performance.",
    features: ["Site Speed", "SEO Optimization", "Core Web Vitals", "Monitoring"]
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 0l-8 6-8-6"/>
      </svg>
    ),
    title: "Web Development",
    description: "Custom web applications built with React, Node.js, and modern frameworks for optimal performance and scalability.",
    features: ["React & Next.js", "Node.js Backend", "MongoDB/PostgreSQL", "Cloud Deployment"]
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
      </svg>
    ),
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android.",
    features: ["React Native", "iOS Development", "Android Development", "Cross-Platform"]
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that convert visitors into customers with modern aesthetics and user-centered approach.",
    features: ["Figma Design", "Prototyping", "User Research", "Design Systems"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-[#22282A] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-serif text-[#D5E1E7] mb-6">Our Services</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#2A3133] p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-[#66E8FA] mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif text-[#D5E1E7] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-400">
                    <span className="w-1.5 h-1.5 bg-[#66E8FA] rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;