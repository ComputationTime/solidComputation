const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
      },
      animation: {
        fade_in_out: "fade_in_out 0.5s linear infinite alternate",
      },
      keyframes: {
        fade_in_out: {
          "49%": { opacity: 1 },
          "50%": { opacity: 0 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
