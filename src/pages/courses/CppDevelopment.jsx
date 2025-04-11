import { CalendarIcon, TagIcon, StarIcon } from "@heroicons/react/24/outline";
import RoadMap from "../../components/RoadMap";
import {
  LightBulbIcon, // Idea/Discussion
  AcademicCapIcon, // Learning Phase
  ComputerDesktopIcon, // Advanced Concepts
  CpuChipIcon, // Backend Development
  ServerStackIcon, // Database Integration
  AdjustmentsHorizontalIcon, // Optimization
  ExclamationTriangleIcon, // Testing & Debugging
  CloudArrowUpIcon, // Deployment
} from "@heroicons/react/24/outline";
import genImage from "../../assets/courses/genai.jpg";
import cppImage from "../../assets/courses/c++.jpg";

import { useState } from "react";
import FAQ from "../../components/FAQ";
import ProjectsSection from "../../components/ProjectsSection";
import EnrollmentForm from '../../components/EnrollmentForm';

const CppDevelopment = () => {
  // const navigate = useNavigate();
  const [showEnrollForm, setShowEnrollForm] = useState(false);

  const courseData = {
    title: "Best C++ Development Internship Program in India",
    subtitle: "Kaleidonex offers the Best C++ Development Internship Program in India, which goes beyond just coding.",
    description: `C++ is a powerful programming language used in system programming, game development, and high-performance applications. Our C++ Development Internship Program provides comprehensive training in modern C++ programming, covering core concepts, object-oriented programming, STL, and advanced features. You'll gain hands-on experience with real-world projects, learn best practices in memory management, and develop skills in building efficient and scalable applications.`,
    highlights: [
      "Modern C++ Programming",
      "Object-Oriented Design",
      "STL and Templates",
      "Memory Management",
      "Performance Optimization",
      "Multi-threading"
    ],
    curriculum: [
      {
        title: "C++ Fundamentals",
        topics: [
          "C++ Basics and Syntax",
          "Object-Oriented Programming",
          "Memory Management",
          "STL Containers and Algorithms"
        ]
      },
      {
        title: "Advanced C++",
        topics: [
          "Templates and Generic Programming",
          "Multi-threading and Concurrency",
          "Modern C++ Features (C++11/14/17/20)",
          "Best Practices and Design Patterns"
        ]
      },
      {
        title: "Project Development",
        topics: [
          "Performance Optimization",
          "Debugging and Testing",
          "Project Architecture",
          "Code Review and Documentation"
        ]
      }
    ],
    duration: "2-3 Months",
    studentsCount: "30k+",
    rating: "4.6/5",
    reviews: "358 Reviews",
    imageUrl: cppImage,
    keyPoints: [
      "Real Projects",
      "Industry Training",
      "Expert Guidance",
      "Career Support"
    ]
  };

  const handleApplyNow = () => {
    setShowEnrollForm(true);
  };

  const roadmapSteps = [
    {
      title: "Discussion & Planning",
      description: "Define project goals, scope, and technology stack for C++ development.",
      icon: <LightBulbIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-pink-500",
    },
    {
      title: "Learning C++ Basics",
      description: "Understand C++ syntax, data types, control structures, and object-oriented programming.",
      icon: <AcademicCapIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-yellow-500",
    },
    {
      title: "Advanced C++ Concepts",
      description: "Learn advanced features like templates, STL, multithreading, and memory management.",
      icon: <ComputerDesktopIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-green-500",
    },
    {
      title: "Backend Development",
      description: "Develop C++ applications for performance-intensive backends and services.",
      icon: <CpuChipIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-blue-500",
    },
    {
      title: "Database Integration",
      description: "Use libraries to connect C++ with databases like MySQL, SQLite, or PostgreSQL.",
      icon: <ServerStackIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-indigo-500",
    },
    {
      title: "Optimization & Performance",
      description: "Optimize code performance, memory usage, and multi-threading capabilities.",
      icon: <AdjustmentsHorizontalIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-purple-500",
    },
    {
      title: "Testing & Debugging",
      description: "Use unit testing frameworks and debugging tools like GDB to ensure reliability.",
      icon: <ExclamationTriangleIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-red-500",
    },
    {
      title: "Deployment & Maintenance",
      description: "Deploy C++ applications and ensure continuous maintenance and optimization.",
      icon: <CloudArrowUpIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-orange-500",
    },
  ];

  const cppTechnologies = [
    {
      name: "C++",
      icon: "/images/tech/cpp.svg"
    },
    {
      name: "STL",
      icon: "/images/tech/stl.svg"
    },
    {
      name: "CMake",
      icon: "/images/tech/cmake.svg"
    },
    {
      name: "Git",
      icon: "/images/tech/git.svg"
    },
    {
      name: "Visual Studio",
      icon: "/images/tech/visual-studio.svg"
    },
    {
      name: "GDB",
      icon: "/images/tech/gdb.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-purple-950 dark:bg-gray-900">
      {/* Hero Section - Add mt-20 for desktop */}
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
                  <StarIcon
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
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
              <p className="flex items-center gap-3">
                <TagIcon className="w-6 h-6" />
                <span className="text-lg">Price: ₹{courseData.price}/-</span>
              </p>
            </div>
          </div>

          {/* Course Card - Add shadow and hover effects */}
          <div className="bg-purple-900 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <img
              src={courseData.imageUrl}
              alt="Web Development"
              className="w-full h-72 xl:h-80 object-cover"
            />
            <div className="p-8 space-y-6">
              <div className="space-y-4">
                <p className="text-white text-xl">
                  Next Batch Starts: {courseData.batchDate}
                </p>
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

      {/* Add spacing between sections */}
      {showEnrollForm && (
        <div className="mt-8 sm:mt-12 md:mt-16">
          <EnrollmentForm 
            courseType="cppdevelopment"
            onClose={() => setShowEnrollForm(false)}
          />
        </div>
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
          {cppTechnologies.map((tech) => (
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
        <ProjectsSection courseType="cppdev" />
      </div>

      {/* FAQ Section with improved spacing */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <FAQ courseType="cppdev" />
      </div>
    </div>
  );
};

export default CppDevelopment;
