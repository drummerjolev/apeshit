// HMJ
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      anton: ['Anton', 'sans'],
      italiana: ['Italiana', 'serif'],
      roboto: ['Roboto', 'sans'],
    },
    extend: {
      spacing: {
        98: '26rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
