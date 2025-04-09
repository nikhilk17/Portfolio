/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        gray: {
          100: '#f7f7f7',
          200: '#e6e6e6',
          400: '#a0a0a0',
          500: '#737373',
          700: '#404040',
          900: '#171717',
        },
        blue: {
          500: '#4a72f5',
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".my-rotate-x":{
          transform: "rotateX(6deg)",
        },
        ".preserve-3d":{
          transformStyle: "preserve-3d",
          transoformOrigin:"bottom"
        },
        ".perspective": {
          perspective: "1000px",
        },  
      });
    }
  ],
}