module.exports = {
  theme: {
    darkSelector: ".dark-mode",
    extend: {
      colors: {
        'clinix-yellow': {
          50: '#FFFEF8',
          100: '#FFFDF0',
          200: '#FFF9DB',
          300: '#FFF5C5',
          400: '#FFEE99',
          500: '#FFE66D',
          600: '#E6CF62',
          700: '#998A41',
          800: '#736831',
          900: '#4D4521',
        },
        'clinix-red': {
          50: '#FFF8F8',
          100: '#FFF0F0',
          200: '#FFDADA',
          300: '#FFC4C4',
          400: '#FF9797',
          500: '#FF6B6B',
          600: '#E66060',
          700: '#994040',
          800: '#733030',
          900: '#4D2020',
        },
        'clinix-white': {
          50: '#FFFFFF',
          100: '#FEFFFE',
          200: '#FDFFFD',
          300: '#FCFFFC',
          400: '#F9FFF9',
          500: '#F7FFF7',
          600: '#DEE6DE',
          700: '#949994',
          800: '#6F736F',
          900: '#4A4D4A',
        },
        'clinix-green': {
          50: '#F6FDFC',
          100: '#EDFAF9',
          200: '#D3F3F0',
          300: '#B8EBE7',
          400: '#83DCD6',
          500: '#4ECDC4',
          600: '#46B9B0',
          700: '#2F7B76',
          800: '#235C58',
          900: '#173E3B',
        },
        'clinix-dark': {
          50: '#F4F6F7',
          100: '#E8EEEF',
          200: '#C6D4D6',
          300: '#A3BABE',
          400: '#5F878D',
          500: '#1A535C',
          600: '#174B53',
          700: '#103237',
          800: '#0C2529',
          900: '#08191C',
        }
      }
    }
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"]
  },
  plugins: [require("tailwindcss-dark-mode")()]
};
