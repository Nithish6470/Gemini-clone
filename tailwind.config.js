/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        lines: {
          '0%': { backgroundPosition: '-800px' },
          '100%': { backgroundPosition: '800px' },
        },
        fadein:{
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        lines: 'lines 3s infinite linear', 
        fadein: 'fadein 1.5s ease-in-out',
      }
    },
  },
  plugins: [],
}

