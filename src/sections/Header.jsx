import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ThemeContext } from '../ThemeContext';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import {
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

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary dark:bg-gray-900 border-b border-white/10 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={menuRef}>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="bg-gradient-to-r from-white to-purple-100 rounded-lg px-4 py-2 shadow-md transform hover:scale-105 transition-transform duration-300">
                <span className="text-primary text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-700">KaleidoNex</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className={`flex items-center px-3 py-2 text-lg transition-all duration-300 ${
                      isActivePath(item.href)
                        ? 'text-white font-semibold'
                        : 'text-gray-300 hover:text-white'
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
                    className={`px-3 py-2 text-lg transition-all duration-300 ${
                      isActivePath(item.href)
                        ? 'text-white font-semibold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === index && (
                  <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-50 transform transition-all duration-300 ease-in-out">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="flex items-center px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors duration-300"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span className="text-purple-600 dark:text-purple-400 mr-3">
                          {dropdownItem.icon}
                        </span>
                        <span>{dropdownItem.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            <Link
              to="/verify"
              className="text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-glow"
            >
              Verify Certificate
            </Link>
            {currentUser ? (
              <button
                onClick={() => logout()}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-glow"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/signin"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-glow"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 bg-primary dark:bg-gray-900 fixed inset-0 z-50 overflow-y-auto">
            {/* Mobile Header with Logo and Close */}
            <div className="px-6 flex items-center justify-between mb-8">
              <div className="bg-gradient-to-r from-white to-purple-100 rounded-xl px-4 py-2 shadow-md">
                <span className="text-primary text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-700">KaleidoNex</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="px-6 space-y-4 max-h-[calc(100vh-180px)] overflow-y-auto">
              {/* Main Navigation Items */}
              {navigation.map((item, index) => (
                <div key={item.name} className="py-2">
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => handleDropdownToggle(index)}
                        className="flex items-center justify-between w-full text-white text-xl py-2"
                      >
                        <div className="flex items-center gap-4">
                          {index === 1 ? (
                            <WrenchScrewdriverIcon className="h-6 w-6" />
                          ) : index === 2 ? (
                            <AcademicCapIcon className="h-6 w-6" />
                          ) : (
                            <HomeIcon className="h-6 w-6" />
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
                      {activeDropdown === index && (
                        <div className="ml-10 space-y-3 bg-white/5 rounded-lg p-4 mt-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="flex items-center gap-3 text-gray-200 hover:text-white py-2"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className="text-purple-400">
                                {dropdownItem.icon}
                              </span>
                              <span>{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center gap-4 text-white text-xl py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name === 'Home' ? (
                        <HomeIcon className="h-6 w-6" />
                      ) : item.name === 'Contact' ? (
                        <EnvelopeIcon className="h-6 w-6" />
                      ) : (
                        <InformationCircleIcon className="h-6 w-6" />
                      )}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Additional Links */}
              <div className="pt-4 border-t border-white/10 mt-4">
                <Link
                  to="/about"
                  className="flex items-center gap-4 text-white text-xl py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <InformationCircleIcon className="h-6 w-6" />
                  <span>About</span>
                </Link>
                <Link
                  to="/verify"
                  className="flex items-center gap-4 text-white text-xl py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <CertificateIcon className="h-6 w-6" />
                  <span>Verify Certificate</span>
                </Link>
              </div>
            </div>

            {/* Sign In Button */}
            <div className="fixed bottom-8 left-6 right-6">
              <Link
                to="/signin"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-white to-purple-100 text-primary rounded-xl py-3 px-6 w-full text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <ArrowRightOnRectangleIcon className="h-6 w-6" />
                <span>Sign In</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
