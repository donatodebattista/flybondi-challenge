/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      footer: '#161616',
      transparent: 'transparent',
      bgColor: '#f0f0f0',
      TravelCard: 'rgb(226 232 240)',
      header: '#f0f0f0',
      white: '#ffffff',
      black: '#000000',
      'btn': {
        primary: '#fdbe15',
        hover: '#d6a315'
      },
    },
  },
  plugins: [],
}