import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import VanillaTilt from 'vanilla-tilt';
import { Project } from '../../types';

const Projects: React.FC = () => {
  const tiltRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Decentralized Voting System',
      description: 'A blockchain-based voting platform built on Ethereum that ensures transparent, tamper-proof elections. Features include secure voter authentication, real-time result tracking, and cryptographic vote verification.',
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'React.js', 'Node.js'],
      image: 'https://images.pexels.com/photos/8735511/pexels-photo-8735511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      githubLink: 'https://github.com/shiburajsingh/decentralized-voting'
    },
    {
      id: 2,
      title: 'Groco Mart',
      description: 'An e-commerce grocery delivery platform that allows users to browse products, place orders, and track deliveries. Features include product search, filtering, cart management, and secure checkout.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      githubLink: 'https://github.com/shiburajsingh/groco-mart'
    }
  ];

  useEffect(() => {
    // Initialize VanillaTilt for project cards
    tiltRefs.current.forEach((el) => {
      if (el) {
        VanillaTilt.init(el, {
          max: 15,
          speed: 400,
          glare: true,
          'max-glare': 0.3,
          scale: 1.05
        });
      }
    });

    // Cleanup
    return () => {
      tiltRefs.current.forEach((el) => {
        if (el && (el as any)?.vanillaTilt) {
          (el as any).vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 dark:text-white mb-4" data-aos="fade-up">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-dark-600 dark:text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Showcasing my work in blockchain technology and web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="overflow-hidden"
            >
              <div 
                ref={el => tiltRefs.current[index] = el}
                className="relative bg-white dark:bg-dark-700 rounded-xl shadow-medium dark:shadow-none overflow-hidden h-full"
              >
                <div className="project-card-inner h-full flex flex-col">
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-heading font-semibold text-dark-800 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-dark-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4 mt-auto">
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-primary-800 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-secondary-300 transition-colors"
                        >
                          <ExternalLink size={16} />
                          <span>View Live</span>
                        </a>
                      )}
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-dark-600 dark:text-gray-300 hover:text-dark-800 dark:hover:text-white transition-colors"
                        >
                          <Github size={16} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;