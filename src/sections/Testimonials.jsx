import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Web Developer",
    image: "https://i.pravatar.cc/150?img=1", // Using pravatar for placeholder images
    quote: "The courses on CourseHub have been instrumental in advancing my career. The instructors are top-notch and the content is always up-to-date with industry standards.",
    rating: 5,
    courseTaken: "Advanced Web Development"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Scientist",
    image: "https://i.pravatar.cc/150?img=2",
    quote: "I've taken several data science courses here, and I'm impressed by the depth of knowledge provided. It's helped me tackle real-world problems in my job.",
    rating: 4,
    courseTaken: "Data Science Essentials"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer",
    image: "https://i.pravatar.cc/150?img=3",
    quote: "The UX design course I took was fantastic! It provided practical skills that I could immediately apply to my projects.",
    rating: 5,
    courseTaken: "UX Design Fundamentals"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Mobile Developer",
    image: "https://i.pravatar.cc/150?img=4",
    quote: "The mobile development curriculum is comprehensive and practical. I learned Swift and React Native effectively.",
    rating: 4,
    courseTaken: "Mobile App Development"
  },
  {
    id: 5,
    name: "Lisa Martinez",
    role: "Product Manager",
    image: "https://i.pravatar.cc/150?img=5",
    quote: "These courses helped me transition from engineering to product management seamlessly. Great real-world examples!",
    rating: 5,
    courseTaken: "Product Management"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Cloud Architect",
    image: "https://i.pravatar.cc/150?img=6",
    quote: "The AWS certification courses were exactly what I needed. Passed my certification exam on the first try!",
    rating: 5,
    courseTaken: "AWS Certified Solutions Architect"
  },
  {
    id: 7,
    name: "Anna Kowalski",
    role: "Data Analyst",
    image: "https://i.pravatar.cc/150?img=7",
    quote: "The data analytics program gave me the skills to advance in my career. The hands-on projects were invaluable.",
    rating: 4,
    courseTaken: "Data Analysis"
  },
  {
    id: 8,
    name: "Tom Anderson",
    role: "Security Engineer",
    image: "https://i.pravatar.cc/150?img=8",
    quote: "Cybersecurity courses here are top-notch. They cover both theoretical concepts and practical applications well.",
    rating: 5,
    courseTaken: "Cybersecurity"
  },
  {
    id: 9,
    name: "Maria Garcia",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=9",
    quote: "Learning React and Vue through these courses was a game-changer for my development career.",
    rating: 4,
    courseTaken: "Frontend Development"
  },


];

