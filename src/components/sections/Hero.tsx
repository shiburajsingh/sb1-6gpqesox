import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { useMagneticEffect } from '../../hooks/useMagneticEffect';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const magneticRef = useMagneticEffect({ strength: 30 });

  useEffect(() => {
    if (headingRef.current) {
      const text = new SplitType(headingRef.current, { types: 'chars' });
      
      gsap.from(text.chars, {
        opacity: 0,
        y: 100,
        rotateX: -90,
        stagger: 0.02,
        duration: 1,
        ease: 'power4.out',
      });
    }

    // Parallax background animation
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    parallaxElements.forEach((element, index) => {
      gsap.to(element, {
        yPercent: -15 * (index + 1),
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-scroll-section
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-bg absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-primary-600/20 to-primary-400/20 rounded-full blur-3xl" />
        <div className="parallax-bg absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-l from-secondary-500/20 to-secondary-300/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-5 bg-cover bg-center bg-no-repeat" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-dark-800 dark:text-white"
          >
            Hi, I'm{' '}
            <span className="text-gradient">
              Shibu Raj Singh
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-dark-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            A passionate Software Developer and Blockchain Enthusiast crafting innovative digital experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <div ref={magneticRef} className="magnetic-button">
              <motion.a
                href="#projects"
                className="relative inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary-800 rounded-full overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  Explore My Work
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-900 transform transition-transform duration-300 group-hover:scale-105" />
              </motion.a>
            </div>

            <div ref={magneticRef} className="magnetic-button">
              <motion.a
                href="#contact"
                className="relative inline-flex items-center px-8 py-4 text-lg font-medium text-primary-800 dark:text-white border-2 border-primary-800 dark:border-white rounded-full overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-primary-800 dark:bg-white transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                <span className="absolute inset-0 flex items-center justify-center text-white dark:text-primary-800 opacity-0 transform transition-all duration-300 group-hover:opacity-100">
                  Get in Touch
                </span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <ArrowDown className="w-6 h-6 text-primary-800 dark:text-white animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;