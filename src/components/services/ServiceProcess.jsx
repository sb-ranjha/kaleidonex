import React from 'react';
import CountUp from 'react-countup';

const ServiceProcess = ({ title, description, steps, stats }) => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{title}</h2>
          {description && (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{description}</p>
          )}
        </div>

        {/* Process Steps */}
        <div className="relative mb-32"> {/* Increased bottom margin */}
          {/* Connecting Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20 hidden md:block"></div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Step Number */}
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto relative z-10 shadow-glow">
                  {index + 1}
                </div>

                {/* Step Content */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-purple-500/20 hover:shadow-glow group h-full">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        {stats && (
          <div className="border-t border-white/10 pt-16 mt-16"> {/* Added border and padding */}
            <h3 className="text-2xl font-bold text-white mb-8 text-center" data-aos="fade-up">Key Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-500 border border-white/5 hover:border-purple-500/20 hover:shadow-glow group relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Background glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/0 to-indigo-500/0 opacity-0 group-hover:opacity-100 rounded-xl blur group-hover:from-purple-500/10 group-hover:to-indigo-500/10 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:from-purple-600/30 group-hover:to-indigo-600/30 transition-all duration-500 shadow-glow-sm">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {stat.value.includes('+') ? (
                      <>
                        <CountUp
                          end={parseInt(stat.value.replace('+', ''))}
                          duration={2.5}
                          separator=","
                          enableScrollSpy
                          scrollSpyDelay={500}
                        />
                        <span>+</span>
                      </>
                    ) : stat.value.includes('%') ? (
                      <>
                        <CountUp
                          end={parseInt(stat.value.replace('%', ''))}
                          duration={2.5}
                          enableScrollSpy
                          scrollSpyDelay={500}
                        />
                        <span>%</span>
                      </>
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                </div>
              </div>
            ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceProcess;
