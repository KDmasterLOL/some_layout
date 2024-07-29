/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      backgroundImage: {
        'back': "url('/back.png'), linear-gradient(to right bottom, #F9EFE0, #DED3C1)",
      },
      colors: {
        primary: '#CF8C0B',
        decoration: '#CF8C0B1A',
        background: '#F9EFE0'
      },
      fontFamily: {
        jost: ['Jost'],
        lusitana: ['Lusitana'],
        cormorant: ['Cormorant Garamond'],
      },
      fontSize: {
        md: '1.15rem'
      }
    },
  },
  plugins: [],
}
