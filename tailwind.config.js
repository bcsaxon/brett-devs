module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: "'roboto-reg', serif",
        robotobold: "'roboto-bold', serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
