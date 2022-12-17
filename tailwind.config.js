/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#F7AB0A",
        success: "#0F9D58",
        warning: "#F4B400",
        danger: "#DB4437",
        "custom-black": "#1A1A1A",
        "custom-gray": "#666",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
