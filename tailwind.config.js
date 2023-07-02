/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#4FC0B0",
        primaryLink: "#0019FA",
        customBlack: "#000000",
        customYellow1: "#FFE56950",
        customYellow2: "#F79327",
        customBlue1: "#79E0EE50",
        customBlue2: "#30A2FF",
        customGreen1: "#9CFF2E50",
        customGreen2: "#367E18",
        customRed1: "#F24C3D50",
        customRed2: "#F24C3D",
        customPurple1: "#7149C650",
        customPurple2: "#7149C6",
        customGray: "#ABABAB",
      },
      boxShadow: {
        custom: "5px 4px 5px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
