import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import androidImage from "../assets/courses/android1.jpg";
import webImage from "../assets/courses/webdev.jpeg";
import genimage from "../assets/courses/genai.jpg";

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

  return (
    <div className="bg-primary border-2 border-white rounded-xl overflow-hidden flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      {/* Content Container */}
      <div className="p-5 md:p-6 lg:p-8 flex flex-col flex-grow">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 line-clamp-2 min-h-[3.5rem]">
          {title}
        </h2>
        
        <div className="flex-grow">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-green-400 text-lg">✓</span>
                <span className="text-gray-300 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={handleProgramDetails}
          className="mt-auto bg-white hover:bg-gray-100 text-primary-light rounded-full py-3 px-6 flex items-center justify-between transition-all duration-300 group"
        >
          <span className="text-sm md:text-base font-medium">Program Details</span>
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      {/* Desktop and Tablet Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>

      {/* Mobile Single Card View with Auto-Slide */}
      <div className="md:hidden">
        <div 
          ref={slideRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          onScroll={handleScroll}
        >
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="flex-none w-full snap-start px-4"
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-6">
          {courses.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                slideRef.current?.scrollTo({
                  left: index * slideRef.current.offsetWidth,
                  behavior: 'smooth'
                });
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-primary w-6' 
                  : 'bg-primary/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* View All Courses Button - Shown on both mobile and desktop */}
      <div className="flex justify-center mt-8 sm:mt-12 lg:mt-16">
        <button
          onClick={handleViewAllCourses}
          className="group border-2 border-white bg-white hover:bg-primary text-primary 
                     hover:text-white px-8 py-3 rounded-full flex items-center gap-3 
                     transition-all duration-300"
        >
          <span className="text-base sm:text-lg font-medium">
            View All Programs
          </span>
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default CoursesGrid;
