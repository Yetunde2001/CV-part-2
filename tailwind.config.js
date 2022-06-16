/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
       colors:{
        pink: 'rgba(254, 44, 85, 1.0)',
        black: 'rgba(22, 24, 35, 1.0)',
        lightBlack: 'rgba(22, 24, 35, 0.75)',
        grey:'rgba(22, 24, 35, 0.5)',
        white: '#fff',
        lightGrey: 'rgba(22, 24, 35, 0.06)',
      },
    },
  },
  plugins: [],
}
