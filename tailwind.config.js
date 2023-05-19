/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy": "#0F172A",
        "dark-grey": "#1E293B",
        
        "mute-grey": "#F1F5F9",
        "light-purple": "#6366F1",
        "light-blue": "#38BDF8"
      }
    },
  },
  plugins: [],
}