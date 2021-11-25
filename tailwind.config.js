module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ttnorms: "'ttnorms-reg', serif",
        ttnormsbold: "'ttnorms-reg', serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
