import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const ServiceHighlight = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Web Development",
      description: "Create stunning, responsive websites and web applications tailored to your business needs.",
      icon: <CodeBracketIcon className="w-8 h-8 text-white" />,
      features: [
        "Custom Website Development",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "API Integration"
      ],
      route: "/services/web-development"
    },
    {
      title: "App Development",
      description: "Build powerful, user-friendly mobile applications for iOS and Android platforms.",
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-white" />,
      features: [
        "Native iOS & Android Apps",
        "Cross-platform Development",
        "UI/UX Design",
        "App Maintenance"
      ],
      route: "/services/app-development"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full bg-gradient-to-b from-primary to-primary-dark py-20 sm:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-600/20 to-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute left-1/2 bottom-8 transform -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1.5 h-3 bg-white rounded-full"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SparklesIcon className="w-10 h-10 text-purple-500 mx-auto mb-4" />
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 sm:mb-6 text-shadow-glow">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your ideas into reality with our professional development services
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-10 hover:bg-white/10 transition-all duration-300 border border-white/10 shadow-lg hover:shadow-glow group overflow-hidden"
              whileHover={{ y: -10, boxShadow: "0 0 20px rgba(124, 58, 237, 0.5), 0 0 40px rgba(124, 58, 237, 0.2)" }}
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Animated corner accent */}
              <div className="absolute -top-1 -right-1 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-bl-full transform rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              <div className="flex items-start gap-6 mb-8 relative z-10">
                <div className="p-4 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-shadow-glow transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-10 relative z-10">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 group/item"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-md group-hover/item:scale-125 transition-transform duration-300">
                      <div className="w-1 h-1 bg-white rounded-full opacity-70"></div>
                    </div>
                    <span className="text-gray-300 text-lg group-hover/item:text-white transition-colors duration-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={() => navigate(service.route)}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-glow text-lg font-medium relative overflow-hidden group/btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Add hover effect overlay */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500/0 via-white/20 to-purple-500/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out"></span>

                <span className="relative z-10 flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRightIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-white to-purple-100 text-primary rounded-xl py-4 px-10 text-lg font-medium transition-all duration-300 shadow-md hover:shadow-glow transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Services
            <ArrowRightIcon className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceHighlight;