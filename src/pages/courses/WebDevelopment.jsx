import { CalendarIcon, StarIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import RoadMap from "../../components/RoadMap";
import {
  PencilSquareIcon,
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  WindowIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import webImage from "../../assets/courses/webdev.jpeg";

import Html from "../../assets/icon/html-5.svg";
import Css from "../../assets/icon/css-3.svg";
import Javascript from "../../assets/icon/javascript.svg";
import boot from "../../assets/icon/bootstrap.svg";
import react from "../../assets/icon/react.svg";
import Sql from "../../assets/icon/sql.svg";
import MongoDb from "../../assets/icon/mongodb.svg";
import Api from "../../assets/icon/api.svg";
import Express from "../../assets/icon/express.svg";
import node from "../../assets/icon/node-js.svg";

import { useState } from "react";
import EnrollmentForm from '../../components/EnrollmentForm';
import FAQ from "../../components/FAQ";
import ProjectsSection from "../../components/ProjectsSection";

const WebDevelopment = () => {
  const [showEnrollForm, setShowEnrollForm] = useState(false);

  const handleApplyNow = () => {
    setShowEnrollForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const courseData = {
    title: "Best Web Development Program in India",
    subtitle:
      "Kaleidonex offers the Best Web Development Program in India, which goes beyond just coding.",
    description: `The subject of web development is fast expanding, and new tools and technologies are
    constantly being developed. Our Web Development Program covers HTML, CSS, responsive
    design, JavaScript, frameworks like React and Vue.js, web performance optimization, Git
    version control, cross-browser compatibility, UX/UI principles, practical projects, as well as
    Backend Development, Web Security, and Deployment and Hosting.`,
    highlights: [
      "HTML5, CSS3, and Modern JavaScript",
      "React.js & Node.js",
      "Database Management",
      "REST API Development",
      "Web Security & Performance",
    ],
    curriculum: [
      {
        title: "Frontend Development",
        topics: ["HTML5", "CSS3", "JavaScript", "React.js"],
      },
      {
        title: "Backend Development",
        topics: ["Node.js", "Express.js", "MongoDB", "API Development"],
      },
      {
        title: "Advanced Concepts",
        topics: ["Web Security", "Performance Optimization", "Deployment"],
      },
    ],
    batchDate: "Feb 1, 2025",
    price: "1500 ",
    duration: "2 & 3 months",
    studentsCount: "30k+",
    rating: "4.6/5",
    reviews: "358 Reviews",
    imageUrl: webImage,
  };

  // handleApplyNow function is already defined above

  const roadmapSteps = [
    {
      title: "Discussion",
      description:
        "Do discussions to ensure that your web design is on the right path.",
      icon: <ChatBubbleLeftRightIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-pink-500",
    },
    {
      title: "Planning",
      description:
        "Create sitemaps and wireframe. A sitemap is made with the information collected.",
      icon: <ClipboardDocumentCheckIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-yellow-500",
    },
    {
      title: "Visual Design",
      description: "Web design should be according to the target audience.",
      icon: <PencilSquareIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-green-500",
    },
    {
      title: "Development",
      description: "Developers develop and run codes on your site.",
      icon: <CodeBracketIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-blue-500",
    },
    {
      title: "Framework",
      description:
        "Create a framework for your site by adding in pages required",
      icon: <WindowIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-indigo-500",
    },
    {
      title: "Site Building",
      description: "Build your site by adding in an attractive design.",
      icon: <GlobeAltIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-purple-500",
    },
    {
      title: "Testing",
      description:
        "Every page and link should be tested before launching the site to make sure nothing is broken.",
      icon: <ComputerDesktopIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-red-500",
    },
    {
      title: "Launch",
      description: "Launch your website to attract your audience.",
      icon: <RocketLaunchIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-orange-500",
    },
  ];

  const webTechnologies = [
    { name: "HTML", icon: Html },
    { name: "CSS", icon: Css },
    { name: "JavaScript", icon: Javascript },
    { name: "Bootstrap", icon: boot },
    { name: "React", icon: react },
    { name: "API", icon: Api },
    { name: "MongoDB", icon: MongoDb },
    { name: "SQL", icon: Sql },
    { name: "Node.js", icon: node },
    { name: "Express", icon: Express },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
      {/* Background Elements - Hidden on small mobile, visible on larger screens */}
      <div className="hidden sm:block absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="hidden sm:block absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-8 sm:py-12 md:py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-start"
        >
          {/* Left Column */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight text-shadow-glow">
              {courseData.title}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              {courseData.subtitle}
            </p>

            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-1 sm:gap-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white text-base sm:text-lg">
                {courseData.rating} · {courseData.reviews}
              </span>
            </div>

            <div className="flex gap-6 sm:gap-8 text-gray-300">
              <p className="flex items-center gap-2 sm:gap-3">
                <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-base sm:text-lg">Duration: {courseData.duration}</span>
              </p>
            </div>
          </motion.div>

          {/* Course Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-glow transition-all duration-300"
          >
            <div className="relative">
              <img
                src={courseData.imageUrl}
                alt="Web Development"
                className="w-full h-56 sm:h-64 md:h-72 xl:h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-white text-lg sm:text-xl">Next Batch Starts: {courseData.batchDate}</p>
                <p className="text-white text-base sm:text-lg">Limited seats available!</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={handleApplyNow}
              >
                Apply Now
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {showEnrollForm && (
        <EnrollmentForm
          courseType="webdev"
          onClose={() => setShowEnrollForm(false)}
        />
      )}

      {/* Course Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-12 md:py-16 mt-8 sm:mt-12 md:mt-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Course Description */}
          <div className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Course Overview
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {courseData.description}
            </p>

            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                What you'll learn
              </h3>
              <ul className="space-y-4">
                {courseData.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-300 text-lg"
                  >
                    <span className="text-green-400 text-2xl">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Curriculum */}
          <div className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Curriculum
            </h2>
            <div className="space-y-8">
              {courseData.curriculum.map((section, index) => (
                <div
                  key={index}
                  className="bg-purple-900/50 dark:bg-gray-800 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-gray-300 text-lg">
                        • {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap section with improved spacing */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <RoadMap steps={roadmapSteps} />
      </div>

      {/* Technologies Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-12 md:py-16 mt-8 sm:mt-12 md:mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
            <CodeBracketIcon className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
            <span className="text-purple-300 text-xs sm:text-sm font-medium">Tech Stack</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 text-shadow-glow">
            Technologies You'll <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Master</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8"
        >
          {webTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-3 bg-white/5 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                loading="lazy"
              />
              <span className="text-white text-sm md:text-base text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Projects Section with improved spacing */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <ProjectsSection courseType="webdev" />
      </div>

      {/* FAQ Section with improved spacing */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <FAQ courseType="webdev" />
      </div>

      {/* Mobile-friendly back to top button */}
      <div className="py-12 sm:py-16 flex justify-center">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/10 backdrop-blur-sm rounded-full p-3 sm:p-4 shadow-md hover:shadow-glow transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default WebDevelopment;