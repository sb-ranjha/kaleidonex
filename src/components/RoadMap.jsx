import { motion } from 'framer-motion';
import { useState } from 'react';

const RoadMap = ({ steps }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 50 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="py-16 bg-purple-950 dark:bg-gray-900 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-16"
          variants={itemVariants}
        >
          Course Roadmap
        </motion.h2>
        
        <div className="relative">
          {/* SVG Path Line */}
          <svg
            className="absolute top-1/2 left-0 w-full -translate-y-1/2 -z-10"
            style={{ height: '2px' }}
          >
            <motion.path
              d="M0 1 L1000 1"
              stroke="rgba(156, 163, 175, 0.4)"
              strokeWidth="2"
              strokeDasharray="5 5"
              fill="none"
              variants={lineVariants}
            />
          </svg>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center space-y-4"
                variants={itemVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className={`w-20 h-20 rounded-full flex items-center justify-center p-4
                    ${step.bgColor || 'bg-purple-600'} cursor-pointer
                    transition-shadow duration-300 ease-in-out`}
                  animate={{
                    boxShadow: hoveredIndex === index 
                      ? '0 0 25px rgba(255,255,255,0.5)' 
                      : '0 0 0 rgba(0,0,0,0)'
                  }}
                >
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.2 : 1,
                      rotate: hoveredIndex === index ? 360 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.icon}
                  </motion.div>
                </motion.div>

                <motion.div
                  animate={{
                    y: hoveredIndex === index ? -5 : 0
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-gray-300 text-sm mt-2 opacity-0 transition-opacity duration-300 ease-in-out"
                     style={{ opacity: hoveredIndex === index ? 1 : 0.7 }}>
                    {step.description}
                  </p>
                </motion.div>

                {/* Step Number */}
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default RoadMap;
