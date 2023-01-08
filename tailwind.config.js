/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'women-section':
          "linear-gradient(to right bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('../public/assets/women-wardrobe.jpg')",
        'men-section':
          "linear-gradient(to right bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('../public/assets/men-wardrobe.jpg')",
      },
    },
  },
  plugins: [],
};
