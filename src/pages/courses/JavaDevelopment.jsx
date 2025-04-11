import { CalendarIcon, TagIcon, StarIcon } from "@heroicons/react/24/outline";
import RoadMap from "../../components/RoadMap";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  BookOpenIcon,
  CubeTransparentIcon,
  CodeBracketIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
  BugAntIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import javaImage from "../../assets/courses/java.jpeg";

import java from "../../assets/icon/java.svg"
import spring from "../../assets/icon/spring-boot.svg"
import hibernate from "../../assets/icon/hibernate.svg"
import maven from "../../assets/icon/maven.svg"
import gradle from "../../assets/icon/gradle.svg"
import tomcat from "../../assets/icon/apachetomcat-svgrepo-com.svg"
import docker from "../../assets/icon/docker-logo-svgrepo-com.svg"
import kubernetes from "../../assets/icon/kubernetes-svgrepo-com.svg"
import eclipse from "../../assets/icon/eclipseide-svgrepo-com.svg"
import { useState } from "react";
import FAQ from "../../components/FAQ";
import ProjectsSection from "../../components/ProjectsSection";
import EnrollmentForm from '../../components/EnrollmentForm';

const JavaDevelopment = () => {
  const [showEnrollForm, setShowEnrollForm] = useState(false);

  const courseData = {
    title: "Best Java Development Internship Program in India",
    subtitle:
      "Kaleidonex offers the Best Java Development Internship Program in India, which goes beyond just coding.",
    description: `Java is one of the most powerful and widely-used programming languages, known for its portability, scalability, and security. Our Java Development Internship Program provides a thorough introduction to this versatile language, covering core programming concepts, object-oriented programming, and hands-on experience with libraries and frameworks like Spring, Hibernate, and JavaFX. You'll learn to develop robust applications, work with databases, implement multithreading, and handle user interfaces. The internship also emphasizes debugging, testing, and deployment strategies, along with real-world projects to prepare you for a successful career in Java development.`,
    highlights: [
      "Core Java & OOP Concepts",
      "Spring Framework & Spring Boot",
      "Database & JPA/Hibernate",
      "REST API Development",
      "Microservices Architecture",
    ],
    curriculum: [
      {
        title: "Core Java Fundamentals",
        topics: [
          "Java Basics",
          "OOP Concepts",
          "Collections",
          "Exception Handling",
        ],
      },
      {
        title: "Advanced Java",
        topics: [
          "Spring Framework",
          "Spring Boot",
          "Hibernate/JPA",
          "REST APIs",
        ],
      },
      {
        title: "Enterprise Development",
        topics: ["Microservices", "Testing", "Security", "Deployment"],
      },
    ],
    batchDate: "Feb 1, 2025",
    duration: "2/3 months",
    studentsCount: "30k+",
    rating: "4.6/5",
    reviews: "358 Reviews",
    imageUrl: javaImage,
  };

  const handleApplyNow = () => {
    setShowEnrollForm(true);
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  const roadmapSteps = [
    {
      title: "Discussion & Planning",
      description: "Define project scope, requirements, and objectives.",
      icon: <ChatBubbleOvalLeftEllipsisIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-pink-500",
    },
    {
      title: "Learning Java Basics",
      description: "Understand Java syntax, OOP concepts, and core libraries.",
      icon: <BookOpenIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-yellow-500",
    },
    {
      title: "Advanced Java & Frameworks",
      description: "Explore multithreading, collections, and frameworks like Spring & Hibernate.",
      icon: <CubeTransparentIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-green-500",
    },
    {
      title: "Backend Development",
      description: "Develop RESTful APIs and backend services using Java.",
      icon: <CodeBracketIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-blue-500",
    },
    {
      title: "Database Management",
      description: "Integrate SQL & NoSQL databases using JDBC, JPA, or Hibernate.",
      icon: <ServerStackIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-indigo-500",
    },
    {
      title: "Optimization & Performance",
      description: "Improve code efficiency, memory management, and security.",
      icon: <WrenchScrewdriverIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-purple-500",
    },
    {
      title: "Testing & Debugging",
      description: "Use JUnit, Mockito, and debugging tools to ensure code reliability.",
      icon: <BugAntIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-red-500",
    },
    {
      title: "Deployment & Maintenance",
      description: "Deploy Java applications and maintain updates for performance.",
      icon: <RocketLaunchIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-orange-500",
    },
  ];

  const javaTechnologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Spring Boot",
      icon: spring,
    },
    {
      name: "Hibernate",
      icon: hibernate,
    },
    {
      name: "Maven",
      icon: maven,
    },
    {
      name: "Gradle",
      icon: gradle,
    },
    {name:"eclipse IDE",
      icon:eclipse,
    } ,
    {
      name: "Apache Tomcat",
      icon: tomcat,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Kubernetes",
      icon: kubernetes,
    },
   
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
            </div>
          </div>

          {/* Internship Card - Add shadow and hover effects */}
          <div className="bg-purple-900 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <img
              src={courseData.imageUrl}
              alt="Java Development Internship"
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
            courseType="java"
            onClose={() => setShowEnrollForm(false)}
          />
        </div>
      )}

      {/* Internship Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-12 md:py-16 mt-8 sm:mt-12 md:mt-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Internship Description */}
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
          {javaTechnologies.map((tech) => (
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
        <ProjectsSection courseType="java" />
      </div>

      {/* FAQ Section with improved spacing */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <FAQ courseType="java" />
      </div>
    </div>
  );
};

export default JavaDevelopment;
