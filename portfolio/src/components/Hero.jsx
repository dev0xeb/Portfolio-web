import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import profileImage from '../images/newdp.png';

library.add(faDownload, faEye, faCode, faRocket);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Software Engineer",
    "Web3 Builder", 
    "Blockchain Visionary",
    "Product Innovator"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-green opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary-blue opacity-10 rounded-full animate-bounce-custom"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-accent-cyan opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-accent-purple opacity-10 rounded-full animate-spin-slow"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className={`flex-1 text-center lg:text-left transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Greeting */}
            {/* <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-green/10 text-primary-green rounded-full text-sm font-medium border border-primary-green/20">
                <FontAwesomeIcon icon={faRocket} className="mr-2" />
                Building the Future of Web3
              </span>
            </div> */}

            {/* Main headline */}
            <h1 className="hero-title text-white dark:text-white mb-6">
              <span className="block text-gray-800 dark:text-white">Hi, I'm</span>
              <span className="text-gradient font-black">Clinton Ayomide</span>
            </h1>

            {/* Dynamic role */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-green transition-all duration-500">
                {roles[currentRole]}
              </h2>
              <div className="h-1 w-20 bg-gradient-primary mt-2 mx-auto lg:mx-0 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I design, build, and lead full-stack products that bridge Web2 and Web3 for the real world. 
              Specializing in blockchain innovation, fintech solutions, and founder-led product development.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-green">2+</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-green">20+</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-green">Web3</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">Innovation</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* <button 
                onClick={scrollToProjects}
                className="btn-primary group"
              >
                <FontAwesomeIcon icon={faEye} className="mr-2" />
                View My Work
                <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
              </button> */}
              <a 
                href="https://docs.google.com/document/d/100n6klr03Vl5gc0qxGUWXp0v_0HtdxIgU49XF1T4PuY/edit?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group inline-flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download Résumé
              </a>
            </div>

            {/* Tech stack preview */}
            <div className="mt-12 flex flex-wrap gap-3 justify-center lg:justify-start">
              {['React', 'Tailwind CSS','Java', 'Python', 'TypeScript', 'Solidity', 'Sui', 'Node.js', 'Web3.js'].map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-sm bg-white/10 dark:bg-white/10 text-gray-700 dark:text-gray-200 rounded-full backdrop-blur-sm border border-white/20 dark:border-white/20 hover:bg-primary-green/20 hover:text-white transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right content - Profile image */}
          <div className={`flex-1 max-w-md lg:max-w-lg transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Gradient background circle */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative bg-gradient-primary p-1 rounded-full">
                <div className="bg-bg-dark rounded-full p-4">
                  <img
                    src={profileImage}
                    alt="Clinton Ayomide - Software Engineer & Web3 Builder"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary-green text-bg-dark p-3 rounded-full shadow-glow animate-bounce-custom">
                <FontAwesomeIcon icon={faCode} className="text-xl" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-primary-blue text-white p-3 rounded-full shadow-glow-blue animate-pulse">
                <FontAwesomeIcon icon={faRocket} className="text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-primary-green rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-green rounded-full mt-2 animate-bounce"></div>
          </div>
          <p className="text-gray-500 dark:text-gray-300 text-sm mt-2">Scroll down</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
