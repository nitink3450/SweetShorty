/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': { 'min': '1280px' },
        '3xl': { 'min': '1536px' },
        '4xl': { 'min': '1920px' },
        '9xx': { 'min-width': '916px' },
      },
    },
    fontFamily: {
      Manrope: ['Manrope', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}