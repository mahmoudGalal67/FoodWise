/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html","./pages/about.html","./pages/menu.html","./pages/gallary.html","./pages/contact.html","./pages/about.html","./pages/catering.html"],
  theme: {
    extend: {
      colors: {
        'blue':'#2A565F',
        'orange':'#D65F4D',
        'gray1':'#323031'
      },
      screens: {
        '800': '800px',
        '900': '900px',
      },
    },
  },
  plugins: [],
}
