/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica'],
      },
      backgroundImage: {
        interstellar: "url('../public/assets/images/interstellar.jpeg')",
        'lord-of-rings': "url('../public/assets/images/lord-of-rings.jpg')",
        tenebaums: "url('../public/assets/images/The-Royal-Tenebaums.png')",
      },
    },
  },
  plugins: [],
};