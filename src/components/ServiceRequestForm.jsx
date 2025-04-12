import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { XMarkIcon, CheckCircleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const ServiceRequestForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    companyName: '',
    projectType: 'Select Type',
    budget: 'Select Budget',
    timeline: 'Select Timeline',
    projectDescription: ''
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

  // Project type options
  const projectTypes = [
    'Select Type',
    'Website Development',
    'Mobile App',
    'E-commerce',
    'UI/UX Design',
    'Web Application',
    'Custom Software',
    'API Integration',
    'Maintenance & Support',
    'Other'
  ];

  // Budget range options
  const budgetRanges = [
    'Select Budget',
    'Less than $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  // Timeline options
  const timelineOptions = [
    'Select Timeline',
    'Less than 1 month',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'More than 12 months',
    'Ongoing support'
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
      if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    } else if (step === 2) {
      if (formData.projectType === 'Select Type') newErrors.projectType = 'Please select a project type';
      if (formData.budget === 'Select Budget') newErrors.budget = 'Please select a budget range';
      if (formData.timeline === 'Select Timeline') newErrors.timeline = 'Please select a timeline';
      if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Project description is required';
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
      await addDoc(collection(db, "service_requests"), {
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
      console.error("Error submitting service request:", error);
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
  const progress = ((currentStep - 1) / 2) * 100;

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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
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
            <h2 className="text-2xl font-bold text-white text-center mt-6 mb-1">Request Services</h2>

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
              <span>Contact Info</span>
              <span>Project Details</span>
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

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Company Name</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Enter your company name"
                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                      />
                      {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
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
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Project Type</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 rounded-lg border ${errors.projectType ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                        >
                          {projectTypes.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Budget Range</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 rounded-lg border ${errors.budget ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                        >
                          {budgetRanges.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.timeline ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                      >
                        {timelineOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      {errors.timeline && <p className="text-red-500 text-xs mt-1">{errors.timeline}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Project Description</label>
                      <textarea
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        placeholder="Describe your project requirements and goals"
                        rows="5"
                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.projectDescription ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                      />
                      {errors.projectDescription && <p className="text-red-500 text-xs mt-1">{errors.projectDescription}</p>}
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
                    className="space-y-6 py-4"
                  >
                    {submitStatus === 'success' ? (
                      <div className="text-center py-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircleIcon className="w-10 h-10 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Request Submitted!</h3>
                        <p className="text-gray-600">
                          Thank you for your interest! Our team will review your request and get back to you soon.
                        </p>
                      </div>
                    ) : submitStatus === 'error' ? (
                      <div className="text-center py-6">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <XMarkIcon className="w-10 h-10 text-red-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Submission Failed</h3>
                        <p className="text-gray-600 mb-4">
                          There was an error submitting your request. Please try again.
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
                              <p className="text-sm text-gray-500">Company</p>
                              <p className="font-medium">{formData.companyName}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Project Type</p>
                              <p className="font-medium">{formData.projectType}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Budget</p>
                              <p className="font-medium">{formData.budget}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Timeline</p>
                              <p className="font-medium">{formData.timeline}</p>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm text-gray-500">Project Description</p>
                            <p className="text-sm mt-1">{formData.projectDescription}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Navigation */}
              <div className="mt-8 flex justify-between">
                {currentStep > 1 && currentStep < 3 && (
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

                {currentStep < 2 && (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors ml-auto"
                  >
                    Next
                  </button>
                )}

                {currentStep === 2 && (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors ml-auto"
                  >
                    Review
                  </button>
                )}

                {currentStep === 3 && !submitStatus && (
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
                        <span>Submit Request</span>
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

export default ServiceRequestForm;
