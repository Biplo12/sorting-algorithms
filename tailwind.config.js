/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ffffff",
        background: "#0c041b",
        "primary-button": "#335975",
        "primary-button-hover": "#497ea6",
        "secondary-button": "#fac8fe",
        accent: "#049a90",
      },
    },
  },
  plugins: [],
};
