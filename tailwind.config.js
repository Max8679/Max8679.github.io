/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/*.html", "./script.js"],
  theme: {
    colors: {
      black: "#0A080B",
      green: "#56F8BD",
      darkgreen: "#007E7D",
      violet: "#8A56F8",
    },
    screens: {
      tab: "29.4375rem",
      desk: "51.5625rem",
    },
    extend: {},
  },
  plugins: [],
};
