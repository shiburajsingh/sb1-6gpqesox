import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-dark-700 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-dark-600 dark:text-gray-300 text-lg font-heading font-semibold mb-2">
              Shibu Raj Singh
            </p>
            <p className="text-dark-500 dark:text-gray-400 text-sm">
              Software Developer | Blockchain Enthusiast | System Administrator
            </p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/in/shibu-raj-singh-77899b12a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white dark:bg-dark-600 text-primary-800 dark:text-secondary-400 hover:bg-primary-100 dark:hover:bg-dark-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/shiburajsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white dark:bg-dark-600 text-primary-800 dark:text-secondary-400 hover:bg-primary-100 dark:hover:bg-dark-500 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:shibu.raj.singh@gmail.com"
              className="p-2 rounded-full bg-white dark:bg-dark-600 text-primary-800 dark:text-secondary-400 hover:bg-primary-100 dark:hover:bg-dark-500 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-dark-600 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Shibu Raj Singh. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#home" className="text-dark-500 dark:text-gray-400 text-sm hover:text-primary-800 dark:hover:text-secondary-400 transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-dark-500 dark:text-gray-400 text-sm hover:text-primary-800 dark:hover:text-secondary-400 transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="text-dark-500 dark:text-gray-400 text-sm hover:text-primary-800 dark:hover:text-secondary-400 transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;