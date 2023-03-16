/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        topic: {
          green: "#56C4C5",
          red: "#FF5D50",
          gray: "#747474",
          yellow: "#FFD153",
          black: "#221E1F",
          off_white: "#F5F5F5",
        },
        flowerPink: {
          1: "#FADCDA",
          2: "#EEB8B8",
          3: "#E5BFBC",
          4: "#B97687",
          5: "F1BCAE",
        },
      },
      spacing: {
        13: "52px",
      },
    },
  },
  plugins: [],
};
