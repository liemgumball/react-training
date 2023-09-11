/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{s,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#f8f8f8',
        'custom-yellow': '#feaf00',
        'custom-beige': '#f2eae1',
        'custom-light': '#fff3d8',
        'custom-dark-gray': '#6c6c6c',
        'custom-medium-gray': '#acacac',
        'custom-light-gray': '#cdcdcd',
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
}
