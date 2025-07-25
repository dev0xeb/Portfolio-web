import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faCalendar,
  faPaperPlane,
  faDownload,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import { 
  faLinkedin, 
  faGithub, 
  faTwitter, 
  faWhatsapp 
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faEnvelope, faPhone, faMapMarkerAlt, faCalendar, faPaperPlane, faDownload, faExternalLinkAlt,
  faLinkedin, faGithub, faTwitter, faWhatsapp
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'consultation'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: faEnvelope,
      label: "Email",
      value: "clintonayomide96@gmail.com",
      link: "mailto:clintonayomide96@gmail.com",
      color: "primary-green"
    },
    {
      icon: faWhatsapp,
      label: "WhatsApp",
      value: "+234 702 661 2575",
      link: "https://wa.me/+2347026612575",
      color: "green-500"
    },
    {
      icon: faMapMarkerAlt,
      label: "Location",
      value: "Nigeria (Remote Available)",
      link: null,
      color: "accent-cyan"
    },
    {
      icon: faCalendar,
      label: "Schedule Call",
      value: "Book a meeting",
      link: "#", // Replace with actual calendar link
      color: "accent-purple"
    }
  ];

  const socialLinks = [
    {
      icon: faLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/clinton-ayomide",
      color: "blue-600"
    },
    {
      icon: faGithub,
      name: "GitHub",
      url: "https://github.com/clinton-ayomide",
      color: "gray-800"
    },
    {
      icon: faTwitter,
      name: "Twitter",
      url: "https://twitter.com/clinton_ayomide",
      color: "blue-400"
    }
  ];

  const projectTypes = [
    { value: 'consultation', label: 'Technical Consultation' },
    { value: 'web3', label: 'Web3/DeFi Development' },
    { value: 'fullstack', label: 'Full-Stack Development' },
    { value: 'fintech', label: 'Fintech Solutions' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission - replace with actual form handling
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: 'consultation'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }

    // Clear status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const getColorClasses = (color, variant = 'default') => {
    const colorMap = {
      'primary-green': {
        default: 'text-primary-green',
        bg: 'bg-primary-green',
        bgLight: 'bg-primary-green/10',
        border: 'border-primary-green'
      },
      'green-500': {
        default: 'text-green-500',
        bg: 'bg-green-500',
        bgLight: 'bg-green-500/10',
        border: 'border-green-500'
      },
      'accent-cyan': {
        default: 'text-accent-cyan',
        bg: 'bg-accent-cyan',
        bgLight: 'bg-accent-cyan/10',
        border: 'border-accent-cyan'
      },
      'accent-purple': {
        default: 'text-accent-purple',
        bg: 'bg-accent-purple',
        bgLight: 'bg-accent-purple/10',
        border: 'border-accent-purple'
      },
      'blue-600': {
        default: 'text-blue-600',
        bg: 'bg-blue-600'
      },
      'gray-800': {
        default: 'text-gray-800',
        bg: 'bg-gray-800'
      },
      'blue-400': {
        default: 'text-blue-400',
        bg: 'bg-blue-400'
      }
    };
    return colorMap[color]?.[variant] || '';
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-bg-dark-card dark:to-bg-dark">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient">Let's Work Together</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Ready to bring your Web3 vision to life? Whether you're building the next DeFi protocol, 
            need fintech expertise, or want to discuss blockchain innovation, I'm here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="card hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${getColorClasses(info.color, 'bgLight')} group-hover:${getColorClasses(info.color, 'bg')} transition-all duration-300`}>
                      <FontAwesomeIcon 
                        icon={info.icon} 
                        className={`text-lg ${getColorClasses(info.color)} group-hover:text-white transition-all duration-300`}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-text-primary">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-text-secondary hover:text-primary-green transition-colors duration-300 flex items-center gap-2"
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        >
                          {info.value}
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                        </a>
                      ) : (
                        <p className="text-text-secondary">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl ${getColorClasses(social.color, 'bg')} text-white flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300`}
                    title={social.name}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-lg" />
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div className="card bg-gradient-to-r from-primary-green/10 to-primary-blue/10 border border-primary-green/20">
              <div className="text-center">
                <FontAwesomeIcon icon={faDownload} className="text-2xl text-primary-green mb-3" />
                <h3 className="font-bold text-text-primary mb-2">Download My Resume</h3>
                <p className="text-sm text-text-secondary mb-4">
                  Get a comprehensive overview of my experience and skills
                </p>
                <a 
                  href="https://docs.google.com/document/d/100n6klr03Vl5gc0qxGUWXp0v_0HtdxIgU49XF1T4PuY/edit?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="card">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent bg-white dark:bg-bg-dark-card text-text-primary transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent bg-white dark:bg-bg-dark-card text-text-primary transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-text-primary mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent bg-white dark:bg-bg-dark-card text-text-primary transition-all duration-300"
                  >
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent bg-white dark:bg-bg-dark-card text-text-primary transition-all duration-300"
                    placeholder="Let's discuss your Web3 project"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent bg-white dark:bg-bg-dark-card text-text-primary transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, goals, and how I can help you succeed..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                        Send Message
                        <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus && (
                  <div className={`p-4 rounded-lg text-center ${
                    submitStatus === 'success' 
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' 
                      : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400'
                  }`}>
                    {submitStatus === 'success' 
                      ? '✅ Message sent successfully! I\'ll get back to you within 24 hours.' 
                      : '❌ Failed to send message. Please try again or contact me directly.'}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-primary-green/10 to-primary-blue/10 rounded-2xl border border-primary-green/20">
            <FontAwesomeIcon icon={faCalendar} className="text-2xl text-primary-green" />
            <div className="text-left">
              <p className="font-bold text-text-primary">Prefer a quick call?</p>
              <p className="text-sm text-text-secondary">Schedule a 30-minute consultation to discuss your project</p>
            </div>
            <button className="btn-secondary ml-4">
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
