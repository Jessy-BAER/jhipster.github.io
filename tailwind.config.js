const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EFF8FE",
          100: "#DDEFFC",
          200: "#B9DFF9",
          300: "#83C6F5",
          400: "#59A5DA",
          500: "#3E8ABF",
          600: "#236FA4",
          700: "#0F5B90",
          800: "#045085",
          900: "#004677",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
