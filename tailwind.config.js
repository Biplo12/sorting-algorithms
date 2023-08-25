/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ffffff",
        background: "#040604",
        "primary-button": "#171c1b",
        "secondary-button": "#171c1b",
        accent: "#049a90",
      },
      screens: {
        // => @media (max-width: 290px) { ... }
        exxsm: { max: "290px" },
        // => @media (max-width: 355px) { ... }
        exsm: { max: "355px" },
        // => @media (max-width: 480px) { ... }
        mxxsm: { max: "480px" },
        // => @media (max-width: 640px) { ... }
        mxsm: { max: "640px" },
        // => @media (max-width: 768px) { ... }
        mxmd: { max: "768px" },
        // => @media (max-width: 1060px) { ... }
        mxlg: { max: "1060px" },
        // => @media (max-width: 1280px) { ... }
        mxxl: { max: "1280px" },
      },
    },
  },
  plugins: [],
};
