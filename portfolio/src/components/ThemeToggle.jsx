import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faSun, faMoon);

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme ? savedTheme === 'dark' : systemPrefersDark;
    setIsDark(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    const themeValue = newTheme ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', themeValue);
    localStorage.setItem('theme', themeValue);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle group"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <FontAwesomeIcon 
        icon={isDark ? faSun : faMoon} 
        className={`text-lg transition-all duration-300 ${
          isDark ? 'text-yellow-400 rotate-180' : 'text-slate-600 rotate-0'
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
