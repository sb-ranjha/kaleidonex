import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./ThemeContext.js";
import { AuthProvider } from "./contexts/AuthContext";
// import { useAuth } from "./contexts/AuthContext";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import About from "./sections/About.jsx";
import Privacy from "./sections/Privacy.jsx";
import CertificateVerification from "./sections/CertificateVerification.jsx";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CoursesGrid from "./components/CourseCard.jsx";
// import CourseDetails from "./components/CourseDetails.jsx";
import ForgotPassword from "./components/ForgotPassword";
import { Toaster } from "react-hot-toast";
import TrustedBy from "./components/TrustedBy";
import Blog from "./pages/Blog";

// course page
import WebDevelopment from "./pages/courses/WebDevelopment";
import DataScience from "./pages/courses/DataScience";
import GenerativeAI from "./pages/courses/GenerativeAI.jsx";
import AndroidDevelopment from "./pages/courses/AndroidDevelopment.jsx";
import PythonDevelopment from "./pages/courses/PythonDevelopment.jsx";
import CppDevelopment from "./pages/courses/CppDevelopment.jsx";
import JavaDevelopment from "./pages/courses/JavaDevelopment.jsx";
// import NewCourse from './pages/courses/NewCourse.jsx';

import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import CoursesPage from "./pages/Courses";
import CloudComputing from "./pages/courses/CloudComputing";
import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/LoadingSpinner";
import MachineLearning from "./pages/courses/MachineLearning.jsx";
import CollaborationScroll from "./components/CollaborationScroll";

// Protected Route component
// const PrivateRoute = ({ children }) => {
//   const { currentUser } = useAuth();
//   return currentUser ? children : <Navigate to="/signin" />;
// };

// Service pages
import Services from "./pages/Services";
import WebDevService from "./pages/services/WebDevelopment";
import AppDevService from "./pages/services/AppDevelopment";

// Components
import ServiceHighlight from "./components/ServiceHighlight";

const HomePage = () => (
  <>
    <Hero />
    <TrustedBy />
    <ServiceHighlight />
    <CoursesGrid />
    <Testimonials />
    <Contact />
  </>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: -20
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  useEffect(() => {
    // Preload critical assets
    const preloadAssets = () => {
      const criticalAssets = [
        '/logo.png'
        // Add other assets here if needed
      ];

      criticalAssets.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadAssets();

    // Set a minimum loading time to ensure the animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Match the 2 seconds in LoadingSpinner.jsx

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#363636",
                color: "#fff",
              },
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
          <Header />
          <main className="flex-grow">
            <ScrollToTop />
            <BackToTop />
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="w-full h-full"
              >
                <Routes location={location}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/courses" element={<CoursesPage />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/blog" element={<Blog />} />
                  {/* Course Detail Pages */}
                  <Route path="/courses/web-development" element={<WebDevelopment />}/>
                  <Route path="/courses/data-science" element={<DataScience />} />
                  <Route path="/courses/cloud-computing" element={<CloudComputing />}/>
                  <Route path="/courses/java-development" element={<JavaDevelopment />} />
                  <Route path="/courses/generative-ai" element={<GenerativeAI />} />
                  <Route path="/courses/android-development" element={<AndroidDevelopment/>} />
                  <Route path="/courses/python-development" element={<PythonDevelopment/>} />
                  <Route path="/courses/cpp-development" element={<CppDevelopment/>} />
                  <Route path="/courses/machine-learning" element={<MachineLearning/>} />

                  {/* Service Pages */}
                  <Route path="/services/web-development" element={<WebDevService />} />
                  <Route path="/services/app-development" element={<AppDevService />} />

                  {/* Certificate Verification Routes */}
                  <Route path="/verify" element={<CertificateVerification />} />
                  <Route
                    path="/verify/:certificateId"
                    element={<CertificateVerification />}
                  />

                  {/* Auth Routes */}
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />

                  {/* 404 Page - This should be the last route */}
                  <Route path="*" element={<NotFound />} />
            </Routes>
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
