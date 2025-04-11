import React from 'react';
import { motion } from 'framer-motion';
import Devdisplay from "../assets/TrustedLogo/devdisplay_logo.png";

const TrustedBy = () => {
  const companies = [
    {
      name: 'DevDisplay',
      logo: Devdisplay,
      title: 'DevDisplay',
    },
    {
      name: 'Gdg',
      logo: '/logos/gdg.svg',
      title: '',
    },
    {
      name: 'Host IT',
      logo: '/logos/hostit.svg',
      title: '',
    },
    {
      name: 'Asteroid Kit',
      logo: '/logos/asteroid.svg',
      title: '',
    },
  ];

  return (
    <div className="w-full py-16 bg-primary dark:bg-gray-900 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center text-white mb-12 text-shadow-glow"
        >
          Trusted by <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Industry Leaders</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm p-8 border border-white/10 shadow-lg"
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary dark:from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary dark:from-gray-900 to-transparent z-10"></div>

          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex items-center space-x-24 min-w-max">
              {companies.map((company, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-6 px-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300 bg-white/10 rounded-lg p-3 hover:bg-white/20">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {company.title && (
                      <span className="text-white text-xl font-medium whitespace-nowrap">
                        {company.title}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-24 min-w-max">
              {companies.map((company, index) => (
                <motion.div
                  key={`dup-${index}`}
                  className="flex items-center space-x-6 px-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300 bg-white/10 rounded-lg p-3 hover:bg-white/20">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {company.title && (
                      <span className="text-white text-xl font-medium whitespace-nowrap">
                        {company.title}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: inline-flex;
          animation: scroll 30s linear infinite; /* Adjusted duration for smoothness */
          will-change: transform; /* Optimize performance */
        }
        /* Ensure no reflow issues */
        .animate-scroll > div {
          min-width: 0; /* Prevent shrinkage */
        }
      `}</style>

      {/* Add a subtle call to action */}
      <div className="mt-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-300 mb-6"
        >
          Join the growing list of companies that trust our expertise
        </motion.p>
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 hover:shadow-glow"
        >
          Become a Partner
        </motion.a>
      </div>
    </div>
  );
};

export default TrustedBy;