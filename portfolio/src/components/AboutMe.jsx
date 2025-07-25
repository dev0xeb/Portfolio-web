import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faUsers, 
  faLightbulb, 
  faShield, 
  faGlobe, 
  faCode,
  faAward,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faRocket, faUsers, faLightbulb, faShield, faGlobe, faCode, faAward, faChartLine);

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(0);
  const sectionRef = useRef(null);

  const values = [
    {
      icon: faLightbulb,
      title: "Innovation",
      description: "Pushing boundaries in Web3 and DeFi to create solutions that don't just meet today's needs, but anticipate tomorrow's challenges."
    },
    {
      icon: faShield,
      title: "Decentralization",
      description: "Building systems that empower individuals and communities, reducing dependency on centralized authorities and fostering true digital sovereignty."
    },
    {
      icon: faRocket,
      title: "Legacy Building",
      description: "Creating lasting impact through technology that serves humanity, with every project designed to contribute to a better, more inclusive future."
    },
    {
      icon: faUsers,
      title: "Community First",
      description: "Prioritizing people over profit, ensuring that technological advancement translates into real-world benefits for underserved communities."
    }
  ];

  const stats = [
    { number: "2+", label: "Years Experience", icon: faCode },
    { number: "25+", label: "Projects Delivered", icon: faRocket },
    { number: "15K+", label: "Users Impacted", icon: faUsers },
    { number: "Web3", label: "Innovation Leader", icon: faAward }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Web3 Innovation Award",
      description: "3rd Place at SUI Hackfest 2024 for Financial Inclusion DeFi Platform",
      type: "achievement"
    },
    {
      year: "2023-2024",
      title: "Lead Blockchain Engineer",
      description: "Architected and deployed multiple DeFi protocols handling $50M+ in transactions",
      type: "career"
    },
    {
      year: "2022-2023",
      title: "Full-Stack Engineer",
      description: "Built enterprise fintech solutions serving 200+ businesses with 80% efficiency improvement",
      type: "career"
    },
    {
      year: "2021-2022",
      title: "Frontend Specialist",
      description: "Developed responsive web applications with modern frameworks and exceptional UX",
      type: "career"
    },
    {
      year: "2020",
      title: "Started Journey",
      description: "Began professional software development with focus on problem-solving and innovation",
      type: "milestone"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [values.length]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-white to-gray-50 dark:from-bg-dark dark:to-bg-dark-card"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient">About Me</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            A multidisciplinary engineer bridging Web2 expertise with Web3 innovation, 
            focused on building technology that empowers communities and creates lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story & Values */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Personal Story */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faGlobe} className="text-primary-green" />
                My Journey
              </h3>
              <div className="prose prose-lg text-text-secondary leading-relaxed">
                <p className="mb-4">
                  A Software Engineer who thrives where frontend artistry meets backend rigor, 
                  crafting applications that balance intuition with resilience. My expertise spans 
                  the full spectrum of modern development, from React and TypeScript on the frontend 
                  to Node.js and Python on the backend.
                </p>
                <p className="mb-4">
                  What sets me apart is my deep dive into Web3 and blockchain technology. I don't just 
                  build DeFi applications—I architect solutions that democratize access to financial 
                  services. My financial inclusion platform, which earned 3rd place at SUI Hackfest 2024, 
                  exemplifies this approach: where code meets compassion to empower underserved communities.
                </p>
                <p>
                  Beyond the technical stack, I bring a unique perspective shaped by theatre arts—because 
                  even the best algorithms deserve a good story. This combination of analytical thinking 
                  and creative storytelling enables me to build technology that works like logic but 
                  feels like magic.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">Core Values</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className={`card cursor-pointer transition-all duration-500 ${
                      activeValue === index 
                        ? 'ring-2 ring-primary-green shadow-glow transform scale-[1.02]' 
                        : 'hover:shadow-card-hover'
                    }`}
                    onClick={() => setActiveValue(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl transition-all duration-300 ${
                        activeValue === index 
                          ? 'bg-primary-green text-white' 
                          : 'bg-primary-green/10 text-primary-green'
                      }`}>
                        <FontAwesomeIcon icon={value.icon} className="text-lg" />
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary mb-2">{value.title}</h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Timeline */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="card text-center group hover:shadow-glow transition-all duration-300"
                >
                  <div className="mb-3">
                    <FontAwesomeIcon 
                      icon={stat.icon} 
                      className="text-2xl text-primary-green group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  <div className="text-2xl font-bold text-text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-text-secondary font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Professional Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faChartLine} className="text-accent-cyan" />
                Professional Timeline
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-green to-accent-cyan"></div>
                
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative flex items-start gap-6">
                      {/* Timeline marker */}
                      <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs text-white shadow-lg ${
                        item.type === 'achievement' 
                          ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' 
                          : item.type === 'milestone'
                          ? 'bg-gradient-to-r from-accent-purple to-primary-blue'
                          : 'bg-gradient-to-r from-primary-green to-accent-cyan'
                      }`}>
                        {item.year.slice(-2)}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 card hover:shadow-card-hover transition-all duration-300">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-text-primary">{item.title}</h4>
                          <span className="text-xs text-text-secondary bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-primary-green/10 to-primary-blue/10 rounded-2xl border border-primary-green/20">
            <FontAwesomeIcon icon={faRocket} className="text-2xl text-primary-green" />
            <div className="text-left">
              <p className="font-bold text-text-primary">Ready to collaborate?</p>
              <p className="text-sm text-text-secondary">Let's build technology that creates lasting impact together.</p>
            </div>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary ml-4"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
