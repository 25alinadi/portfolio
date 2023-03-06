/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4db5ff",
        primaryLight: "rgba(77,181,255,0.4)",
        secondary: "#FC3968",
        secondaryLight: "#FEB0C3",
        background: "#1f1f38",
        backgroundLight: "#2c2c6c",
        light: "rgba(255,255,255,0.6)",
      },
      fontFamily : {
        vazir : ['Vazir', 'sans-serif']
      }
    },
  },
  plugins: [],
}
