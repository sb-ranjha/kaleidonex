import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    if (!formData.email.trim()) {
      toast.error('Please enter your email');
      return;
    }
    if (!formData.subject.trim()) {
      toast.error('Please enter a subject');
      return;
    }
    if (!formData.message.trim()) {
      toast.error('Please enter your message');
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading('Sending your message...');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast.dismiss(loadingToast);
      toast.success('Message sent successfully! 📧', {
        duration: 4000,
        icon: '✅',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error('Failed to send message. Please try again.', {
        duration: 4000,
        icon: '❌',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-primary to-primary-dark pt-32 sm:pt-20 pb-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-600/20 to-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-40 left-20 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-sm hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur-sm hidden md:block"
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <EnvelopeIcon className="h-5 w-5 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Contact Us</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-shadow-glow">
            Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Touch</span> With Us
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
        >
          {/* Form Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg p-8 sm:p-10 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 hover:bg-white/10 shadow-inner"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                  placeholder="How can we help?"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 resize-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-glow ${isSubmitting
                  ? 'opacity-75 cursor-not-allowed'
                  : ''}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Map Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden h-full flex flex-col border border-white/10"
          >
            {/* Simple Contact Banner */}
            <div className="p-8 sm:p-10 border-b border-white/10 flex-shrink-0">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Address */}
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 0 15px rgba(124, 58, 237, 0.5), 0 0 30px rgba(124, 58, 237, 0.2)" }}
                  className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-lg"
                >
                  <motion.div
                    className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full mb-4 shadow-lg relative overflow-hidden group-hover:shadow-glow transition-shadow duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <MapPinIcon className="h-6 w-6 text-white relative z-10" />
                  </motion.div>
                  <h3 className="font-medium text-white text-lg mb-2">Visit Us</h3>
                  <p className="text-gray-300">Bihar, India</p>
                </motion.div>

                {/* Email */}
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 0 15px rgba(124, 58, 237, 0.5), 0 0 30px rgba(124, 58, 237, 0.2)" }}
                  className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-lg"
                >
                  <motion.div
                    className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full mb-4 shadow-lg relative overflow-hidden group-hover:shadow-glow transition-shadow duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <EnvelopeIcon className="h-6 w-6 text-white relative z-10" />
                  </motion.div>
                  <h3 className="font-medium text-white text-lg mb-2">Email Us</h3>
                  <a href="mailto:contact@kaleidonex.org" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                    contact@kaleidonex.org
                  </a>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 0 15px rgba(124, 58, 237, 0.5), 0 0 30px rgba(124, 58, 237, 0.2)" }}
                  className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-lg"
                >
                  <motion.div
                    className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full mb-4 shadow-lg relative overflow-hidden group-hover:shadow-glow transition-shadow duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <PhoneIcon className="h-6 w-6 text-white relative z-10" />
                  </motion.div>
                  <h3 className="font-medium text-white text-lg mb-2">Call Us</h3>
                  <a href="tel:+917742091419" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                    +91 7742091419
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Map */}
            <div className="flex-grow p-4">
              <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 h-full">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.753063659711!2d85.73756!3d25.634306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM4JzAzLjUiTiA4NcKwNDQnMjMuMSJF!5e0!3m2!1sen!2s!4v1679236328569!5m2!1sen!2s`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Company Location"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
              <motion.a
                key={social}
                href={`https://${social}.com`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r from-purple-600 to-purple-700 transition-all duration-300 border border-white/20"
              >
                <span className="text-white">{social.charAt(0).toUpperCase()}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
