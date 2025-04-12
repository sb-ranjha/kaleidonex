import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const ServiceHero = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  primaryCTA = "Start Your Project", 
  secondaryCTA = "Learn More",
  primaryAction = "/contact",
  secondaryAction = "#features",
  backgroundElements = true
}) => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrimaryAction = () => {
    if (primaryAction.startsWith('#')) {
      scrollToSection(primaryAction.substring(1));
    } else {
      navigate(primaryAction);
    }
  };

  const handleSecondaryAction = () => {
    if (secondaryAction.startsWith('#')) {
      scrollToSection(secondaryAction.substring(1));
    } else {
      navigate(secondaryAction);
    }
  };

  return (
    <div className="relative overflow-hidden pt-32 pb-16">
      {/* Background elements */}
      {backgroundElements && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-transparent" data-aos="fade-in" data-aos-duration="1500"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left" data-aos="fade-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <h2 className="text-2xl sm:text-3xl text-purple-300 mb-6 font-medium">
              {subtitle}
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-xl mx-auto md:mx-0">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
              <button
                onClick={handlePrimaryAction}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl py-4 px-8 text-lg font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 w-full sm:w-auto shadow-lg hover:shadow-purple-500/20"
                data-aos="fade-up" 
                data-aos-delay="200"
              >
                {primaryCTA}
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button
                onClick={handleSecondaryAction}
                className="bg-white/10 hover:bg-white/20 text-white rounded-xl py-4 px-8 text-lg font-medium transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 w-full sm:w-auto"
                data-aos="fade-up" 
                data-aos-delay="300"
              >
                {secondaryCTA}
              </button>
            </div>
          </div>
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            {image && (
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent mix-blend-overlay"></div>
              </div>
            )}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 rounded-lg blur-xl opacity-70 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
