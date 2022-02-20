module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          350: 'rgba(189, 189, 189, 1)',
          400: 'rgba(169, 169, 169, 1)',
          450: 'rgba(130, 130, 130, 1)',
          700: 'rgba(51, 51, 51, 1)',
        },
        accent: 'rgba(47, 128, 237, 1)',
        "accent-light": 'rgba(127, 177, 243, 1)',
        danger: 'rgba(235, 87, 87, 1)',
      }
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'], 
      montseratt: ['Montserrat', 'sans-serif'],
    },
    boxShadow: {
      DEFAULT: '0px 2px 6px 0px rgba(0, 0, 0, 0.4)',
    }
  },
  plugins: [],
}
