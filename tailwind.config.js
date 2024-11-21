/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        style: "Lacquer, system-ui",
      },
      boxShadow: {
        authInputBoxShadow:
          " 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      },
      backgroundImage: {
        authInputBackground:
          " linear-gradient(180deg, #474232 0%, #28271c 100%)",
      },
    },
  },
  plugins: [],
};
