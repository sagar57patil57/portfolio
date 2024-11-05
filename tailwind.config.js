/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Roboto Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}