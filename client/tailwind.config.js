/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        night: "rgb(77 78 78)",
        main: "#eb9405",
      },
      backgroundImage: {
        hero: "url('/gedi.jpg')",
        footer: "url('/img/footer-texture.png')",
      },
      boxShadow: {
        "secondary-card-shadow": "0 2px 2px 1px rgba(0, 0, 0, 0.05)",
      },
    },
    fontFamily: {
      roboto: ["Roboto Condensed", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      page: ".85rem",
    },
  },
  plugins: [require("flowbite/plugin")],
  // darkMode: 'class',
};
