/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A4325',      // Deep Forest Green
        secondary: '#0D1A10',    // Darker Forest Green
        accent: '#C5A059',       // Muted Gold
        'gold-light': '#E5C185', // Light Gold
        'background-light': '#FDFCF8', // Off-white/Cream
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
