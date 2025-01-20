/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-yellow": "#E5B222",
        "black-custom": "#1B1B1B",
        "white-custom": "#FCFBF7",
      },
      backgroundImage: {
        pattern: "url(./assets/img/pattern.png)",
        mekah: "url(./assets/img/mekah.jpg)",
      },
    },
    fontFamily: {
      kufam: ["Kufam", "sans-serif"],
      arabic: ["Noto Sans Arabic", "sans-serif"],
      body: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
