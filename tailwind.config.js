/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html", "./src/**/*.{vue,js,jsx,tsx}", 
],
  theme: {
    extend: {
      colors: {
        "usea_primary" : "#3389D4",
        "container_color" : "#E8ECF2",
        "active_color" : "#893B01",
      },
      
    },
    fontFamily: {
      Source_Sans_Pro: ["Source_Sans_Pro", "sans-serif"],
    },
    screens: {
      'xs': '320px',
      // => @media (min-width: 320px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  
};
