import { motion } from 'framer-motion';

const TechnologyIcon = ({ name, icon, delay }) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="hexagon-container relative w-24 h-24 mb-2">
        <div className="hexagon bg-white p-4 rounded-xl shadow-lg">
          <img src={icon} alt={name} className="w-full h-full object-contain" />
        </div>
      </div>
      <span className="text-white text-sm font-medium">{name}</span>
    </motion.div>
  );
};

const Technologies = ({ technologies }) => {
  return (
    <div className="py-20 bg-purple-950">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technologies & Tools You Will Learn
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <TechnologyIcon 
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              delay={index}
            />
          ))}
        </div>

        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            150+ Success Stories
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
