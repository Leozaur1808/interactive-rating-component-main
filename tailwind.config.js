/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm: '375px',
      lg: '1440px',
    },
    
    extend: {
      colors: {
        orange: 'hsl(20, 95%, 52%)',
        lightGrey: 'hsl(217, 12%, 63%)',
        mediumGrey: 'rgb(29, 35, 42)',
        darkBlue: 'hsl(215, 21%, 12%)',
        veryDarkBlue: 'hsl(225, 8%, 7%)'
      },
      fontFamily:{
        overpass : ['Overpass', 'sans-serif']
      }
    },
  },
  plugins: [],
}
