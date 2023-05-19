/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2560px",
      },
      aspectRatio: {
        "2/1": "2 / 1",
        "3/2": "3 / 2",
      },
      // keyframes: {
      //   dropdownEnter: {
      //     "0%": {
      //       // transition: "ease-out duration-100",
      //       transform: "opacity-0 scale-95",
      //     },
      //     "100%": {
      //       transform: "opacity-100 scale-100",
      //     },
      //   },
      //   dropdownLeave: {
      //     "0%": {
      //       // transition: "ease-in duration-75",
      //       transform: "opacity-100 scale-100",
      //     },
      //     "100%": {
      //       transform: "opacity-0 scale-95",
      //     },
      //   },
      // },
      // animation: {
      //   dropdownEnter: "dropdownEnter .1s ease-out",
      //   dropdownLeave: "dropdownLeave .75s ease-in",
      // },
    },
  },
  plugins: [],
};
