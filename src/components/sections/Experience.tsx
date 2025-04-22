import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Experience as ExperienceType } from '../../types';

const Experience: React.FC = () => {
  const experiences: ExperienceType[] = [
    {
      id: 1,
      title: 'Digital Trainer Intern',
      company: 'Digital Vihaan Edtech',
      duration: 'Mar 2024 - Apr 2024',
      description: 'Mentored over 350 learners in digital skills, developed training materials, and conducted workshops on web technologies and coding fundamentals.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-dark-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 dark:text-white mb-4" data-aos="fade-up">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-dark-600 dark:text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            My professional journey and roles
          </p>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-primary-200 dark:bg-dark-600 transform md:translate-x-px"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className={`relative flex flex-col md:flex-row mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-primary-800 dark:bg-secondary-500 transform -translate-x-1/2 md:translate-x-[-50%] border-4 border-white dark:border-dark-700"></div>

              <div className={`flex-1 ml-8 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-white dark:bg-dark-600 rounded-lg shadow-soft p-6">
                  <h3 className="text-xl font-heading font-semibold text-primary-800 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center mb-4 text-dark-500 dark:text-gray-400">
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center text-dark-500 dark:text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" /> {exp.duration}
                    </div>
                  </div>
                  <p className="text-dark-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;