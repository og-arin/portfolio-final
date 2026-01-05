/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hacker: "#00FF41",
        dark: "#0a0a0a",
      },
    },
  },
  plugins: [],
}