/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFD700', // Golden yellow
        'secondary': '#FFC107', // Amber
        'dark': '#121212', // Dark background
        'darker': '#0a0a0a', // Even darker background
        'light': '#f0f0f0', // Light text color
        'gray-dark': '#2d2d2d', // Dark gray for cards
        'gray-darker': '#1a1a1a', // Even darker gray
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 215, 0, 0.5)', // Golden glow effect
        'glow-lg': '0 0 25px rgba(255, 215, 0, 0.6)', // Larger golden glow effect
      },
    },
  },
  plugins: [],
}
