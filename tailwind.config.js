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
        "test-two": "#e49ef5",
        "test-three": "#F4D8FB",
      },
      fontFamily: {
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "github-purple": "url('/images/social_icons/github-purple.png')",
        "github-pink": "url('/images/social_icons/github-pink.png')",
        "github-light": "url('/images/social_icons/github-light.png')",
        "email-purple": "url('/images/social_icons/email-purple.png')",
        "email-pink": "url('/images/social_icons/email-pink.png')",
        "email-light": "url('/images/social_icons/email-light.png')",
        "li-purple": "url('/images/social_icons/li-purple.png')",
        "li-pink": "url('/images/social_icons/li-pink.png')",
        "li-light": "url('/images/social_icons/li-light.png')",
      },
    },
  },
  plugins: [],
};
