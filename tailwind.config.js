/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/screens/**/*.{js,jsx,html}",
    "./src/*.{js,jsx,html}",
    "./index.html",
  ],
  theme: {
    extend: {},
    fontFamily: {
      bebas: ['Bebas Neue', "sans-serif"],
    },
  },
  plugins: [],
};
