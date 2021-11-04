module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        up: {
          '0%': { top: '1000px' },
          '100%': {top: '0px'},
        },
      },
      animation: {
        'move-up': 'up 1s ease-in-out',
      },
      colors: {
        gray: {
          900: "#202225",
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        }
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      translate: ['active'],
      borderColor: ['hover', 'active'],
    },
    plugins: [],
  }
}
