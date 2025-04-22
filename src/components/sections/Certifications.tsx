import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Certification } from '../../types';

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'TAP Academy',
      date: 'February 2024',
      link: '#'
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 dark:text-white mb-4" data-aos="fade-up">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-dark-600 dark:text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Professional qualifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white dark:bg-dark-700 rounded-xl shadow-soft dark:shadow-none overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-primary-800 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-dark-800 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <div className="text-dark-500 dark:text-gray-400 mb-4">
                  {cert.issuer} • {cert.date}
                </div>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-800 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-secondary-300 transition-colors"
                  >
                    <span className="mr-1">View Certificate</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;