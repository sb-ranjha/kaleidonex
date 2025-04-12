import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { XMarkIcon, CheckCircleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const InternshipForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    education: 'Select Level',
    graduationYear: 'Select Year',
    college: '',
    domain: 'Select Domain',
    experience: 'Select Level',
    message: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Prevent background scrolling when form is open
  useEffect(() => {
    // Add no-scroll class to body
    document.body.classList.add('no-scroll');

    // Re-enable scrolling on unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  // Education options
  const educationOptions = [
    'Select Level',
    'High School',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'PhD',
    'Other'
  ];

  // Graduation year options
  const currentYear = new Date().getFullYear();
  const graduationYears = ['Select Year'];
  for (let i = currentYear - 5; i <= currentYear + 5; i++) {
    graduationYears.push(i.toString());
  }

  // Domain options
  const domainOptions = [
    'Select Domain',
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Machine Learning',
    'Data Science',
    'Cloud Computing',
    'Blockchain',
    'Cybersecurity',
    'IoT',
    'Game Development',
    'Other'
  ];

  // Experience options
  const experienceOptions = [
    'Select Level',
    'No Experience',
    'Beginner (0-1 years)',
    'Intermediate (1-3 years)',
    'Advanced (3+ years)'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (!formData.contactNumber.trim()) {
        newErrors.contactNumber = 'Contact number is required';
      } else if (!/^\d{10}$/.test(formData.contactNumber)) {
        newErrors.contactNumber = 'Please enter a valid 10-digit number';
      }
    } else if (step === 2) {
      if (formData.education === 'Select Level') newErrors.education = 'Please select your education level';
      if (formData.graduationYear === 'Select Year') newErrors.graduationYear = 'Please select your graduation year';
      if (!formData.college.trim()) newErrors.college = 'College/University name is required';
    } else if (step === 3) {
      if (formData.domain === 'Select Domain') newErrors.domain = 'Please select a domain';
      if (formData.experience === 'Select Level') newErrors.experience = 'Please select your experience level';
      if (!formData.message.trim()) newErrors.message = 'Please tell us why you want to join';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(currentStep)) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to Firestore
      await addDoc(collection(db, "internship_applications"), {
        ...formData,
        status: 'pending',
        createdAt: serverTimestamp()
      });

      setSubmitStatus('success');

      // Reset form after successful submission
      setTimeout(() => {
        onClose();
      }, 3000);

    } catch (error) {
      console.error("Error submitting application:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  const stepVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      x: -50,
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  // Progress indicator
  const progress = ((currentStep - 1) / 3) * 100;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-start justify-center z-50 p-4 pt-32 sm:pt-48 overflow-y-auto"
        onClick={() => !isSubmitting && onClose()}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={overlayVariants}
      >
        <motion.div
          className="bg-white rounded-2xl overflow-hidden w-full max-w-md relative max-h-[90vh] shadow-xl"
          onClick={e => e.stopPropagation()}
          variants={modalVariants}
        >
          {/* Modal Header with Icon */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <button
              onClick={() => !isSubmitting && onClose()}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              disabled={isSubmitting}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-white text-center mt-6 mb-1">Apply for Internship</h2>

            {/* Progress bar */}
            <div className="w-full bg-white/20 rounded-full h-2 mt-4">
              <motion.div
                className="bg-white h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Step indicator */}
            <div className="flex justify-between text-white/80 text-xs mt-2">
              <span>Personal Info</span>
              <span>Education</span>
              <span>Experience</span>
              <span>Complete</span>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={stepVariants}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Contact Number</label>
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="Enter your contact number (10 digits)"
                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                      />
                      {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={stepVariants}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Education</label>
                      <select
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.education ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                      >
                        {educationOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      {errors.education && <p className="text-red-500 text-xs mt-1">{errors.education}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Graduation Year</label>
                      <select
                        name="graduationYear"
                        value={formData.graduationYear}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.graduationYear ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                      >
                        {graduationYears.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                      {errors.graduationYear && <p className="text-red-500 text-xs mt-1">{errors.graduationYear}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">College/University</label>
                      <input
                        type="text"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        placeholder="Enter your college/university name"
                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.college ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                      />
                      {errors.college && <p className="text-red-500 text-xs mt-1">{errors.college}</p>}
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={stepVariants}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Domain</label>
                      <select
                        name="domain"
                        value={formData.domain}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.domain ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                      >
                        {domainOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      {errors.domain && <p className="text-red-500 text-xs mt-1">{errors.domain}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Experience</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.experience ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                      >
                        {experienceOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Why do you want to join?</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us why you want to join our internship program"
                        rows="4"
                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={stepVariants}
                    className="space-y-6 py-4"
                  >
                    {submitStatus === 'success' ? (
                      <div className="text-center py-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircleIcon className="w-10 h-10 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
                        <p className="text-gray-600">
                          Thank you for your interest! Our team will review your application and get back to you soon.
                        </p>
                      </div>
                    ) : submitStatus === 'error' ? (
                      <div className="text-center py-6">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <XMarkIcon className="w-10 h-10 text-red-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Submission Failed</h3>
                        <p className="text-gray-600 mb-4">
                          There was an error submitting your application. Please try again.
                        </p>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                        >
                          Try Again
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-gray-800">Review Your Information</h3>

                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">Name</p>
                              <p className="font-medium">{formData.name}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Email</p>
                              <p className="font-medium">{formData.email}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Contact</p>
                              <p className="font-medium">{formData.contactNumber}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Education</p>
                              <p className="font-medium">{formData.education}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Graduation Year</p>
                              <p className="font-medium">{formData.graduationYear}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">College/University</p>
                              <p className="font-medium">{formData.college}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Domain</p>
                              <p className="font-medium">{formData.domain}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Experience</p>
                              <p className="font-medium">{formData.experience}</p>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm text-gray-500">Why do you want to join?</p>
                            <p className="text-sm mt-1">{formData.message}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Navigation */}
              <div className="mt-8 flex justify-between">
                {currentStep > 1 && currentStep < 4 && (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                )}

                {currentStep === 1 && (
                  <button
                    type="button"
                    onClick={() => onClose()}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                )}

                {currentStep < 3 && (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors ml-auto"
                  >
                    Next
                  </button>
                )}

                {currentStep === 3 && (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors ml-auto"
                  >
                    Review
                  </button>
                )}

                {currentStep === 4 && !submitStatus && (
                  <div className="flex gap-4 ml-auto">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <ArrowPathIcon className="w-5 h-5 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <span>Submit Application</span>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InternshipForm;
