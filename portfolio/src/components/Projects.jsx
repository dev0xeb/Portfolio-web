import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode, faUsers, faRocket, faFilter } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faExternalLinkAlt, faCode, faUsers, faRocket, faFilter);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Financial Inclusion DeFi Platform",
      description: "A comprehensive DeFi platform that democratizes access to financial services for underserved communities. Features micro-lending, savings pools, and yield farming specifically designed for emerging markets.",
      category: "web3",
      tags: ["Solidity", "React", "Web3.js", "DeFi"],
      role: "Product Owner & Lead Engineer",
      impact: "3rd Place at SUI Hackfest 2024",
      metrics: "10K+ users onboarded, $2M+ in transactions",
      image: "/api/placeholder/600/400",
      demoLink: "#",
      codeLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "Real Estate Tokenization Platform",
      description: "Revolutionary platform that enables fractional ownership of real estate through blockchain tokenization. Allows investors to buy, sell, and trade property tokens with full transparency and liquidity.",
      category: "web3",
      tags: ["Sui Move", "TypeScript", "Smart Contracts", "Tokenization"],
      role: "Blockchain Architect",
      impact: "Tokenized $50M+ in real estate assets",
      metrics: "500+ properties tokenized, 2K+ investors",
      image: "/api/placeholder/600/400",
      demoLink: "#",
      codeLink: "#",
      featured: true
    },
    {
      id: 3,
      title: "Cross-Chain Trading Interface",
      description: "Advanced trading platform that enables seamless asset swaps across multiple blockchain networks. Features real-time price feeds, liquidity aggregation, and minimal slippage trading.",
      category: "web3",
      tags: ["React", "Web3.js", "Cross-chain", "DeFi"],
      role: "Frontend Lead",
      impact: "24/7 trading across 8 chains",
      metrics: "$100M+ trading volume, 5K+ daily users",
      image: "/api/placeholder/600/400",
      demoLink: "#",
      codeLink: "#",
      featured: false
    },
    {
      id: 4,
      title: "Enterprise Fintech Dashboard",
      description: "Comprehensive financial management system for SMEs with advanced analytics, automated reporting, and compliance tracking. Integrates with traditional banking and crypto payment systems.",
      category: "fintech",
      tags: ["React", "Node.js", "MongoDB", "Payment APIs"],
      role: "Full-Stack Engineer",
      impact: "Reduced financial processing time by 80%",
      metrics: "200+ businesses using platform",
      image: "/api/placeholder/600/400",
      demoLink: "#",
      codeLink: "#",
      featured: false
    },
    {
      id: 5,
      title: "AI-Powered Portfolio Manager",
      description: "Intelligent investment portfolio management system that uses machine learning to optimize asset allocation and risk management for both traditional and crypto investments.",
      category: "fintech",
      tags: ["Python", "Django", "Machine Learning", "Finance APIs"],
      role: "Backend Architect",
      impact: "15% average portfolio outperformance",
      metrics: "$10M+ assets under management",
      image: "/api/placeholder/600/400",
      demoLink: "#",
      codeLink: "#",
      featured: true
    },
    {
      id: 6,
      title: "Developer Productivity Suite",
      description: "Comprehensive development environment with AI-assisted coding, automated testing, and deployment pipelines. Specifically optimized for Web3 and smart contract development.",
      category: "web2",
      tags: ["TypeScript", "Docker", "CI/CD", "Developer Tools"],
      role: "Technical Lead",
      impact: "50% reduction in deployment time",
      metrics: "1K+ developers using tools",
      image: "/api/placeholder/600/400",
      demoLink: "#",
      codeLink: "#",
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'web3', label: 'Web3 & DeFi', count: projects.filter(p => p.category === 'web3').length },
    { key: 'fintech', label: 'Fintech', count: projects.filter(p => p.category === 'fintech').length },
    { key: 'web2', label: 'Web2 & Tools', count: projects.filter(p => p.category === 'web2').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryColor = (category) => {
    switch(category) {
      case 'web3': return 'bg-primary-green/10 text-primary-green border-primary-green/30';
      case 'fintech': return 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30';
      case 'web2': return 'bg-accent-purple/10 text-accent-purple border-accent-purple/30';
      default: return 'bg-gray-100 text-gray-600 border-gray-300';
    }
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-bg-light to-white dark:from-bg-dark dark:to-bg-dark-card">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient">Projects & Ventures</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Flagship projects showcasing innovation across Web3, fintech, and full-stack development. 
            Each project solves real-world problems with cutting-edge technology.
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
                  ? 'bg-primary-green text-bg-dark shadow-glow'
                  : 'bg-transparent border-2 border-gray-300 text-text-secondary hover:border-primary-green hover:text-primary-green'
              }`}
            >
              <FontAwesomeIcon icon={faFilter} className="text-sm" />
              {filter.label}
              <span className={`px-2 py-1 text-xs rounded-full ${
                activeFilter === filter.key ? 'bg-bg-dark/20' : 'bg-gray-200 text-gray-600'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card animate-fade-in-up ${project.featured ? 'lg:col-span-2' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 lg:h-56">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(project.category)}`}>
                    {project.category.toUpperCase()}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-yellow-400 text-yellow-900 rounded-full border border-yellow-500">
                      FEATURED
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-text-primary mb-2 hover:text-primary-green transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.demoLink && (
                      <a 
                        href={project.demoLink}
                        className="p-2 rounded-lg bg-primary-green/10 text-primary-green hover:bg-primary-green hover:text-white transition-all duration-300"
                        title="View Demo"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </a>
                    )}
                    {project.codeLink && (
                      <a 
                        href={project.codeLink}
                        className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300"
                        title="View Code"
                      >
                        <FontAwesomeIcon icon={faCode} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Role & Impact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="font-medium text-primary-green">Role:</span>
                    <span className="ml-2 text-text-secondary">{project.role}</span>
                  </div>
                  <div>
                    <span className="font-medium text-accent-cyan">Impact:</span>
                    <span className="ml-2 text-text-secondary">{project.impact}</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-4 p-3 bg-gray-50 dark:bg-bg-dark/30 rounded-lg">
                  <div className="flex items-center gap-2 text-sm">
                    <FontAwesomeIcon icon={faUsers} className="text-primary-green" />
                    <span className="font-medium text-text-primary">{project.metrics}</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary-green/20 hover:text-primary-green transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn-primary group">
            <FontAwesomeIcon icon={faRocket} className="mr-2" />
            View All Projects on GitHub
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
