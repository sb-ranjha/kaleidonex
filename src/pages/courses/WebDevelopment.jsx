import { CalendarIcon, StarIcon } from "@heroicons/react/24/outline";
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

  const handleApplyNow = () => {
    setShowEnrollForm(true);
  };

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

  return (
    <div className="min-h-screen bg-purple-950 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 xl:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
              {courseData.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300">
              {courseData.subtitle}
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white text-lg">
                {courseData.rating} · {courseData.reviews}
              </span>
            </div>

            <div className="flex gap-8 text-gray-300">
              <p className="flex items-center gap-3">
                <CalendarIcon className="w-6 h-6" />
                <span className="text-lg">Duration: {courseData.duration}</span>
              </p>
            </div>
          </div>

          {/* Course Card */}
          <div className="bg-purple-900 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={courseData.imageUrl} 
              alt="Web Development"
              className="w-full h-72 xl:h-80 object-cover"
              loading="lazy" // Added lazy loading here
            />
            <div className="p-8 space-y-6">
              <div className="space-y-4">
                <p className="text-white text-xl">Next Batch Starts: {courseData.batchDate}</p>
                <p className="text-white text-lg">Limited seats available!</p>
              </div>
              <button 
                className="w-full bg-white dark:bg-purple-600 text-black dark:text-white rounded-full py-4 px-8 text-lg font-medium hover:bg-gray-100 dark:hover:bg-purple-700 transition-colors"
                onClick={handleApplyNow}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-12 md:py-16 mt-8 sm:mt-12 md:mt-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center">
          Technologies You'll Master
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {webTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-3 bg-purple-900/50 p-4 md:p-6 rounded-xl hover:bg-purple-800/50 transition-colors"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 md:w-16 md:h-16"
                loading="lazy" // Added lazy loading here
              />
              <span className="text-white text-sm md:text-lg text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section with improved spacing */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <ProjectsSection courseType="webdev" />
      </div>

      {/* FAQ Section with improved spacing */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <FAQ courseType="webdev" />
      </div>
    </div>
  );
};

export default WebDevelopment;