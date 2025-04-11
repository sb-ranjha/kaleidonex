import { CalendarIcon, TagIcon, StarIcon } from '@heroicons/react/24/outline';
import { useNavigate, useParams } from 'react-router-dom';

const CourseDetails = ({ courseData }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 mt-8 md:mt-16 lg:mt-32">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Course Description */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Course Overview
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
            {courseData.description}
          </p>
          
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              What you'll learn
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {courseData.highlights.map((highlight, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 text-gray-300 text-sm sm:text-base lg:text-lg"
                >
                  <span className="text-green-400 text-lg sm:text-xl flex-shrink-0">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Curriculum */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Curriculum
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {courseData.curriculum.map((section, index) => (
              <div 
                key={index} 
                className="bg-purple-900/50 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8"
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {section.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-gray-300 text-sm sm:text-base lg:text-lg flex items-start gap-2">
                      <span className="text-purple-400 flex-shrink-0">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
