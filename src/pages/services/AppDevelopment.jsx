import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  DevicePhoneMobileIcon,
  CubeTransparentIcon,
  PaintBrushIcon,
  CloudArrowUpIcon,
  ChartBarIcon,
  BellAlertIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  StarIcon as StarIconOutline
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

const AppDevelopment = () => {
  const navigate = useNavigate();

  const technologies = [
    { name: 'React Native', icon: '/logos/react-native.svg' },
    { name: 'Flutter', icon: '/logos/flutter.svg' },
    { name: 'Swift', icon: '/logos/swift.svg' },
    { name: 'Kotlin', icon: '/logos/kotlin.svg' },
    { name: 'Firebase', icon: '/logos/firebase.svg' },
    { name: 'Android Studio', icon: '/logos/android-studio.svg' },
  ];

  const services = [
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      title: "Native App Development",
      description: "High-performance native apps for iOS and Android platforms."
    },
    {
      icon: <CubeTransparentIcon className="w-8 h-8" />,
      title: "Cross-Platform Development",
      description: "Cost-effective solutions that work seamlessly across platforms."
    },
    {
      icon: <PaintBrushIcon className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Intuitive and engaging user interfaces with modern design principles."
    },
    {
      icon: <CloudArrowUpIcon className="w-8 h-8" />,
      title: "Cloud Integration",
      description: "Secure cloud storage and real-time data synchronization."
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Analytics Integration",
      description: "Track user behavior and app performance metrics."
    },
    {
      icon: <BellAlertIcon className="w-8 h-8" />,
      title: "Push Notifications",
      description: "Engage users with timely and relevant notifications."
    }
  ];

  const features = [
    {
      title: "Custom Features",
      items: [
        "User Authentication",
        "Real-time Updates",
        "Offline Mode",
        "Social Integration",
        "Payment Gateway",
        "Maps & Location"
      ]
    },
    {
      title: "Security Features",
      items: [
        "Data Encryption",
        "Secure API",
        "Biometric Auth",
        "SSL Certificate",
        "Regular Updates",
        "Compliance"
      ]
    }
  ];

  // Add testimonials data
  const testimonials = [
    {
      name: "David Wilson",
      role: "Founder, FitLife App",
      image: "/images/testimonials/david.jpg",
      rating: 5,
      text: "The app development team created an exceptional fitness tracking app that exceeded our expectations. User engagement has skyrocketed!",
      metrics: {
        "App Downloads": "1M+",
        "User Retention": "92%",
        "App Rating": "4.8/5"
      }
    },
    {
      name: "Emily Zhang",
      role: "CTO, QuickServe",
      image: "/images/testimonials/emily.jpg",
      rating: 4.9,
      text: "Our food delivery app has transformed our business. The team's expertise in real-time tracking and payment integration was invaluable.",
      metrics: {
        "Order Growth": "+300%",
        "Delivery Time": "-45%",
        "User Base": "500K+"
      }
    }
  ];

  // Add mobile app projects data
  const appProjects = [
    {
      title: "Healthcare Management App",
      image: "/images/projects/healthcare-app.jpg",
      challenge: "A healthcare provider needed a secure and user-friendly mobile app for patient management, appointment scheduling, and medical records access.",
      solution: "We developed a HIPAA-compliant mobile app with real-time appointment booking, secure patient records, and integrated telemedicine features. The app includes biometric authentication and encrypted data storage."
    },
    {
      title: "Food Delivery Platform",
      image: "/images/projects/food-delivery-app.jpg",
      challenge: "A restaurant chain required a comprehensive food delivery platform to manage orders, track deliveries, and enhance customer experience.",
      solution: "We built a feature-rich delivery app with real-time order tracking, multiple payment options, and an AI-powered recommendation system. The app includes a driver management system and analytics dashboard."
    }
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % appProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + appProjects.length) % appProjects.length);
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/services')}
        className="fixed top-24 left-4 sm:left-8 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 group"
      >
        <ArrowLeftIcon className="w-6 h-6" />
        <span className="absolute left-full ml-2 bg-white/10 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Back to Services
        </span>
      </button>

      {/* Hero Section with enhanced animation */}
      <div className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-transparent animate-fade-in"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
              Mobile App Development
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in">
              Create powerful mobile experiences that users love
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-4 px-8 text-lg font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 w-full sm:w-auto"
              >
                Start Your App Project
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('testimonials');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/10 hover:bg-white/20 text-white rounded-xl py-4 px-8 text-lg font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 w-full sm:w-auto"
              >
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rating Overview Section */}
      <div className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2 lg:col-span-4 text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIconSolid key={i} className="w-8 h-8 text-yellow-400" />
                ))}
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">4.9 out of 5</h2>
              <p className="text-gray-300">Based on 150+ app projects</p>
            </div>
            {[
              { label: "Apps Launched", value: "100+", icon: "📱" },
              { label: "Active Users", value: "2M+", icon: "👥" },
              { label: "App Store Rating", value: "4.8", icon: "⭐" },
              { label: "Client Satisfaction", value: "97%", icon: "🏆" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid with hover effects */}
      <div className="py-20 bg-primary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Our App Development Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-purple-600 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Success Stories */}
      <div id="testimonials" className="py-20 bg-primary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Client Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                      <p className="text-gray-300">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIconSolid 
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400' : 'text-gray-400'}`}
                      />
                    ))}
                    <span className="text-gray-300">({testimonial.rating})</span>
                  </div>

                  <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>

                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(testimonial.metrics).map(([key, value], i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-3 text-center">
                        <div className="text-purple-400 font-bold">{value}</div>
                        <div className="text-gray-400 text-sm">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section with enhanced design */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            App Features We Deliver
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((category, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-20 bg-primary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="h-12 w-12 mb-4"
                />
                <span className="text-white font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Showcase Section */}
      <div className="relative py-16 bg-primary/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            OUR MOBILE APP DEVELOPMENT PROJECTS
          </h2>

          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute -left-4 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all"
            >
              <ArrowLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextProject}
              className="absolute -right-4 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all"
            >
              <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Project Content */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Project Image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={appProjects[currentProject].image}
                  alt={appProjects[currentProject].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="space-y-4 text-white">
                <h3 className="text-2xl font-bold">
                  {appProjects[currentProject].title}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {appProjects[currentProject].challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Solution:</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {appProjects[currentProject].solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {appProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentProject === index ? "bg-white w-6" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* View All Cases Button */}
          <div className="text-center mt-8">
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105"
            >
              VIEW ALL CASES
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 relative z-10">
              Ready to Build Your App?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto relative z-10">
              Let's turn your app idea into reality with our expert development team.
            </p>
            <button className="bg-white text-purple-600 hover:bg-gray-100 rounded-xl py-4 px-8 text-lg font-medium transition-all duration-300 transform hover:scale-105 relative z-10">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment; 