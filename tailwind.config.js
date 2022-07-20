/** @type {import('tailwindcss').Config} */

const { join } = require('path');
module.exports = {
  darkMode: 'class',
  content: [
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './components/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      }
    },
  },
  plugins: [],
};