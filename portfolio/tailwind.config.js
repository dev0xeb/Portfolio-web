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
          charcoal: '#0a0e27',
          'charcoal-light': '#141829',
          'charcoal-lighter': '#1a1f3a',
          accent: '#d4a574',
          'accent-light': '#e8bfa0',
        },
        secondary: {
          slate: '#2a3142',
          'slate-light': '#3a4355',
          blue: '#6b92d8',
          'blue-light': '#8baae8',
        },
        accent: {
          gold: '#d4a574',
          silver: '#c0c5d1',
          blue: '#6b92d8',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'subtle-pulse': 'subtlePulse 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          'from': {
            opacity: '0',
          },
          'to': {
            opacity: '1',
          },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        subtlePulse: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.8',
          },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(212, 165, 116, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(212, 165, 116, 0.4)',
          },
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0a0e27 0%, #141829 50%, #1a1f3a 100%)',
        'gradient-accent': 'linear-gradient(135deg, #d4a574 0%, #8baae8 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(212, 165, 116, 0.05) 0%, rgba(107, 146, 216, 0.05) 100%)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.4)',
        'accent-glow': '0 0 30px rgba(212, 165, 116, 0.3)',
        'blue-glow': '0 0 30px rgba(107, 146, 216, 0.3)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.3)',
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
