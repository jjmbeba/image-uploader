/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':'Poppins',
        'noto':'Noto Sans'
      },
      boxShadow:{
        'container':' 0px 4px 12px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}
