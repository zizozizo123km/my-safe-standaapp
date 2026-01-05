/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Facebook Primary Blue
        'fb-blue': '#1877f2', 
        // Light background color
        'fb-bg-light': '#f0f2f5', 
        // Card/Modal background color
        'fb-card': '#ffffff', 
        // Primary text/icon color
        'fb-text': '#050505',
        // Secondary text/icon color
        'fb-gray': '#606770', 
        // Input/Hover background gray
        'fb-gray-bg': '#e4e6eb',
        // Active status green
        'fb-green': '#36a420',
      },
      boxShadow: {
        'fb': '0 1px 2px rgba(0, 0, 0, 0.2)',
        'fb-header': '0 0 4px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}