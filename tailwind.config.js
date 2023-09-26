/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/homepage.html', './public/gallery.html', './public/index.html'
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

