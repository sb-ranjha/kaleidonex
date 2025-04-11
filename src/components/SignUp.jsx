import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { auth } from '../firebase'; // Update this import to match your file path
import { motion, AnimatePresence } from 'framer-motion';

// Separate component for social buttons with proper styling
const SocialButton = ({ provider, icon, text, onClick }) => {
  // Define styles based on provider
  const getProviderStyles = () => {
    switch (provider) {
      case 'google':
        return 'bg-white hover:bg-gray-50 text-gray-700';
      case 'facebook':
        return 'bg-[#1877F2] hover:bg-[#1874E8] text-white';
      case 'github':
        return 'bg-[#24292F] hover:bg-[#2C3238] text-white';
      default:
        return 'bg-white hover:bg-gray-50 text-gray-700';
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex justify-center items-center px-3 py-2.5 border border-gray-300 rounded-md shadow-sm 
      ${getProviderStyles()}
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200`}
    >
      {icon}
    </button>
  );
};

const SignUp = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    message: '',
    color: 'gray'
  });
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSocialSignIn = async (provider) => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      console.error('Social sign-in error:', error);
      setError('Failed to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const checkPasswordStrength = (password) => {
    let score = 0;
    let message = '';
    let color = 'gray';

    // Check length
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;

    // Check for numbers
    if (/\d/.test(password)) score += 1;

    // Check for special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;

    // Check for uppercase and lowercase
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;

    // Set message and color based on score
    switch (score) {
      case 0:
        message = 'Very Weak';
        color = 'red-500';
        break;
      case 1:
        message = 'Weak';
        color = 'red-400';
        break;
      case 2:
        message = 'Fair';
        color = 'yellow-500';
        break;
      case 3:
        message = 'Good';
        color = 'green-400';
        break;
      case 4:
      case 5:
        message = 'Strong';
        color = 'green-600';
        break;
      default:
        message = 'Very Weak';
        color = 'red-500';
    }

    return { score, message, color };
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(checkPasswordStrength(newPassword));
  };

  const validateIdentifier = (value) => {
    // Check if input is an email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Check if input is a phone number (basic validation)
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    
    return emailRegex.test(value) || phoneRegex.test(value);
  };

  const getIdentifierType = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? 'email' : 'phone';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateIdentifier(identifier)) {
      setError('Please enter a valid email or phone number');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (passwordStrength.score < 3) {
      setError('Please choose a stronger password');
      return;
    }

    setLoading(true);

    try {
      const identifierType = getIdentifierType(identifier);
      if (identifierType === 'email') {
        await createUserWithEmailAndPassword(auth, identifier, password);
      } else {
        // Implement phone authentication here
        // await signUpWithPhoneNumber(identifier, password);
      }
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error);
      if (error.code === 'auth/email-already-in-use') {
        setShowPopup(true);
      } else {
        setError('Failed to create account. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const ErrorPopup = ({ isOpen, onClose, email }) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black dark:bg-gray-900"
              onClick={onClose}
            />

            {/* Popup Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Icon */}
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-orange-100">
                <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H10m4-6V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>

              {/* Content */}
              <div className="mt-4 text-center sm:mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Account Already Exists
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    An account with <span className="font-semibold text-gray-700">{email}</span> already exists.
                    Would you like to sign in instead?
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-5 sm:mt-6 space-y-3">
                <Link
                  to="/signin"
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                >
                  Sign in to your account
                  <svg className="ml-2 -mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <button
                  onClick={onClose}
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                >
                  Try with different email
                </button>
              </div>

              {/* Help Text */}
              <div className="mt-3 text-center">
                <p className="text-xs text-gray-500">
                  Need help? <a href="/contact" className="text-orange-600 hover:text-orange-500">Contact support</a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-orange-100 flex flex-col justify-center py-6 sm:py-12">
      <div className="px-4 sm:px-0 w-full sm:max-w-md mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-orange-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign up with your email or phone number
        </p>

        <div className="mt-6 sm:mt-8 bg-white py-6 sm:py-8 px-4 sm:px-10 shadow rounded-lg w-full">
          {/* Form */}
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            {/* Email/Phone Input */}
            <div>
              <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
                Email or Phone Number
              </label>
              <div className="mt-1 relative">
                <input
                  id="identifier"
                  name="identifier"
                  type="text"
                  autoComplete="email tel"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Enter email or phone number"
                  className="block w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {password && (
                <div className="mt-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      {[...Array(5)].map((_, index) => (
                        <div
                          key={index}
                          className={`h-full transition-all duration-300 ${
                            index < passwordStrength.score
                              ? `bg-${passwordStrength.color}`
                              : 'bg-gray-200'
                          }`}
                          style={{
                            width: '20%',
                            float: 'left'
                          }}
                        />
                      ))}
                    </div>
                    <span className={`text-sm font-medium text-${passwordStrength.color}`}>
                      {passwordStrength.message}
                    </span>
                  </div>
                  
                  {/* Password Requirements */}
                  <div className="mt-2 text-xs text-gray-600">
                    <p>Password must contain:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li className={password.length >= 8 ? 'text-green-600' : ''}>
                        At least 8 characters
                      </li>
                      <li className={/[A-Z]/.test(password) && /[a-z]/.test(password) ? 'text-green-600' : ''}>
                        Upper & lowercase letters
                      </li>
                      <li className={/\d/.test(password) ? 'text-green-600' : ''}>
                        At least one number
                      </li>
                      <li className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'text-green-600' : ''}>
                        At least one special character
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                {loading ? 'Creating account...' : 'Sign up'}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
          </div>

          {/* Social Sign-in Buttons */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <SocialButton
              provider="google"
              icon={
                <div className="flex items-center">
                  <img 
                    src="https://www.google.com/favicon.ico" 
                    alt="Google" 
                    className="w-5 h-5"
                  />
                  <span className="hidden sm:ml-2 sm:inline">Google</span>
                </div>
              }
              onClick={() => handleSocialSignIn(googleProvider)}
            />

            <SocialButton
              provider="facebook"
              icon={
                <div className="flex items-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="hidden sm:ml-2 sm:inline">Facebook</span>
                </div>
              }
              onClick={() => handleSocialSignIn(facebookProvider)}
            />

            <SocialButton
              provider="github"
              icon={
                <div className="flex items-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span className="hidden sm:ml-2 sm:inline">GitHub</span>
                </div>
              }
              onClick={() => handleSocialSignIn(githubProvider)}
            />
          </div>

          {/* Sign In Link */}
          <div className="mt-6">
            <div className="relative">
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Already have an account?{' '}
                  <Link to="/signin" className="font-medium text-orange-600 hover:text-orange-500">
                    Sign in
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ErrorPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)}
        email={identifier}
      />
    </div>
  );
};

export default SignUp;
