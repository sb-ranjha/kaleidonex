import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogSection from '../components/BlogSection';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Social media links
  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: '/icons/facebook.svg' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '/icons/twitter.svg' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '/icons/linkedin.svg' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '/icons/instagram.svg' },
  ];

  return (
    <footer className="bg-primary-dark dark:bg-gray-900 text-white text-sm border-t border-white/10">
      {/* Top wave decoration */}
      <div className="w-full overflow-hidden">
        <svg className="w-full h-12 -mb-1" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 24L60 32C120 40 240 56 360 58C480 60 600 48 720 42C840 36 960 36 1080 40C1200 44 1320 52 1380 56L1440 60V74H1380C1320 74 1200 74 1080 74C960 74 840 74 720 74C600 74 480 74 360 74C240 74 120 74 60 74H0V24Z" fill="currentColor" fillOpacity="0.1"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 h-full">
              <h3 className="text-lg font-semibold mb-3 text-white">KALEIDONEX TECHNOLOGIES</h3>
              <p className="text-sm text-gray-300 mb-4">Empowering innovation through quality education, hands-on learning, and cutting-edge tech solutions.</p>

              {/* Social Media Links */}
              <div className="flex space-x-3 mt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                  >
                    <GlobeAltIcon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 h-full">
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/courses" className="text-sm text-gray-300 hover:text-white flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-sm text-gray-300 hover:text-white flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-gray-300 hover:text-white flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-300 hover:text-white flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm text-gray-300 hover:text-white flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 h-full">
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <MapPinIcon className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>VILL-KANCHA, TOLA-KANCHA PANCHKANCHA, BLOCK-VIDYAPATI NAGAR, DIST- SAMASTIPUR, BIHAR 848503</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <EnvelopeIcon className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <a href="mailto:contact@kaleidonex.org" className="hover:text-white transition-colors duration-300">contact@kaleidonex.org</a>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <PhoneIcon className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-white transition-colors duration-300">+91 9876543210</a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Blog Section */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 h-full">
              <BlogSection />
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Kaleidonex Technologies LLP. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
