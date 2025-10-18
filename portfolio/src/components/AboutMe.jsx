import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faRocket, 
  faUsers, 
  faBolt
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCode, faRocket, faUsers, faBolt);

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const highlights = [
    {
      icon: faCode,
      title: "Full-Stack Expertise",
      description: "Building complete solutions from elegant frontends to robust backends using modern technologies"
    },
    {
      icon: faRocket,
      title: "Web3 Innovator",
      description: "Designing and developing decentralized applications and blockchain solutions"
    },
    {
      icon: faUsers,
      title: "Community Focused",
      description: "Creating technology that empowers and serves real-world communities"
    },
    {
      icon: faBolt,
      title: "Performance Driven",
      description: "Optimizing systems for scalability, reliability, and exceptional user experience"
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-20 md:py-32"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-gold opacity-3 rounded-full blur-3xl -z-10"></div>

      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="badge mb-6">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Innovative engineer building <span className="gradient-text">scalable systems</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            I'm a full-stack engineer specializing in designing and deploying scalable, secure systems that merge
            technical precision with business strategy. Experienced in Web2 and Web3, fintech solutions,
            and SaaS platforms that solve real-world problems.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`card-glass p-8 rounded-2xl transform transition-all duration-500 hover:border-accent-gold/40 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-gold/10 rounded-lg flex-shrink-0">
                  <FontAwesomeIcon icon={item.icon} className="text-accent-gold text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Journey Section */}
        <div className="divider mb-20"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-text-primary mb-6">My Journey</h3>
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                I'm an innovative software engineer with 3+ years of experience designing and deploying scalable systems.
                My journey began with a strong foundation in creative storytelling (BA in Theatre Arts), which uniquely informs
                my approach to technology. I thrive at the intersection of technical precision and human-centered design.
              </p>
              <p>
                Currently at Marasoft Pay, I'm working on simplifying digital payments for African businesses. This role builds
                on my diverse experience: from architecting fintech solutions and Web3 applications, to optimizing legacy systems
                and leading cross-functional teams. I've successfully delivered 30+ projects across Web2 and Web3 paradigms.
              </p>
              <p>
                What drives me is creating technology with real-world impact. Whether implementing payment infrastructure,
                building DeFi platforms for financial inclusion, or mentoring teams. I bring analytical rigor, strategic thinking,
                and creative problem-solving. My ongoing business education complements my technical expertise, enabling me to align
                software solutions with business strategy.
              </p>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-text-primary mb-6">Key Milestones</h3>
            <div className="space-y-6">
              <div className="card-modern rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-gold font-bold">2025</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Marasoft Pay - Full-Stack Developer</h4>
                    <p className="text-sm text-text-secondary">Simplifying digital payments for African businesses, implementing payment infrastructure</p>
                  </div>
                </div>
              </div>

              <div className="card-modern rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-blue font-bold">2024</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">SUI Hackfest 2024 - 3rd Place Winner</h4>
                    <p className="text-sm text-text-secondary">Led design and development of financial inclusion DeFi platform for underserved communities</p>
                  </div>
                </div>
              </div>

              <div className="card-modern rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-silver/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-silver font-bold">2022</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Entered Software Industry</h4>
                    <p className="text-sm text-text-secondary">Transitioned from Theatre Arts to intensive software development and Web3 specialization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="divider mt-20 mb-12"></div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-4">Ready to collaborate?</h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing innovative projects and opportunities to create meaningful impact.
          </p>
          <a
            href="#contact"
            className="btn-primary inline-block"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
