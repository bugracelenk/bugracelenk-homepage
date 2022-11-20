/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#171919',
        primary: '#FF715B',
        secondary: '#523F38',
        accent: '#EEF5F6',
      },
      fontFamily: {
        monospace: ['monospace', 'sans-serif'],
      },
      keyframes: {
        typing: {
          from: { width: 0 },
          to: { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#FF715B' },
        },
        widen: {
          '0%': { width: '0%' },
          '100%': { width: '50%' },
        },
      },
      animation: {
        typing: 'typing 3s steps(40, end), blink-caret .75s step-end infinite',
        widen: 'widen 0.5s cubic-bezier(.42,0,.58,1) forwards',
      },
    },
  },
  plugins: [],
};
