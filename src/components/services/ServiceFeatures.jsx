import React from 'react';

const ServiceFeatures = ({ title, description, features }) => {
  return (
    <div id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{title}</h2>
          {description && (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{description}</p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/5 hover:border-purple-500/20 hover:shadow-glow group relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Background glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/0 to-indigo-500/0 opacity-0 group-hover:opacity-100 rounded-xl blur group-hover:from-purple-500/10 group-hover:to-indigo-500/10 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:from-purple-600/30 group-hover:to-indigo-600/30 transition-all duration-500 shadow-glow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                
                {feature.items && (
                  <div className="space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform duration-300"
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-md group-hover/item:scale-125 transition-transform duration-300">
                          <div className="w-1 h-1 bg-white rounded-full opacity-70"></div>
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
