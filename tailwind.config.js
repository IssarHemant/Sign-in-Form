/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1715731200&semt=ais_user')",
      },
    },
  },
  plugins: [],
}