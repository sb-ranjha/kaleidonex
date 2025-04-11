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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormOpen(true);
    }, 1500);

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
    <section className="relative min-h-screen bg-primary overflow-hidden">
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

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden ">
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
          className="absolute top-20 right-10 w-32 h-32 bg-primary-dark rounded-full blur-xl"
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
          className="absolute bottom-20 left-10 w-40 h-40 bg-primary-dark rounded-full blur-xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
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
                    text-shadow-glow"
          >
            Build Your Future with <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Practical Skills</span> and Expert Guidance
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
            px-4 sm:px-0"
          >
            <button
              onClick={() => setIsFormOpen(true)}
              className="group border-2 border-white bg-gradient-to-r from-white to-purple-100 hover:shadow-glow text-primary-light
              hover:text-primary px-10 py-4 rounded-full flex items-center gap-4
              text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Apply Now
            </button>
            <Link
              to="/courses"
              className="group border-2 border-white bg-transparent hover:bg-white text-white
              hover:text-primary-light hover:shadow-glow-white px-10 py-4 rounded-full flex items-center gap-4
              text-lg font-bold transition-all duration-300 transform hover:scale-105"
            >
              Join Internship
            </Link>
          </motion.div>

          {/* Optional: Additional Features Section with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-16 sm:mt-20 lg:mt-24
            grid grid-cols-1 sm:grid-cols-3
            gap-8 sm:gap-6 lg:gap-10
            max-w-5xl mx-auto
            px-4 sm:px-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                10+ Courses
              </h2>
              <p className="text-slate-50">
                Expert-led courses in various fields
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-stone-50 mb-2">
                Flexible Learning
              </h3>
              <p className="text-white">Learn at your own pace, anywhere</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-slate-50 mb-2">
                Expert Teachers
              </h3>
              <p className="text-white">Learn from industry professionals</p>
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

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-purple-500 opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 2 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -window.innerHeight],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Popup Dialog */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md relative max-h-[90vh] flex flex-col">
            <button
              onClick={() => {
                setIsFormOpen(false);
                setSelectedOption(null);
              }}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <div className="p-6 sm:p-8 overflow-y-auto flex-1 custom-scrollbar">
              {!selectedOption ? (
                // Option Selection Screen
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Choose an Option
                  </h2>
                  <div className="space-y-4">
                    <button
                      onClick={() => handleOptionSelect('services')}
                      className="w-full bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white py-3 rounded-xl font-medium transition-colors duration-300"
                    >
                      Request Services
                    </button>
                    <button
                      onClick={() => handleOptionSelect('internship')}
                      className="w-full bg-purple-600 text-white hover:bg-purple-700 py-3 rounded-xl font-medium transition-colors duration-300"
                    >
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
          </div>
        </div>
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

