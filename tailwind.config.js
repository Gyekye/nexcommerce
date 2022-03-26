module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./core/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marque: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-500px)" },
        },
      },
      animation: {
        marque: "marque 20s linear infinite forwards",
      },
    },
  },
  plugins: [],
};
