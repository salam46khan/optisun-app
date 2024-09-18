/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myTitle: ["Zen Dots", "sans-serif"],
        normalFont: ["Josefin Sans", "sans-serif"],
        mySubTitle: ["Montserrat", "sans-serif"]
      },
      colors: {
        pinkColor: "#e51679",
        tealColor: "#127D83"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

