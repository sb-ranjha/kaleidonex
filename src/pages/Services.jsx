import React, { useState, useEffect, Suspense, lazy } from 'react';
import { initAOS, refreshAOS } from '../utils/animation';
import CountUp from 'react-countup';
import SEO from '../components/SEO';
import { useNavigate } from 'react-router-dom';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  ChevronDownIcon,
  CommandLineIcon,
  CpuChipIcon,
  CloudIcon,
  StarIcon,
  GlobeAltIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';

// LazyImage component with Intersection Observer
const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isLoaded ? src : '/placeholder.jpg'}
      alt={alt}
      className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      loading="lazy"
    />
  );
};

// Components
const ServiceCard = ({ title, description, icon, features, route, metrics }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 hover:shadow-glow transition-all duration-500 group border border-white/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all duration-500"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>

      <div className="relative z-10">
        <div className="flex items-start gap-6 mb-8">
          <div className="p-4 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">{title}</h3>
            <p className="text-gray-300 text-lg">{description}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-4 text-center border border-white/5 group-hover:border-purple-500/20 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-purple-400 mb-1 group-hover:text-purple-300 transition-colors duration-300">{metric.value}</div>
              <div className="text-sm text-gray-300">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform duration-300"
            >
              <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-md group-hover/item:scale-125 transition-transform duration-300">
                <CheckCircleIcon className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300 text-lg group-hover/item:text-white transition-colors duration-300">{feature}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate(route)}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white rounded-xl py-4 px-6 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/20 text-lg font-medium relative overflow-hidden group-hover:scale-105"
        >
          {/* Button shine effect */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>

          <span className="relative z-10 flex items-center justify-center gap-2">
            Explore Service
            <ArrowRightIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-purple-400 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
};

const ProcessStep = ({ step, title, description, icon }) => (
  <div className="relative flex items-start group">
    <div className="flex flex-col items-center mr-4">
      <div className="bg-purple-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
        {step}
      </div>
      {step < 4 && <div className="h-full w-0.5 bg-purple-600/30 mt-2" />}
    </div>
    <div className="flex-1 pb-8">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transform group-hover:scale-105 transition-all">
        <div className="text-purple-400 mb-2">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  </div>
);

const TechStack = () => {
  const technologies = [
    { name: 'Frontend', icon: <CommandLineIcon className="w-6 h-6" />, items: ['React', 'Vue.js', 'Next.js', 'TypeScript'] },
    { name: 'Backend', icon: <CpuChipIcon className="w-6 h-6" />, items: ['Node.js', 'Python', 'Java', 'Go'] },
    { name: 'Mobile', icon: <DevicePhoneMobileIcon className="w-6 h-6" />, items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
    { name: 'Cloud', icon: <CloudIcon className="w-6 h-6" />, items: ['AWS', 'Azure', 'GCP', 'Docker'] }
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {technologies.map((tech, index) => (
        <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-purple-400">{tech.icon}</div>
            <h3 className="text-xl font-bold text-white">{tech.name}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {tech.items.map((item, i) => (
              <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const TestimonialCard = ({ name, role, company, image, quote }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
    <div className="flex items-center gap-4 mb-6">
      {typeof image === 'string' ? (
        <LazyImage src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
      ) : (
        image
      )}
      <div>
        <h4 className="text-lg font-semibold text-white">{name}</h4>
        <p className="text-purple-400">{role}</p>
        <p className="text-gray-400">{company}</p>
      </div>
    </div>
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-300 italic">{quote}</p>
  </div>
);

const CaseStudyCard = ({ title, client, imageComponent, challenge, solution, results, tags }) => (
  <div className="flex-shrink-0 w-[300px] sm:w-[350px] bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden group">
    <div className="relative h-48">
      {imageComponent}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 p-4">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-purple-300">{client}</p>
      </div>
    </div>
    <div className="p-4">
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
        <ul className="space-y-2">
          {results.map((result, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{result}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const PricingCard = ({ name, price, description, features, isPopular }) => (
  <div className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 ${isPopular ? 'border-2 border-purple-500' : ''}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      </div>
    )}
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <div className="text-4xl font-bold text-white mb-2">
        ${price}<span className="text-lg text-gray-400">/month</span>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
    <div className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-3">
          <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
          <span className="text-gray-300">{feature}</span>
        </div>
      ))}
    </div>
    <button className={`w-full ${isPopular ? 'bg-purple-500 hover:bg-purple-600' : 'bg-white/10 hover:bg-white/20'} text-white rounded-xl py-3 px-6 transition-all duration-300`}>
      Get Started
    </button>
  </div>
);

const TeamMember = ({ name, role, image, bio, socialLinks }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center group">
    <div className="relative w-32 h-32 mx-auto mb-6">
      {typeof image === 'string' ? (
        <LazyImage src={image} alt={name} className="w-full h-full rounded-full object-cover" />
      ) : (
        image
      )}
      <div className="absolute inset-0 rounded-full bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <h4 className="text-xl font-bold text-white mb-2">{name}</h4>
    <p className="text-purple-400 mb-4">{role}</p>
    <p className="text-gray-300 mb-6">{bio}</p>
    <div className="flex justify-center gap-4">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.url} className="text-gray-400 hover:text-purple-400 transition-colors">
          {link.icon}
        </a>
      ))}
    </div>
  </div>
);

const Services = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const services = [
    {
      title: "Web Development",
      description: "Transform your digital presence with cutting-edge web solutions that drive growth and engagement.",
      icon: <CodeBracketIcon className="w-6 h-6 text-white" />,
      features: [
        "Enterprise-grade Web Applications",
        "Advanced E-commerce Platforms",
        "Progressive Web Apps (PWAs)",
        "Headless CMS Architecture",
        "RESTful & GraphQL API Development",
        "Performance & SEO Optimization"
      ],
      metrics: [
        { value: "250+", label: "Projects Delivered" },
        { value: "99.9%", label: "Uptime Guarantee" },
        { value: "4.9/5", label: "Client Satisfaction" },
        { value: "<1.5s", label: "Average Load Time" }
      ],
      route: "/services/web-development"
    },
    {
      title: "App Development",
      description: "Create immersive mobile experiences that captivate users and deliver measurable business results.",
      icon: <DevicePhoneMobileIcon className="w-6 h-6 text-white" />,
      features: [
        "Native iOS & Android Development",
        "Cross-platform Solutions (React Native/Flutter)",
        "Advanced UI/UX Design Systems",
        "Continuous Integration & Deployment",
        "App Analytics & Performance Monitoring",
        "AI & ML Integration"
      ],
      metrics: [
        { value: "180+", label: "Apps Launched" },
        { value: "4.8/5", label: "Average App Rating" },
        { value: "3.5M+", label: "Total Downloads" },
        { value: "98%", label: "Client Satisfaction" }
      ],
      route: "/services/app-development"
    }
  ];

  const benefits = [
    {
      icon: <RocketLaunchIcon className="w-8 h-8 text-purple-400" />,
      title: "Fast Delivery",
      description: "Quick turnaround time without compromising quality"
    },
    {
      icon: <CurrencyDollarIcon className="w-8 h-8 text-purple-400" />,
      title: "Competitive Pricing",
      description: "Transparent pricing with no hidden costs"
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-purple-400" />,
      title: "Secure & Reliable",
      description: "Built with security best practices"
    },
    {
      icon: <UserGroupIcon className="w-8 h-8 text-purple-400" />,
      title: "Dedicated Support",
      description: "24/7 support and maintenance"
    }
  ];

  const stats = [
    { value: "450+", label: "Projects Delivered", icon: <ChartBarIcon className="w-6 h-6" /> },
    { value: "12+", label: "Years of Excellence", icon: <ClockIcon className="w-6 h-6" /> },
    { value: "65+", label: "Tech Specialists", icon: <UserGroupIcon className="w-6 h-6" /> },
    { value: "99%", label: "Client Retention", icon: <CheckCircleIcon className="w-6 h-6" /> }
  ];

  const faqs = [
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary based on complexity and requirements. Typically, a small website takes 4-6 weeks, while larger applications may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile methodology with regular client updates. Our process includes requirements gathering, design, development, testing, and deployment phases, with continuous feedback and iterations."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, industry-standard technologies tailored to your project needs. Our stack includes React, Node.js, Python, AWS, and more. We're always up-to-date with the latest tech trends."
    }
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap.",
      icon: <ChartBarIcon className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Design & Architecture",
      description: "Creating intuitive interfaces and robust system architecture.",
      icon: <CodeBracketIcon className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Development & Testing",
      description: "Agile development with continuous testing and feedback.",
      icon: <CpuChipIcon className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Deployment & Support",
      description: "Smooth deployment and ongoing maintenance support.",
      icon: <RocketLaunchIcon className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      image: "/images/testimonials/sarah.jpg",
      quote: "Working with this team was a game-changer for our business. They delivered a stunning website that exceeded our expectations."
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateCo",
      image: "/images/testimonials/michael.jpg",
      quote: "The mobile app they developed for us has received outstanding user feedback and significantly improved our customer engagement."
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthLabs",
      image: "/images/testimonials/emily.jpg",
      quote: "Their attention to detail and commitment to quality is unmatched. They're not just developers, they're strategic partners."
    }
  ];

  // const caseStudies = [
  //   {
  //     title: "E-commerce Platform Redesign",
  //     client: "FashionHub",
  //     image: "/images/case-studies/fashion-hub.jpg",
  //     challenge: "Outdated platform with poor mobile experience and low conversion rates.",
  //     solution: "Complete redesign with modern UI, advanced filtering, and seamless checkout process.",
  //     results: [
  //       "150% increase in mobile sales",
  //       "45% higher conversion rate",
  //       "3x faster page load times",
  //       "98% customer satisfaction"
  //     ],
  //     tags: ["E-commerce", "UI/UX", "Performance", "Mobile-first"]
  //   },
  //   {
  //     title: "Healthcare Management App",
  //     client: "MedCare Solutions",
  //     image: "/images/case-studies/medcare.jpg",
  //     challenge: "Complex patient management system with strict security requirements.",
  //     solution: "HIPAA-compliant mobile app with real-time updates and secure messaging.",
  //     results: [
  //       "50% reduction in wait times",
  //       "90% paperwork eliminated",
  //       "100% HIPAA compliance",
  //       "4.9/5 app store rating"
  //     ],
  //     tags: ["Healthcare", "Mobile App", "Security", "Real-time"]
  //   },
  //   {
  //     title: "Educational Platform",
  //     client: "EduTech Pro",
  //     image: "/images/case-studies/edutech.jpg",
  //     challenge: "Need for interactive online learning platform with real-time collaboration.",
  //     solution: "Built scalable platform with video conferencing and interactive whiteboard.",
  //     results: [
  //       "10,000+ active students",
  //       "95% course completion rate",
  //       "4.8/5 teacher satisfaction",
  //       "40% cost reduction"
  //     ],
  //     tags: ["EdTech", "Real-time", "Video", "Collaboration"]
  //   },
  //   {
  //     title: "AI-Powered Analytics",
  //     client: "DataSmart",
  //     image: "/images/case-studies/analytics.jpg",
  //     challenge: "Complex data analysis needs with legacy system integration.",
  //     solution: "Modern analytics platform with AI/ML capabilities and intuitive dashboard.",
  //     results: [
  //       "85% faster reporting",
  //       "60% cost savings",
  //       "99.9% accuracy rate",
  //       "Real-time insights"
  //     ],
  //     tags: ["AI/ML", "Analytics", "Dashboard", "Big Data"]
  //   },
  //   {
  //     title: "Supply Chain Platform",
  //     client: "LogiTech Solutions",
  //     image: "/images/case-studies/logistics.jpg",
  //     challenge: "Inefficient supply chain management and tracking system.",
  //     solution: "Blockchain-based platform with real-time tracking and automation.",
  //     results: [
  //       "40% efficiency increase",
  //       "60% paperwork reduced",
  //       "99% tracking accuracy",
  //       "30% cost savings"
  //     ],
  //     tags: ["Blockchain", "Supply Chain", "IoT", "Automation"]
  //   }
  // ];

  // const pricingPlans = [
  //   {
  //     name: "Starter",
  //     price: "999",
  //     description: "Perfect for small businesses and startups",
  //     features: [
  //       "Custom Website Design",
  //       "Mobile Responsive",
  //       "5 Pages",
  //       "Basic SEO",
  //       "Contact Form",
  //       "3 Months Support"
  //     ],
  //     isPopular: false
  //   },
  //   {
  //     name: "Professional",
  //     price: "2499",
  //     description: "Ideal for growing businesses",
  //     features: [
  //       "Everything in Starter",
  //       "E-commerce Integration",
  //       "Custom Features",
  //       "Advanced SEO",
  //       "Analytics Dashboard",
  //       "12 Months Support"
  //     ],
  //     isPopular: true
  //   },
  //   {
  //     name: "Enterprise",
  //     price: "4999",
  //     description: "For large-scale applications",
  //     features: [
  //       "Everything in Professional",
  //       "Custom Mobile App",
  //       "API Development",
  //       "Advanced Security",
  //       "Priority Support",
  //       "24/7 Monitoring"
  //     ],
  //     isPopular: false
  //   }
  // ];

  const teamMembers = [
    {
      name: "David Wilson",
      role: "Lead Developer",
      image: "/images/team/david.jpg",
      bio: "10+ years of experience in full-stack development",
      socialLinks: [
        { url: "#", icon: <GlobeAltIcon className="w-5 h-5" /> },
        { url: "#", icon: <BriefcaseIcon className="w-5 h-5" /> }
      ]
    },
    {
      name: "Lisa Chang",
      role: "UI/UX Designer",
      image: "/images/team/lisa.jpg",
      bio: "Award-winning designer with a passion for user experience",
      socialLinks: [
        { url: "#", icon: <GlobeAltIcon className="w-5 h-5" /> },
        { url: "#", icon: <BriefcaseIcon className="w-5 h-5" /> }
      ]
    },
    {
      name: "James Martinez",
      role: "Mobile Developer",
      image: "/images/team/james.jpg",
      bio: "Specialized in native iOS and Android development",
      socialLinks: [
        { url: "#", icon: <GlobeAltIcon className="w-5 h-5" /> },
        { url: "#", icon: <BriefcaseIcon className="w-5 h-5" /> }
      ]
    },
    {
      name: "Anna Kim",
      role: "Project Manager",
      image: "/images/team/anna.jpg",
      bio: "Certified PMP with 8+ years of experience",
      socialLinks: [
        { url: "#", icon: <GlobeAltIcon className="w-5 h-5" /> },
        { url: "#", icon: <BriefcaseIcon className="w-5 h-5" /> }
      ]
    }
  ];

  useEffect(() => {
    // Initialize AOS animations
    initAOS();

    const sections = document.querySelectorAll('.lazy-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true
            }));
            // Refresh AOS when new content becomes visible
            refreshAOS();
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const container = document.getElementById('case-studies-scroll');
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + 1;
        if (newPosition >= maxScroll) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
          return 0;
        }
        container.scrollTo({ left: newPosition, behavior: 'smooth' });
        return newPosition;
      });
    }, 50);

    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(interval);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const LoadingSkeleton = ({ type, count = 1 }) => {
    switch (type) {
      case 'card':
        return (
          <div className="grid gap-8" style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}>
            {[...Array(count)].map((_, i) => (
              <div key={i} className="bg-gray-800/50 rounded-2xl p-6 animate-pulse">
                <div className="h-6 bg-gray-700/50 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-700/50 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-700/50 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        );
      case 'stats':
        return (
          <div className="grid grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-800/50 rounded-xl p-6 animate-pulse">
                <div className="h-12 w-12 bg-gray-700/50 rounded-full mx-auto mb-4"></div>
                <div className="h-8 bg-gray-700/50 rounded w-1/2 mx-auto"></div>
              </div>
            ))}
          </div>
        );
      case 'carousel':
        return (
          <div className="flex gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-[300px] bg-gray-800/50 rounded-2xl h-64 animate-pulse"></div>
            ))}
          </div>
        );
      case 'timeline':
        return (
          <div className="space-y-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-800/50 rounded-xl p-6 h-32 animate-pulse"></div>
            ))}
          </div>
        );
      default:
        return <div className="bg-gray-800/50 h-32 rounded-2xl animate-pulse"></div>;
    }
  };

  return (
    <div className="min-h-screen bg-primary py-28 sm:py-32">
      <SEO
        title="Our Services"
        description="Innovative digital solutions that transform businesses and drive measurable results. Explore our web development, app development, and digital marketing services."
        keywords={['web development', 'app development', 'digital solutions', 'software development', 'UI/UX design', 'digital marketing']}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 relative">
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-block mb-4 animate-float">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 border border-purple-500/20 shadow-glow-sm">
                <StarIcon className="w-4 h-4 mr-2" />
                Trusted by 600+ Global Enterprises
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white" data-aos="zoom-in" data-aos-duration="1000">
              Innovative <span className="text-purple-400">Solutions</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Creating exceptional digital experiences that transform businesses and drive measurable results
            </p>

            <p className="text-gray-400 max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="400">
              Our team of experts combines technical excellence with strategic thinking to deliver custom solutions that address your most complex challenges
            </p>
          </div>
        </div>

        <div id="stats" className="lazy-section mb-20 mt-12">
          <Suspense fallback={<LoadingSkeleton type="stats" />}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-500 border border-white/5 hover:border-purple-500/20 hover:shadow-glow group relative overflow-hidden"
                  data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
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
          </Suspense>
        </div>

        <div id="services" className="lazy-section grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          <Suspense fallback={<LoadingSkeleton type="card" count={2} />}>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </Suspense>
        </div>

        <div id="case-studies" className="lazy-section mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
            Success Stories
          </h2>
          {/* {isVisible['case-studies'] && (
            <Suspense fallback={<LoadingSkeleton type="carousel" />}>
              <div className="relative" id="case-studies-container">
                <div className="overflow-x-auto pb-4 hide-scrollbar scroll-smooth" id="case-studies-scroll">
                  <div className="flex gap-6 px-4 sm:px-6 min-w-full">
                    {[...caseStudies, ...caseStudies].map((study, index) => (
                      <CaseStudyCard
                        key={index}
                        {...study}
                        imageComponent={
                          <LazyImage
                            src={study.image}
                            alt={study.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        }
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-primary to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-primary to-transparent pointer-events-none" />
              </div>
            </Suspense>
          )} */}
        </div>

        <div id="benefits" className="lazy-section bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            Why Choose Us?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/5 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="process" className="lazy-section mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Our Development Process
          </h2>
          {isVisible['process'] && (
            <Suspense fallback={<LoadingSkeleton type="timeline" />}>
              <div className="max-w-4xl mx-auto">
                {process.map((step, index) => (
                  <ProcessStep key={index} {...step} />
                ))}
              </div>
            </Suspense>
          )}
        </div>

        <div id="tech-stack" className="lazy-section mb-20">
          {isVisible['tech-stack'] && (
            <Suspense fallback={<LoadingSkeleton type="card" count={4} />}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                Technology Stack
              </h2>
              <TechStack />
            </Suspense>
          )}
        </div>

        <div id="testimonials" className="lazy-section mb-20">
          {isVisible['testimonials'] && (
            <Suspense fallback={<LoadingSkeleton type="card" count={3} />}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
                What Our Clients Say
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            </Suspense>
          )}
        </div>

        <div id="team" className="lazy-section mb-20">
          {isVisible['team'] && (
            <Suspense fallback={<LoadingSkeleton type="card" count={4} />}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
                Meet Our Team
              </h2>
              <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
                Expert developers and designers ready to bring your vision to life
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <TeamMember key={index} {...member} />
                ))}
              </div>
            </Suspense>
          )}
        </div>

        {/* <div id="pricing" className="lazy-section mb-20">
          {isVisible['pricing'] && (
            <Suspense fallback={<LoadingSkeleton type="card" count={3} />}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
                Transparent Pricing
              </h2>
              <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
                Choose the perfect plan for your business needs. All plans include our core features.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <PricingCard key={index} {...plan} />
                ))}
              </div>
            </Suspense>
          )}
        </div> */}

        <div id="faq" className="lazy-section mb-20 bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12">
          {isVisible['faq'] && (
            <Suspense fallback={<LoadingSkeleton type="card" count={1} />}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} {...faq} />
                ))}
              </div>
            </Suspense>
          )}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's discuss your requirements and create something amazing together. Our team is ready to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-purple-600 hover:bg-gray-100 rounded-xl py-3 px-8 font-semibold transition-all duration-300"
            >
              Get in Touch
            </button>
            <button
              onClick={() => navigate('/portfolio')}
              className="bg-purple-800 text-white hover:bg-purple-900 rounded-xl py-3 px-8 font-semibold transition-all duration-300"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

<style>
{`
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .scroll-smooth {
    scroll-behavior: smooth;
  }

  #case-studies-scroll {
    -webkit-overflow-scrolling: touch;
  }
`}
</style>