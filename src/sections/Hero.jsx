import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    domain: "",
    message: "",
    // Additional fields for services
    companyName: "",
    projectType: "",
    budget: "",
    timeline: "",
    // Additional fields for internship
    education: "",
    college: "",
    graduationYear: "",
    experience: "",
  });
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Show the popup when the component mounts
  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsFormOpen(true);
      // Automatically select the internship option for better UX
      // Comment this line if you want users to choose an option
      // setSelectedOption('internship');
    }, 500); // 0.5 second delay

    return () => clearTimeout(timer);
  }, []);

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(number);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!validatePhoneNumber(formData.contactNumber)) {
      newErrors.contactNumber = "Please enter a valid mobile number (10 digits).";
    }

    if (selectedOption === 'services') {
      if (!formData.companyName) newErrors.companyName = "Company name is required.";
      if (!formData.projectType) newErrors.projectType = "Project type is required.";
      if (!formData.budget) newErrors.budget = "Budget range is required.";
      if (!formData.timeline) newErrors.timeline = "Timeline is required.";
    } else {
      if (!formData.education) newErrors.education = "Education is required.";
      if (!formData.college) newErrors.college = "College/University is required.";
      if (!formData.graduationYear) newErrors.graduationYear = "Graduation year is required.";
      if (!formData.domain) newErrors.domain = "Domain selection is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Store data in Firestore with the selected option
      await addDoc(collection(db, "callbacks"), {
        type: selectedOption,
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contactNumber,
        domain: formData.domain,
        message: formData.message,
      });
      setAlertMessage("Your application has been submitted successfully!");
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 3000);
    } catch (error) {
      console.error("Error saving data:", error);
      setAlertMessage("There was an error submitting your application.");
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 3000);
    } finally {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        domain: "",
        message: "",
      });
      setErrors({});
      setIsFormOpen(false);
      setSelectedOption(null);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <section className="relative min-h-screen bg-primary overflow-hidden overflow-x-hidden">
      {/* Alert Message */}
      {alertVisible && (
        <motion.div
          className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {alertMessage}
        </motion.div>
      )}

      {/* Background image watermark - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center opacity-0 sm:opacity-30 hidden sm:block"
        style={{
          // backgroundImage: "url('/water.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "400px lg:600px",
          backgroundPosition: "80% 50%",
        }}
      />

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-600/30 to-pink-500/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-600/30 to-purple-500/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-600/20 to-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-full blur-xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 max-w-full">
        {/* Top Spacing */}
        <div className="h-16 sm:h-24 lg:h-32"></div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-0 mt-6 sm:mt-10 lg:mt-12">
          {/* Main Heading with Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                    font-bold text-white mb-4 sm:mb-6 lg:mb-8 mt-4 sm:mt-8 lg:mt-10
                    text-shadow-glow relative z-10"
          >
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-500/20 blur-xl rounded-full"></span>
              <span className="relative">Build Your Future with</span>
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 relative">
              Practical Skills
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-xl rounded-full"></span>
              <span className="relative">and Expert Guidance</span>
            </span>
          </motion.h1>

          {/* Subheading with Animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-xs md:text-sm lg:text-lg
                    text-white
                    mb-6 sm:mb-8 lg:mb-10
                    max-w-3xl mx-auto
                    leading-relaxed
                    px-2 sm:px-4"
          >
            Unlock your potential with Kaleidonex Technologie LLP. Dive into
            expert-led courses and hands-on projects designed to elevate your
            skills and future-proof your career.
          </motion.p>

          {/* CTA Buttons - Enhanced for mobile with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center items-center
            gap-5 sm:gap-6
            max-w-sm sm:max-w-lg mx-auto
            px-4 sm:px-0 relative z-10
            overflow-hidden"
          >
            <motion.button
              onClick={() => setIsFormOpen(true)}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(124, 58, 237, 0.5), 0 0 30px rgba(124, 58, 237, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-800 text-white
              px-10 py-4 rounded-lg flex items-center gap-4
              text-lg font-bold transition-all duration-300 shadow-md group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                Apply Now
              </span>
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <Link
                to="/courses"
                className="relative overflow-hidden border border-white/30 bg-white/10 backdrop-blur-sm text-white
                px-10 py-4 rounded-lg flex items-center gap-4
                text-lg font-bold transition-all duration-300 group"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Join Internship
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced Features Section with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-16 sm:mt-20 lg:mt-24
            grid grid-cols-1 sm:grid-cols-3
            gap-8 sm:gap-6 lg:gap-10
            max-w-full sm:max-w-5xl mx-auto
            px-4 sm:px-6 relative z-10"
          >
            <motion.div
              whileHover={{ y: -10, boxShadow: "0 0 15px rgba(124, 58, 237, 0.5), 0 0 30px rgba(124, 58, 237, 0.2)" }}
              className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-lg"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                10+ Courses
              </h2>
              <p className="text-gray-300">
                Expert-led courses in various fields of technology and development
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10, boxShadow: "0 0 15px rgba(124, 58, 237, 0.5), 0 0 30px rgba(124, 58, 237, 0.2)" }}
              className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-lg"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Flexible Learning
              </h3>
              <p className="text-gray-300">Learn at your own pace, anywhere, with our flexible learning options</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10, boxShadow: "0 0 15px rgba(124, 58, 237, 0.5), 0 0 30px rgba(124, 58, 237, 0.2)" }}
              className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-lg"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Expert Teachers
              </h3>
              <p className="text-gray-300">Learn from industry professionals with years of real-world experience</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Spacing */}
        <div className="h-20 sm:h-28 lg:h-36"></div>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute bottom-0 left-0 w-full h-32
        bg-gradient-to-t from-primary-light to-transparent
        opacity-50"
      ></div>

      {/* Enhanced Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-purple-500' : i % 3 === 1 ? 'bg-pink-500' : 'bg-indigo-500'} opacity-30`}
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 2 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -window.innerHeight],
              x: [null, Math.random() * 100 - 50 + (Math.random() * window.innerWidth)],
              opacity: [0.3, 0],
              scale: [1, Math.random() * 3 + 0.5],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating glowing orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Popup Dialog */}
      {isFormOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-start p-0"
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", damping: 20, stiffness: 250, mass: 1 }}
            className="bg-white rounded-2xl w-full max-w-md relative max-h-[90vh] flex flex-col shadow-xl mt-52 sm:mt-64">
            <button
              onClick={() => {
                setIsFormOpen(false);
                setSelectedOption(null);
              }}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <div className="relative">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>

            <div className="px-6 sm:px-8 pt-12 pb-6 overflow-y-auto flex-1 custom-scrollbar">
              {!selectedOption ? (
                // Option Selection Screen
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                    Choose an Option
                  </h2>
                  <p className="text-gray-500 text-sm text-center mb-6">Select one of the options below to continue</p>
                  <div className="space-y-4">
                    <button
                      onClick={() => handleOptionSelect('services')}
                      className="w-full bg-white border border-purple-600 text-purple-600 hover:bg-purple-50 py-3 rounded-xl font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Request Services
                    </button>
                    <button
                      onClick={() => handleOptionSelect('internship')}
                      className="w-full bg-purple-600 text-white hover:bg-purple-700 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Apply for Internship
                    </button>
                  </div>
                </>
              ) : (
                // Form Screen
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 sticky top-0 bg-white pb-2">
                    {selectedOption === 'services' ? 'Request Services' : 'Apply for Internship'}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Grid layout for better organization */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Common Fields in grid */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter Your Name"
                          className={`w-full px-3 py-2 border ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm`}
                          required
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className={`w-full px-3 py-2 border ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm`}
                          required
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Contact Number
                        </label>
                        <input
                          type="tel"
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={handleChange}
                          placeholder="Enter your contact number (10 digits)"
                          className={`w-full px-3 py-2 border ${
                            errors.contactNumber ? "border-red-500" : "border-gray-300"
                          } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm`}
                          required
                        />
                        {errors.contactNumber && (
                          <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>
                        )}
                      </div>

                      {/* Service-specific Fields */}
                      {selectedOption === 'services' && (
                        <>
                          <div className="sm:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Company Name
                            </label>
                            <input
                              type="text"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleChange}
                              placeholder="Enter your company name"
                              className={`w-full px-3 py-2 border ${
                                errors.companyName ? "border-red-500" : "border-gray-300"
                              } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm`}
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Project Type
                            </label>
                            <select
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleChange}
                              className={`w-full px-3 py-2 border ${
                                errors.projectType ? "border-red-500" : "border-gray-300"
                              } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm`}
                              required
                            >
                              <option value="">Select Type</option>
                              <option value="website">Website</option>
                              <option value="mobile-app">Mobile App</option>
                              <option value="web-app">Web App</option>
                              <option value="e-commerce">E-commerce</option>
                              <option value="custom">Custom</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Budget Range
                            </label>
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className={`w-full px-3 py-2 border ${
                                errors.budget ? "border-red-500" : "border-gray-300"
                              } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm`}
                              required
                            >
                              <option value="">Select Budget</option>
                              <option value="0-5k">Under $5k</option>
                              <option value="5k-10k">$5k - $10k</option>
                              <option value="10k-25k">$10k - $25k</option>
                              <option value="25k-50k">$25k - $50k</option>
                              <option value="50k+">$50k+</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Timeline
                            </label>
                            <select
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleChange}
                              className={`w-full px-3 py-2 border ${
                                errors.timeline ? "border-red-500" : "border-gray-300"
                              } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm`}
                              required
                            >
                              <option value="">Select Timeline</option>
                              <option value="1-2-months">1-2 months</option>
                              <option value="2-4-months">2-4 months</option>
                              <option value="4-6-months">4-6 months</option>
                              <option value="6+-months">6+ months</option>
                            </select>
                          </div>
                        </>
                      )}

                      {/* Internship-specific Fields */}
                      {selectedOption === 'internship' && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Education
                            </label>
                            <select
                              name="education"
                              value={formData.education}
                              onChange={handleChange}
                              className={`w-full px-3 py-2 border ${
                                errors.education ? "border-red-500" : "border-gray-300"
                              } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm`}
                              required
                            >
                              <option value="">Select Level</option>
                              <option value="undergraduate">Undergraduate</option>
                              <option value="graduate">Graduate</option>
                              <option value="postgraduate">Post Graduate</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Graduation Year
                            </label>
                            <select
                              name="graduationYear"
                              value={formData.graduationYear}
                              onChange={handleChange}
                              className={`w-full px-3 py-2 border ${
                                errors.graduationYear ? "border-red-500" : "border-gray-300"
                              } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm`}
                              required
                            >
                              <option value="">Select Year</option>
                              <option value="2024">2024</option>
                              <option value="2025">2025</option>
                              <option value="2026">2026</option>
                              <option value="2027">2027</option>
                            </select>
                          </div>

                          <div className="sm:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              College/University
                            </label>
                            <input
                              type="text"
                              name="college"
                              value={formData.college}
                              onChange={handleChange}
                              placeholder="Enter your college/university name"
                              className={`w-full px-3 py-2 border ${
                                errors.college ? "border-red-500" : "border-gray-300"
                              } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm`}
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Domain
                            </label>
                            <select
                              name="domain"
                              value={formData.domain}
                              onChange={handleChange}
                              className={`w-full px-3 py-2 border ${
                                errors.domain ? "border-red-500" : "border-gray-300"
                              } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm`}
                              required
                            >
                              <option value="">Select Domain</option>
                              <option value="web-development">Web Dev</option>
                              <option value="data-science">Data Science</option>
                              <option value="ux-ui">UX/UI Design</option>
                              <option value="digital-marketing">Digital Marketing</option>
                              <option value="cloud-computing">Cloud Computing</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Experience
                            </label>
                            <select
                              name="experience"
                              value={formData.experience}
                              onChange={handleChange}
                              className={`w-full px-3 py-2 border ${
                                errors.experience ? "border-red-500" : "border-gray-300"
                              } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm`}
                              required
                            >
                              <option value="">Select Level</option>
                              <option value="beginner">Beginner</option>
                              <option value="intermediate">Intermediate</option>
                              <option value="advanced">Advanced</option>
                            </select>
                          </div>
                        </>
                      )}

                      {/* Message Input - Full Width */}
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {selectedOption === 'services' ? 'Project Description' : 'Why do you want to join?'}
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={
                            selectedOption === 'services'
                              ? "Describe your project requirements and goals"
                              : "Tell us why you want to join our internship program"
                          }
                          rows="3"
                          className={`w-full px-3 py-2 border ${
                            errors.message ? "border-red-500" : "border-gray-300"
                          } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm`}
                          required
                        />
                      </div>
                    </div>

                    {/* Action Buttons - Sticky Bottom */}
                    <div className="sticky bottom-0 bg-white pt-3 mt-4 flex gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedOption(null)}
                        className="w-1/3 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className={`w-2/3 bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors text-sm ${
                          loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Submit Application"}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Add custom scrollbar styles */}
      <style jsx>{`        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </section>
  );
};

export default Hero;

