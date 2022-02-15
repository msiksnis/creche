module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      animation: {
        tilt: "tilt 10s infinite linear",
        rotate: "rotate 200ms ease-in-out",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(-180deg)" },
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
