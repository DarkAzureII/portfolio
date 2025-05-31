/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pattern: `
          repeating-linear-gradient(to right, transparent 0 100px, #25283b22 100px 101px),
          repeating-linear-gradient(to bottom, transparent 0 100px, #25283b22 100px 101px)
        `
      }
    },
  },
  plugins: [],
};
