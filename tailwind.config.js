/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./views/*.pug"],
  theme: {
    extend: {
      colors: {
        "sea-foam": "#9ef5e4",
        "warm-lavender": "#e49ef5",
        "dark-purple": "#40044c",
        "accent-coral": "#f5c19e",
      },
      fontFamily: {
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        github: "url('/images/github.png')",
        email: "url('/images/email.png')",
        "email-purple": "url('/images/email-purple.png')",
        "github-purple": "url('/images/github-purple.png')",
      },
    },
  },
  plugins: [],
};
