import daisyui from "daisyui";
// import { Flowbite } from "flowbite-react";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        sans: ["Open Sans", "sans-serif"], // Primary font
        bebas: ["Bebas Neue", "cursive"], // Heading font
        fira: ["Fira Code", "monospace"], // Code font
        inter: ["Inter", "sans-serif"], // Alternate sans-serif font
        signika: ["Signika", "sans-serif"], // Optional alternative font
        // Add the Signika font
      },
      colors: {
        up: {
          primaryGreen: "#14a800",
          primaryBlack: "#181818",
          primaryWhite: "#fcfcfc",
        },
        Bebas: ["Bebas+Neue"],
      },
    },
  },
  plugins: [daisyui],
  darkMode: "class",
};
