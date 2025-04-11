import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  CubeIcon,
  RocketLaunchIcon,
  CogIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  StarIcon,
  UserGroupIcon,
  SparklesIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ServerIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

const WebDevelopment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add animation classes on mount
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Add client projects data
  const clientProjects = [
    {
      name: "E-commerce Platform",
      description: "Built a scalable e-commerce platform with 100k+ daily users",
      image: "/images/projects/ecommerce.jpg",
      rating: 5,
      clientName: "TechMart Inc.",
      technologies: ["React", "Node.js", "MongoDB"],
      metrics: {
        users: "100k+",
        transactions: "500k+",
        uptime: "99.9%"
      }
    },
    {
      name: "Healthcare Portal",
      description: "Developed a secure healthcare management system",
      image: "/images/projects/healthcare.jpg",
      rating: 4.9,
      clientName: "MedCare Solutions",
      technologies: ["Next.js", "TypeScript", "AWS"],
      metrics: {
        users: "50k+",
        appointments: "200k+",
        satisfaction: "98%"
      }
    },
    {
      name: "Educational Platform",
      description: "Created an interactive learning management system",
      image: "/images/projects/education.jpg",
      rating: 4.8,
      clientName: "EduTech Global",
      technologies: ["React", "Firebase", "Node.js"],
      metrics: {
        students: "75k+",
        courses: "1000+",
        completion: "92%"
      }
    }
  ];

  const technologies = [
    { name: 'React', icon: '/logos/react.svg' },
    { name: 'Node.js', icon: '/logos/nodejs.svg' },
    { name: 'MongoDB', icon: '/logos/mongodb.svg' },
    { name: 'Next.js', icon: '/logos/nextjs.svg' },
    { name: 'TypeScript', icon: '/logos/typescript.svg' },
    { name: 'AWS', icon: '/logos/aws.svg' },
  ];

  const services = [
    {
      icon: <CodeBracketIcon className="w-8 h-8" />,
      title: "Custom Web Development",
      description: "Tailored web solutions built from scratch to meet your specific business requirements."
    },
    {
      icon: <CubeIcon className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Scalable online stores with secure payment gateways and inventory management."
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      title: "Progressive Web Apps",
      description: "Fast, reliable, and engaging web applications that work offline."
    },
    {
      icon: <CogIcon className="w-8 h-8" />,
      title: "API Development",
      description: "Robust and secure APIs for seamless integration with third-party services."
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Speed optimization and performance tuning for better user experience."
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Security & Maintenance",
      description: "Regular updates, security patches, and ongoing maintenance support."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes and interactive prototypes for your approval."
    },
    {
      step: "03",
      title: "Development",
      description: "Building your website with clean, efficient, and maintainable code."
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing and smooth deployment to production."
    }
  ];

  // Add testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechMart Inc.",
      image: "/images/testimonials/sarah.jpg",
      rating: 5,
      text: "The web development team delivered beyond our expectations. Our e-commerce platform's performance has improved significantly.",
      metrics: {
        "Revenue Increase": "+150%",
        "User Engagement": "+85%",
        "Load Time": "-60%"
      }
    },
    {
      name: "Dr. Michael Chen",
      role: "Director, MedCare Solutions",
      image: "/images/testimonials/michael.jpg",
      rating: 4.9,
      text: "Outstanding work on our healthcare portal. The team's attention to security and user experience was impressive.",
      metrics: {
        "Patient Satisfaction": "98%",
        "Appointment Bookings": "+200%",
        "Processing Time": "-70%"
      }
    }
  ];

  // Add web projects data
  const webProjects = [
    {
      title: "E-commerce Platform for Fashion Retailer",
      image: "/images/projects/ecommerce-web.jpg",
      challenge: "Our client, a growing fashion retailer, needed a scalable e-commerce platform to handle their expanding product line and increasing customer base while providing a seamless shopping experience.",
      solution: "We developed a modern e-commerce platform with advanced features like real-time inventory management, personalized recommendations, and a streamlined checkout process. The platform supports multiple payment gateways, order tracking, and a responsive design that works flawlessly across all devices."
    },
    {
      title: "Educational Learning Management System",
      image: "/images/projects/lms-web.jpg",
      challenge: "A leading educational institution required a comprehensive learning management system to facilitate online learning and course management for their students and faculty.",
      solution: "We created a feature-rich LMS with interactive course content delivery, live virtual classrooms, automated assessment tools, and detailed progress tracking. The platform includes collaborative learning features, resource sharing, and integrated communication tools for enhanced learning experience."
    }
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % webProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + webProjects.length) % webProjects.length);
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
      <div className="relative overflow-hidden pt-32 pb-24">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-40 left-20 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-sm"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <SparklesIcon className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Expert Web Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-glow">
              Web <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Development</span> Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Transform your digital presence with our expert web development solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl py-4 px-8 text-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-glow w-full sm:w-auto">
                Start Your Project
                <ArrowRightIcon className="w-5 h-5" />
              </motion.button>

              <motion.a
                href="#testimonials"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/10 hover:bg-white/20 text-white rounded-xl py-4 px-8 text-lg font-medium transition-all duration-300 flex items-center gap-2 backdrop-blur-sm border border-white/10 w-full sm:w-auto">
                View Success Stories
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Projects Showcase Section */}
      <div className="relative py-16 bg-primary/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            OUR WEB DEVELOPMENT PROJECTS
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
                  src={webProjects[currentProject].image}
                  alt={webProjects[currentProject].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="space-y-4 text-white">
                <h3 className="text-2xl font-bold">
                  {webProjects[currentProject].title}
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {webProjects[currentProject].challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-1">Solution:</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {webProjects[currentProject].solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {webProjects.map((_, index) => (
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
              <p className="text-gray-300">Based on 200+ client reviews</p>
            </div>
            {[
              { label: "Projects Delivered", value: "200+", icon: "🚀" },
              { label: "Client Satisfaction", value: "98%", icon: "⭐" },
              { label: "Team Experts", value: "50+", icon: "👥" },
              { label: "Years Experience", value: "10+", icon: "🏆" }
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
      <div className="py-24 bg-primary/50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-primary to-transparent"></div>
        <div className="absolute -left-20 top-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 bottom-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <SparklesIcon className="w-10 h-10 text-purple-500 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-shadow-glow">
              Our Web <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Development</span> Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We deliver cutting-edge web solutions tailored to your business needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 shadow-lg group"
              >
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl w-14 h-14 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-shadow-glow transition-all duration-300">{service.title}</h3>
                <p className="text-gray-300 text-lg">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
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

      {/* Process Section with Timeline */}
      <div className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 to-primary/50 z-0"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <GlobeAltIcon className="w-10 h-10 text-purple-500 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-shadow-glow">
              Our Development <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Process</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A streamlined approach to deliver exceptional results on time and within budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 relative hover:bg-white/10 transition-all duration-300 group border border-white/10 shadow-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg transform rotate-3 transition-transform duration-300"
                >
                  {step.step}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 mt-4 group-hover:text-shadow-glow transition-all duration-300">{step.title}</h3>
                <p className="text-gray-300 text-lg">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Process Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-1 bg-gradient-to-r from-purple-600/20 via-purple-500/40 to-purple-600/20 z-0 mt-8"></div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-24 bg-primary/50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-primary to-transparent"></div>
        <div className="absolute -right-20 top-1/3 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 bottom-1/3 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <ServerIcon className="w-10 h-10 text-purple-500 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-shadow-glow">
              Technologies We <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Use</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build modern, scalable web solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center hover:bg-white/10 transition-all duration-300 border border-white/10 shadow-lg"
              >
                <div className="bg-white/10 rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-12 w-12"
                  />
                </div>
                <span className="text-white font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 to-primary/50 z-0"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/5 opacity-20"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 relative z-10 text-shadow-glow"
            >
              Ready to Start Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">Web Project</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto relative z-10"
            >
              Let's discuss your web development needs and create something amazing together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-purple-600 hover:bg-gray-100 rounded-xl py-4 px-8 text-lg font-bold transition-all duration-300 shadow-lg"
              >
                Get Started Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-xl py-4 px-8 text-lg font-medium transition-all duration-300"
              >
                View Our Portfolio
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;