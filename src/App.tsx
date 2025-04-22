import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import SEO from './components/SEO';

const App: React.FC = () => {
  useEffect(() => {
    // Refresh AOS animations when components mount
    import('aos').then((AOS) => {
      AOS.refresh();
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-800 transition-colors duration-300">
      <SEO 
        title="Shibu Raj Singh - Portfolio"
        description="Software Developer, Blockchain Enthusiast, and System Administrator"
      />
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;