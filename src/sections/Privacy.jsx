import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, UserGroupIcon, EyeIcon, FingerPrintIcon, ServerIcon } from '@heroicons/react/24/outline';

const Privacy = () => {
  const [activeTab, setActiveTab] = useState('services');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Privacy policy sections with icons
  const sections = [
    {
      id: "services",
      title: "Professional Services",
      icon: <ServerIcon className="w-8 h-8" />,
      content: [
        "All client project data is encrypted and stored with enterprise-grade security",
        "Strict access controls for all service-related information",
        "Regular security audits and vulnerability assessments",
        "Secure payment processing through PCI-compliant providers",
        "Comprehensive client confidentiality agreements",
        "Dedicated secure development environments for each client project"
      ]
    },
    {
      id: "internships",
      title: "Internship Programs",
      icon: <UserGroupIcon className="w-8 h-8" />,
      content: [
        "Comprehensive protection of intern personal and professional information",
        "Secure handling of application materials and portfolios",
        "Confidential evaluation and performance feedback processes",
        "Role-based access controls for intern records",
        "Clear data retention and deletion policies for all internship records",
        "Secure virtual collaboration environments for remote internships"
      ]
    },
    {
      id: "data",
      title: "Data Processing",
      icon: <FingerPrintIcon className="w-8 h-8" />,
      content: [
        "Transparent data collection practices with clear consent mechanisms",
        "Data minimization principles - we only collect what's necessary",
        "Advanced encryption for all stored and transmitted data",
        "Regular data protection impact assessments",
        "Comprehensive data breach response procedures",
        "Compliance with relevant data protection regulations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-purple-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animated gradient */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 relative z-10">
              Privacy Policy
            </h1>
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We prioritize the protection of your data across our professional services and internship programs.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${activeTab === section.id
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
            >
              <span className={activeTab === section.id ? 'text-white' : 'text-purple-400'}>
                {section.icon}
              </span>
              <span>{section.title}</span>
            </button>
          ))}
        </div>

        {/* Main Content with Animations */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Featured Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl shadow-purple-900/20 mb-12">
            <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-xl text-white">
                  {sections.find(s => s.id === activeTab)?.icon}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {sections.find(s => s.id === activeTab)?.title} Privacy
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <motion.ul
                className="space-y-5"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {sections.find(s => s.id === activeTab)?.content.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-4"
                    variants={itemVariants}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-200 text-lg">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <EyeIcon className="w-5 h-5 text-purple-400" />
                Data Collection
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  We collect and process your personal information only for specific purposes directly related to our professional services and internship programs.
                </p>
                <p>
                  All data is protected using enterprise-grade security measures and is only accessed by authorized personnel on a need-to-know basis.
                </p>
                <p>
                  We follow strict data minimization principles and only retain your information for as long as necessary to fulfill our services and comply with legal obligations.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheckIcon className="w-5 h-5 text-purple-400" />
                Your Rights
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Right to access and receive a copy of your personal data</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Right to request correction or completion of inaccurate data</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Right to request deletion of your personal information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Right to withdraw consent at any time</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span>Right to object to processing of your personal data</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact Section with Gradient Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Have Questions?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            For any privacy-related questions or concerns about our services or internship programs, please reach out to our Data Protection team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-xl py-4 px-8 transition-all duration-300 shadow-lg shadow-purple-700/30 hover:shadow-purple-700/50"
          >
            Contact Our Privacy Team
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
