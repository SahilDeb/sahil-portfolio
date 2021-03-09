const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/img/Vanishing-Stripes.svg')",
      })
    },
    colors: {
      'primary': '#001133',
      'secondary': '#F5F5F5',
      'accent': '#E54F6D',
    },
    fontFamily: {
      sans: ['Raleway', 'Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
