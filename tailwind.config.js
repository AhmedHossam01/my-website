module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "8rem",
        xl: "16rem",
        "2xl": "24rem",
      },
      center: true,
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
