import { CalendarIcon, StarIcon } from "@heroicons/react/24/outline";
import RoadMap from "../../components/RoadMap";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PencilSquareIcon,
  CubeTransparentIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  BugAntIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import pyImage from "../../assets/courses/python.jpeg";
import { useState } from "react";
import FAQ from "../../components/FAQ";
import ProjectsSection from "../../components/ProjectsSection";
import EnrollmentForm from '../../components/EnrollmentForm';

const PythonDevelopment = () => {
  const [showEnrollForm, setShowEnrollForm] = useState(false);

  const courseData = {
    title: "Best Python Development Internship Program in India",
    subtitle:
      "Kaleidonex offers the Best Python Development Internship Program in India, which goes beyond just coding.",
    description: `Python is one of the most versatile and widely-used programming languages, powering innovations across industries. Our Python Development Internship Program provides a comprehensive journey into this dynamic field, covering core programming concepts, object-oriented programming, and hands-on experience with libraries like NumPy, Pandas, and Flask/Django. You'll learn to build robust web applications, automate tasks, manage databases, and analyze data efficiently. The internship also emphasizes debugging, testing, and deployment strategies, along with real-world projects to prepare you for a successful career in Python development and beyond.`,
    duration: "2-3 Months",
    studentsCount: "30k+",
    rating: "4.6/5",
    reviews: "358 Reviews",
    imageUrl: pyImage,
    keyPoints: [
      "Live Project Experience",
      "Industry Mentorship",
      "Certificate Program",
      "Career Guidance"
    ],
    highlights: [
      "Python Core & Advanced Concepts",
      "Web Development with Django/Flask",
      "Data Analysis with Python",
      "Automation & Scripting",
      "Database Integration",
      "API Development"
    ],
    curriculum: [
      {
        title: "Python Fundamentals",
        topics: [
          "Python Syntax & Data Types",
          "Control Flow & Functions",
          "Object-Oriented Programming",
          "File Handling & Modules"
        ]
      },
      {
        title: "Web Development",
        topics: [
          "Django/Flask Framework",
          "RESTful APIs",
          "Database Integration",
          "Authentication & Security"
        ]
      },
      {
        title: "Advanced Topics",
        topics: [
          "Data Analysis Libraries",
          "Automation Scripts",
          "Testing & Debugging",
          "Deployment & CI/CD"
        ]
      }
    ]
  };

  const handleApplyNow = () => {
    setShowEnrollForm(true);
  };

  const roadmapSteps = [
    {
      title: "Discussion & Planning",
      description: "Define project goals, scope, and technology stack for Python development.",
      icon: <ChatBubbleOvalLeftEllipsisIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-pink-500",
    },
    {
      title: "Learning Python Basics",
      description: "Understand Python syntax, data types, loops, functions, and OOP concepts.",
      icon: <PencilSquareIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-yellow-500",
    },
    {
      title: "Advanced Python & Frameworks",
      description: "Explore data structures, algorithms, and frameworks like Django & Flask.",
      icon: <CubeTransparentIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-green-500",
    },
    {
      title: "Backend Development",
      description: "Develop RESTful APIs and backend services using Python frameworks.",
      icon: <CodeBracketIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-blue-500",
    },
    {
      title: "Database Integration",
      description: "Use SQL & NoSQL databases with Python (SQLite, PostgreSQL, MongoDB).",
      icon: <DevicePhoneMobileIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-indigo-500",
    },
    {
      title: "Optimization & Performance",
      description: "Enhance code performance, concurrency, and security in Python applications.",
      icon: <WrenchScrewdriverIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-purple-500",
    },
    {
      title: "Testing & Debugging",
      description: "Use PyTest, Unittest, and debugging tools to ensure code reliability.",
      icon: <BugAntIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-red-500",
    },
    {
      title: "Deployment & Maintenance",
      description: "Deploy Python applications on cloud platforms and maintain updates.",
      icon: <RocketLaunchIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-orange-500",
    },
  ];

  const webTechnologies = [
    {
      name: "Core Java",
      icon: 'Javascript',
    },
    {
      name: "Spring",
      icon: 'react',
    },
    {
      name: "Spring Boot",
      icon: 'boot',
    },
    {
      name: "Hibernate",
      icon: 'Express',
    },
    {
      name: "MySQL",
      icon: 'Sql',
    },
    {
      name: "REST API",
      icon: 'Api',
    },
    {
      name: "Maven",
      icon: 'node',
    },
    {
      name: "JUnit",
      icon: 'MongoDb',
    },
    {
      name: "Git",
      icon: 'Html',
    },
    {
      name: "Jenkins",
      icon: 'Css',
    },
  ];

  return (
    <div className="min-h-screen bg-purple-950 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-8 sm:py-12 md:py-16 mt-10 sm:mt-16 md:mt-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
              {courseData.title}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
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

          {/* Internship Card */}
          <div className="bg-purple-900 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <img
              src={courseData.imageUrl}
              alt="Python Development Internship"
              className="w-full h-72 xl:h-80 object-cover"
            />
            <div className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {courseData.keyPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-white text-sm">{point}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white text-lg font-semibold mt-4">Start Your Python Journey Today!</p>
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
          courseType="pythondev"
          onClose={() => setShowEnrollForm(false)}
        />
      )}

      {/* Course Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-12 md:py-16 mt-8 sm:mt-12 md:mt-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Course Description */}
          <div className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Internship Overview
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
        <ProjectsSection courseType="pythondev" />
      </div>

      {/* FAQ Section with improved spacing */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <FAQ courseType="pythondev" />
      </div>
    </div>
  );
};

export default PythonDevelopment;
