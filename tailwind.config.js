/** @type {import('tailwindcss').Config} */

const color = require("./color")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color,
      ring: color,
      fill: color,
      fontFamily: {
        sans: ['Poppins'],
      }
    },
  },
  plugins: [],
}
