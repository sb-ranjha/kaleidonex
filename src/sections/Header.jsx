import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ThemeContext } from '../ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
  HomeIcon,
  AcademicCapIcon,
  InformationCircleIcon,
  EnvelopeIcon,
  AcademicCapIcon as CertificateIcon,
  ArrowRightOnRectangleIcon,
  WrenchScrewdriverIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef();
  const { currentUser, logout } = useAuth();
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Web Development', href: '/services/web-development', icon: <CodeBracketIcon className="w-5 h-5" /> },
        { name: 'App Development', href: '/services/app-development', icon: <DevicePhoneMobileIcon className="w-5 h-5" /> }
      ]
    },
    {
      name: 'Internship',
      href: '/courses',
      dropdown: [
        { name: 'Web Development', href: '/courses/web-development', icon: <CodeBracketIcon className="w-5 h-5" /> },
        { name: 'Android Development', href: '/courses/android-development', icon: <DevicePhoneMobileIcon className="w-5 h-5" /> },
        { name: 'Generative AI', href: '/courses/generative-ai', icon: <ServerIcon className="w-5 h-5" /> },
        { name: 'Java Development', href: '/courses/java-development', icon: <ComputerDesktopIcon className="w-5 h-5" /> },
        { name: 'Python Development', href: '/courses/python-development', icon: <ComputerDesktopIcon className="w-5 h-5" /> },
        { name: 'C++ Development', href: '/courses/cpp-development', icon: <ComputerDesktopIcon className="w-5 h-5" /> },
        { name: 'Cloud Computing', href: '/courses/cloud-computing', icon: <ServerIcon className="w-5 h-5" /> },
        { name: 'Machine Learning', href: '/courses/machine-learning', icon: <ServerIcon className="w-5 h-5" /> }
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary shadow-lg'
          : 'bg-primary/80 backdrop-blur-sm'
      }`}
    >

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={menuRef}>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center">
              <div className="bg-white rounded-xl px-5 py-2.5 shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/20">
                <span className="text-primary text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-700">KaleidoNex</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.dropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className={`flex items-center px-4 py-2 rounded-lg text-base transition-all duration-300 ${
                      isActivePath(item.href)
                        ? 'text-white font-medium bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDownIcon
                      className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg text-base transition-all duration-300 block ${
                      isActivePath(item.href)
                        ? 'text-white font-medium bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === index && (
                    <motion.div
                      className="absolute left-0 mt-2 w-64 rounded-xl overflow-hidden z-50"
                      initial={{ opacity: 0, y: 10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, y: 10, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-gray-800/90 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-xl py-2 overflow-hidden">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <motion.div
                            key={dropdownItem.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: idx * 0.05 }}
                          >
                            <Link
                              to={dropdownItem.href}
                              className="flex items-center px-4 py-3 text-gray-200 hover:bg-purple-600/20 transition-colors duration-300"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="text-purple-400 mr-3">
                                {dropdownItem.icon}
                              </span>
                              <span>{dropdownItem.name}</span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors duration-300"
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </motion.button>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/verify"
                className="text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-glow inline-block"
              >
                Verify Certificate
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {currentUser ? (
                <button
                  onClick={() => logout()}
                  className="bg-white text-primary hover:bg-gray-100 px-5 py-2 rounded-lg transition-all duration-300 hover:shadow-purple-500/30 shadow-lg"
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  to="/signin"
                  className="bg-white text-primary hover:bg-gray-100 px-5 py-2 rounded-lg transition-all duration-300 hover:shadow-purple-500/30 shadow-lg"
                >
                  Sign In
                </Link>
              )}
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Theme Toggle Button (Mobile) */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors duration-300"
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </motion.button>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden fixed inset-0 z-50 bg-primary overflow-y-auto"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Mobile Header with Logo and Close */}
              <div className="px-6 py-6 flex items-center justify-between">
                <motion.div
                  className="bg-white rounded-xl px-4 py-2 shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <span className="text-primary text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-700">KaleidoNex</span>
                </motion.div>
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <XMarkIcon className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="px-6 py-4 space-y-1 max-h-[calc(100vh-180px)] overflow-y-auto">
                {/* Main Navigation Items */}
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="py-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.dropdown ? (
                      <div className="space-y-1">
                        <button
                          onClick={() => handleDropdownToggle(index)}
                          className={`flex items-center justify-between w-full text-white text-lg py-3 px-4 rounded-lg ${
                            activeDropdown === index ? 'bg-white/10' : 'hover:bg-white/5'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            {index === 1 ? (
                              <WrenchScrewdriverIcon className="h-5 w-5 text-purple-400" />
                            ) : index === 2 ? (
                              <AcademicCapIcon className="h-5 w-5 text-purple-400" />
                            ) : (
                              <HomeIcon className="h-5 w-5 text-purple-400" />
                            )}
                            <span>{item.name}</span>
                          </div>
                          <ChevronDownIcon
                            className={`w-5 h-5 transition-transform duration-300 ${
                              activeDropdown === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* Mobile Dropdown Items */}
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              className="ml-10 space-y-1 bg-white/5 rounded-lg p-3 mt-1"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.dropdown.map((dropdownItem, idx) => (
                                <motion.div
                                  key={dropdownItem.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                                >
                                  <Link
                                    to={dropdownItem.href}
                                    className="flex items-center gap-3 text-gray-200 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    <span className="text-purple-400">
                                      {dropdownItem.icon}
                                    </span>
                                    <span>{dropdownItem.name}</span>
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center gap-4 text-white text-lg py-3 px-4 rounded-lg ${
                          isActivePath(item.href) ? 'bg-white/10' : 'hover:bg-white/5'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name === 'Home' ? (
                          <HomeIcon className="h-5 w-5 text-purple-400" />
                        ) : item.name === 'Contact' ? (
                          <EnvelopeIcon className="h-5 w-5 text-purple-400" />
                        ) : (
                          <InformationCircleIcon className="h-5 w-5 text-purple-400" />
                        )}
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </motion.div>
                ))}

                {/* Additional Links */}
                <motion.div
                  className="pt-4 border-t border-white/10 mt-4 space-y-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Link
                    to="/about"
                    className="flex items-center gap-4 text-white text-lg py-3 px-4 rounded-lg hover:bg-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <InformationCircleIcon className="h-5 w-5 text-purple-400" />
                    <span>About</span>
                  </Link>
                  <Link
                    to="/verify"
                    className="flex items-center gap-4 text-white text-lg py-3 px-4 rounded-lg hover:bg-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <CertificateIcon className="h-5 w-5 text-purple-400" />
                    <span>Verify Certificate</span>
                  </Link>
                </motion.div>
              </div>

              {/* Sign In Button */}
              <motion.div
                className="fixed bottom-8 left-6 right-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Link
                  to="/signin"
                  className="flex items-center justify-center gap-2 bg-white text-primary rounded-xl py-3 px-6 w-full text-lg font-medium shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ArrowRightOnRectangleIcon className="h-5 w-5" />
                  <span>Sign In</span>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
