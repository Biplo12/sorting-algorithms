/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ffffff",
        background: "#00081e",
        "primary-button": "#5f247b",
        "primary-button-hover": "#497ea6",
        "secondary-button": "#dcefec",
        accent: "#049a90",
      },
    },
  },
  plugins: [],
};
