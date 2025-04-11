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
import genImage from "../../assets/courses/genai.jpg";

// icon technologies
import python from "../../assets/icon/python.svg";
import tenserflow from "../../assets/icon/tensorflow.svg";
import pytorch from "../../assets/icon/pytorch-svgrepo-com.svg";
import hugging from "../../assets/icon/hugging-face-svgrepo-com.svg";
import colab from "../../assets/icon/google-colab.svg";
import runway from "../../assets/icon/runway.svg";

// component
import { useState } from "react";
import FAQ from "../../components/FAQ";
import ProjectsSection from "../../components/ProjectsSection";
import EnrollmentForm from '../../components/EnrollmentForm';

const GenerativeAI = () => {
  // const navigate = useNavigate();
  const [showEnrollForm, setShowEnrollForm] = useState(false);

  const courseData = {
    title: "Best Generative AI Internship Program in India",
    subtitle:
      "Kaleidonex offers the Best Generative AI Internship Program in India, which goes beyond just coding.",
    description: `Generative AI is revolutionizing the way we create and interact with technology, opening up new possibilities across industries. Our Generative AI Course provides a deep dive into this transformative field, covering fundamental concepts in machine learning and neural networks, hands-on experience with tools like TensorFlow and PyTorch, and techniques for building models like GANs (Generative Adversarial Networks) and transformers. You'll explore applications in image generation, text creation, and audio synthesis, along with ethical considerations, deployment strategies, and real-world projects to prepare you for the future of AI-driven innovation.`,
    highlights: [
      " Foundations of Machine Learning and Neural Networks",
      " Building and Fine-Tuning Generative Models (GANs, Transformers, etc.)",
      "Tools like TensorFlow and PyTorch",
      "Text, Image, and Audio Generation Techniques",
      "Ethical Considerations and Bias in AI",
      "Deployment Strategies for Generative AI Applications",
    ],
    curriculum: [
      {
        title: "Fundamentals of AI and Machine Learning ",
        topics: [
          "Introduction to Artificial Intelligence",
          "Basics of Machine Learning Algorithms",
          "Neural Networks and Deep Learning Essentials",
          "Generative AI Core Concepts",
        ],
      },
      {
        title: "Introduction to Generative Models",
        topics: [
          "Variational Autoencoders (VAEs)",
          "Generative Adversarial Networks (GANs)",
          "Transformers and Attention Mechanisms",
          "Hands-On Tools and Frameworks",
        ],
      },
      {
        title: "Advanced Concepts",
        topics: [
          "Fine-Tuning Pre-trained Models",
          "Data Augmentation Techniques for Generative Models",
          "Deployment and Optimization",
        ],
      },
    ],
    batchDate: "Feb 1, 2025",
    price: "1500  ",
    duration: " 2 & 3 Months  ",
    studentsCount: "30k+",
    rating: "4.6/5",
    reviews: "358 Reviews",
    imageUrl: genImage,
  };

  const handleApplyNow = () => {
    setShowEnrollForm(true);
  };

  const roadmapSteps = [
    {
      title: "Discussion",
      description: "Brainstorm AI model requirements, goals, and applications.",
      icon: <ChatBubbleOvalLeftEllipsisIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-pink-500",
    },
    {
      title: "Data Collection",
      description: "Gather and preprocess datasets required for AI training.",
      icon: <ServerStackIcon className="w-10 h-10 text-white" />, // Alternative to DatabaseIcon
      bgColor: "bg-yellow-500",
    },
    {
      title: "Model Selection",
      description:
        "Choose appropriate architectures like Transformers or GANs.",
      icon: <CubeTransparentIcon className="w-10 h-10 text-white" />, // Represents AI models
      bgColor: "bg-green-500",
    },
    {
      title: "Training & Fine-tuning",
      description:
        "Train the AI model using GPUs/TPUs and fine-tune for performance.",
      icon: <AdjustmentsHorizontalIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-blue-500",
    },
    {
      title: "Evaluation",
      description: "Test the AI model against benchmarks and datasets.",
      icon: <ClipboardDocumentCheckIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-indigo-500",
    },
    {
      title: "Deployment",
      description:
        "Optimize and deploy the AI model via APIs or cloud platforms.",
      icon: <CloudArrowUpIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-purple-500",
    },
    {
      title: "Testing & Validation",
      description: "Validate outputs for accuracy, bias, and reliability.",
      icon: <EyeIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-red-500",
    },
    {
      title: "Launch & Monitoring",
      description: "Deploy, monitor, and improve the AI system continuously.",
      icon: <RocketLaunchIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-orange-500",
    },
  ];

  const webTechnologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "TensorFlow",
      icon: tenserflow,
    },
    {
      name: "Pytorch",
      icon: pytorch,
    },
    {
      name: "Hugginf Face ",
      icon: hugging,
    },
    {
      name: "Google Colab",
      icon: colab,
    },
    { name: "Runway", icon: runway },
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

      {showEnrollForm && (
        <EnrollmentForm 
          courseType="generativeai"
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
        <ProjectsSection courseType="genrativeai" />
      </div>

      {/* FAQ Section with improved spacing */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <FAQ courseType="genrativeai" />
      </div>
    </div>
  );
};

export default GenerativeAI;
