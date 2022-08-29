const defaultTheme = require("tailwindcss/defaultConfig");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  importtant: true,
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: "#343a40",
      white: "#4cbb17",
      text: {
        DEFAULT: "#1f2937",
        light: "#6c7281",
        navText: "#c2c7d0",
        // navText: "#f3f4f6",
        hoverIcon: "#ffffff",
        notHoverIcon: "#999ea6",
      },
      light: {
        DEFAULT: "#fafbfc",
        lighter: "#f3f4f6",
        lighter_hover: "#6c7281",
        navDark2: "#6c757d", //
        hoverBg: "#494e54",
      },
    },
    extend: {},
  },
  plugins: [],
};
