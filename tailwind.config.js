/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        danger: colors.red,
        success: colors.lime,
        primary: colors.sky,
        warning: colors.yellow,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

