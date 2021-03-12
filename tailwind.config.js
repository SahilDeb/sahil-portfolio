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
      'secondary': '#FFFFFF',
      'accent': '#E54F6D',
      'contrast': '#EBEBEB',
      'link': '#53A5FC'
    },
    fontFamily: {
      sans: ['Raleway', 'Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      gothic: ['Century Gothic', 'CenturyGothic', 'AppleGothic', 'sans-serif'],
      copperplate: ['Copperplate,Copperplate Gothic Light,fantasy']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
