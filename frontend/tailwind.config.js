/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          primary: '#8B7CF6',
          deep: '#6757D6',
          soft: '#F1EEFF',
          50: '#F6F5FF',
          100: '#F1EEFF',
          200: '#DDD8FD',
          300: '#C5BDFB',
          400: '#A495F9',
          500: '#8B7CF6',
          600: '#6757D6',
          700: '#5344B6',
          800: '#423693',
          900: '#342B75',
        },
        mint: {
          accent: '#7EDCC3',
          deep: '#35B99A',
          soft: '#E8FAF3',
          50: '#F4FCF8',
          100: '#E8FAF3',
          200: '#C6F3E3',
          300: '#A4ECD3',
          400: '#7EDCC3',
          500: '#58CBAF',
          600: '#35B99A',
          700: '#26947A',
          800: '#1D725E',
          900: '#175647',
        },
        surface: {
          bg: '#F8F9FD',
          white: '#FFFFFF',
          border: '#E9EAF2',
          text: '#20243A',
          muted: '#737A90',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '28px',
      },
      boxShadow: {
        '2xs': '0 1px 1px 0 rgba(32, 36, 58, 0.03)',
        'xs': '0 1px 2px 0 rgba(32, 36, 58, 0.05)',
        'soft': '0 4px 24px -2px rgba(32, 36, 58, 0.05)',
        'glass': '0 8px 32px 0 rgba(103, 87, 214, 0.07)',
        'glass-hover': '0 12px 40px 0 rgba(103, 87, 214, 0.12)',
        'glow-lavender': '0 0 35px -5px rgba(139, 124, 246, 0.3)',
        'glow-mint': '0 0 35px -5px rgba(126, 220, 195, 0.3)',
      }
    },
  },
  plugins: [],
}
