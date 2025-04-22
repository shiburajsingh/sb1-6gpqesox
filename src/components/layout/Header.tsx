import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-dark-700 shadow-md py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <a 
            href="#home" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary-800 dark:bg-primary-700 flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12">
              <Code2 className="w-6 h-6 text-white transform transition-all duration-300 group-hover:scale-110" />
            </div>
            <span className="text-2xl font-heading font-bold text-primary-800 dark:text-white relative overflow-hidden group-hover:text-secondary-500 transition-colors duration-300">
              SRS
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-600 dark:text-gray-200 hover:text-primary-800 dark:hover:text-secondary-400 transition-colors duration-300"
                    onClick={handleNavClick}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-300"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-primary-800" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-300 mr-2"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-primary-800" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-dark-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white dark:bg-dark-700 rounded-lg shadow-lg">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block px-4 py-2 text-dark-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-300"
                    onClick={handleNavClick}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;