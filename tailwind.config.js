/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // This enables dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#13072E', // Primary color
          light: '#3C1F7D', // Light variant
          dark: '#0A001E', // Dark variant
        },
        secondary: {
          DEFAULT: '#FF5E3A', // Secondary color
          light: '#FF7E65', // Light variant
          dark: '#CC491F', // Dark variant
        },
        neutral: {
          DEFAULT: '#333333', // Neutral color
          light: '#666666', // Light variant
          dark: '#1A1A1A', // Dark variant
        },
        success: '#28C76F', // Green success color
        warning: '#FF9F43', // Orange warning color
        danger: '#EA5455', // Red danger color
        info: '#00CFE8',   // Blue info color
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.1)',
      },
      zIndex: {
        '50': '50',
        '60': '60',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
        'scroll': 'scroll 30s linear infinite',
        'scroll-left': 'scroll-left 30s linear infinite',
        'scroll-right': 'scroll-right 30s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'bounce-in': 'bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'spin-slow': 'spin 3s linear infinite',
        'gradient': 'gradient 15s ease infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'spin-slower': 'spin 6s linear infinite reverse',
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        bounceIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3)'
          },
          '50%': {
            opacity: '0.9',
            transform: 'scale(1.1)'
          },
          '80%': {
            opacity: '1',
            transform: 'scale(0.89)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%, 100%': {
            textShadow: '0 0 20px rgba(167, 139, 250, 0.5), 0 0 40px rgba(167, 139, 250, 0.3), 0 0 60px rgba(167, 139, 250, 0.1)',
          },
          '50%': {
            textShadow: '0 0 30px rgba(167, 139, 250, 0.8), 0 0 50px rgba(167, 139, 250, 0.5), 0 0 70px rgba(167, 139, 250, 0.3)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0) translateX(0)',
            opacity: '0',
          },
          '50%': {
            transform: 'translateY(-100px) translateX(20px)',
            opacity: '0.5',
          },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.shadow-glow': {
          'box-shadow': '0 0 15px rgba(124, 58, 237, 0.5), 0 0 30px rgba(124, 58, 237, 0.2)'
        },
        '.shadow-glow-white': {
          'box-shadow': '0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.2)'
        },
        '.text-shadow-glow': {
          'text-shadow': '0 0 10px rgba(124, 58, 237, 0.5), 0 0 20px rgba(124, 58, 237, 0.3)'
        }
      })
    }
  ],
  safelist: [
    'bg-orange-100',
    'bg-orange-600',
    'bg-orange-900',
    'hover:bg-orange-700',
    'text-orange-300',
    'text-orange-400',
    'text-orange-600',
    'hover:text-orange-500',
    'focus:ring-orange-500',
    'dark:bg-gray-800',
    'dark:bg-gray-900',
    'dark:text-gray-100',
    'dark:text-gray-300',
    'dark:text-gray-400',
    'dark:text-gray-500',
    'dark:border-gray-600',
    'dark:bg-gray-700',
    'dark:hover:bg-gray-600',
    'dark:ring-offset-gray-800',
    // Add these classes to safelist if you need them to be preserved in production
    'animate-scroll',
    '[animation-play-state:paused]',
    'scrollbar-hide',
    'animate-fade-in-up',
    'animate-scale-in',
    'animate-bounce-in',
    'animate-on-scroll',
    'animate-spin-slower',
    'animate-float',
    'shadow-glow',
    'shadow-glow-white',
    'text-shadow-glow',
    'hover:shadow-glow',
  ],
};
