/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html", "./src/**/*.{vue,js,jsx,tsx}", 
],
  theme: {
    extend: {
      colors: {
        "usea_primary" : "#3389D4",
        "usea_secondary": "#002060",
        "container_color" : "#E8ECF2",
        "active_color" : "#893B01",
        "title_color" : "#ffcc00",
        
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      }
      
    },
    fontFamily: {
      Source_Sans_Pro: ["Source_Sans_Pro", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Product_Sans: ["Product Sans", "Poppins"],
      Trirong: ["Trirong", "serif"],
      Ubuntu: ["Ubuntu", "sans-serif"],
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

