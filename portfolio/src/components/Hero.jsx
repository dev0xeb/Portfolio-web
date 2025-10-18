import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import profileImage from '../images/newdp.png';

library.add(faDownload, faArrowRight);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "Web3 Builder",
    "Payment Systems Engineer",
    "Innovation Leader"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToProjects = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
      
      {/* Subtle accent lights */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-gold opacity-5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-accent-blue opacity-3 rounded-full blur-3xl -z-10"></div>

      <div className="container relative z-10 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Greeting Badge */}
            <div className="mb-8">
              <span className="badge inline-block">
                Welcome to My Portfolio
              </span>
            </div>

            {/* Main Headline */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="block text-text-secondary mb-2">I'm</span>
                <span className="gradient-text text-5xl md:text-6xl lg:text-7xl">Clinton Ayomide</span>
              </h1>
            </div>

            {/* Dynamic Role */}
            <div className="mb-10">
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 bg-accent-gold rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-semibold text-accent-gold transition-opacity duration-500">
                  {roles[currentRole]}
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-text-secondary text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
              Innovative Software Engineer building scalable systems that merge technical precision with real-world impact.
              Specializing in Web3, fintech solutions, and full-stack development. Currently working on payment systems at Marasoft Pay.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12 max-w-md">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-gold mb-1">3+</div>
                <div className="text-sm text-text-tertiary">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-blue mb-1">30+</div>
                <div className="text-sm text-text-tertiary">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-gold mb-1">Fintech</div>
                <div className="text-sm text-text-tertiary">Focused</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="https://docs.google.com/document/d/100n6klr03Vl5gc0qxGUWXp0v_0HtdxIgU49XF1T4PuY/edit?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faDownload} className="text-sm" />
                Download Resume
              </a>
              <button 
                onClick={scrollToProjects}
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Explore Work
                <FontAwesomeIcon icon={faArrowRight} className="text-sm transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-sm text-text-tertiary mb-4 uppercase tracking-wider font-semibold">Tech Stack</p>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'PHP', 'Java', 'Spring Boot', 'MongoDB', 'MySQL'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm bg-accent-gold/5 border border-accent-gold/20 text-text-secondary rounded-lg hover:border-accent-gold/50 hover:bg-accent-gold/10 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className={`hidden lg:flex justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative max-w-sm">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-20 animate-glow-pulse"></div>
              
              {/* Image container */}
              <div className="relative bg-accent-gold/10 border border-accent-gold/20 rounded-3xl p-2">
                <div className="bg-gradient-dark rounded-3xl overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Clinton Ayomide - Software Engineer & Web3 Builder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Accent badges */}
              <div className="absolute -bottom-6 -right-6 bg-accent-blue text-white p-4 rounded-2xl shadow-glass-lg backdrop-blur-sm">
                <p className="text-sm font-semibold">Available for</p>
                <p className="text-xs text-accent-blue-light">Web3 Projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-text-tertiary text-sm mb-3">Scroll to explore</p>
          <div className="flex justify-center">
            <div className="w-6 h-10 border border-accent-gold/40 rounded-full flex justify-center p-2">
              <div className="w-1 h-2 bg-accent-gold rounded-full animate-subtle-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
