import { CalendarIcon, TagIcon, StarIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import RoadMap from '../../components/RoadMap';
import Technologies from '../../components/Technologies';
import { 
  CloudIcon, 
  ServerIcon,
  ShieldCheckIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';
import cloudImage from "../../assets/courses/cloud.jpeg";
import FAQ from '../../components/FAQ';
import EnrollmentForm from '../../components/EnrollmentForm';

const CloudComputing = () => {
  const [showEnrollForm, setShowEnrollForm] = useState(false);

  const courseData = {
    title: "Cloud Computing & DevOps",
    subtitle: "Master Cloud Technologies and DevOps Practices",
    description: `Learn cloud computing fundamentals, AWS, Azure, DevOps practices, 
    containerization, and cloud security. This comprehensive Program covers everything 
    from basic cloud concepts to advanced deployment strategies and automation.`,
    highlights: [
      "AWS & Azure Fundamentals",
      "Docker & Kubernetes",
      "CI/CD Pipeline Implementation",
      "Cloud Security Best Practices",
      "Infrastructure as Code (IaC)"
    ],
    curriculum: [
      {
        title: "Cloud Fundamentals",
        topics: ["Cloud Concepts", "AWS Services", "Azure Basics", "Cloud Architecture"]
      },
      {
        title: "DevOps Practices",
        topics: ["Git & Version Control", "Docker", "Kubernetes", "Jenkins"]
      },
      {
        title: "Advanced Topics",
        topics: ["Cloud Security", "Serverless Computing", "Microservices", "Monitoring"]
      }
    ],
    batchDate: "Feb 1, 2025",
    price: "1500",
    duration: "4 months",
    studentsCount: "2k+",
    rating: "4.8/5",
    reviews: "120 Reviews",
    imageUrl: cloudImage
  };

  const handleApplyNow = () => {
    setShowEnrollForm(true);
  };

  const roadmapSteps = [
    {
      title: "Cloud Basics",
      description: "Learn fundamental cloud concepts and services",
      icon: <CloudIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-blue-500"
    },
    {
      title: "Infrastructure",
      description: "Master cloud infrastructure and networking",
      icon: <ServerIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-green-500"
    },
    {
      title: "Security",
      description: "Implement cloud security best practices",
      icon: <ShieldCheckIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-red-500"
    },
    {
      title: "DevOps",
      description: "Learn DevOps tools and practices",
      icon: <CpuChipIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-purple-500"
    }
  ];

  const technologies = [
    {
      name: "AWS",
      icon: "/images/tech/aws-icon.svg",
    },
    {
      name: "Azure",
      icon: "/images/tech/azure-icon.svg",
    },
    {
      name: "Docker",
      icon: "/images/tech/docker-icon.svg",
    },
    {
      name: "Kubernetes",
      icon: "/images/tech/kubernetes-icon.svg",
    },
    {
      name: "Jenkins",
      icon: "/images/tech/jenkins-icon.svg",
    },
    {
      name: "Terraform",
      icon: "/images/tech/terraform-icon.svg",
    }
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
              alt="Cloud Computing"
              className="w-full h-72 xl:h-80 object-cover"
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
          courseType="cloudcomputing"
          onClose={() => setShowEnrollForm(false)}
        />
      )}

      {/* Course Content Section */}
      <div className="max-w-7xl mx-auto px-6 xl:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Course Description */}
          <div className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Course Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{courseData.description}</p>
            
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">What you'll learn</h3>
              <ul className="space-y-4">
                {courseData.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300 text-lg">
                    <span className="text-green-400 text-2xl">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Curriculum */}
          <div className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Curriculum</h2>
            <div className="space-y-8">
              {courseData.curriculum.map((section, index) => (
                <div key={index} className="bg-purple-900/50 dark:bg-gray-800 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-gray-300 text-lg">• {topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap section */}
      <RoadMap steps={roadmapSteps} />

      {/* Technologies Section */}
      <Technologies technologies={technologies} />

      {/* FAQ Section */}
      <FAQ courseType="cloud-computing" />
    </div>
  );
};

export default CloudComputing; 