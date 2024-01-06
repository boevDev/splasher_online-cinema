/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#050505',
      white: '#f0f0f0',
      grey: {
        100: '#373737',
        200: '#9ca3af',
      },
      primary: {
        100: '#0D1B2A',
        200: '#1B263B',
        300: '#415A77',
        400: '#778DA9',
        500: '#E0E1DD',
      },
    },
    fontFamily: {
      nunito: ['Nunito Sans', 'sans-serif'],
      monts: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
};
