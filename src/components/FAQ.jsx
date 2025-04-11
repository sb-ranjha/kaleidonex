import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-purple-800">
      <button
        className="w-full py-6 text-left flex justify-between items-center hover:text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <ChevronDownIcon 
          className={`w-5 h-5 text-white transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = ({ courseType }) => {
  // Common FAQs that appear in all courses
  const commonFaqs = [
    {
      question: "How do I sign up for this course?",
      answer: "Simply click on 'Apply Now', select your preferred learning plan, and complete the registration process. Our team will guide you through the onboarding process."
    },
    {
      question: "Is the course self-paced?",
      answer: "Yes, our courses offer flexible learning options. You can choose self-paced learning or opt for structured programs with mentor guidance."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer a satisfaction guarantee. If you're not satisfied with the course within the first 7 days, you can request a full refund. Terms and conditions apply."
    }
  ];

  // Course-specific FAQs
  const courseFaqs = {
    webdev: [
      {
        question: "Do I need prior programming experience?",
        answer: "No prior programming experience is required. Our web development course starts from the basics and gradually progresses to advanced concepts."
      },
      {
        question: "What programming languages will I learn?",
        answer: "You'll learn HTML, CSS, JavaScript, React.js for frontend, and Node.js for backend development, along with database management using MongoDB."
      },
      {
        question: "Will I be able to build real websites after this course?",
        answer: "Yes! You'll work on multiple real-world projects and build a portfolio of responsive, interactive websites during the course."
      }
    ],
    datascience: [
      {
        question: "Is mathematical background required?",
        answer: "Basic mathematics knowledge is helpful, but our course includes modules to cover essential mathematical concepts needed for data science."
      },
      {
        question: "Which tools and technologies will I learn?",
        answer: "You'll learn Python, Pandas, NumPy, Scikit-learn, and other essential data science tools. We also cover machine learning algorithms and data visualization."
      },
      {
        question: "Will I work with real datasets?",
        answer: "Yes, you'll work with real-world datasets and complete industry-relevant projects throughout the course."
      }
    ],
    uxui: [
      {
        question: "Do I need design experience?",
        answer: "No prior design experience is required. We start with design fundamentals and progress to advanced UX/UI concepts."
      },
      {
        question: "What design tools will I learn?",
        answer: "You'll master industry-standard tools like Figma, Adobe XD, and Sketch. We also cover prototyping and user testing tools."
      },
      {
        question: "Will I create a design portfolio?",
        answer: "Yes, you'll work on real-world projects and build a comprehensive UX/UI design portfolio during the course."
      }
    ],
    'digital-marketing': [
      {
        question: "Is this course suitable for beginners?",
        answer: "Yes, this course is designed for both beginners and those with some marketing experience. We cover everything from basics to advanced strategies."
      },
      {
        question: "Will I learn about social media marketing?",
        answer: "Yes, you'll learn comprehensive social media marketing strategies, content creation, analytics, and paid advertising across various platforms."
      },
      {
        question: "Do you cover SEO and analytics?",
        answer: "Yes, we have dedicated modules for SEO, Google Analytics, and data-driven marketing strategies."
      }
    ],
    androiddev: [
      {
        question: "Which cloud platforms are covered?",
        answer: "We cover major cloud platforms including AWS, Azure, and basic concepts of Google Cloud, with a focus on AWS and Azure services."
      },
      {
        question: "Will I learn DevOps practices?",
        answer: "Yes, the course includes comprehensive coverage of DevOps tools and practices, including Docker, Kubernetes, and CI/CD pipelines."
      },
      {
        question: "Are there hands-on projects?",
        answer: "Yes, you'll work on real-world cloud infrastructure projects and gain hands-on experience with cloud services and DevOps tools."
      }
    ]
  };

  // Combine common FAQs with course-specific FAQs
  const selectedCourseFaqs = courseFaqs[courseType] || [];
  const allFaqs = [...selectedCourseFaqs, ...commonFaqs];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-12 md:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        {allFaqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ; 