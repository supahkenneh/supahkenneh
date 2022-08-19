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
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in 1',
        fadeIn9: 'fadeIn9 1s ease-in 1',
        fadeIn7: 'fadeIn7 1s ease-in 1',
        translateY50: 'translateY50 5s ease-in 1',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' }
        },
        fadeIn9: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '90%' }
        },
        fadeIn7: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '70%' }
        },
      },
    },
  },
  plugins: [],
}
