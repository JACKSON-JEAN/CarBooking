/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'red-1000':'rgba(219, 0, 0, 1)'
      },
      boxShadow:{
        '3xl':'-2px -2px 0px 0px rgba(219, 0, 0, 1)'
      },
      boxShadow:{
        '4xl':'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
      }
    },
  },
  plugins: [],
}

