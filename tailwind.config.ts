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
        primary: "#111820",
        accent: "#88c5b5",
        "accent-hover": "#a6d6c9",
        outline: "#2b3845",
        white: "#edf2f7",
        secondary: "#a9b5c3",
        tertiary: "#1a242f",
        "black-100": "#151e28",
        "black-200": "#111820",
        "white-100": "#d7dfe7",
      },
      boxShadow: {
        card: "0 12px 36px -16px rgba(0, 0, 0, 0.45)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "fresh-gradient": "linear-gradient(135deg, #111820, #1a242f)",
        "tech-gradient": "linear-gradient(to bottom right, #111820, #1a242f)",
      },
    },
  },
  plugins: [],
};
