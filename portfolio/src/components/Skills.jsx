import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode, 
  faServer, 
  faCube, 
  faDatabase,
  faTools
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCode, faServer, faCube, faDatabase, faTools);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: faCode,
      color: "accent-gold",
      skills: [
        { name: "React.js", level: 95 },
        { name: "React Native", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Vite", level: 85 },
        { name: "Responsive Design", level: 93 },
      ]
    },
    {
      id: "backend",
      title: "Backend & APIs",
      icon: faServer,
      color: "accent-blue",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Java", level: 85 },
        { name: "PHP", level: 85 },
        { name: "Python", level: 88 },
        { name: "Spring Boot", level: 87 },
        { name: "Express.js", level: 88 },
        { name: "REST APIs", level: 93 },
        { name: "GraphQL", level: 78 },
      ]
    },
    {
      id: "blockchain",
      title: "Blockchain & Web3",
      icon: faCube,
      color: "accent-gold",
      skills: [
        { name: "Solidity", level: 88 },
        { name: "Sui Move", level: 82 },
        { name: "Smart Contracts", level: 85 },
        { name: "DeFi Protocols", level: 80 },
        { name: "Web3.js/Ethers.js", level: 87 },
        { name: "Wallet Integration", level: 90 },
        { name: "Cross-chain", level: 82 },
        { name: "Tokenization", level: 78 },
      ]
    },
    {
      id: "database",
      title: "Database & Storage",
      icon: faDatabase,
      color: "accent-blue",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 83 },
        { name: "Prisma ORM", level: 85 },
        { name: "Firebase", level: 82 },
        { name: "Redis", level: 80 },
        { name: "Database Design", level: 87 },
        { name: "Data Modeling", level: 85 },
      ]
    },
    {
      id: "tools",
      title: "Tools & Technologies",
      icon: faTools,
      color: "accent-gold",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Figma", level: 90 },
        { name: "Postman", level: 92 },
        { name: "VS Code", level: 93 },
        { name: "Maven", level: 82 },
        { name: "JUnit/Testing", level: 85 },
        { name: "CI/CD", level: 85 },
        { name: "Agile/Scrum", level: 90 },
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

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative py-20 md:py-32"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue opacity-3 rounded-full blur-3xl -z-10"></div>

      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="badge mb-6">Skills & Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Technical capabilities across <span className="gradient-text">full-stack development</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Comprehensive expertise in modern technologies, with specialized focus on Web3, 
            blockchain development, and building scalable applications.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {skillCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`p-4 rounded-2xl transition-all duration-300 flex flex-col items-center text-center ${
                activeCategory === index
                  ? 'card-glass border-accent-gold/40 bg-accent-gold/10'
                  : 'card-modern border-transparent hover:border-accent-gold/20'
              }`}
            >
              <div className={`p-3 rounded-lg mb-3 ${
                activeCategory === index 
                  ? 'bg-accent-gold/20 text-accent-gold' 
                  : 'bg-accent-gold/5 text-accent-gold/70'
              }`}>
                <FontAwesomeIcon icon={category.icon} className="text-lg" />
              </div>
              <h3 className="font-semibold text-sm text-text-primary hidden md:block">
                {category.title.split(' ')[0]}
              </h3>
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <div className="relative">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className={`transition-all duration-500 ${
                activeCategory === categoryIndex 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8 absolute pointer-events-none'
              }`}
            >
              {activeCategory === categoryIndex && (
                <>
                  {/* Category Header */}
                  <div className="mb-12">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-4 bg-accent-gold/10 rounded-xl">
                        <FontAwesomeIcon icon={category.icon} className="text-2xl text-accent-gold" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-text-primary">{category.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={`card-glass rounded-xl p-6 transform transition-all duration-500 ${
                          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                        style={{ transitionDelay: `${skillIndex * 0.1}s` }}
                      >
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-semibold text-text-primary">{skill.name}</h4>
                          <span className="text-sm font-bold text-accent-gold">{skill.level}%</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-accent-gold/10 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-2 bg-gradient-accent rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${skillIndex * 0.1}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Category Stats */}
                  <div className="mt-12 p-8 card-glass rounded-xl">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-accent-gold mb-2">
                          {category.skills.length}
                        </div>
                        <div className="text-sm text-text-secondary">Technologies</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent-gold mb-2">
                          {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                        </div>
                        <div className="text-sm text-text-secondary">Avg. Proficiency</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent-gold mb-2">3+</div>
                        <div className="text-sm text-text-secondary">Years Exp</div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="divider my-20"></div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-4">Continuous Learning</h3>
          <p className="text-text-secondary max-w-2xl mx-auto">
            I stay current with emerging technologies and best practices, constantly expanding my expertise 
            to deliver cutting-edge solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
