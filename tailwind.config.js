/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./views/*.pug"],
  theme: {
    extend: {
      colors: {
        "sea-foam": "#9ef5e4",
        "warm-lavender": "#e49ef5",
        "dark-lavender": "#D159EE",
        "dark-purple": "#40044c",
        "accent-coral": "#f5c19e",
        "medium-gradient": "#8697dc",
        "accent-dk-coral": "#EE9559",
      },
      fontFamily: {
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        github: "url('/images/github-2.png')",
        email: "url('/images/email-2.png')",
        "email-hover": "url('/images/email-orange.png')",
        "github-hover": "url('/images/github-purple.png')",
        li: "url('/images/li.png')",
        "li-hover": "url('/images/li-orange.png')",
      },
    },
  },
  plugins: [],
};
