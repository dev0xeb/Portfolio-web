/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#4ADE80',
          blue: '#1E40AF',
        },
        accent: {
          cyan: '#06B6D4',
          purple: '#A855F7',
        },
        bg: {
          light: '#F8FAFC',
          dark: '#0F172A',
          'dark-card': '#1E293B',
        },
        text: {
          light: '#E2E8F0',
          dark: '#1A202C',
          secondary: '#64748B',
        },
        border: {
          light: '#CBD5E1',
          dark: '#334155',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'bounce-custom': 'bounce 3s ease-in-out',
        'pulse-custom': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 15s ease infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        gradient: {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(-45deg, #1E40AF, #4ADE80)',
        'gradient-hero': 'linear-gradient(135deg, #0F172A 0%, #1E40AF 100%)',
        'gradient-hero-light': 'linear-gradient(135deg, #F8FAFC 0%, #E0F2FE 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(74, 222, 128, 0.3)',
        'glow-blue': '0 0 20px rgba(30, 64, 175, 0.3)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'card-dark': '0 10px 30px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.15)',
        'card-hover-dark': '0 20px 40px rgba(0, 0, 0, 0.4)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
