import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, AcademicCapIcon, BriefcaseIcon, DocumentCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import cloudImage from "../assets/courses/cloud.jpeg";
import pyImage from "../assets/courses/python.jpeg";
import javaImage from "../assets/courses/java.jpeg";
import webImage from "../assets/courses/webdev.jpeg";
import genimage from "../assets/courses/genai.jpg";
import androidimage from "../assets/courses/android1.jpg";
import cppimage from "../assets/courses/c++.jpg";
import mlImage from "../assets/courses/machineLearning.jpg";

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

const CourseCard = ({ title, imageUrl, loading = "lazy" }) => { // Default to lazy loading
  const navigate = useNavigate();

  const handleCourseDetails = () => {
    const courseRoutes = {
      'Web Development': 'web-development',
      'Android Development': 'android-development',
      'Generative AI': 'generative-ai',
      'Java Development': 'java-development',
      'Python Development': 'python-development',
      'C++ Development': 'cpp-development',
      'Cloud Computing': 'cloud-computing',
      'Machine Learning': 'machine-learning'
    };

    const route = courseRoutes[title];
    if (route) {
      navigate(`/courses/${route}`);
    } else {
      console.log('No route found for:', title);
    }
  };

  const getKeyPoints = (title) => {
    const keyPointsMap = {
      'Web Development': [
        "Live Projects",
        "Industry Mentors",
        "Career Support",
        "Certification"
      ],
      'Android Development': [
        "Hands-on Training",
        "Real Projects",
        "Expert Guidance",
        "Job Assistance"
      ],
      'Generative AI': [
        "AI Projects",
        "Research Work",
        "Industry Connect",
        "Publication Help"
      ],
      'Python Development': [
        "Live Project Experience",
        "Industry Mentorship",
        "Certificate Program",
        "Career Guidance"
      ],
      'Java Development': [
        "Industry Projects",
        "Expert Mentoring",
        "Certification",
        "Placement Support"
      ],
      'C++ Development': [
        "Real Projects",
        "Industry Training",
        "Expert Guidance",
        "Career Support"
      ],
      'Cloud Computing': [
        "Cloud Projects",
        "AWS/Azure Training",
        "DevOps Practice",
        "Industry Certification"
      ],
      'Machine Learning': [
        "AI/ML Projects",
        "Research Work",
        "Industry Connect",
        "Publication Support"
      ]
    };
    return keyPointsMap[title] || [];
  };

  // Get icon for each key point
  const getIconForPoint = (_, index) => {
    const icons = [
      <AcademicCapIcon key="academic" className="w-5 h-5 text-purple-400" />,
      <BriefcaseIcon key="briefcase" className="w-5 h-5 text-purple-400" />,
      <UserGroupIcon key="users" className="w-5 h-5 text-purple-400" />,
      <DocumentCheckIcon key="document" className="w-5 h-5 text-purple-400" />
    ];
    return icons[index % icons.length];
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden flex flex-col shadow-lg hover:shadow-glow transition-all duration-300"
    >
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          loading={loading}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent hover:from-black/40 transition-colors duration-300"></div>

        {/* Course title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
          <h2 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
            {title}
          </h2>
        </div>
      </div>

      <div className="p-5 md:p-6 lg:p-7 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="space-y-3 mb-6">
            {getKeyPoints(title).map((point, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center">
                  {getIconForPoint(point, index)}
                </div>
                <span className="text-gray-200 text-sm md:text-base group-hover:text-white transition-colors duration-200">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.button
          onClick={handleCourseDetails}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg py-3 px-6
                   flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span className="text-sm md:text-base font-medium">Program Details</span>
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Courses = () => {
  const allCourses = [
    { id: 1, title: "Web Development", imageUrl: webImage },
    { id: 2, title: "Android Development", imageUrl: androidimage },
    { id: 3, title: "Generative AI", imageUrl: genimage },
    { id: 4, title: "Java Development", imageUrl: javaImage },
    { id: 5, title: "Python Development", imageUrl: pyImage },
    { id: 6, title: "C++ Development", imageUrl: cppimage },
    { id: 7, title: "Cloud Computing", imageUrl: cloudImage },
    { id: 8, title: "Machine Learning", imageUrl: mlImage }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary-dark py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-40 left-20 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-sm"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <AcademicCapIcon className="h-5 w-5 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Educational Programs</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-glow">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Programs</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive courses designed to help you master the skills needed for today's tech industry
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {allCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              imageUrl={course.imageUrl}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;