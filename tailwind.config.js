module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        header: '0 0 10px rgba(99, 104, 142, 0.2)'
      },
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
      },
      margin: {
        18: '4.5rem'
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-out-down': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)'
          }
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)'
          }
        },
        tada: {
          from: {
            transform: 'scale3d(1, 1, 1)'
          },

          '10%': {
            transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)'
          },

          '20%': {
            transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)'
          },

          '30%': {
            transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)'
          },

          '50%': {
            transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)'
          },

          '70%': {
            transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)'
          },

          '90%': {
            transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)'
          },

          '40%': {
            transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)'
          },

          '60%': {
            transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)'
          },

          '80%': {
            transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)'
          },

          to: {
            transform: 'scale3d(1, 1, 1)'
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out',
        tada: 'tada 1.2s ease-out'
      }
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
