import React, { useState, useEffect } from 'react';

const LoadingSpinner = () => {
  const [loadingText, setLoadingText] = useState('');
  const [dotCount, setDotCount] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const loadingMessages = [
    "Initializing Systems",
    "Configuring Future Technologies",
    "Loading Innovation Hub",
    "Preparing Digital Workspace",
    "Synchronizing Advanced Features",
    "Launching Kaleidonex Experience"
  ];

  useEffect(() => {
    const startTime = Date.now();
    let currentIndex = 0;
    let currentMessageIndex = 0;
    const typingSpeed = 50;
    const messageDelay = 800; // Reduced message delay
    const totalLoadTime = 5000; // Changed to 5 seconds
    const progressUpdateInterval = 16;
    
    // Progress bar fills quickly but loading continues
    const progressInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      // Faster progress bar fill (2x speed)
      const progress = Math.min((elapsedTime / (totalLoadTime / 2)), 1);
      const easedProgress = Math.min(progress * (2 - progress) * 100, 100);
      setProgress(easedProgress);
      
      if (elapsedTime >= totalLoadTime) {
        clearInterval(progressInterval);
        setProgress(100);
      }
    }, progressUpdateInterval);

    const typingInterval = setInterval(() => {
      const currentMessage = loadingMessages[currentMessageIndex];
      
      if (currentIndex <= currentMessage.length) {
        setLoadingText(currentMessage.slice(0, currentIndex));
        currentIndex++;
      } else {
        setTimeout(() => {
          if (Date.now() - startTime < totalLoadTime) {
            currentIndex = 0;
            currentMessageIndex = (currentMessageIndex + 1) % loadingMessages.length;
            setMessageIndex(currentMessageIndex);
          }
        }, messageDelay);
      }
    }, typingSpeed);

    const dotsInterval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4);
    }, 300); // Faster dots animation

    // Ensure minimum 5 second loading time
    const minLoadingTimer = setTimeout(() => {
      clearInterval(progressInterval);
      clearInterval(typingInterval);
      clearInterval(dotsInterval);
      setProgress(100);
      setLoadingText(loadingMessages[loadingMessages.length - 1]);
    }, totalLoadTime);

    return () => {
      clearInterval(progressInterval);
      clearInterval(typingInterval);
      clearInterval(dotsInterval);
      clearTimeout(minLoadingTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-primary-dark flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-primary to-primary-dark animate-gradient"></div>
      
      {/* Multiple glowing orbs with slower animation */}
      <div className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute w-56 sm:w-80 h-56 sm:h-80 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse-slow delay-700 -translate-x-16 sm:-translate-x-32"></div>
      <div className="absolute w-48 sm:w-72 h-48 sm:h-72 bg-indigo-600/10 rounded-full filter blur-3xl animate-pulse-slow delay-1000 translate-x-16 sm:translate-x-32"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-sm sm:max-w-md">
        {/* Company name with enhanced glowing effect */}
        <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 mb-8 sm:mb-12 animate-glow tracking-wider text-center">
          Kaleidonex
        </h1>
        
        {/* Progress bar with smoother animation */}
        <div className="w-full sm:w-80 h-1.5 bg-white/10 rounded-full mb-6 sm:mb-8 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Animated loading text */}
        <div className="mt-4 text-center w-full">
          <p className="text-lg sm:text-xl text-purple-300/90 font-light tracking-wider min-h-[2em] px-2">
            {loadingText}
            <span className="inline-block w-4">
              {'.'.repeat(dotCount)}
            </span>
          </p>
          <p className="text-purple-300/50 text-xs sm:text-sm mt-2 animate-pulse-slow px-2">
            Please wait while we prepare your experience
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes glow {
          0%, 100% { 
            text-shadow: 
              0 0 20px rgba(167, 139, 250, 0.5),
              0 0 40px rgba(167, 139, 250, 0.3),
              0 0 60px rgba(167, 139, 250, 0.1);
          }
          50% { 
            text-shadow: 
              0 0 30px rgba(167, 139, 250, 0.8),
              0 0 50px rgba(167, 139, 250, 0.5),
              0 0 70px rgba(167, 139, 250, 0.3);
          }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% { 
            transform: translateY(-100px) translateX(20px);
            opacity: 0.5;
          }
          100% { 
            transform: translateY(-200px) translateX(0);
            opacity: 0;
          }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner; 