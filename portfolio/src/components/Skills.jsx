import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode, 
  faServer, 
  faCube, 
  faTools, 
  faChartBar,
  faDatabase,
  faCloud,
  faShield
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCode, faServer, faCube, faTools, faChartBar, faDatabase, faCloud, faShield);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: faCode,
      color: "primary-green",
      description: "Creating beautiful, responsive, and performant user interfaces",
      skills: [
        { name: "React.js", level: 95, years: "2+ years" },
        { name: "TypeScript", level: 90, years: "2+ years" },
        { name: "Next.js", level: 88, years: "2+ years" },
        { name: "Tailwind CSS", level: 92, years: "2+ years" },
        { name: "Web3.js/Ethers.js", level: 85, years: "2+ years" },
        { name: "HTML5/CSS3", level: 95, years: "2+ years" },
        { name: "JavaScript ES6+", level: 93, years: "2+ years" },
        { name: "Vite/Webpack", level: 80, years: "2+ years" }
      ]
    },
    {
      id: "backend",
      title: "Backend & APIs",
      icon: faServer,
      color: "secondary-blue",
      description: "Building robust, scalable server-side applications and APIs",
      skills: [
        { name: "Node.js", level: 90, years: "2+ years" },
        { name: "Python", level: 88, years: "2+ years" },
        { name: "Java", level: 85, years: "2+ years" },
        { name: "Express.js", level: 87, years: "2+ years" },
        { name: "Django/Flask", level: 82, years: "2+ years" },
        { name: "REST APIs", level: 93, years: "2+ years" },
        { name: "GraphQL", level: 78, years: "1+ years" },
        { name: "WebSocket", level: 80, years: "2+ years" }
      ]
    },
    {
      id: "blockchain",
      title: "Blockchain & Web3",
      icon: faCube,
      color: "accent-cyan",
      description: "Developing decentralized applications and smart contracts",
      skills: [
        { name: "Solidity", level: 88, years: "2+ years" },
        { name: "Sui Move", level: 82, years: "1+ years" },
        { name: "Smart Contracts", level: 85, years: "2+ years" },
        { name: "DeFi Protocols", level: 80, years: "2+ years" },
        { name: "Web3 Integration", level: 87, years: "2+ years" },
        { name: "Metamask/Wallets", level: 90, years: "2+ years" },
        { name: "IPFS", level: 75, years: "1+ years" },
        { name: "Tokenization", level: 78, years: "1+ years" }
      ]
    },
    {
      id: "database",
      title: "Database & Storage",
      icon: faDatabase,
      color: "accent-purple",
      description: "Managing data with modern database technologies",
      skills: [
        { name: "MongoDB", level: 88, years: "2+ years" },
        { name: "PostgreSQL", level: 85, years: "2+ years" },
        { name: "MySQL", level: 83, years: "2+ years" },
        { name: "Redis", level: 80, years: "2+ years" },
        { name: "Firebase", level: 85, years: "2+ years" },
        { name: "Prisma ORM", level: 78, years: "1+ years" },
        { name: "Database Design", level: 87, years: "1+ years" },
        { name: "Data Modeling", level: 82, years: "2+ years" }
      ]
    },
    // {
    //   id: "devops",
    //   title: "DevOps & Cloud",
    //   icon: faCloud,
    //   color: "green-500",
    //   description: "Deploying and maintaining applications in the cloud",
    //   skills: [
    //     { name: "Docker", level: 85, years: "2+ years" },
    //     { name: "AWS", level: 80, years: "2+ years" },
    //     { name: "CI/CD", level: 83, years: "2+ years" },
    //     { name: "GitHub Actions", level: 88, years: "3+ years" },
    //     { name: "Nginx", level: 78, years: "1+ years" },
    //     { name: "Linux/Ubuntu", level: 82, years: "3+ years" },
    //     { name: "Vercel/Netlify", level: 90, years: "3+ years" },
    //     { name: "Monitoring", level: 75, years: "1+ years" }
    //   ]
    // },
    {
      id: "tools",
      title: "Tools & Technologies",
      icon: faTools,
      color: "orange-500",
      description: "Essential development tools and methodologies",
      skills: [
        { name: "Git/GitHub", level: 95, years: "2+ years" },
        { name: "VS Code", level: 93, years: "4+ years" },
        { name: "Postman", level: 90, years: "2+ years" },
        { name: "Jest/Testing", level: 82, years: "2+ years" },
        { name: "Figma", level: 85, years: "2+ years" },
        { name: "Agile/Scrum", level: 88, years: "2+ years" },
        { name: "TDD", level: 78, years: "2+ years" },
        { name: "Code Review", level: 90, years: "2+ years" }
      ]
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
      setActiveCategory((prev) => (prev + 1) % skillCategories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [skillCategories.length]);

  const getColorClasses = (color, variant = 'default') => {
    const colorMap = {
      'primary-green': {
        default: 'text-primary-green',
        bg: 'bg-primary-green',
        bgLight: 'bg-primary-green/10',
        border: 'border-primary-green',
        gradient: 'from-primary-green to-green-400'
      },
      'secondary-blue': {
        default: 'text-primary-blue',
        bg: 'bg-primary-blue',
        bgLight: 'bg-primary-blue/10',
        border: 'border-primary-blue',
        gradient: 'from-primary-blue to-blue-400'
      },
      'accent-cyan': {
        default: 'text-accent-cyan',
        bg: 'bg-accent-cyan',
        bgLight: 'bg-accent-cyan/10',
        border: 'border-accent-cyan',
        gradient: 'from-accent-cyan to-cyan-400'
      },
      'accent-purple': {
        default: 'text-accent-purple',
        bg: 'bg-accent-purple',
        bgLight: 'bg-accent-purple/10',
        border: 'border-accent-purple',
        gradient: 'from-accent-purple to-purple-400'
      },
      'green-500': {
        default: 'text-green-500',
        bg: 'bg-green-500',
        bgLight: 'bg-green-500/10',
        border: 'border-green-500',
        gradient: 'from-green-500 to-green-400'
      },
      'orange-500': {
        default: 'text-orange-500',
        bg: 'bg-orange-500',
        bgLight: 'bg-orange-500/10',
        border: 'border-orange-500',
        gradient: 'from-orange-500 to-orange-400'
      }
    };
    return colorMap[color]?.[variant] || '';
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-bg-dark-card dark:to-bg-dark"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient">Skills & Expertise</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Comprehensive technical skills spanning the full stack, with specialized expertise in 
            Web3 development, blockchain technology, and modern software engineering practices.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <div className="xl:col-span-1">
            <div className="sticky top-24 space-y-3">
              {skillCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center gap-4 ${
                    activeCategory === index
                      ? `${getColorClasses(category.color, 'bgLight')} ${getColorClasses(category.color, 'border')} border-2 shadow-lg`
                      : 'bg-white dark:bg-bg-dark-card border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-600'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    activeCategory === index 
                      ? getColorClasses(category.color, 'bg') + ' text-white'
                      : getColorClasses(category.color, 'bgLight') + ' ' + getColorClasses(category.color)
                  }`}>
                    <FontAwesomeIcon icon={category.icon} className="text-lg" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm ${
                      activeCategory === index ? getColorClasses(category.color) : 'text-text-primary'
                    }`}>
                      {category.title}
                    </h3>
                    <p className="text-xs text-text-secondary mt-1">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Content */}
          <div className="xl:col-span-3">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.id}
                className={`transition-all duration-500 ${
                  activeCategory === categoryIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-10 absolute'
                }`}
              >
                {activeCategory === categoryIndex && (
                  <div className="animate-fade-in-up">
                    {/* Category Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${getColorClasses(category.color, 'gradient')} text-white`}>
                          <FontAwesomeIcon icon={category.icon} className="text-2xl" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-text-primary">{category.title}</h3>
                          <p className="text-text-secondary">{category.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skill.name}
                          className="card hover:shadow-card-hover transition-all duration-300"
                          style={{ animationDelay: `${skillIndex * 0.1}s` }}
                        >
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-bold text-text-primary">{skill.name}</h4>
                            <div className="text-right">
                              <span className={`text-sm font-bold ${getColorClasses(category.color)}`}>
                                {skill.level}%
                              </span>
                              <p className="text-xs text-text-secondary">{skill.years}</p>
                            </div>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                            <div
                              className={`h-3 rounded-full bg-gradient-to-r ${getColorClasses(category.color, 'gradient')} transition-all duration-1000 ease-out`}
                              style={{ 
                                width: isVisible ? `${skill.level}%` : '0%',
                                transitionDelay: `${skillIndex * 0.1}s`
                              }}
                            ></div>
                          </div>
                          
                          {/* Skill Level Indicator */}
                          <div className="flex justify-between text-xs text-text-secondary">
                            <span>Beginner</span>
                            <span>Intermediate</span>
                            <span>Advanced</span>
                            <span>Expert</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Category Stats */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-bg-dark-card dark:to-bg-dark rounded-xl">
                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                          <div className={`text-2xl font-bold ${getColorClasses(category.color)}`}>
                            {category.skills.length}
                          </div>
                          <div className="text-sm text-text-secondary">Technologies</div>
                        </div>
                        <div>
                          <div className={`text-2xl font-bold ${getColorClasses(category.color)}`}>
                            {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                          </div>
                          <div className="text-sm text-text-secondary">Avg. Proficiency</div>
                        </div>
                        <div>
                          <div className={`text-2xl font-bold ${getColorClasses(category.color)}`}>
                            {Math.max(...category.skills.map(s => parseInt(s.years)))}+
                          </div>
                          <div className="text-sm text-text-secondary">Years Experience</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-primary-green/10 to-primary-blue/10 rounded-2xl border border-primary-green/20">
            <FontAwesomeIcon icon={faChartBar} className="text-2xl text-primary-green" />
            <div className="text-left">
              <p className="font-bold text-text-primary">Continuous Learning</p>
              <p className="text-sm text-text-secondary">Always exploring new technologies and best practices in software development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
