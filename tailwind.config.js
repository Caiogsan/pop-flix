/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'logotipo': "url('./img/teste.png')"
      },
      fontFamily: {
        'filme': ['Dancing Script cursive', 'ui-sans-serif']
      }
    },
  },
  plugins: [],
}

