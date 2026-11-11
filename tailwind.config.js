/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0D0E10',
          dark: '#141619',
          card: '#181A1E',
          cardBorder: '#272A30',
          surface: '#1F2227',
          ochre: '#BA6D26',
          ochreHover: '#A45D1C',
          cream: '#F4EFEA',
          creamMuted: '#C2BEBA',
          textMuted: '#9B9FA7',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
      }
    },
  },
  plugins: [],
}
