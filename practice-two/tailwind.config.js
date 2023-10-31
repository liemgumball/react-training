/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-white': '#e5e5e5',
        'custom-gray': '#c4c4c4',
        'custom-yellow': '#feaf00',
        'custom-beige': '#f2eae1',
        'custom-light': '#fff3d8',
        'custom-dark-gray': '#6c6c6c',
        'custom-medium-gray': '#acacac',
        'custom-light-gray': '#cdcdcd',
        'custom-light-blue': '#F0F9FF',
        'custom-light-pink': '#FEF6FB',
        'custom-light-yellow': '#FEFBEC',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans'],
      },
      fontWeight: {
        400: 400,
        500: 500,
        600: 600,
        700: 700,
      },
    },
  },
  plugins: [],
};
