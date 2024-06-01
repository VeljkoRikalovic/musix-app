import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: "MuseoModerno, sans",
    },
    colors: {
      text: "#e8ece7",
      background: "#060706",
      primaryOne: "#afbdac",
      secondaryOne: "#475956",
      accentOne: "#748990",
    },
  },
  plugins: [daisyui],
};
