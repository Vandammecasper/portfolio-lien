/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#B0D795",
    },
    fontFamily: {
      ivyMode: ["IvyMode", "sans-serif"],
    },
    extend: {
      fontSize:{
        '10xl': '12rem'
      }
    },
  },
  plugins: [],
}

