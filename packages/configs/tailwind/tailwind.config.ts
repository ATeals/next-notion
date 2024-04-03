import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "../../apps/blog/src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          xl: "#375781",
          lg: "#5876A2",
          md: "#7A97C5",
          sm: "#9CB9E9",
        },
        secondary: {
          xl: "#AC4A00",
          lg: "#CB630A",
          md: "#FFA854",
          sm: "#FFC671",
        },
        black: {
          bg: "#232326",
        },
      },
      animation: {
        turn: "turn 0.7s ease-out",
        fadeIn: "fadeIn 0.7s ease-in-out",
        darkening: "darkening 1s ease-in-out",
        fadeInDown: "fadeInDown 0.7s ease-in-out",
      },
      keyframes: {
        turn: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        darkening: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: " 0.4",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;