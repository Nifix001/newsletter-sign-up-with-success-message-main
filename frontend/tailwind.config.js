/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/App.jsx",
  ],
  theme: {
    extend: {
      colors: {
        'tmt': "hsl(4, 100%, 67%)",
        'slate': "hsl(234, 29%, 20%)",
        'charcoal': "hsl(235, 18%, 26%)"
      },
      fontFamily: {
        roboto: ['Roboto']
      },
      screens: {
        'xs': '300px'
      }
    },
  },
  plugins: [],
}

