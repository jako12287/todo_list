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
        secondaryHover: "#30A2FF",
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
        btn: "0px 4px 5px rgba(0, 0, 0, 0.25)",
      },
      fontSize: {
        button: "24px",
        bigText: "50px",
        mediumText: "30px",
        labelText: "20px",
        textContent: "14px",
      },
      fontWeight: {
        SemiBold: "600",
        Medium: "500",
        Regular: "400",
        Bold: "700",
      },
      backgroundImage: {
        texture: "url('./src/assets/texture.jpg')",
      },
      backgroundSize: {
        custom: "36%",
      },
      width: {
        cardPrimary: "600px",
        cardSecondary: "450px",
        left: "40%",
        right: "60%",
      },
      borderRadius: {
        card: "20px",
      },
    },
  },
  plugins: [],
};
