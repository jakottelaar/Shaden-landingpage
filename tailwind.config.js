/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "1000": "#1C1C1C", // Darker shade
          "700": "#242424",  // Slightly lighter
          "500": "#27282A",  // Base color
          "300": "#303030",  // Slightly lighter
          "100": "#313338",  // Lighter shade
        },
        secondary: {
          "1000": "#410997", // Darker shade
          "700": "#4703B1",  // Slightly lighter
          "500": "#4D0CCB",  // Base color
          "300": "#5306E5",  // Slightly lighter
          "100": "#5900FF"   // Lighter shade
        },
      }
    },
  },
  plugins: [],
}

