/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ferrari-red': '#8a0303', // Now Blood Red
        'blood-red': '#8a0303',
        'fresh-blood': '#ff0000',
        'leather-black': '#030000', // Now Vampire Black
        'vampire-black': '#030000',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'vampire-gradient': 'linear-gradient(to bottom, transparent, #030000)',
      }
    },
  },
  plugins: [],
}

