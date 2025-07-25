import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faCode, 
  faArrowUp,
  faCoffee 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faGithub, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faHeart, faCode, faArrowUp, faCoffee, faLinkedin, faGithub, faTwitter);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: faLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/clinton-ayomide",
      color: "hover:text-blue-600"
    },
    {
      icon: faGithub,
      name: "GitHub",
      url: "https://github.com/clinton-ayomide",
      color: "hover:text-gray-800 dark:hover:text-gray-300"
    },
    {
      icon: faTwitter,
      name: "Twitter",
      url: "https://twitter.com/clinton_ayomide",
      color: "hover:text-blue-400"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-bg-dark to-bg-dark-card text-text-light">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-black text-gradient mb-2">Clinton Ayomide</h3>
              <p className="text-primary-green font-medium mb-4">Software Engineer • Web3 Builder • Visionary</p>
              <p className="text-text-light/80 leading-relaxed max-w-md">
                Building the future of Web3 and decentralized technologies. 
                Passionate about creating solutions that bridge innovation with real-world impact.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-text-light/60">Connect:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-text-light/70 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                  title={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-text-light/70 hover:text-primary-green transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Get In Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-text-light/60 text-sm">Email</p>
                <a 
                  href="mailto:clintonayomide96@gmail.com"
                  className="text-text-light/80 hover:text-primary-green transition-colors duration-300"
                >
                  clintonayomide96@gmail.com
                </a>
              </div>
              <div>
                <p className="text-text-light/60 text-sm">Location</p>
                <p className="text-text-light/80">Nigeria (Remote Available)</p>
              </div>
              <div>
                <p className="text-text-light/60 text-sm">Availability</p>
                <p className="text-text-light/80">Open for new opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-text-light/60 text-sm">
              <span>© {currentYear} Clinton Ayomide. Built with</span>
              <FontAwesomeIcon icon={faHeart} className="text-red-500 animate-pulse" />
              <span>and</span>
              <FontAwesomeIcon icon={faCoffee} className="text-yellow-600" />
              <span>using React & Tailwind CSS</span>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-primary-green/20 text-primary-green hover:bg-primary-green hover:text-white transition-all duration-300 group"
              title="Back to top"
            >
              <FontAwesomeIcon 
                icon={faArrowUp} 
                className="transform group-hover:-translate-y-1 transition-transform duration-300" 
              />
            </button>
          </div>
        </div>
      </div>

      {/* Inspirational Quote */}
      <div className="bg-gradient-to-r from-primary-green/10 to-primary-blue/10 border-t border-primary-green/20">
        <div className="container py-8 text-center">
          <blockquote className="text-lg md:text-xl font-medium text-text-light/90 italic max-w-3xl mx-auto">
            "Build what the world will need—not just what it wants today."
          </blockquote>
          <cite className="text-primary-green mt-2 block">— Clinton Ayomide</cite>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
