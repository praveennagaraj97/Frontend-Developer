/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: { fontFamily: { poppins: ['Poppins', 'sans-serif'] } },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
      pulse: '2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    keyframes: {
      fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 100 } },
      pulse: {
        '0%, 100%': {
          opacity: 1,
        },
        '50%': {
          opacity: '.5',
        },
      },
    },
  },
  plugins: [],
};
