/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sandstone: {
          50: '#FDF6F0',
          100: '#FBECE1',
          200: '#F7D7C3',
          300: '#F1BE9E',
          400: '#E79B6C',
          500: '#D97736',
          600: '#C85A22',
          700: '#A64317',
          800: '#843415',
          900: '#6C2D16',
          950: '#3D1509',
        },
        heritage: {
          gold: '#D4AF37',
          'gold-light': '#F6E08B',
          'gold-dark': '#997B1A',
          sand: '#EED9C4',
          ochre: '#CC7722',
          crimson: '#8B1E1E',
          stone: '#292524',
          night: '#120F0D',
          emerald: '#1B4332',
          forest: '#2D6A4F',
          river: '#1E3A5F',
        },
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'Georgia', 'serif'],
        kannada: ['Noto Sans Kannada', 'sans-serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
