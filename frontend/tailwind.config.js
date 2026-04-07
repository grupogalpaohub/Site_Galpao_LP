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
    },
  },
  plugins: [],
}
