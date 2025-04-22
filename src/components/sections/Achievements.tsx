import React from 'react';
import { Trophy } from 'lucide-react';
import { Achievement } from '../../types';

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'University Cricket Team Captain',
      description: 'Led the university cricket team to regional championships and fostered team spirit and sportsmanship.'
    },
    {
      id: 2,
      title: 'Runner-up at 2023 University Sports Day',
      description: 'Achieved second place in the competitive sporting events during the annual university sports day.'
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-gray-50 dark:bg-dark-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 dark:text-white mb-4" data-aos="fade-up">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-dark-600 dark:text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Recognition and accomplishments beyond academics
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white dark:bg-dark-600 rounded-lg shadow-soft p-6 mb-8 flex"
            >
              <div className="mr-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary-800 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-dark-800 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-dark-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;