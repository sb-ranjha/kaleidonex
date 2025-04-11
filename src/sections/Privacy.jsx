import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { privacyFeatures, privacySections } from '../data/privacyData';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div 
        className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Privacy Policy & Data Protection
          </h1>
          <p className="text-lg md:text-xl text-center text-orange-100 max-w-3xl mx-auto">
            Your privacy is our priority. Learn how we protect your personal information
            and ensure your data security.
          </p>
        </div>
      </motion.div>

      {/* Key Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {privacyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-orange-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <nav className="space-y-1">
                {privacySections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSection(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                      activeSection === index
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-600 hover:bg-orange-50'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Sections */}
          <div className="lg:col-span-3">
            {privacySections.map((section, index) => (
              <motion.section
                key={index}
                className={`mb-12 ${activeSection === index ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                  {section.title}
                </h2>
                <div className="prose prose-lg max-w-none prose-orange">
                  {section.content}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Have questions about our privacy policy?
          </h2>
          <p className="text-gray-600 mb-6">
            We're here to help you understand how we protect your data
          </p>
          <a
            href="mailto:contact@prodigyinfotech.dev"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
