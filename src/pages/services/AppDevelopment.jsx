import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { initAOS } from '../../utils/animation';
import SEO from '../../components/SEO';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import {
  DevicePhoneMobileIcon,
  CubeTransparentIcon,
  PaintBrushIcon,
  CloudArrowUpIcon,
  ChartBarIcon,
  BellAlertIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CogIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

// Import shared service components
import ServiceHero from '../../components/services/ServiceHero';
import ServiceFeatures from '../../components/services/ServiceFeatures';
import ServiceTechnologies from '../../components/services/ServiceTechnologies';
import ServiceTestimonials from '../../components/services/ServiceTestimonials';
import ServiceProcess from '../../components/services/ServiceProcess';
import ServiceCTA from '../../components/services/ServiceCTA';
import ProjectSlider from '../../components/ProjectSlider';

const AppDevelopment = () => {
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

  // App Development Features
  const features = [
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-purple-400" />,
      title: "Native App Development",
      description: "High-performance native applications for iOS and Android platforms with platform-specific optimizations.",
      items: [
        "iOS Development with Swift",
        "Android Development with Kotlin",
        "Hardware Integration",
        "App Store Optimization"
      ]
    },
    {
      icon: <CubeTransparentIcon className="w-8 h-8 text-purple-400" />,
      title: "Cross-Platform Solutions",
      description: "Cost-effective cross-platform applications that work seamlessly across multiple devices.",
      items: [
        "React Native Development",
        "Flutter Applications",
        "Shared Codebase",
        "Consistent UI/UX"
      ]
    },
    {
      icon: <PaintBrushIcon className="w-8 h-8 text-purple-400" />,
      title: "UI/UX Design",
      description: "Intuitive and engaging user interfaces that provide exceptional user experiences.",
      items: [
        "User-Centered Design",
        "Interactive Prototypes",
        "Usability Testing",
        "Motion Design"
      ]
    },
    {
      icon: <CloudArrowUpIcon className="w-8 h-8 text-purple-400" />,
      title: "Backend Integration",
      description: "Robust backend systems that power your mobile applications with scalable infrastructure.",
      items: [
        "API Development",
        "Database Design",
        "Cloud Integration",
        "Serverless Architecture"
      ]
    },
    {
      icon: <BellAlertIcon className="w-8 h-8 text-purple-400" />,
      title: "Advanced Features",
      description: "Cutting-edge features that make your app stand out in the marketplace.",
      items: [
        "Push Notifications",
        "In-App Purchases",
        "Offline Functionality",
        "Social Integration"
      ]
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-purple-400" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures to protect user data and ensure regulatory compliance.",
      items: [
        "Data Encryption",
        "Secure Authentication",
        "Compliance (GDPR, HIPAA)",
        "Penetration Testing"
      ]
    }
  ];

  // App Development Technologies
  const technologies = [
    { name: 'React Native', iconSrc: '/logos/react-native.svg', description: 'Cross-platform framework' },
    { name: 'Flutter', iconSrc: '/logos/flutter.svg', description: 'UI toolkit for native apps' },
    { name: 'Swift', iconSrc: '/logos/swift.svg', description: 'iOS development' },
    { name: 'Kotlin', iconSrc: '/logos/kotlin.svg', description: 'Android development' },
    { name: 'Firebase', iconSrc: '/logos/firebase.svg', description: 'Backend services' },
    { name: 'GraphQL', iconSrc: '/logos/graphql.svg', description: 'API query language' },
    { name: 'AWS Amplify', iconSrc: '/logos/aws.svg', description: 'Cloud services' },
    { name: 'TensorFlow Lite', iconSrc: '/logos/tensorflow.svg', description: 'ML for mobile' },
    { name: 'Realm', iconSrc: '/logos/realm.svg', description: 'Mobile database' },
    { name: 'Fastlane', iconSrc: '/logos/fastlane.svg', description: 'CI/CD for mobile' }
  ];

  // Development Process Steps
  const processSteps = [
    {
      title: "Discovery & Planning",
      description: "We analyze your requirements, define the scope, and create a detailed roadmap for your app development."
    },
    {
      title: "Design & Prototyping",
      description: "Our designers create intuitive interfaces and interactive prototypes to visualize the user experience."
    },
    {
      title: "Development & Testing",
      description: "We build your app using agile methodologies with continuous integration and rigorous testing."
    },
    {
      title: "Deployment & Support",
      description: "We handle app store submissions and provide ongoing maintenance and performance optimization."
    }
  ];

  // Statistics
  const stats = [
    { value: "450+", label: "Apps Delivered", icon: <DevicePhoneMobileIcon className="w-6 h-6" /> },
    { value: "99%", label: "Client Satisfaction", icon: <ChartBarIcon className="w-6 h-6" /> },
    { value: "40+", label: "Industries Served", icon: <CogIcon className="w-6 h-6" /> },
    { value: "65+", label: "Expert Developers", icon: <UserGroupIcon className="w-6 h-6" /> }
  ];

  // Client testimonials
  const testimonials = [
    {
      name: "Dr. Alexander Chen",
      role: "Founder & CEO, HealthSync",
      image: "/images/testimonials/alexander.jpg",
      rating: 5,
      text: "The development team delivered a revolutionary healthcare platform that transformed our patient engagement model. Their expertise in HIPAA compliance and real-time data synchronization resulted in an app that both medical professionals and patients find indispensable.",
      metrics: {
        "App Downloads": "2.5M+",
        "User Retention": "94%",
        "Clinical Efficiency": "+68%"
      }
    },
    {
      name: "Sarah Johnson",
      role: "CMO, RetailConnect",
      image: "/images/testimonials/sarah.jpg",
      rating: 5,
      text: "Our e-commerce app has completely transformed our business. The team delivered a seamless shopping experience with advanced features like AR product visualization and personalized recommendations that have significantly increased our conversion rates.",
      metrics: {
        "Sales Increase": "156%",
        "User Engagement": "4.2x",
        "Cart Value": "+43%"
      }
    }
  ];

  // Project showcase
  const projects = [
    {
      title: "HealthSync: Patient Care Platform",
      image: "/images/projects/healthcare-app.jpg",
      challenge: "A leading healthcare provider needed a secure, HIPAA-compliant mobile platform to streamline patient care coordination, improve communication between healthcare professionals, and enhance the overall patient experience.",
      solution: "We developed a comprehensive healthcare platform with real-time patient data synchronization, secure messaging, appointment scheduling, and telemedicine capabilities. The app features biometric authentication, end-to-end encryption, and seamless integration with existing hospital systems.",
      results: "The solution increased patient satisfaction by 87%, reduced administrative workload by 35%, and improved care coordination efficiency by 42%. The app has been adopted by over 200 healthcare facilities nationwide."
    },
    {
      title: "ShopSmart: E-Commerce Revolution",
      image: "/images/projects/ecommerce-app.jpg",
      challenge: "A rapidly growing retail chain needed a mobile commerce solution to compete with online giants, provide personalized shopping experiences, and integrate their physical and digital presence seamlessly.",
      solution: "We created an innovative e-commerce app with AR product visualization, AI-powered recommendations, loyalty program integration, and omnichannel capabilities. The platform features offline browsing, instant checkout, and real-time inventory management across all retail locations.",
      results: "Within six months of launch, the app generated a 156% increase in mobile sales, 43% higher average order value, and 78% improvement in customer retention. The AR features reduced return rates by 23%."
    },
    {
      title: "DeliverEase: Food Delivery Platform",
      image: "/images/projects/food-delivery-app.jpg",
      challenge: "A restaurant group needed a scalable, high-performance delivery platform capable of handling complex logistics across multiple markets, supporting thousands of concurrent orders, and providing personalized experiences.",
      solution: "We developed an integrated delivery ecosystem with sophisticated route optimization algorithms, real-time GPS tracking, dynamic pricing models, and an AI-driven recommendation engine. The platform features a comprehensive merchant portal and driver management system.",
      results: "The solution processed 1.5M+ monthly orders with 99.99% uptime, reduced delivery times by 42%, increased average order value by 28% through personalized recommendations, and achieved a 65% reduction in customer acquisition costs."
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      <SEO 
        title="Mobile App Development Services" 
        description="Custom mobile app development services for iOS and Android. We build high-performance, user-friendly mobile applications that drive business growth." 
        keywords={['mobile app development', 'iOS app development', 'Android app development', 'React Native', 'Flutter', 'custom mobile apps']} 
      />
      
      {/* Back Button */}
      <BackButton />
      
      {/* Hero Section */}
      <ServiceHero 
        title="Mobile App Development"
        subtitle="Native & Cross-Platform Solutions"
        description="Create powerful, intuitive mobile experiences that engage users and drive business growth across iOS and Android platforms."
        image="/images/services/app-development-hero.jpg"
        primaryCTA="Start Your App Project"
        secondaryCTA="Explore Our Process"
        secondaryAction="#process"
      />
      
      {/* Features Section */}
      <ServiceFeatures 
        title="Comprehensive App Development Services"
        description="We deliver end-to-end mobile solutions tailored to your business needs"
        features={features}
      />
      
      {/* Process Section */}
      <div id="process">
        <ServiceProcess 
          title="Our App Development Process"
          description="A proven methodology that delivers results"
          steps={processSteps}
          stats={stats}
        />
      </div>
      
      {/* Technologies Section */}
      <ServiceTechnologies 
        title="Technologies We Use"
        description="We leverage cutting-edge technologies to build powerful mobile applications"
        technologies={technologies}
      />
      
      {/* Projects Showcase Section */}
      <div className="relative py-16 bg-primary/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12" data-aos="fade-up">
            OUR MOBILE APP DEVELOPMENT PROJECTS
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
        title="Ready to Build Your App?"
        description="Let's turn your app idea into reality with our expert development team."
        buttonText="Get Started Now"
        gradient="from-purple-600 to-indigo-700"
      />
    </div>
  );
};

export default AppDevelopment;
