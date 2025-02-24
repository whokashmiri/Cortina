/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4E8098", // Example dark blue
        secondary: "#CED3DC", // Grayish blue
        accent: "#A31621", // red accent
        background: "#FCF7F8", // background
        text: "#90C2E7", // Dark text
      },
    },
  },
  plugins: [],
}