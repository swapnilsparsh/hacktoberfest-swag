const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        limeGreen: "#51da4c",
        phthaloGreen: "#183717",
        alabaster: "#f5f0e1",
        black: "#1c1c1c",
        pink: "#ff8bfe"
      },
    },
  },
};
