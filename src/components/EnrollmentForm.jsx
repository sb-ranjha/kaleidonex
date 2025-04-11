import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { XMarkIcon } from '@heroicons/react/24/outline';

const EnrollmentForm = ({ courseType, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    interests: '',
    expectations: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.name.trim()) errors.push('Name is required');
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Valid email is required');
    }
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
      errors.push('Valid 10-digit phone number is required');
    }
    if (!formData.education.trim()) errors.push('Education details are required');
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (errors.length > 0) {
      setSubmitStatus({ success: false, message: errors.join(', ') });
      return;
    }

    setIsSubmitting(true);
    try {
      const docRef = await addDoc(collection(db, 'enrollments'), {
        ...formData,
        courseType,
        status: 'pending',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });

      console.log('Enrollment saved with ID:', docRef.id);
      setSubmitStatus({ 
        success: true, 
        message: 'Thank you for your interest! Our team will contact you shortly.' 
      });
      
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error saving enrollment:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'There was an error submitting your application. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = (e) => {
    // Prevent event from bubbling up to parent elements
    e.stopPropagation();
    onClose();
  };

  // Handle clicking outside the form to close
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={handleOverlayClick}>
      <div className="bg-purple-900 rounded-2xl p-6 md:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Internship Application</h2>
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-purple-800 transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-purple-800 text-white border border-purple-600 focus:border-white focus:outline-none"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-purple-800 text-white border border-purple-600 focus:border-white focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-purple-800 text-white border border-purple-600 focus:border-white focus:outline-none"
                placeholder="Enter 10-digit number"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Education *</label>
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-purple-800 text-white border border-purple-600 focus:border-white focus:outline-none"
                placeholder="Current education/qualification"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Experience</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-purple-800 text-white border border-purple-600 focus:border-white focus:outline-none"
              placeholder="Tell us about your relevant experience"
              rows="3"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Areas of Interest</label>
            <textarea
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-purple-800 text-white border border-purple-600 focus:border-white focus:outline-none"
              placeholder="What specific areas interest you the most?"
              rows="2"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Program Expectations</label>
            <textarea
              name="expectations"
              value={formData.expectations}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-purple-800 text-white border border-purple-600 focus:border-white focus:outline-none"
              placeholder="What do you hope to achieve from this internship?"
              rows="2"
            />
          </div>

          {submitStatus && (
            <div className={`p-4 rounded-lg ${
              submitStatus.success ? 'bg-green-600' : 'bg-red-600'
            } text-white`}>
              {submitStatus.message}
            </div>
          )}

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2 rounded-lg border border-gray-400 text-gray-300 hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 rounded-lg bg-white text-purple-900 hover:bg-gray-100 font-medium ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
