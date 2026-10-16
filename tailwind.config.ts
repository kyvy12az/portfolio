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
        primary: "#071014",
        secondary: "#94a3b8",
        tertiary: "#0d181d",
        "black-100": "#0a1419",
        "black-200": "#050b0e",
        "white-100": "#dce6e8",
      },
      boxShadow: {
        card: "0 24px 70px -32px rgba(0, 0, 0, 0.75)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(135deg, #071014 0%, #0a151a 58%, #071014 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "fresh-gradient": "linear-gradient(135deg, #0a4d3c 0%, #0d5f8a 50%, #1a237e 100%)",
        "tech-gradient": "linear-gradient(to bottom right, #064e3b, #0c4a6e, #1e3a8a)",
      },
    },
  },
  plugins: [],
};
