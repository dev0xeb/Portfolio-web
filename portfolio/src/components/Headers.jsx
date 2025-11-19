import React, { useState, useEffect, useCallback, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faDownload } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faBars, faXmark, faDownload);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const deferredPromptRef = useRef(null);
  const [canInstall, setCanInstall] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 30);
    
    const sections = navItems.map(item => document.getElementById(item.id));
    const currentSection = sections.find(section => {
      if (!section) return false;
      const rect = section.getBoundingClientRect();
      return rect.top <= 100 && rect.bottom >= 100;
    });

    if (currentSection) {
      setActiveSection(currentSection.id);
    }
  }, [navItems]);

  useEffect(() => {
    const debouncedScroll = () => {
      let timeoutId;
      return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(handleScroll, 100);
      };
    };

    const scrollHandler = debouncedScroll();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [handleScroll]);

  // PWA install prompt handling
  useEffect(() => {
    const beforeInstallHandler = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPromptRef.current = e;
      setCanInstall(true);
    };

    const appInstalledHandler = () => {
      deferredPromptRef.current = null;
      setCanInstall(false);
    };

    window.addEventListener('beforeinstallprompt', beforeInstallHandler);
    window.addEventListener('appinstalled', appInstalledHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallHandler);
      window.removeEventListener('appinstalled', appInstalledHandler);
    };
  }, []);

  const handleInstallClick = async () => {
    const promptEvent = deferredPromptRef.current;
    if (!promptEvent) {
      // No install prompt available (likely iOS or already installed)
      // Provide simple instructions for iOS users
      const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
      if (isIos) {
        window.alert('To install the app on iOS: open Safari → Share → Add to Home Screen.');
      } else {
        window.alert('The install prompt is not available right now. Try again after reloading the page or use your browser menu to install.');
      }
      return;
    }

    // Show the install prompt
    promptEvent.prompt();
    const choiceResult = await promptEvent.userChoice;
    // Clear the saved prompt since it can't be used again
    deferredPromptRef.current = null;
    setCanInstall(false);
    // You can inspect choiceResult.outcome if needed
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "glass-panel shadow-glass" 
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="container flex justify-between items-center h-16 md:h-20" role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-xl md:text-2xl font-bold gradient-text">
            CA
          </h1>
          <span className="hidden sm:block text-xs text-secondary font-semibold tracking-wider">
            DEVELOPER
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6" role="menubar">
          {navItems.map((item) => (
            <li key={item.id} role="none">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === item.id 
                    ? 'text-accent-gold' 
                    : 'text-text-secondary hover:text-accent-gold'
                }`}
                role="menuitem"
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-accent-gold transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Install button (desktop) - always visible but dimmed when install prompt not available */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={handleInstallClick}
            className={`p-2 rounded-lg glass-panel hover:bg-accent-gold/10 transition-all duration-300 ${canInstall ? 'opacity-100' : 'opacity-60'}`}
            aria-hidden={false}
            title={canInstall ? 'Install app' : 'Install (open menu for instructions)'}
          >
            <FontAwesomeIcon icon={faDownload} className="text-lg text-accent-gold" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden p-2 rounded-lg glass-panel hover:bg-accent-gold/10 transition-all duration-300"
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faXmark : faBars}
            className="text-lg text-accent-gold"
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`md:hidden glass-panel border-t border-accent-gold/10 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        role="menu"
      >
        <ul className="py-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.id} role="none">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-full px-6 py-3 text-center font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-accent-gold bg-accent-gold/10' 
                    : 'text-text-secondary hover:text-accent-gold hover:bg-accent-gold/5'
                }`}
                role="menuitem"
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
          {/* Mobile install option */}
          <li>
            <button
              onClick={handleInstallClick}
              className={`w-full px-6 py-3 text-center font-medium transition-all duration-300 ${canInstall ? 'text-text-secondary hover:text-accent-gold' : 'text-text-secondary/60'}`}
              title={canInstall ? 'Install app' : 'Install instructions (iOS: Share → Add to Home Screen)'}
            >
              {canInstall ? 'Install App' : 'Install / Instructions'}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default React.memo(Header);
