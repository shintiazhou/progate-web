/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#E3EEFF",
        secondary: "#2B546A",
        light: "#F9FBFE",
        dark: "#142630",
      },
    },
  },
  plugins: [],
};
