import React, { useEffect } from 'react';
import './index.css';

// Import new components
import Headers from './components/Headers';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set initial theme to dark (portfolio is designed for dark theme)
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme ? savedTheme === 'dark' : true;

    document.documentElement.setAttribute('data-theme', initialTheme ? 'dark' : 'light');

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add intersection observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Add smooth scroll behavior for navigation links
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const headerHeight = 80; // Account for fixed header
          const targetPosition = targetElement.offsetTop - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Performance optimization: Preload critical images
    const criticalImages = [
      '/api/placeholder/400/400', // Hero profile image
      '/api/placeholder/600/400', // Project images
    ];

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Cleanup
    return () => {
      observer.disconnect();
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="App">
      {/* Fixed Header with Navigation */}
      <Headers />
      
      {/* Main Content */}
      <main>
        {/* Hero Section - Full screen intro with Web3 focus */}
        <Hero />
        
        {/* About Me Section - Professional story and values */}
        <AboutMe />
        
        {/* Skills Section - Technical expertise with Web3 technologies */}
        <Skills />
        
        {/* Projects Section - Flagship projects and ventures */}
        {/* <Projects /> */}
        
        {/* Experience Section - Professional timeline */}
        <Experience />
        
        {/* Contact Section - Get in touch form and info */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
