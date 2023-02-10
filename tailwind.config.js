/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/html/*.html", "./node_modules/tw-elements/dist/js/**/*.js", "./node_modules/flowbite/**/*.js"],
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
      },
      keyframes:{
        pulseOnce:{
          '0%': {opacity:'0'},
          '100%': {opacity:'1'},
        },
        typing:{
          'from': {width:'0', opacity:'0'},
          '5': {width:'0'},
          'to': {width:'100%'},
        },
      },
      animation:{
        pulseOnce: 'pulseOnce 1s ease-in-out',
        typing_blink: 'typing 1s steps(16, end) forwards, blink .75s linear infinite',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin'),
    require("tailwindcss-animation-delay"),
  ],
}