const TestimonialCard = ({
  name,
  role,
  image,
  quote,
  rating = 5,
  courseTaken,
  isBlinking,
  isMobile,
  index = 0,
  className = '',
}) => {
  // const [imageError, setImageError] = useState(false);
  const [setImageError] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  // Tooltip styles
  const tooltipStyles = isMobile ? `
    absolute -top-2 -right-2 z-20
    bg-gradient-to-r from-orange-500 to-orange-600
    text-white
    px-2 py-0.5
    text-[10px]
    font-medium
    rounded-tr-lg rounded-bl-lg
    shadow-sm
    border border-white/20
    flex items-center gap-1
    whitespace-nowrap
    transform -rotate-12
    opacity-100
  ` : `
    absolute -top-2 -right-2 z-20
    transition-all duration-300 ease-in-out
    ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -10,
        scale: 1.03,
        transition: { type: "spring", stiffness: 400 }
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      onHoverStart={() => !isMobile && setIsHovered(true)}
      onHoverEnd={() => !isMobile && setIsHovered(false)}
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-glow relative cursor-pointer group overflow-hidden transition-all duration-300 max-w-full ${className}`}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Animated corner accent */}
      <div className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-bl-full transform rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

      {/* Tooltip */}
      <div className={tooltipStyles}>
        {isMobile ? (
          <span>{role}</span>
        ) : (
          <div className="
            bg-gradient-to-r from-purple-600 to-pink-500
            text-white
            px-2 py-0.5 sm:px-3 sm:py-1
            text-[10px] sm:text-xs md:text-sm
            font-medium
            rounded-full
            shadow-md
            border border-white/20
            flex items-center gap-1
            whitespace-nowrap
            transform -rotate-12
          ">
            <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
            {role}
          </div>
        )}
      </div>

      {/* Animated highlight effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isBlinking ? {
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.05, 1],
          transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }
        } : { opacity: 0 }}
        className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl"
      />

      {/* Profile section with staggered animation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-sm transform scale-110 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full border-2 border-white/30 shadow-lg object-cover relative z-10 group-hover:border-white/70 transition-all duration-300"
            onError={() => setImageError(true)}
          />
        </div>
        <div className="ml-4">
          <h4 className="font-bold text-white text-lg group-hover:text-shadow-glow transition-all duration-300">{name}</h4>
        </div>
      </motion.div>

      {/* Quote section with fade animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative mt-6"
      >
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 0.7, x: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute -left-2 -top-2 text-5xl text-purple-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        >
          "
        </motion.span>
        <p className="text-gray-200 italic px-6 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">{quote}</p>
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 0.7, x: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute -right-2 -bottom-2 text-5xl text-purple-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        >
          "
        </motion.span>
      </motion.div>

      {/* Course tag with slide-up animation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6"
      >
        <span className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-md">
          {courseTaken}
        </span>
      </motion.div>

      {/* Rating stars with staggered animation */}
      <motion.div className="flex gap-1.5 mt-4">
        {[...Array(rating)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.6 + (i * 0.1),
              type: "spring",
              stiffness: 400
            }}
          >
            <FaStar className="text-yellow-400 w-5 h-5" />
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [displayedTestimonials, setDisplayedTestimonials] = useState([]);
  const [isBlinking, setIsBlinking] = useState(false); // Changed from flippedIndex to isBlinking
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize testimonials based on screen size
  useEffect(() => {
    const count = isMobile ? 4 : 6; // 4 cards for mobile, 6 for larger screens
    const initialTestimonials = testimonials
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
    setDisplayedTestimonials(initialTestimonials);
  }, [isMobile]);

  // Modified flip effect with faster timing
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsBlinking(true);

      // Wait for the flip animation to reach halfway
      setTimeout(() => {
        setDisplayedTestimonials(prev => {
          return testimonials
            .filter(t => !prev.find(pt => pt.id === t.id))
            .sort(() => Math.random() - 0.5)
            .slice(0, prev.length);
        });
      }, 400); // Half of the flip duration

      // Reset the flip after complete animation
      setTimeout(() => {
        setIsBlinking(false);
      }, 800); // Full flip duration

    }, 5000); // Increased interval to 5 seconds for better readability

    return () => clearInterval(interval);
  }, [isPaused, isMobile]);

  const handleCardHover = (index) => {
    setIsPaused(true);
    setActiveIndex(index);
  };
  const handleCardLeave = () => setIsPaused(false);

  return (
    <section className="bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden overflow-x-hidden
                      py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-600/20 to-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-40 left-20 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-sm hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur-sm hidden md:block"
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </motion.div>
            <span className="text-purple-300 text-sm font-medium">Student Testimonials</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-glow relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              What Our
            </motion.span>{" "}
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 relative inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
            >
              Students
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Say
            </motion.span>
          </motion.h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hear from our students about their learning experiences and success stories
            {isMobile ? ' - Swipe to see more' : ''}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={`
          grid gap-4 sm:gap-6 md:gap-8 lg:gap-10
          ${isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-3'}
          max-w-full sm:max-w-[1200px] mx-auto
          px-2 sm:px-0
        `}>
          {displayedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${index}`}
              {...testimonial}
              isBlinking={isBlinking}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
              isMobile={isMobile}
              index={index}
              className={isMobile ? `transition-opacity duration-300 ${index === activeIndex ? 'opacity-100' : 'opacity-50'}` : ''}
            />
          ))}
        </motion.div>

        {/* Mobile Indicator Dots */}
        {isMobile && (
          <div className="flex justify-center gap-3 mt-8">
            {[0, 1, 2].map((index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileTap={{ scale: 0.9 }}
                className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-gradient-to-r from-purple-400 to-pink-500 w-8' : 'bg-white/30 w-2.5'}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl py-3 px-8 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-glow max-w-full"
          >
            View All Testimonials
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
