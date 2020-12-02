module.exports = {
  purge: {
    mode: 'all',
    content: [
      './layouts/**/*.html.twig',
    ]
  },
  theme: {
    extend: {
      colors: {
        'blue': '#163C56', // text
        'gold': '#F2D07F',
        'darkblue': '#092F44',
        'mediumblue': '#092F44', // links
        'ultralightblue': '#7B99A9',
        'lightblue': '#47657A',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.blue'),
            a: {
              color: theme('colors.mediumblue'),
              '&:hover': {
                color: theme('colors.mediumblue'),
              },
            },
            h1: {
              color: theme('colors.blue'),
              fontWeight: '700',
              paddingBottom: '.3em',
              borderBottom: '1px solid #eee',
              marginBottom: 0,
            },
            h2: {
              color: theme('colors.blue'),
            },
          },
        },
      }),
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1024px"
      }
    }
  },
  darkMode: 'media',
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
