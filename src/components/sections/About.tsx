import React, { useEffect, useRef } from 'react';
import { FileText } from 'lucide-react';

interface Skill {
  name: string;
  level: 'Novice' | 'Intermediate' | 'Advanced';
  percentage: number;
}

const About: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'Java', level: 'Advanced', percentage: 90 },
    { name: 'C', level: 'Intermediate', percentage: 75 },
    { name: 'JavaScript', level: 'Novice', percentage: 60 },
    { name: 'Spring Boot', level: 'Intermediate', percentage: 70 },
    { name: 'Ethereum', level: 'Intermediate', percentage: 75 },
    { name: 'SQL', level: 'Intermediate', percentage: 70 },
    { name: 'TCP/IP', level: 'Intermediate', percentage: 75 },
  ];

  useEffect(() => {
    const animateSkills = () => {
      if (skillsRef.current) {
        const skillBars = skillsRef.current.querySelectorAll('.skill-progress-inner');
        
        skillBars.forEach((bar) => {
          const width = bar.getAttribute('data-percentage');
          if (width) {
            (bar as HTMLElement).style.width = '0%';
            setTimeout(() => {
              (bar as HTMLElement).style.width = width + '%';
            }, 300);
          }
        });
      }
    };

    // Use IntersectionObserver to trigger animation when skills section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-dark-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 dark:text-white mb-4" data-aos="fade-up">
            About Me
          </h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-dark-600 dark:text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Computer Science graduate with expertise in Java, blockchain technologies, and system administration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-heading font-semibold text-dark-700 dark:text-gray-200 mb-6">
              Who I Am
            </h3>
            <p className="text-dark-600 dark:text-gray-300 mb-6">
              I'm a Computer Science graduate from Dr. C.V. Raman University with a CGPA of 8.06. My passion lies in developing robust software solutions, exploring blockchain technologies, and designing efficient system architectures.
            </p>
            <p className="text-dark-600 dark:text-gray-300 mb-6">
              With a strong foundation in Java programming and hands-on experience in blockchain development, I've successfully built projects ranging from decentralized applications to e-commerce platforms.
            </p>
            <p className="text-dark-600 dark:text-gray-300 mb-6">
              I'm deeply interested in creating secure, scalable, and user-friendly applications that solve real-world problems, particularly in the blockchain and distributed systems space.
            </p>
            <div className="mt-8">
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-primary-800 hover:bg-primary-700 text-white rounded-lg shadow-md transition-all duration-300 inline-block"
              >
                <FileText size={18} />
                Download Resume
              </a>
            </div>
          </div>

          <div ref={skillsRef} data-aos="fade-left">
            <h3 className="text-2xl font-heading font-semibold text-dark-700 dark:text-gray-200 mb-6">
              My Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-dark-700 dark:text-gray-200 font-medium">{skill.name}</span>
                    <span className="text-dark-500 dark:text-gray-400">{skill.level}</span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                    <div 
                      className="skill-progress-inner h-full bg-gradient-to-r from-primary-800 to-secondary-500 rounded-full transition-all duration-1500 ease-out"
                      data-percentage={skill.percentage}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;