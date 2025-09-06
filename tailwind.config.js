const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        void: "#1C1C3F", // Main
        spaceWhite: "#FFFFFF",
        spaceGray: "#F2F4F7",
        spaceDust: "#D0CCE3",
        spaceHaze: "#5E577C",
        melrose: "#C2C2FF",
        lavendar: "#A0A0FF",
        blueViolet: "#5A5AB5",
        eastBay: "#403F7D",
      },
    },
  },
};
