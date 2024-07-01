/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.js"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

