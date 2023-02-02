/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/html/*.html"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        darkPink: '#ffc8c8',
        lightPink: '#feede8',
        darkBrown: '#873e3e',
        lightBrown: '#6a4c3c',
        veryLightBrown: '#d6c0ad',
        backgroundLines: '#f7e0d4',
      }
    },
  },
  plugins: [],
}
