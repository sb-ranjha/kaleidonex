import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import toast from 'react-hot-toast';

const SignIn = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!emailOrPhone.trim()) {
      toast.error('Email or phone number is required');
      return false;
    }
    // Validate email or phone
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    
    if (!emailRegex.test(emailOrPhone.trim()) && !phoneRegex.test(emailOrPhone.trim())) {
      toast.error('Please enter a valid email or phone number');
      return false;
    }
    if (!password.trim()) {
      toast.error('Password is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    const loadingToast = toast.loading('Signing in...');

    try {
      const trimmedEmailOrPhone = emailOrPhone.trim();
      const trimmedPassword = password.trim();
      
      await signInWithEmailAndPassword(auth, trimmedEmailOrPhone, trimmedPassword);
      toast.dismiss(loadingToast);
      toast.success('Welcome back! 👋', {
        duration: 3000,
      });
      navigate('/');
    } catch (error) {
      toast.dismiss(loadingToast);
      console.error('Sign in error:', error.code);
      
      switch (error.code) {
        case 'auth/user-not-found':
          toast.error('No account found with these credentials');
          break;
        case 'auth/wrong-password':
          toast.error('Incorrect password');
          break;
        case 'auth/invalid-credential':
          toast.error('Invalid credentials');
          break;
        default:
          toast.error('Sign in failed. Please try again');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-orange-900">
          Welcome Back
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in to continue your journey
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white/80 backdrop-blur-sm py-8 px-4 shadow-lg sm:rounded-xl sm:px-10 
          transition-all duration-300 hover:shadow-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700">
                Email or Phone Number
              </label>
              <div className="mt-1">
                <input
                  id="emailOrPhone"
                  name="emailOrPhone"
                  type="text"
                  autoComplete="email tel"
                  required
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                    shadow-sm placeholder-gray-400 
                    focus:outline-none focus:ring-orange-500 focus:border-orange-500 
                    sm:text-sm"
                  placeholder="Enter your email or phone number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                    shadow-sm placeholder-gray-400 
                    focus:outline-none focus:ring-orange-500 focus:border-orange-500 
                    sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
                  shadow-sm text-sm font-medium text-white bg-orange-600 
                  ${loading 
                    ? 'opacity-75 cursor-not-allowed' 
                    : 'hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
                  }`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  'Sign in'
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Google Button - Clean white design with subtle border */}
              <button
                type="button"
                aria-label="Sign in with Google"
                className="flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-lg
                  shadow-sm text-sm font-medium text-gray-700 bg-white
                  hover:bg-gray-50 hover:scale-105 transform transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285F4]"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>

              {/* Facebook Button - Facebook blue */}
              <button
                type="button"
                aria-label="Sign in with Facebook"
                className="flex items-center justify-center py-2.5 px-4 border border-transparent rounded-lg
                  shadow-sm text-sm font-medium text-white bg-[#1877F2]
                  hover:bg-[#0C63D4] hover:scale-105 transform transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1877F2]"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
                Facebook
              </button>

              {/* GitHub Button - Dark theme */}
              <button
                type="button"
                aria-label="Sign in with GitHub"
                className="flex items-center justify-center py-2.5 px-4 border border-transparent rounded-lg
                  shadow-sm text-sm font-medium text-white bg-[#171515]
                  hover:bg-[#000000] hover:scale-105 transform transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" 
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
                GitHub
              </button>
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/signup"
              className="w-full flex justify-center py-3 px-4 border-2 border-orange-600 rounded-lg
                shadow-sm text-sm font-medium text-orange-600 bg-white
                hover:bg-orange-50 hover:scale-105 transform transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Create a new account
            </Link>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/forgot-password"
              className="text-sm text-orange-600 hover:text-orange-500 transition-colors duration-200
                hover:underline decoration-2 underline-offset-4"
            >
              Forgot your password?
            </Link>
          </div>

          <div className="mt-6">
            <div className="text-center">
              <span className="text-sm text-gray-600">Don't have an account? </span>
              <Link
                to="/signup"
                className="text-sm text-orange-600 hover:text-orange-500 font-medium"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
