import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBriefcase, 
  faTrophy, 
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faBriefcase, faTrophy, faGraduationCap);

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const experiences = [
    {
      id: 1,
      type: 'career',
      year: '2025',
      title: 'Full-Stack Developer',
      company: 'Marasoft Pay',
      duration: 'Sept 2025 - Present',
      location: 'Remote',
      description: 'Contributing to Marasoft Pay\'s mission of simplifying digital payments for African businesses by enhancing core payment infrastructure and product features.',
      achievements: [
        'Implemented card payment functionality using Transact Pay API, expanding payment options and improving checkout experience',
        'Maintained checkout experiences and payment link tools for web and mobile-first users',
        'Integrated secure payment links and mobile money workflows for inclusive financial access',
        'Expanded product ERP/automation features including invoicing, inventory, POS, and business analytics tools',
      ],
      technologies: ['PHP', 'Moodle API', 'MySQL', 'Git', 'REST APIs', 'Transact Pay API', 'CI/CD']
    },
    {
      id: 2,
      type: 'career',
      year: '2025',
      title: 'Software Engineer',
      company: 'Skills Academy',
      duration: 'Jun 2025 - Sep 2025',
      location: 'Hybrid',
      description: 'Lead developer on internal and external projects ensuring code quality, performance, and business alignment across multiple product verticals.',
      achievements: [
        'Delivered full-stack features across web and backend platforms using React, TypeScript, reducing time-to-market by 25%',
        'Proposed and implemented major website enhancements (UX and SEO-focused) improving user retention and engagement metrics',
        'Refactored legacy codebases, improving system performance and cutting bug reports by 40%',
        'Collaborated with stakeholders to define and scope software solutions tailored to user and business requirements',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Next.js', 'Git', 'Prisma ORM', 'Figma']
    },
    {
      id: 3,
      type: 'career',
      year: '2025',
      title: 'Software Engineer (Contract)',
      company: '5starcourses',
      duration: 'Apr 2025 - Jul 2025',
      location: 'Remote',
      description: 'Contract role: Audited and optimized legacy PHP-based Moodle plugin, automating workflows and reducing administrative overhead.',
      achievements: [
        'Audited and optimized legacy PHP-based Moodle plugin, reducing manual administrative overhead by over 40%',
        'Enhanced plugin performance and reliability, ensuring seamless automation across course creation and user management',
      ],
      technologies: ['PHP', 'Moodle API', 'MySQL', 'Git']
    },
    {
      id: 4,
      type: 'career',
      year: '2024',
      title: 'Software Engineer',
      company: 'Semicolon Africa',
      duration: 'May 2024 - May 2025',
      location: 'Lagos, Nigeria',
      description: 'Developed and scaled backend services and mobile applications with focus on user-centric design and performance.',
      achievements: [
        'Built Walk2Wealth, a React Native crypto walk-to-earn app, scaling to 100+ concurrent users',
        'Developed backend services with Spring Boot and MongoDB, achieving 99.9% uptime',
        'Integrated payment APIs and analytics tools, improving onboarding and cutting churn by 20%',
        'Designed Figma-based responsive UIs, improving navigation efficiency by 25%',
      ],
      technologies: ['React Native', 'Java', 'Node.js', 'Spring Boot', 'MongoDB', 'TypeScript', 'Figma', 'Git', 'JUnit', 'Mockito']
    },
    {
      id: 5,
      type: 'achievement',
      year: '2024',
      title: 'SUI Hackfest 2024',
      company: 'SUI Foundation',
      duration: 'Oct 2024',
      location: 'Global',
      description: '3rd Place Winner - Led product design and development of a financial inclusion DeFi platform.',
      achievements: [
        'Collaborated with 5-member team to design a financial inclusion tool',
        'Conducted user research to identify pain points in underserved communities',
        'Created personas and journey maps to prioritize features',
        'Designed wireframes and prototypes in Figma with focus on accessibility',
        'Managed daily standups and sprint timelines as Assistant Product Manager',
        'Presented the pitch to judges, securing 3rd place',
      ],
      technologies: ['Figma', 'Product Design', 'User Research', 'Solidity', 'Sui Move', 'React', 'Web3.js']
    },
    {
      id: 6,
      type: 'education',
      year: '2024',
      title: 'Diploma in Business Education',
      company: 'Henley Business School, UK',
      duration: '2024 - 2025',
      location: 'UK',
      description: 'Advanced business education focusing on strategic insights and business acumen.',
      achievements: [
        'Studying business education to complement technical expertise with strategic insights',
        'Leveraging business acumen for informed software architecture and product decisions',
      ],
      technologies: ['Business Strategy', 'Agile Management', 'Product Strategy']
    },
    {
      id: 7,
      type: 'education',
      year: '2018',
      title: 'BA-Theatre Arts',
      company: 'Osun State University, Nigeria',
      duration: '2018 - 2022',
      location: 'Osun State',
      description: 'Foundation in creative storytelling and empathetic design thinking.',
      achievements: [
        'Developed strong foundation in creative storytelling and communication',
        'Applied theatre arts background to craft empathetic designs and user experiences',
        'Built collaboration and presentation skills',
      ],
      technologies: ['Storytelling', 'Communication', 'Collaboration', 'Design Thinking']
    }
  ];

  const filters = [
    { key: 'all', label: 'All', count: experiences.length },
    { key: 'career', label: 'Career', count: experiences.filter(e => e.type === 'career').length },
    { key: 'achievement', label: 'Achievements', count: experiences.filter(e => e.type === 'achievement').length },
    { key: 'education', label: 'Education', count: experiences.filter(e => e.type === 'education').length },
  ];

  const filteredExperiences = activeFilter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === activeFilter);

  const getTypeIcon = (type) => {
    switch(type) {
      case 'achievement': return faTrophy;
      case 'career': return faBriefcase;
      case 'education': return faGraduationCap;
      default: return faBriefcase;
    }
  };

  const getTypeBadge = (type) => {
    switch(type) {
      case 'achievement': return { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' };
      case 'career': return { bg: 'bg-accent-gold/10', text: 'text-accent-gold', border: 'border-accent-gold/30' };
      case 'education': return { bg: 'bg-accent-blue/10', text: 'text-accent-blue', border: 'border-accent-blue/30' };
      default: return { bg: 'bg-accent-gold/10', text: 'text-accent-gold', border: 'border-accent-gold/30' };
    }
  };

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
      id="experience" 
      ref={sectionRef}
      className="relative py-20 md:py-32"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-gold opacity-3 rounded-full blur-3xl -z-10"></div>

      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="badge mb-6">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Professional timeline and <span className="gradient-text">key achievements</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            A comprehensive journey through my professional growth, combining roles, achievements, 
            and continuous learning in software engineering and Web3.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.key
                  ? 'bg-accent-gold/20 text-accent-gold border border-accent-gold/40'
                  : 'card-modern text-text-secondary hover:text-accent-gold hover:border-accent-gold/30'
              }`}
            >
              {filter.label}
              <span className={`px-2 text-xs rounded-full ${
                activeFilter === filter.key 
                  ? 'bg-accent-gold/30' 
                  : 'bg-neutral-700/50'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {filteredExperiences.map((exp, index) => {
            const typeBadge = getTypeBadge(exp.type);
            return (
              <div
                key={exp.id}
                className={`card-glass rounded-2xl p-8 transform transition-all duration-500 hover:border-accent-gold/40 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  {/* Left - Year & Icon */}
                  <div className="flex lg:flex-col items-start lg:items-start gap-4">
                    <div className={`p-3 rounded-lg flex-shrink-0 ${typeBadge.bg}`}>
                      <FontAwesomeIcon icon={getTypeIcon(exp.type)} className={`text-lg ${typeBadge.text}`} />
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${typeBadge.text} mb-2`}>{exp.year}</div>
                      <span className={`badge ${typeBadge.bg} ${typeBadge.border} border`}>
                        {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                      </span>
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="lg:col-span-3">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-text-primary mb-2">{exp.title}</h3>
                      <div className="space-y-2 text-text-secondary">
                        <p className="font-semibold text-accent-gold">{exp.company}</p>
                        <p className="text-sm">{exp.duration} • {exp.location}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-text-primary mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-text-secondary flex items-start gap-3">
                            <span className="text-accent-gold font-bold mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-neutral-700/50 text-text-secondary rounded-lg hover:bg-accent-gold/10 hover:text-accent-gold transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="divider my-20"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center card-modern rounded-xl p-6">
            <div className="text-3xl font-bold text-accent-gold mb-2">3+</div>
            <div className="text-sm text-text-secondary">Years Experience</div>
          </div>
          <div className="text-center card-modern rounded-xl p-6">
            <div className="text-3xl font-bold text-accent-blue mb-2">7+</div>
            <div className="text-sm text-text-secondary">Roles & Projects</div>
          </div>
          <div className="text-center card-modern rounded-xl p-6">
            <div className="text-3xl font-bold text-accent-gold mb-2">30+</div>
            <div className="text-sm text-text-secondary">Projects Delivered</div>
          </div>
          <div className="text-center card-modern rounded-xl p-6">
            <div className="text-3xl font-bold text-amber-400 mb-2">1</div>
            <div className="text-sm text-text-secondary">Major Award</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
