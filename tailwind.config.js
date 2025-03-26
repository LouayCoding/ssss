/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Class strategie voor dark mode
  theme: {
    extend: {
      colors: {
        primary: '#0479C5', // Lichtblauw als primaire kleur
        secondary: '#D0021B', // Rood als secundaire kleur
        // Dark mode kleuren
        'dark-bg': '#121212',
        'dark-card': '#1E1E1E',
        'dark-border': '#333333',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradientAnimation 12s ease infinite',
        'marquee': 'marquee 80s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'scroll-left': 'scrollLeft 60s linear infinite',
        'scroll-right': 'scrollRight 60s linear infinite',
      },
      keyframes: {
        gradientAnimation: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        scrollRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
    },
  },
  plugins: [
    function({ addUtilities, addComponents }) {
      const newUtilities = {
        '.hover\\:pause-animation:hover': {
          'animation-play-state': 'paused',
        },
      };
      
      const components = {
        '.animate-scroll-left': {
          animation: 'scrollLeft 60s linear infinite',
        },
        '.animate-scroll-right': {
          animation: 'scrollRight 60s linear infinite',
        },
      };
      
      addUtilities(newUtilities);
      addComponents(components);
    }
  ],
} 