import React from 'react';
import LazyImage from '../LazyImage';

const ServiceTechnologies = ({ title, description, technologies }) => {
  return (
    <div className="py-20 bg-primary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{title}</h2>
          {description && (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{description}</p>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-purple-500/20 hover:shadow-glow group"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-full p-4 mb-4 group-hover:from-purple-600/10 group-hover:to-indigo-600/10 transition-all duration-300">
                {tech.icon ? (
                  <div className="w-12 h-12 flex items-center justify-center">
                    {tech.icon}
                  </div>
                ) : (
                  <LazyImage
                    src={tech.iconSrc}
                    alt={tech.name}
                    className="h-12 w-12"
                    effect="blur"
                  />
                )}
              </div>
              <h3 className="text-white font-medium mb-2 group-hover:text-purple-300 transition-colors duration-300">{tech.name}</h3>
              {tech.description && (
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{tech.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTechnologies;
