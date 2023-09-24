/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/homepage.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['Clash Display'],
        made: ['MADE Outer Sans']
      },
      colors: {
        digitap: {
          100: '#1A3D86',
        }
      }
    },
  },
  plugins: [],
}

