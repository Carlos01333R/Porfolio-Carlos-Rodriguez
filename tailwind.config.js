/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway-black': ['Raleway-Black', 'sans-serif'],
        'raleway-medium': ['Raleway-Medium', 'sans-serif'],
        'raleway-regular': ['Raleway-Regular', 'sans-serif'],
        'raleway-semibold': ['Raleway-SemiBold', 'sans-serif'],
      },
      placeholderColor: {
        'custom-gray': 'black', // Cambia esto al color que desees
      },
    },
  },
 

  plugins: [nextui()],
}

