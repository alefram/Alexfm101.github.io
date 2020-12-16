  
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Merriweather': ['Merriweather', 'serif'],
        'Roboto':['Roboto', 'sans-serif'],
        'Alegreya': ['Alegreya', 'serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
