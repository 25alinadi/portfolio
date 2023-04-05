/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9fd3c7",
        primaryLight: "rgba(159,211,199,0.4)",
        secondary: "#FC3968",
        secondaryLight: "#FEB0C3",
        background: "#142d4c",
        backgroundLight: "#385170",
        light: "rgba(255,255,255,0.6)",
      },
      fontFamily : {
        vazir : ['Vazir', 'sans-serif']
      }
    },
  },
  plugins: [],
}
