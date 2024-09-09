/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGray: '#363C43',
        textColor:'#969696',
        mainColor:'#2A2E34'
      }
    },
  },
  plugins: [],
}

