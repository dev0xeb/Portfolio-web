import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faPaperPlane,
  faCheck,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { 
  faLinkedin, 
  faGithub, 
  faTwitter, 
  faWhatsapp 
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faEnvelope, faPhone, faPaperPlane, faCheck, faX,
  faLinkedin, faGithub, faTwitter, faWhatsapp
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactMethods = [
    {
      icon: faEnvelope,
      label: "Email",
      value: "clintonayomide96@gmail.com",
      link: "mailto:clintonayomide96@gmail.com",
    },
    {
      icon: faWhatsapp,
      label: "WhatsApp",
      value: "+234 702 661 2575",
      link: "https://wa.me/+2347026612575",
    },
    {
      icon: faPhone,
      label: "Phone",
      value: "+234 702 661 2575",
      link: "tel:+2347026612575",
    }
  ];

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
      icon: faTwitter,
      name: "Twitter",
      url: "https://twitter.com/clinton_ayomide",
    }
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
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue opacity-3 rounded-full blur-3xl -z-10"></div>

      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="badge mb-6">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Let's <span className="gradient-text">collaborate</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Whether you're interested in Web3 projects, blockchain development, or want to discuss 
            innovative ideas, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="card-glass rounded-xl p-6 hover:border-accent-gold/40 transition-all duration-300 block"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent-gold/10 rounded-lg flex-shrink-0">
                      <FontAwesomeIcon 
                        icon={method.icon} 
                        className="text-lg text-accent-gold"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary text-sm">{method.label}</p>
                      <p className="text-text-secondary hover:text-accent-gold transition-colors duration-300">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="divider"></div>
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-6">Connect</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 card-glass rounded-xl text-center hover:border-accent-gold/40 hover:bg-accent-gold/5 transition-all duration-300"
                    title={social.name}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-2xl text-accent-gold" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-8">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-accent-gold/5 border border-accent-gold/20 rounded-lg text-text-primary placeholder-text-tertiary focus:border-accent-gold/40 focus:bg-accent-gold/10 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-accent-gold/5 border border-accent-gold/20 rounded-lg text-text-primary placeholder-text-tertiary focus:border-accent-gold/40 focus:bg-accent-gold/10 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-text-primary mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-accent-gold/5 border border-accent-gold/20 rounded-lg text-text-primary placeholder-text-tertiary focus:border-accent-gold/40 focus:bg-accent-gold/10 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-accent-gold/5 border border-accent-gold/20 rounded-lg text-text-primary placeholder-text-tertiary focus:border-accent-gold/40 focus:bg-accent-gold/10 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-transparent border-t-charcoal rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus && (
                  <div className={`p-4 rounded-lg text-center text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    submitStatus === 'success'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}>
                    <FontAwesomeIcon icon={submitStatus === 'success' ? faCheck : faX} className="text-lg" />
                    {submitStatus === 'success'
                      ? 'Message sent successfully. I\'ll respond within 24 hours.'
                      : 'Error sending message. Please try again.'}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
