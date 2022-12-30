/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "brown-light": "#a39c95",
      "brown": "#65605c"
    },
    maxWidth: {
      '80': '80%',
    }
  },
  plugins: [],
}
