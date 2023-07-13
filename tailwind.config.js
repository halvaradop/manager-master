/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      colors: {
        gray: 'hsl(0, 0%, 98%)',
        red: {
          DEFAULT: 'hsl(12, 88%, 59%)',
          100: 'hsl(13, 100%, 96%)'
        },
        blue: {
          DEFAULT: 'hsl(227, 12%, 61%)',
          100: 'hsl(228, 39%, 23%)',
          200: 'hsl(233, 12%, 13%)'
        }
      }
    },
  },
  plugins: [],
}

