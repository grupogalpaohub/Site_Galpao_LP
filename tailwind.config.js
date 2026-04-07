/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          lushAqua: '#003F61',
          megaman: '#45BDFE',
          candelabra: '#E6C364',
          whiteDesert: '#FFFAF3',
          graphite: '#3C372A',
        },
        auxiliary: {
          light: '#FDFDFD',
          dark: '#313131',
          gray: '#E2E3E4',
          success: '#2CBE31',
          danger: '#D42929',
        }
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        h1: '40px',
        h2: '34px',
        h3: '28px',
        h4: '24px',
        h5: '19px',
        p: '16px',
        small: '14px',
        xsmall: '12px',
      }
    },
  },
  plugins: [],
}