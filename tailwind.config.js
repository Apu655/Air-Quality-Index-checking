/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    
    extend: {
      colors:{
        "primary":"#5CE1E6",
        // "success":"#42ba96"
      },
    },
  },
  plugins: [],
}
