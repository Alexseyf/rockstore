/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "yellow": '#bb848',
        "gray": '#33333'
      },
      fontFamily:{
       'cinematografica-regular': ['cinematografica'],
        'cinematografica-thin': ['cinematografica'],
        'cinematografica-extralight': ['cinematografica'],
        'cinematografica-bold': ['cinematografica'],
        'cinematografica-extrabold': ['cinematografica'],
      }
    },
  },
  plugins: [],
}

