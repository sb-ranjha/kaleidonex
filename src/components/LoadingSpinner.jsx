import React, { useState, useEffect } from 'react';

const LoadingSpinner = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const totalLoadTime = 2000; // Reduced to 2 seconds for faster loading
    const progressUpdateInterval = 10; // More frequent updates for smoother animation

    // Preload key assets
    const preloadImages = () => {
      const imagesToPreload = [
        '/logo.png',
        '/assets/hero-bg.jpg'
      ];

      imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();

    // Progress bar fills smoothly with slight acceleration at the beginning
    const progressInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      // Use easeOutQuad for smoother progress feeling
      const rawProgress = Math.min(elapsedTime / totalLoadTime, 1);
      const progress = Math.min(100, rawProgress * (2 - rawProgress) * 100);

      setProgress(progress);

      if (elapsedTime >= totalLoadTime) {
        clearInterval(progressInterval);
        setProgress(100);
      }
    }, progressUpdateInterval);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-primary-dark to-primary"></div>

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full filter blur-3xl animate-pulse-slow delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-violet-500/15 rounded-full filter blur-3xl animate-pulse-slow delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-fuchsia-500/15 rounded-full filter blur-3xl animate-pulse-slow delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-xs sm:max-w-sm">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/30 rounded-full filter blur-md animate-pulse-slow"></div>
            <h1 className="text-6xl sm:text-7xl font-bold text-white relative z-10">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">K</span>
            </h1>
          </div>
        </div>

        {/* Modern progress bar */}
        <div className="w-full h-2 bg-white/10 rounded-full mb-6 overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 transition-all duration-100 shadow-lg"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Company name */}
        <h2 className="text-3xl font-bold text-white mb-2 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-200">
          Kaleidonex
        </h2>

        {/* Enhanced loading text */}
        <p className="text-purple-200/90 text-sm animate-pulse flex items-center">
          Loading your experience
          <span className="ml-1 flex space-x-1">
            <span className="animate-bounce delay-100">.</span>
            <span className="animate-bounce delay-200">.</span>
            <span className="animate-bounce delay-300">.</span>
          </span>
        </p>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce {
          animation: bounce 0.8s infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;