import { CalendarIcon, TagIcon, StarIcon } from '@heroicons/react/24/outline';
import RoadMap from '../../components/RoadMap';
import { AcademicCapIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import FAQ from '../../components/FAQ';
import ProjectsSection from '../../components/ProjectsSection';
import EnrollmentForm from '../../components/EnrollmentForm';

const DataScience = () => {
  const [showEnrollForm, setShowEnrollForm] = useState(false);

  const courseData = {
    title: "data",
    subtitle: "Unified Mentor offers the Best Web Development Program in India, which goes beyond just coding.",
    description: `The subject of web development is fast expanding, and new tools and technologies are 
    constantly being developed. Our Web Development Course covers HTML, CSS, responsive 
    design, JavaScript, frameworks like React and Vue.js, web performance optimization, Git 
    version control, cross-browser compatibility, UX/UI principles, practical projects, as well as 
    Backend Development, Web Security, and Deployment and Hosting.`,
    highlights: [
      "HTML5, CSS3, and Modern JavaScript",
      "React.js & Node.js",
      "Database Management",
      "REST API Development",
      "Web Security & Performance"
    ],
    curriculum: [
      {
        title: "Frontend Development",
        topics: ["HTML5", "CSS3", "JavaScript", "React.js"]
      },
      {
        title: "Backend Development",
        topics: ["Node.js", "Express.js", "MongoDB", "API Development"]
      },
      {
        title: "Advanced Concepts",
        topics: ["Web Security", "Performance Optimization", "Deployment"]
      }
    ],
    batchDate: "Dec 15, 2024",
    price: "4499",
    duration: "4 months",
    studentsCount: "30k+",
    rating: "4.6/5",
    reviews: "358 Reviews",
    imageUrl: "/images/web-development-detail.jpg"
  };

  const roadmapSteps = [
    {
      title: "Fundamentals",
      description: "Learn Python, Statistics, and Mathematics for Data Science",
      icon: <AcademicCapIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-blue-500"
    },
    {
      title: "Data Analysis",
      description: "Master data cleaning, visualization, and exploratory analysis",
      icon: <ChartBarIcon className="w-10 h-10 text-white" />,
      bgColor: "bg-green-500"
    },
    // Add more steps...
  ];

  const dataScienceTechnologies = [
    { name: "Python", icon: "/images/tech/python.svg" },
    { name: "Pandas", icon: "/images/tech/pandas.svg" },
    { name: "NumPy", icon: "/images/tech/numpy.svg" },
    { name: "Scikit-learn", icon: "/images/tech/scikit.svg" },
    { name: "TensorFlow", icon: "/images/tech/tensorflow.svg" },
    { name: "Jupyter", icon: "/images/tech/jupyter.svg" }
 
    // Add more data science technologies...
];  

  const handleApplyNow = () => {
    setShowEnrollForm(true);
  };

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
            
            {/* Rating Section */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white">{courseData.rating} · {courseData.reviews}</span>
            </div>

            {/* Course Info */}
            <div className="flex gap-8 text-gray-300">
              <p className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                Duration: {courseData.duration}
              </p>
              <p className="flex items-center gap-2">
                <TagIcon className="w-5 h-5" />
                Price: ₹{courseData.price}/-
              </p>
            </div>
          </div>

          {/* Course Card - Add shadow and hover effects */}
          <div className="bg-purple-900 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <img 
              src={courseData.imageUrl} 
              alt="Web Development"
              className="w-full aspect-video object-cover"
            />
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <p className="text-white">Next Batch Starts: {courseData.batchDate}</p>
                <p className="text-white">Limited seats available!</p>
              </div>
              <button 
                className="w-full bg-white dark:bg-purple-600 text-black dark:text-white rounded-full py-4 px-6 font-medium hover:bg-gray-100 dark:hover:bg-purple-700 transition-colors"
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
          courseType="datascience"
          onClose={() => setShowEnrollForm(false)}
        />
      )}

      {/* Course Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-12 md:py-16 mt-8 sm:mt-12 md:mt-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Course Description */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Course Overview</h2>
            <p className="text-gray-300">{courseData.description}</p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">What you'll learn</h3>
              <ul className="space-y-2">
                {courseData.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Curriculum */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Curriculum</h2>
            <div className="space-y-6">
              {courseData.curriculum.map((section, index) => (
                <div key={index} className="bg-purple-900/50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-gray-300">• {topic}</li>
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
          {dataScienceTechnologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-3 bg-purple-900/50 p-4 rounded-lg">
              <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
              <span className="text-white">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section with improved spacing */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <ProjectsSection courseType="datascience" />
      </div>

      {/* FAQ Section with improved spacing */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <FAQ courseType="datascience" />
      </div>
    </div>
  );
};

export default DataScience;
