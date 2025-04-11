import perivew from "../assets/preivew.jpg"
const ProjectCard = ({ title, image }) => (
  <div className="bg-purple-900/50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
    <div className="relative h-48 md:h-56">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent" />
      <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
        {title}
      </h3>
    </div>
  </div>
);

const ProjectsSection = ({ courseType }) => {
  const projectsByType = {
    webdev: [
      {
        title: "To Do List App",
        image: "/images/projects/webdev/todo-app.jpg"
      },
      {
        title: "Portfolio Website",
        image: "/images/projects/webdev/portfolio.jpg"
      },
      {
        title: "Social Media Platform",
        image: "/images/projects/webdev/social-media.jpg"
      }
    ],
    datascience: [
      {
        title: "Data Visualization Dashboard",
        image: "/images/projects/datascience/dashboard.jpg"
      },
      {
        title: "Predictive Analytics Model",
        image: "/images/projects/datascience/predictive.jpg"
      },
      {
        title: "Customer Segmentation",
        image: "/images/projects/datascience/segmentation.jpg"
      },
      {
        title: "Machine Learning Pipeline",
        image: "/images/projects/datascience/ml-pipeline.jpg"
      },
      {
        title: "Natural Language Processing",
        image: "/images/projects/datascience/nlp.jpg"
      },
      {
        title: "Time Series Analysis",
        image: "/images/projects/datascience/time-series.jpg"
      }
    ],
    uxui: [
      {
        title: "Mobile App Design",
        image: "/images/projects/uxui/mobile-app.jpg"
      },
      {
        title: "E-commerce Website",
        image: "/images/projects/uxui/ecommerce.jpg"
      },
      {
        title: "Design System",
        image: "/images/projects/uxui/design-system.jpg"
      },
      {
        title: "Dashboard Interface",
        image: "/images/projects/uxui/dashboard.jpg"
      },
      {
        title: "User Research Case Study",
        image: "/images/projects/uxui/case-study.jpg"
      },
      {
        title: "Responsive Web Design",
        image: "/images/projects/uxui/responsive.jpg"
      }
    ],
    'digital-marketing': [
      {
        title: "Social Media Campaign",
        image: "/images/projects/marketing/social-campaign.jpg"
      },
      {
        title: "SEO Optimization Project",
        image: "/images/projects/marketing/seo.jpg"
      },
      {
        title: "Email Marketing Campaign",
        image: "/images/projects/marketing/email.jpg"
      },
      {
        title: "Content Marketing Strategy",
        image: "/images/projects/marketing/content.jpg"
      },
      {
        title: "PPC Advertising Campaign",
        image: "/images/projects/marketing/ppc.jpg"
      },
      {
        title: "Analytics Dashboard",
        image: "/images/projects/marketing/analytics.jpg"
      }
    ],
    'cloud-computing': [
      {
        title: "Cloud Infrastructure Setup",
        image: "/images/projects/cloud/infrastructure.jpg"
      },
      {
        title: "Containerization Project",
        image: "/images/projects/cloud/containers.jpg"
      },
      {
        title: "CI/CD Pipeline",
        image: "/images/projects/cloud/cicd.jpg"
      },
      {
        title: "Serverless Application",
        image: "/images/projects/cloud/serverless.jpg"
      },
      {
        title: "Cloud Security Implementation",
        image: "/images/projects/cloud/security.jpg"
      },
      {
        title: "Microservices Architecture",
        image: "/images/projects/cloud/microservices.jpg"
      }
    ],
    java: [
      {
        title: "Cloud Infrastructure Setup",
        image: "/images/projects/cloud/infrastructure.jpg"
      },
      {
        title: "Containerization Project",
        image: "/images/projects/cloud/containers.jpg"
      },
      {
        title: "CI/CD Pipeline",
        image: "/images/projects/cloud/cicd.jpg"
      },
      {
        title: "Serverless Application",
        image: "/images/projects/cloud/serverless.jpg"
      },
      {
        title: "Cloud Security Implementation",
        image: "/images/projects/cloud/security.jpg"
      },
      {
        title: "Microservices Architecture",
        image: "/images/projects/cloud/microservices.jpg"
      }
    ]
  };

  const courseInfo = {
    webdev: {
      title: "Web Development Course",
      certificate: {
        image: perivew,
        description: `Web Development Course Certificate: We are pleased to provide a thorough certification 
        program that takes candidates on an immersive and skill-focused journey. This web 
        development certification showcases your professional progress whether you're hoping 
        to land a position in a tech firm, join a creative agency, or start working on freelancing 
        projects.`
      },
      relatedCourses: [
        { name: "Data Science", link: "/course/data-science" },
        { name: "Digital Marketing", link: "/course/digital-marketing" }
      ]
    },
    java: {
      title: "Data Science Course",
      certificate: {
        image: perivew,
        description: `Data Science Course Certificate: Our comprehensive certification program provides 
        an in-depth journey into data science and analytics. This certification validates your 
        expertise in data analysis, machine learning, and statistical modeling, preparing you 
        for roles in data science, analytics, and AI research.`
      },
      relatedCourses: [
        { name: "Web Development", link: "/course/web-development" },
        { name: "Cloud Computing", link: "/course/cloud-computing" }
      ]
    },
    datascience: {
      title: "Data Science Course",
      certificate: {
        image: perivew,
        description: `Data Science Course Certificate: Our comprehensive certification program provides 
        an in-depth journey into data science and analytics. This certification validates your 
        expertise in data analysis, machine learning, and statistical modeling, preparing you 
        for roles in data science, analytics, and AI research.`
      },
      relatedCourses: [
        { name: "Web Development", link: "/course/web-development" },
        { name: "Cloud Computing", link: "/course/cloud-computing" }
      ]
    },
    
    uxui: {
      title: "UX/UI Design Course",
      certificate: {
        image: perivew,
        description: `UX/UI Design Course Certificate: Our design certification program offers a 
        comprehensive journey through user experience and interface design. This certification 
        demonstrates your ability to create user-centered designs, conduct research, and 
        develop engaging digital experiences.`
      },
      relatedCourses: [
        { name: "Web Development", link: "/course/web-development" },
        { name: "Digital Marketing", link: "/course/digital-marketing" }
      ]
    },
   
    cloudcomputing: {
      title: "Cloud Computing Course",
      certificate: {
        image: "/images/certificates/cloud-certificate.jpg",
        description: `Cloud Computing Course Certificate: Our cloud certification program offers 
        comprehensive training in cloud technologies and DevOps practices. This certification 
        demonstrates your proficiency in cloud platforms, infrastructure management, and 
        modern deployment practices.`
      },
      relatedCourses: [
        { name: "Data Science", link: "/course/data-science" },
        { name: "Web Development", link: "/course/web-development" }
      ]
    },

  };

  const currentCourse = courseInfo[courseType];
  const projects = projectsByType[courseType] || [];

  if (projects.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-12 md:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4">
        Projects You'll Build in Our
      </h2>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">
        {currentCourse.title}
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            image={project.image}
          />
        ))}
      </div>

      {/* Accreditation Section */}
      <div className="mt-16 sm:mt-20 md:mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Our Accreditation
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img 
            src="/images/accreditation/iso.png" 
            alt="ISO Certification" 
            className="h-20 object-contain"
            loading="lazy"
          />
          <img 
            src="/images/accreditation/msme.png" 
            alt="MSME Certification" 
            className="h-20 object-contain"
            loading="lazy"
          />
          <img 
            src="/images/accreditation/startup-india.png" 
            alt="Startup India" 
            className="h-20 object-contain"
            loading="lazy"
          />
        </div>

        {/* Certificate Preview */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            {currentCourse.title} Certificate
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg overflow-hidden shadow-xl">
            <img 
              src={currentCourse.certificate.image}
              alt={`${currentCourse.title} Certificate Preview`}
              className="w-full h-auto"
            />
          </div>
          <p className="text-gray-300 text-center mt-6 max-w-3xl mx-auto">
            {currentCourse.certificate.description}
          </p>
          <p className="text-gray-300 text-center mt-4">
            We also offer{' '}
            {currentCourse.relatedCourses.map((course, index) => (
              <span key={course.name}>
                <a 
                  href={course.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {course.name}
                </a>
                {index === 0 ? ' and ' : ' '}
              </span>
            ))}
            Courses in India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection; 