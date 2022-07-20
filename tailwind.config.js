/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'darkest': '#101419',
        'content-primary': '#424B4D',
        'content-secondary': '#1F2933',
        'content-text': '#718284',
        'accent': '#6EF9F5'
      },
      fontFamily: {
        'mono': ['Roboto Mono', 'monospace'],
        'sans': ['Work Sans', 'sans-serif']
      },
      backgroundImage: {
        'background': 'url("./assets/bg.png")'
      }
    },
  },
  plugins: [],
}
