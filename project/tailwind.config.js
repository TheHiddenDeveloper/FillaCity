/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'filla-gold': '#D4AF37',
        'filla-dark': '#1A1A1A',
        'filla-gray': '#2C2C2C',
      }
    },
  },
  plugins: [],
}