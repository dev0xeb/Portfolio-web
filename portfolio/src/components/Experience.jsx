import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faRocket, 
  faAward, 
  faGraduationCap,
  faCode,
  faUsers,
  faChartLine,
  faTrophy,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faBuilding, faRocket, faAward, faGraduationCap, faCode, faUsers, faChartLine, faTrophy, faCalendarAlt);

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const experiences = [
    {
      id: 1,
      type: 'career',
      year: '2024',
      title: 'Semicolon Africa - Software Engineer',
      organization: 'Semicolon Africa',
      location: 'Lagos, Nigeria',
      duration: 'May 2024 -May 2025',
      description: 'Developed and scaled backend services using Spring Boot and MongoDB while also Participating in UI/UX discussions. integrated payment analytics.',
      achievements: [
        'Built Walk2Wealth, a React Native crypto walk-to-earn app, scaling to 100+ concurrent users',
        'Developed backend services with Spring Boot and MongoDB, achieving 99.9% uptime.',
        'Integrated payment APIs and analytics tools, improving onboarding and cutting churn by 20%. ',
        'Contributed to Figma-based responsive UIs, boosting navigation by 25%',
      ],
      technologies: [ 'React Native', 'Java', 'Node js', 'Spring Boot', 'MongoDB', 'TypeScript', 'Figma', 'Git', 'JUnit', 'Mockito'],
      icon: faCode,
      color: 'orange'
    },
    {
      id: 2,
      type: 'achievement',
      year: '2024',
      title: 'SUI Hackfest 2024 - 3rd Place Winner',
      organization: 'SUI Foundation',
      location: 'Global Virtual Competition',
      duration: 'October 2024',
      description: 'Led the development of a financial inclusion DeFi platform that democratizes access to financial services for underserved communities. The platform features micro-lending, savings pools, and yield farming specifically designed for emerging markets.',
      achievements: [
        'Designed and implemented smart contracts handling $2M+ in transactions',
        'Built intuitive user interface serving 10K+ users',
        'Integrated cross-chain functionality for seamless asset transfers',
        'Achieved 99.9% uptime and gas-efficient contract optimization'
      ],
      technologies: ['Solidity', 'Sui Move', 'React', 'Web3.js', 'TypeScript'],
      icon: faTrophy,
      color: 'yellow'
    },
    {
      id: 3,
      type: 'career',
      year: '2025',
      duration: 'June 2025 - Present',
      title: 'Full-Stack Engineer',
      organization: 'Skills Academy',
      location: 'Hybrid',
      description: 'Led development of full-stack features across internal and client platforms using React and Node.js. Enhanced legacy codebases, improved SEO/UX, and reduced bug reports by 40% through strategic refactoring and performance optimization.',
      achievements: [
        'Lead developer on internal and external projects, ensuring code quality, performance, and business alignment across multiple product verticals. ',
        'Delivered full-stack features across web and backend platforms using React, TypeScript, reducing time-to-market by 25%',
        'Proposed and implemented major website enhancements (UX and SEO-focused), which improved user retention and engagement metrics',
        'Refactored legacy codebases, improving system performance and cutting bug reports by 40%',
        'Collaborated with stakeholders to define and scope software solutions tailored to user and business requirements.'
      ],
      technologies: [ 'React', 'TypeScript', 'Node js', 'Express', 'Next js', 'Git', 'Prisma ORM', 'Figma' ],
      icon: faBuilding,
      color: 'blue'
    },
    {
      id: 4,
      type: 'career',
      year: '2025',
      duration: 'April 2025 - July 2025 (Contract)',
      title: 'Software Engineer',
      organization: '5stareducation.co.uk',
      location: 'Remote',
      description: 'Audited and enhanced a legacy Moodle plugin, automating administrative workflows and reducing overhead by over 40%. Boosted system performance and streamlined course creation using PHP and MySQL.',
      achievements: [
        'Audited and optimized a legacy PHP-based Moodle plugin, reducing manual administrative overhead by over 40%',
        'Enhanced plugin performance and reliability, ensuring seamless automation across course creation and user management.',
      ],
      technologies: ['PHP', 'Moodle API', 'MySQL', 'Git' ],
      icon: faCode,
      color: 'purple'
    },
    {
      id: 5,
      type: 'education',
      year: '2020',
      title: 'Started Professional Development Journey',
      organization: 'Self-Directed Learning',
      location: 'Nigeria',
      duration: 'Ongoing',
      description: 'Began intensive self-directed learning in software development, focusing on problem-solving, modern web technologies, and building real-world applications.',
      achievements: [
        'Completed 20+ online courses and certifications',
        'Built 10+ personal projects showcasing various technologies',
        'Contributed to 5+ open-source projects',
        'Established strong foundation in computer science fundamentals'
      ],
      technologies: ['JavaScript', 'Python', 'HTML/CSS', 'Git', 'Linux'],
      icon: faGraduationCap,
      color: 'indigo'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Experience', count: experiences.length },
    { key: 'career', label: 'Career', count: experiences.filter(e => e.type === 'career').length },
    { key: 'achievement', label: 'Achievements', count: experiences.filter(e => e.type === 'achievement').length },
    { key: 'education', label: 'Education', count: experiences.filter(e => e.type === 'education').length },
  ];

  const filteredExperiences = activeFilter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === activeFilter);

  const getColorClasses = (color) => {
    const colorMap = {
      yellow: 'from-yellow-400 to-yellow-600',
      green: 'from-green-400 to-green-600',
      blue: 'from-blue-400 to-blue-600',
      purple: 'from-purple-400 to-purple-600',
      indigo: 'from-indigo-400 to-indigo-600',
      orange: 'from-orange-400 to-orange-600',
    };
    return colorMap[color] || 'from-gray-400 to-gray-600';
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'achievement': return faTrophy;
      case 'career': return faBuilding;
      case 'education': return faGraduationCap;
      default: return faCalendarAlt;
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
      className="section-padding bg-gradient-to-br from-white to-gray-50 dark:from-bg-dark dark:to-bg-dark-card"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient">Experience Timeline</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            A comprehensive journey through my professional growth, combining formal employment, 
            entrepreneurial ventures, and notable achievements in software engineering and Web3 innovation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.key
                  ? 'bg-primary-green text-white shadow-glow'
                  : 'bg-white dark:bg-bg-dark-card border-2 border-gray-200 dark:border-gray-600 text-text-secondary hover:border-primary-green hover:text-primary-green'
              }`}
            >
              <FontAwesomeIcon icon={getTypeIcon(filter.key === 'all' ? 'career' : filter.key)} className="text-sm" />
              {filter.label}
              <span className={`px-2 py-1 text-xs rounded-full ${
                activeFilter === filter.key ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-green via-accent-cyan to-primary-blue"></div>
          
          <div className="space-y-12">
            {filteredExperiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className={`flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline marker */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${getColorClasses(experience.color)} flex items-center justify-center text-white shadow-lg z-10 relative`}>
                      <FontAwesomeIcon icon={experience.icon} className="text-lg" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-green to-accent-cyan opacity-20 animate-ping"></div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 card max-w-lg ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-text-primary leading-tight">
                          {experience.title}
                        </h3>
                        <span className="text-sm font-medium text-primary-green bg-primary-green/10 px-3 py-1 rounded-full">
                          {experience.year}
                        </span>
                      </div>
                      <div className="text-text-secondary text-sm space-y-1">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faBuilding} className="text-xs" />
                          <span className="font-medium">{experience.organization}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faCalendarAlt} className="text-xs" />
                          <span>{experience.duration} • {experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-text-primary mb-2 flex items-center gap-2">
                        <FontAwesomeIcon icon={faChartLine} className="text-primary-green text-sm" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-text-secondary flex items-start gap-2">
                            <span className="text-primary-green mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2 flex items-center gap-2">
                        <FontAwesomeIcon icon={faCode} className="text-accent-cyan text-sm" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary-green/20 hover:text-primary-green transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center card hover:shadow-card-hover transition-all duration-300">
            <div className="text-2xl font-bold text-primary-green mb-1">2+</div>
            <div className="text-sm text-text-secondary">Years Experience</div>
          </div>
          <div className="text-center card hover:shadow-card-hover transition-all duration-300">
            <div className="text-2xl font-bold text-accent-cyan mb-1">4</div>
            <div className="text-sm text-text-secondary">Major Roles</div>
          </div>
          <div className="text-center card hover:shadow-card-hover transition-all duration-300">
            <div className="text-2xl font-bold text-accent-purple mb-1">25+</div>
            <div className="text-sm text-text-secondary">Projects Delivered</div>
          </div>
          <div className="text-center card hover:shadow-card-hover transition-all duration-300">
            <div className="text-2xl font-bold text-yellow-500 mb-1">1</div>
            <div className="text-sm text-text-secondary">Major Award</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
