import React from 'react';
import about from "../assets/rb_1406.png"
// import aboutImage from "../assets/about.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-primary to-primary/50">
      <div className="min-h-screen w-full">
        {/* Responsive top spacing */}
        <div className="h-16 sm:h-20 md:h-24 lg:h-32" />
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-8xl">
          {/* Responsive grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-start">
            {/* Text Content - Enhanced mobile spacing */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 pt-2 sm:pt-4 lg:pt-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                font-bold text-white leading-tight">
                About Us
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-xl 
                text-white leading-relaxed">
             We offer courses and project-based learning to build practical skills in cloud computing, software development, and more. Designed for hands-on practice, our programs prepare learners for real-world challenges. 
              </p>
              
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-white">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                Our mission is to deliver accessible, high-quality education with hands-on practice for learners everywhere.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                In the coming days, we’ll also extend specialized services to support businesses with tailored tech solutions.
                </p>
              </div>

              {/* Stats Section - Improved mobile layout */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 
                pt-6 sm:pt-8 lg:pt-10">
                {[
                  { number: "500+", label: "Students" },
                  { number: "10+", label: "Courses" },
                  { number: "90%", label: "Success Rate" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center p-3 sm:p-4 md:p-5 lg:p-6 
                      bg-primary rounded-xl shadow-md 
                      hover:shadow-lg transition-all duration-300
                      transform hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                      font-bold text-white mb-1 sm:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg 
                      text-white">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image Section - Enhanced mobile display */}
            <div className="relative w-full lg:sticky lg:top-10 mt-8 lg:mt-0">
              <motion.img 
                src={about}
                alt="About Us" 
                className="w-full aspect-[4/5] sm:aspect-[3/4] 
                  object-cover rounded-xl sm:rounded-2xl 
                  shadow-lg sm:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut"
                  }
                }}
                whileInView={{
                  y: [0, -10, 0],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />

              {/* Decorative elements - Hidden on smaller screens */}
              <motion.div 
                className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 
                  w-24 sm:w-32 md:w-36 lg:w-40 
                  h-24 sm:h-32 md:h-36 lg:h-40 
                  bg-primary-light/50 rounded-full -z-10 
                  hidden sm:block"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileInView={{
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              <motion.div 
                className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 
                  w-32 sm:w-40 md:w-44 lg:w-48 
                  h-32 sm:h-40 md:h-44 lg:h-48 
                  bg-primary-light/50 rounded-full -z-10 
                  hidden sm:block"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileInView={{
                  x: [0, -10, 0],
                  y: [0, 10, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
            </div>
          </div>

          {/* Responsive bottom spacing */}
          <div className="h-8 sm:h-12 md:h-16 lg:h-20" />
        </div>
      </div>
    </section>
  );
};

export default About;
