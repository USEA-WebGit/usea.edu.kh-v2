/** @type {import('tailwindcss').Config} */
import flyonui from "flyonui";
import flyonuiPlugin from "flyonui/plugin";
import tailwindcssMotion from "tailwindcss-motion";

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js"
  ],

  theme: {
    extend: {
      colors: {
        "usea_primary": "#3389D4",
        "usea_secondary": "#002060",
        "container_color": "#E8ECF2",
        "active_color": "#893B01",
        "title_color": "#ffcc00",
      },
      gridTemplateColumns: {
        "16": "repeat(16, minmax(0, 1fr))",
        "footer": "200px minmax(900px, 1fr) 100px",
      },
    },
    fontFamily: {
      Source_Sans_Pro: ["Source Sans Pro", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Product_Sans: ["Product Sans", "Poppins"],
      Trirong: ["Trirong", "serif"],
      Ubuntu: ["Ubuntu", "sans-serif"],
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  plugins: [
    flyonui,
    flyonuiPlugin,
    tailwindcssMotion
  ]
};
