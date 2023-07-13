import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    move: {
      "1": "100%",
      "2": "200%",
      "3": "300%",
      "4": "400%",

    },
    "-move": {
      "-0": "0",
      "-1": "-100%",
      "-2": "-200%",
      "-3": "-300%",
      "-4": "-400%",
    },
    extend: {
      screens: {
        base: '900px'
      },
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
  plugins: [
    plugin(({ matchVariant, matchUtilities, theme }) => {
      matchVariant("nth", (value) => {
        return `&:nth-child(${value})`
      },
        {
          values: {
            1: "1",
            2: "2",
            3: "3"
          },
        }
      ),
      matchUtilities({
        "move": (value) => {
          return { translate: value }
        }
      },
        {
          values: theme("move"),
        }
      ),
      matchUtilities({
        "move": (value) => {
          return { translate: value }
        }
      },
        {
          values: theme("-move")
        }
      )
    }),
  ],
}

