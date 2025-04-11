import { CalendarIcon, TagIcon, StarIcon } from "@heroicons/react/24/outline";
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
import androidImage from "../../assets/courses/android1.jpg";

import java from "../../assets/icon/java.svg"
import kotlin from "../../assets/icon/kotlin-1-logo-svgrepo-com.svg"
import androidstudio from "../../assets/icon/android-studio.svg"
import xml from "../../assets/icon/xml-document-svgrepo-com.svg"
import firebase from "../../assets/icon/firebase.svg"
import sqllite from "../../assets/icon/sqlite-svgrepo-com.svg"
import jenkins from "../../assets/icon/jenkins.svg"
import gradle from "../../assets/icon/gradle.svg"

import { useState } from "react";
import FAQ from "../../components/FAQ";
import ProjectsSection from "../../components/ProjectsSection";
import EnrollmentForm from '../../components/EnrollmentForm';

const AndroidDevelopment = () => {
  const [showEnrollForm, setShowEnrollForm] = useState(false);

  const courseData = {
    title: "Best Android Development Internship Program in India",
    subtitle:
      "Kaleidonex offers the Best Android Development Internship Program in India, which goes beyond just coding.",
    description: `Android is the leading mobile operating system, powering millions of devices worldwide. Our Android Development Internship Program provides a comprehensive journey into building dynamic, user-friendly, and high-performance mobile applications. You'll learn the fundamentals of Android development, including Java/Kotlin programming, UI/UX design, and database integration. Gain hands-on experience with Android Studio and explore advanced topics such as API integration, performance optimization, and app deployment. Real-world projects will prepare you for a successful career in mobile application development.`,
    duration: "2-3 Months",
    studentsCount: "30k+",
    rating: "4.6/5",
    reviews: "358 Reviews",
    imageUrl: androidImage,
    keyPoints: [
      "100% Practical Training",
      "Real-world Projects",
      "Industry Expert Mentors",
      "Job/Placement Assistance"
    ],
    highlights: [
      "Android App Development Fundamentals",
      "Java & Kotlin Programming",
      "UI/UX Design with XML & Jetpack Compose",
      "Database Integration (SQLite & Firebase)",
      "API Integration & Networking",
      "App Testing & Debugging",
      "Performance Optimization",
      "Play Store Deployment"
    ],
    curriculum: [
      {
        title: "Android Fundamentals",
        topics: [
          "Introduction to Android Development",
          "Java & Kotlin Programming",
          "Android Studio & Development Tools",
          "UI Design with XML & Jetpack Compose"
        ]
      },
      {
        title: "Core Components",
        topics: [
          "Activities & Fragments",
          "Layouts & Views",
          "Navigation & Lifecycle",
          "Data Storage & SQLite"
        ]
      },
      {
        title: "Advanced Topics",
        topics: [
          "API Integration & Networking",
          "Firebase Integration",
          "App Performance & Optimization",
          "Testing & Deployment"
        ]
      }
    ]
  };

  const handleApplyNow = () => {
    setShowEnrollForm(true);
  };

  const roadmapSteps = [
    {
      title: "Discussion",
      description: "Brainstorm app ideas, features, and technology stack.",
      icon: <ChatBubbleOvalLeftEllipsisIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-pink-500",
    },
    {
      title: "UI/UX Design",
      description: "Create wireframes and design the user interface for the app.",
      icon: <PencilSquareIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-yellow-500",
    },
    {
      title: "Architecture & Planning",
      description: "Choose an architecture like MVVM, MVP, or MVI for scalable development.",
      icon: <CubeTransparentIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-green-500",
    },
    {
      title: "Development",
      description: "Write and structure the code using Kotlin/Java and Jetpack Compose/XML.",
      icon: <CodeBracketIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-blue-500",
    },
    {
      title: "Device Compatibility",
      description: "Ensure compatibility with different screen sizes and Android versions.",
      icon: <DevicePhoneMobileIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-indigo-500",
    },
    {
      title: "Optimization & Performance",
      description: "Improve app performance, memory management, and battery efficiency.",
      icon: <WrenchScrewdriverIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-purple-500",
    },
    {
      title: "Testing & Debugging",
      description: "Use unit, UI, and integration testing to fix bugs before release.",
      icon: <BugAntIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-red-500",
    },
    {
      title: "Launch & Maintenance",
      description: "Deploy the app on the Play Store and provide updates.",
      icon: <RocketLaunchIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-orange-500",
    },
  ];
  
  

  const AndroidTechnologies = [
    {
      name: "JAVA",
      icon: java,
    },
    {
      name: "Kotlin",
      icon: kotlin,
    },
    {
      name: "Android Studio",
      icon: androidstudio,
    },
    {
      name: "XML",
      icon: xml,
    },
    {
      name: "firebase",
      icon: firebase,
    },
    {
      name: "Sqlite",
      icon: sqllite,
    },
    {
      name: "gradle",
      icon: gradle,
    },
    {
      name: "JenKins",
      icon: jenkins,
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
              alt="Android Development Internship"
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
                <p className="text-white text-lg font-semibold mt-4">Join our Industry-Ready Program!</p>
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
          courseType="androiddevelopment"
          onClose={() => setShowEnrollForm(false)}
        />
      )}

      {/* Internship Content Section */}
      {/* Course Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-12 md:py-16 mt-8 sm:mt-12 md:mt-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Course Description */}
          <div className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
            Programs Overview
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
          {AndroidTechnologies.map((tech) => (
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
        <ProjectsSection courseType="androiddevelopment" />
      </div>

      {/* FAQ Section with improved spacing */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <FAQ courseType="androiddevelopment" />
      </div>
    </div>
  );
};

export default AndroidDevelopment;
