import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { initAOS } from '../../utils/animation';
import SEO from '../../components/SEO';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import {
  CodeBracketIcon,
  CubeIcon,
  RocketLaunchIcon,
  CogIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ServerIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

// Import shared service components
import ServiceHero from '../../components/services/ServiceHero';
import ServiceFeatures from '../../components/services/ServiceFeatures';
import ServiceTechnologies from '../../components/services/ServiceTechnologies';
import ServiceTestimonials from '../../components/services/ServiceTestimonials';
import ServiceProcess from '../../components/services/ServiceProcess';
import ServiceCTA from '../../components/services/ServiceCTA';
import ProjectSlider from '../../components/ProjectSlider';

const WebDevelopment = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Initialize AOS animations
    initAOS();
    
    return () => {
      // Cleanup
    };
  }, []);

  // Back button component
  const BackButton = () => (
    <button
      onClick={() => navigate('/services')}
      className="fixed top-24 left-4 sm:left-8 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 group"
    >
      <ArrowLeftIcon className="w-6 h-6" />
      <span className="absolute left-full ml-2 bg-white/10 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Back to Services
      </span>
    </button>
  );

  // Web Development Features
  const features = [
    {
      icon: <CodeBracketIcon className="w-8 h-8 text-purple-400" />,
      title: "Custom Web Development",
      description: "Tailored web solutions designed to meet your specific business requirements and objectives.",
      items: [
        "Responsive Web Design",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "Content Management Systems"
      ]
    },
    {
      icon: <CubeIcon className="w-8 h-8 text-purple-400" />,
      title: "Frontend Development",
      description: "Engaging user interfaces with modern frameworks that provide exceptional user experiences.",
      items: [
        "React Development",
        "Vue.js Applications",
        "Angular Solutions",
        "Interactive UI/UX"
      ]
    },
    {
      icon: <ServerIcon className="w-8 h-8 text-purple-400" />,
      title: "Backend Development",
      description: "Robust server-side solutions that power your web applications with scalable infrastructure.",
      items: [
        "Node.js Development",
        "Python/Django Solutions",
        "PHP/Laravel Applications",
        "API Development"
      ]
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8 text-purple-400" />,
      title: "Full-Stack Solutions",
      description: "End-to-end web development services from frontend to backend with seamless integration.",
      items: [
        "MERN Stack Development",
        "MEAN Stack Development",
        "JAMstack Solutions",
        "Serverless Architecture"
      ]
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8 text-purple-400" />,
      title: "Performance Optimization",
      description: "Speed up your website with advanced optimization techniques for better user experience and SEO.",
      items: [
        "Page Speed Optimization",
        "Code Optimization",
        "Image & Asset Optimization",
        "Caching Strategies"
      ]
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-purple-400" />,
      title: "Security & Compliance",
      description: "Protect your web applications with industry-standard security measures and compliance solutions.",
      items: [
        "SSL Implementation",
        "Security Audits",
        "GDPR Compliance",
        "Data Protection"
      ]
    }
  ];

  // Web Development Technologies
  const technologies = [
    { name: 'React', iconSrc: '/logos/react.svg', description: 'UI library' },
    { name: 'Node.js', iconSrc: '/logos/nodejs.svg', description: 'JavaScript runtime' },
    { name: 'Next.js', iconSrc: '/logos/nextjs.svg', description: 'React framework' },
    { name: 'Vue.js', iconSrc: '/logos/vue.svg', description: 'Progressive framework' },
    { name: 'Angular', iconSrc: '/logos/angular.svg', description: 'Web framework' },
    { name: 'TypeScript', iconSrc: '/logos/typescript.svg', description: 'Typed JavaScript' },
    { name: 'MongoDB', iconSrc: '/logos/mongodb.svg', description: 'NoSQL database' },
    { name: 'PostgreSQL', iconSrc: '/logos/postgresql.svg', description: 'SQL database' },
    { name: 'AWS', iconSrc: '/logos/aws.svg', description: 'Cloud services' },
    { name: 'Firebase', iconSrc: '/logos/firebase.svg', description: 'Backend services' }
  ];

  // Development Process Steps
  const processSteps = [
    {
      title: "Discovery & Planning",
      description: "We analyze your requirements, define the scope, and create a detailed roadmap for your web project."
    },
    {
      title: "Design & Prototyping",
      description: "Our designers create intuitive interfaces and interactive prototypes to visualize the user experience."
    },
    {
      title: "Development & Testing",
      description: "We build your website using agile methodologies with continuous integration and rigorous testing."
    },
    {
      title: "Deployment & Support",
      description: "We handle deployment and provide ongoing maintenance and performance optimization."
    }
  ];

  // Statistics
  const stats = [
    { value: "500+", label: "Websites Delivered", icon: <GlobeAltIcon className="w-6 h-6" /> },
    { value: "99%", label: "Client Satisfaction", icon: <ChartBarIcon className="w-6 h-6" /> },
    { value: "45+", label: "Industries Served", icon: <CogIcon className="w-6 h-6" /> },
    { value: "70+", label: "Expert Developers", icon: <UserGroupIcon className="w-6 h-6" /> }
  ];

  // Client testimonials
  const testimonials = [
    {
      name: "Michael Thompson",
      role: "CEO, TechInnovate",
      image: "/images/testimonials/michael.jpg",
      rating: 5,
      text: "The web development team delivered an exceptional e-commerce platform that transformed our online presence. Their expertise in responsive design and performance optimization resulted in a 45% increase in conversion rates and significantly improved user engagement.",
      metrics: {
        "Conversion Rate": "+45%",
        "Page Load Time": "-60%",
        "User Engagement": "+78%"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthHub",
      image: "/images/testimonials/emily.jpg",
      rating: 5,
      text: "Our website redesign project exceeded all expectations. The team's attention to detail, focus on user experience, and technical expertise resulted in a beautiful, high-performing website that has significantly improved our lead generation and brand perception.",
      metrics: {
        "Lead Generation": "+120%",
        "Bounce Rate": "-35%",
        "Avg. Session": "+2.5min"
      }
    }
  ];

  // Project showcase
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      image: "/images/projects/ecommerce-website.jpg",
      challenge: "A leading retailer needed a complete overhaul of their outdated e-commerce platform to improve user experience, increase mobile conversions, and integrate with their inventory management system.",
      solution: "We developed a modern, responsive e-commerce platform with advanced search functionality, personalized product recommendations, streamlined checkout process, and comprehensive analytics dashboard. The solution included seamless integration with their existing ERP and inventory systems.",
      results: "The new platform achieved a 45% increase in conversion rates, 60% reduction in cart abandonment, and 78% improvement in mobile sales. Page load times were reduced by 65%, significantly improving SEO rankings."
    },
    {
      title: "Financial Services Web Application",
      image: "/images/projects/finance-website.jpg",
      challenge: "A financial services firm needed a secure, compliant web application to provide clients with real-time portfolio management, document sharing, and financial planning tools.",
      solution: "We created a comprehensive financial portal with bank-level security, real-time data visualization, document management with version control, and interactive financial planning tools. The application featured multi-factor authentication and end-to-end encryption.",
      results: "The solution reduced client onboarding time by 75%, increased client engagement by 120%, and enabled the firm to scale their services to 3x more clients without increasing staff. Security audits confirmed full compliance with financial regulations."
    },
    {
      title: "Healthcare Patient Portal",
      image: "/images/projects/healthcare-website.jpg",
      challenge: "A healthcare provider needed a HIPAA-compliant patient portal to streamline appointment scheduling, medical record access, and secure communication between patients and healthcare professionals.",
      solution: "We developed a comprehensive patient portal with secure authentication, appointment scheduling with automated reminders, medical record access, secure messaging, and telemedicine integration. The platform included responsive design for all devices and accessibility features.",
      results: "The portal reduced administrative workload by 40%, decreased no-show appointments by 35%, and improved patient satisfaction scores by 28%. The secure messaging feature reduced unnecessary office visits by 22%."
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      <SEO 
        title="Web Development Services" 
        description="Professional web development services for businesses of all sizes. We create responsive, high-performance websites and web applications." 
        keywords={['web development', 'responsive websites', 'web applications', 'React', 'Node.js', 'custom web development']} 
      />
      
      {/* Back Button */}
      <BackButton />
      
      {/* Hero Section */}
      <ServiceHero 
        title="Web Development"
        subtitle="Modern & Responsive Solutions"
        description="Create powerful, responsive websites and web applications that drive business growth and deliver exceptional user experiences."
        image="/images/services/web-development-hero.jpg"
        primaryCTA="Start Your Web Project"
        secondaryCTA="Explore Our Process"
        secondaryAction="#process"
      />
      
      {/* Features Section */}
      <ServiceFeatures 
        title="Comprehensive Web Development Services"
        description="We deliver end-to-end web solutions tailored to your business needs"
        features={features}
      />
      
      {/* Process Section */}
      <div id="process">
        <ServiceProcess 
          title="Our Web Development Process"
          description="A proven methodology that delivers results"
          steps={processSteps}
          stats={stats}
        />
      </div>
      
      {/* Technologies Section */}
      <ServiceTechnologies 
        title="Technologies We Use"
        description="We leverage cutting-edge technologies to build powerful web applications"
        technologies={technologies}
      />
      
      {/* Projects Showcase Section */}
      <div className="relative py-16 bg-primary/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12" data-aos="fade-up">
            OUR WEB DEVELOPMENT PROJECTS
          </h2>
          
          {/* Using the ProjectSlider component */}
          <ProjectSlider projects={projects} />
          
          {/* View All Cases Button */}
          <div className="text-center mt-8" data-aos="fade-up">
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
      
      {/* Testimonials Section */}
      <ServiceTestimonials 
        title="Client Success Stories"
        testimonials={testimonials}
      />
      
      {/* CTA Section */}
      <ServiceCTA 
        title="Ready to Build Your Website?"
        description="Let's turn your web project into reality with our expert development team."
        buttonText="Get Started Now"
        gradient="from-blue-600 to-indigo-700"
      />
    </div>
  );
};

export default WebDevelopment;
