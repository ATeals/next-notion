/** @type {import('tailwindcss').Config} */

const typography = require("@tailwindcss/typography");

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      animation: {
        turn: "turn 0.7s ease-out",
        fadeIn: "fadeIn 0.7s ease-in-out",
        darkening: "darkening 1s ease-in-out",
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
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeInDown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        darkening: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 0.4,
          },
        },
      },
    },
  },
  plugins: [typography],
};
