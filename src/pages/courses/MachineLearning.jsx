import { CalendarIcon, TagIcon, StarIcon } from "@heroicons/react/24/outline";
import RoadMap from "../../components/RoadMap";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  ServerStackIcon,
  CubeTransparentIcon,
  AdjustmentsHorizontalIcon,
  ClipboardDocumentCheckIcon,
  CloudArrowUpIcon,
  EyeIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import mlImage from "../../assets/courses/machineLearning.jpg";

import { useState } from "react";
import FAQ from "../../components/FAQ";
import ProjectsSection from "../../components/ProjectsSection";
import EnrollmentForm from '../../components/EnrollmentForm';

const MachineLearning = () => {
  const [showEnrollForm, setShowEnrollForm] = useState(false);

  const courseData = {
    title: "Best Machine Learning Internship Program in India",
    subtitle:
      "Kaleidonex offers the Best Machine Learning Internship Program in India, which goes beyond just coding.",
    description: `Machine Learning is revolutionizing industries across the globe, from healthcare to finance. Our Machine Learning Internship Program provides a comprehensive journey into this cutting-edge field, covering fundamental concepts, algorithms, and practical applications. You'll learn essential ML libraries like TensorFlow and PyTorch, work with real-world datasets, and develop models for various applications. The internship emphasizes hands-on experience with supervised and unsupervised learning, deep learning, and model deployment, preparing you for a successful career in AI and Machine Learning.`,
    duration: "2-3 Months",
    studentsCount: "30k+",
    rating: "4.6/5",
    reviews: "358 Reviews",
    imageUrl: mlImage,
    keyPoints: [
      "AI/ML Projects",
      "Research Experience",
      "Industry Collaboration",
      "Publication Support"
    ],
    highlights: [
      "Machine Learning Fundamentals",
      "Deep Learning & Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "Model Deployment & MLOps",
      "Research Methodology"
    ],
    curriculum: [
      {
        title: "ML Foundations",
        topics: [
          "Python for Machine Learning",
          "Mathematics & Statistics",
          "Data Preprocessing & Analysis",
          "Feature Engineering"
        ]
      },
      {
        title: "Core ML Algorithms",
        topics: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Neural Networks",
          "Deep Learning Architectures"
        ]
      },
      {
        title: "Advanced Topics",
        topics: [
          "Natural Language Processing",
          "Computer Vision",
          "Reinforcement Learning",
          "Model Deployment & MLOps"
        ]
      }
    ]
  };

  const handleApplyNow = () => {
    setShowEnrollForm(true);
  };

  const roadmapSteps = [
    {
      title: "Foundation",
      description:
        "Build strong mathematical and programming foundations for ML.",
      icon: <ChatBubbleOvalLeftEllipsisIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-pink-500",
    },
    {
      title: "Data Analysis",
      description:
        "Learn data preprocessing, visualization, and feature engineering.",
      icon: <ClipboardDocumentCheckIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-yellow-500",
    },
    {
      title: "ML Algorithms",
      description: "Master core machine learning algorithms and techniques.",
      icon: <CubeTransparentIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-green-500",
    },
    {
      title: "Deep Learning",
      description: "Explore neural networks and deep learning frameworks.",
      icon: <ServerStackIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-blue-500",
    },
    {
      title: "Specialization",
      description:
        "Focus on specific areas like NLP or Computer Vision.",
      icon: <EyeIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-indigo-500",
    },
    {
      title: "Model Development",
      description: "Build end-to-end ML projects and optimize models.",
      icon: <CloudArrowUpIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-purple-500",
    },
    {
      title: "Evaluation",
      description:
        "Learn model evaluation, validation, and improvement techniques.",
      icon: <AdjustmentsHorizontalIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-red-500",
    },
    {
      title: "Deployment",
      description: "Deploy ML models to production environments.",
      icon: <RocketLaunchIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-orange-500",
    },
  ];

  const mlTechnologies = [
    {
      name: "Python",
      icon: "/images/tech/python.svg",
    },
    {
      name: "TensorFlow",
      icon: "/images/tech/tensorflow.svg",
    },
    {
      name: "PyTorch",
      icon: "/images/tech/pytorch.svg",
    },
    {
      name: "Scikit-learn",
      icon: "/images/tech/scikit.svg",
    },
    {
      name: "NumPy",
      icon: "/images/tech/numpy.svg",
    },
    {
      name: "Pandas",
      icon: "/images/tech/pandas.svg",
    },
    {
      name: "Jupyter",
      icon: "/images/tech/jupyter.svg",
    },
    {
      name: "OpenCV",
      icon: "/images/tech/opencv.svg",
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
              alt="Machine Learning Internship"
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
                <p className="text-white text-lg font-semibold mt-4">Begin Your AI/ML Career Today!</p>
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
          courseType="machinelearning"
          onClose={() => setShowEnrollForm(false)}
        />
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
          {mlTechnologies.map((tech) => (
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
        <ProjectsSection courseType="machinelearning" />
      </div>

      {/* FAQ Section with improved spacing */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <FAQ courseType="machinelearning" />
      </div>
    </div>
  );
};

export default MachineLearning;
