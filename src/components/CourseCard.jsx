import { ArrowRightIcon, AcademicCapIcon, BriefcaseIcon, UserGroupIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import androidImage from "../assets/courses/android1.jpg";
import webImage from "../assets/courses/webdev.jpeg";
import genimage from "../assets/courses/genai.jpg";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { y: -10, transition: { duration: 0.3 } }
};

const CourseCard = ({ title, imageUrl, route, keyPoints = [] }) => {
  const navigate = useNavigate();

  const handleProgramDetails = () => {
    const courseRoutes = {
      'Web Development': 'web-development',
      'Android Development': 'android-development',
      'Generative AI': 'generative-ai',
      'Java Development': 'java-development',
      'Python Development': 'python-development',
      'C++ Development': 'cpp-development',
      'Cloud Computing': 'cloud-computing',
      'Machine Learning': 'machine-learning'
    };

    const route = courseRoutes[title];
    if (route) {
      navigate(`/courses/${route}`);
    } else {
      console.log('No route found for:', title);
    }
  };

  // Get icon for each key point
  const getIconForPoint = (point, index) => {
    const icons = [
      <AcademicCapIcon key="academic" className="w-4 h-4 text-purple-400" />,
      <BriefcaseIcon key="briefcase" className="w-4 h-4 text-purple-400" />,
      <UserGroupIcon key="users" className="w-4 h-4 text-purple-400" />,
      <DocumentCheckIcon key="document" className="w-4 h-4 text-purple-400" />
    ];
    return icons[index % icons.length];
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden flex flex-col shadow-lg hover:shadow-glow transition-all duration-300"
    >
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent hover:from-black/40 transition-colors duration-300"></div>

        {/* Course title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
          <h2 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
            {title}
          </h2>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 md:p-6 lg:p-7 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="space-y-3 mb-6">
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center">
                  {getIconForPoint(point, index)}
                </div>
                <span className="text-gray-200 text-sm group-hover:text-white transition-colors duration-200">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.button
          onClick={handleProgramDetails}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg py-3 px-6
                   flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg w-full"
        >
          <span className="text-sm md:text-base font-medium">Program Details</span>
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </div>
    </motion.div>
  );
};

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const CoursesGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Web Development",
      keyPoints: [
        "Live Projects",
        "Industry Mentors",
        "Career Support",
        "Certification"
      ],
      imageUrl: webImage
    },
    {
      id: 2,
      title: "Android Development",
      keyPoints: [
        "Hands-on Training",
        "Real Projects",
        "Expert Guidance",
        "Job Assistance"
      ],
      imageUrl: androidImage
    },
    {
      id: 3,
      title: "Generative AI",
      keyPoints: [
        "AI Projects",
        "Research Work",
        "Industry Connect",
        "Publication Help"
      ],
      imageUrl: genimage
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % courses.length;
        if (slideRef.current) {
          slideRef.current.scrollTo({
            left: nextIndex * slideRef.current.offsetWidth,
            behavior: 'smooth'
          });
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [courses.length]);

  const handleScroll = (event) => {
    if (slideRef.current) {
      const index = Math.round(event.target.scrollLeft / event.target.offsetWidth);
      setCurrentIndex(index);
    }
  };

  const handleViewAllCourses = () => {
    navigate('/courses');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 z-0"></div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 relative z-10"
      >
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <AcademicCapIcon className="h-5 w-5 text-purple-400" />
          <span className="text-purple-300 text-sm font-medium">Featured Programs</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-shadow-glow">
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Popular Courses</span>
        </h2>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Comprehensive programs designed to help you master in-demand skills
        </p>
      </motion.div>

      {/* Desktop and Tablet Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10"
      >
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </motion.div>

      {/* Mobile Single Card View with Auto-Slide */}
      <div className="md:hidden relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            ref={slideRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide max-w-full"
            onScroll={handleScroll}
          >
            {courses.map((course, index) => (
              <div
                key={index}
                className="flex-none w-full snap-start px-4 max-w-full box-border"
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>

          {/* Dots Indicator - Enhanced */}
          <div className="flex justify-center gap-3 mt-6">
            {courses.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  slideRef.current?.scrollTo({
                    left: index * slideRef.current.offsetWidth,
                    behavior: 'smooth'
                  });
                }}
                whileTap={{ scale: 0.9 }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-gradient-to-r from-purple-400 to-pink-500 w-8'
                    : 'bg-white/30 w-2.5'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* View All Courses Button - Shown on both mobile and desktop */}
      <div className="flex justify-center mt-8 sm:mt-12 lg:mt-16 relative z-10">
        <motion.button
          onClick={handleViewAllCourses}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800
                     text-white px-8 py-3 rounded-lg flex items-center gap-3
                     transition-all duration-300 shadow-md hover:shadow-glow"
        >
          <span className="text-base sm:text-lg font-medium">
            View All Programs
          </span>
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </div>
    </div>
  );
};

export default CoursesGrid;
