import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faArrowUp, faLinkedin, faGithub, faWhatsapp);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: faLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/clinton-ayomide",
    },
    {
      icon: faGithub,
      name: "GitHub",
      url: "https://github.com/clinton-ayomide",
    },
    {
      icon: faWhatsapp,
      name: "WhatsApp",
      url: "https://wa.me/+2347026612575",
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-accent-gold/10 bg-primary-charcoal">
      {/* Main Footer Content */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-3xl font-bold gradient-text mb-3">Clinton Ayomide</h3>
              <p className="text-accent-gold font-semibold mb-4">Software Engineer • Web3 Builder</p>
              <p className="text-text-secondary leading-relaxed max-w-md">
                Crafting elegant solutions at the intersection of innovation and impact. 
                Building the future of Web3, one line of code at a time.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-text-tertiary">Connect:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-accent-gold/10 flex items-center justify-center text-accent-gold hover:bg-accent-gold/20 hover:scale-110 transition-all duration-300"
                  title={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-text-primary mb-8">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-secondary hover:text-accent-gold transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-text-primary mb-8">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-text-tertiary text-sm mb-1">Email</p>
                <a 
                  href="mailto:clintonayomide96@gmail.com"
                  className="text-accent-gold hover:text-accent-gold-light transition-colors duration-300 font-medium"
                >
                  clintonayomide96@gmail.com
                </a>
              </div>
              <div>
                <p className="text-text-tertiary text-sm mb-1">Location</p>
                <p className="text-text-secondary font-medium">Nigeria</p>
              </div>
              <div>
                <p className="text-text-tertiary text-sm mb-1">Status</p>
                <p className="text-accent-gold font-medium">Available for Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-accent-gold/10"></div>

      {/* Bottom Bar */}
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-text-tertiary text-sm">
            <span>© {currentYear} Clinton Ayomide. Built with passion and code.</span>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-accent-gold/10 text-accent-gold hover:bg-accent-gold/20 hover:scale-110 transition-all duration-300"
            title="Back to top"
            aria-label="Scroll to top"
          >
            <FontAwesomeIcon 
              icon={faArrowUp} 
              className="text-lg"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
