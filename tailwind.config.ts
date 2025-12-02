/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: "#0a1628",
        secondary: "#64ffda",
        tertiary: "#112240",
        "black-100": "#0a192f",
        "black-200": "#020c1b",
        "white-100": "#e6f1ff",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "fresh-gradient": "linear-gradient(135deg, #0a4d3c 0%, #0d5f8a 50%, #1a237e 100%)",
        "tech-gradient": "linear-gradient(to bottom right, #064e3b, #0c4a6e, #1e3a8a)",
      },
    },
  },
  plugins: [],
};
