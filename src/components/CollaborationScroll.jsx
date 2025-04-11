import React from 'react';

const logos = [
  [
    { name: 'Google', logo: '/logos/google.svg' },
    { name: 'Microsoft', logo: '/logos/microsoft.svg' },
    { name: 'Amazon', logo: '/logos/amazon.svg' },
    { name: 'Meta', logo: '/logos/meta.svg' },
    { name: 'Apple', logo: '/logos/apple.svg' },
    { name: 'IBM', logo: '/logos/ibm.svg' },
  ],
  [
    { name: 'Intel', logo: '/logos/intel.svg' },
    { name: 'Oracle', logo: '/logos/oracle.svg' },
    { name: 'Cisco', logo: '/logos/cisco.svg' },
    { name: 'Adobe', logo: '/logos/adobe.svg' },
    { name: 'Salesforce', logo: '/logos/salesforce.svg' },
    { name: 'VMware', logo: '/logos/vmware.svg' },
  ]
];

const CollaborationScroll = () => {
  return (
    <div className="w-full bg-primary py-8 sm:py-16 overflow-x-hidden scrollbar-hide">
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Our graduates work at top tech companies worldwide
          </p>
        </div>

        <div className="relative overflow-hidden scrollbar-hide">
          {/* Gradient overlays with stronger fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-80 bg-gradient-to-r from-primary via-primary to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-80 bg-gradient-to-l from-primary via-primary to-transparent z-10"></div>

          {/* First row - scrolling left */}
          <div className="flex items-center space-x-8 sm:space-x-16 mb-8 sm:mb-12 animate-scroll-left px-8 sm:px-16 overflow-hidden scrollbar-hide">
            {[...logos[0], ...logos[0], ...logos[0], ...logos[0], ...logos[0], ...logos[0]].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-8 w-[120px] sm:w-[180px] h-[60px] sm:h-[80px] hover:bg-white/10 transition-all duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-6 sm:h-10 w-auto filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          {/* Second row - scrolling right */}
          <div className="flex items-center space-x-8 sm:space-x-16 animate-scroll-right px-8 sm:px-16 overflow-hidden scrollbar-hide">
            {[...logos[1], ...logos[1], ...logos[1], ...logos[1], ...logos[1], ...logos[1]].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-8 w-[120px] sm:w-[180px] h-[60px] sm:h-[80px] hover:bg-white/10 transition-all duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-6 sm:h-10 w-auto filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationScroll; 