import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCTA = ({ 
  title = "Ready to Start Your Project?", 
  description = "Let's turn your ideas into reality with our expert development team.", 
  buttonText = "Get Started Now",
  buttonLink = "/contact",
  gradient = "from-purple-600 to-purple-800"
}) => {
  const navigate = useNavigate();
  
  return (
    <div className="py-20" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-gradient-to-r ${gradient} rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden`}>
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/4 -translate-y-1/4 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 relative z-10">
            {title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto relative z-10">
            {description}
          </p>
          <button 
            onClick={() => navigate(buttonLink)}
            className="bg-white text-purple-600 hover:bg-gray-100 rounded-xl py-4 px-8 text-lg font-medium transition-all duration-300 transform hover:scale-105 relative z-10 shadow-xl"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCTA;
