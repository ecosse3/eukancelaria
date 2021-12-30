module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2C2947',
        secondary: {
          100: '#E2BBD2',
          200: '#DAA9C6',
          300: '#D397BB',
          400: '#CB85AF', // Main
          500: '#C373A3',
          600: '#BC6198',
          700: '#B44F8C'
        },
        facebook: '#3B5998',
        twitter: '#00ACEE',
        linkedin: '#0E76A8'
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
