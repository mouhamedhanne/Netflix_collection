/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        red_primary: "#E74C3C",
        mauve_primary: "#8E44AD",
        gris_primary: "#EFEFFC",
        bg_page_acceuil: "#04082f",
        bg_circle_progrss: "#081C22",
      },
      //423d0f
      //d2d531
      fontFamily: {
        font_title_page: ['"Bebas Neue"'],
      },
    },
  },
  plugins: [],
};
