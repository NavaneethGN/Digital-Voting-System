/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'emerald': '#10B981',
        'charcoal': '#0F172A',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #10B981, #0F172A)',
      }
    },
  },
  plugins: [],
}