/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        roboto: ["Roboto"],
        chivo:["Chivo", "sans-serif"]
      },
      colors: {
        primary: "#FF5555",
      },
    },
  },
  plugins: [],
};
