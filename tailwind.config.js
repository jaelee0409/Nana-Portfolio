/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4E4E4E",
        secondary: "",
      },
      fontFamily: {
        roboto: ["var(--font-roboto-flex)"],
        tinos: ["var(--font-tinos)"],
      },
    },
  },
  plugins: [],
};
