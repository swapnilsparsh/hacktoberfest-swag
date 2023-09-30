const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        manga: "#EFEDEF",
        void: "#0f0913",
        gold: "#FFFBA4",
        psybeam: "#9092FF",
        red: "#EC4237",
        blue: "#33B6DB",
      },
    },
  },
};
