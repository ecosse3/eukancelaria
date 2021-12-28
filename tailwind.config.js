module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2C2947',
        secondary: '#CB85AF'
      }
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    }
  },
  plugins: []
};
