/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'smoke': '#242424',
        'content-gray': '#424549',
        'content-dark-gray': '#36393e',
        'accent': '#F29E4C'
      },
      fontFamily: {
        'mono': ['Roboto Mono', 'monospace'],
        'sans': ['Work Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
