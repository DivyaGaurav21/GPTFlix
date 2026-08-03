/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
  extend: {
    colors: {
      gptflix: {
        black: "#141414",
      },
    },
  },
},
  plugins: [],
}

