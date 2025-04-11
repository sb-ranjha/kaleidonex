import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import InternshipForm from "../components/InternshipForm";
import ServiceRequestForm from "../components/ServiceRequestForm";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

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

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <section className="relative min-h-screen bg-primary overflow-hidden overflow-x-hidden">


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
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-start p-4 pt-8"
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
                  {selectedOption === 'services' ? (
                    <ServiceRequestForm
                      onClose={() => {
                        setIsFormOpen(false);
                        setSelectedOption(null);
                      }}
                    />
                  ) : (
                    <InternshipForm
                      onClose={() => {
                        setIsFormOpen(false);
                        setSelectedOption(null);
                      }}
                    />
                  )}
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

