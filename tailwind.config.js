/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#8696a0",
        "panel-header-background": "#202c33",
        "primary-strong": "#e9edef",
        "teal-light": "#7ae3c3",
        "icon-lighter": "#8696a0",
      },
    },
  },
  plugins: [],
};
