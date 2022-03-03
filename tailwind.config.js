module.exports = {
  content: [
    './layouts/**/*.html.twig',
    './themes/**/layouts/**/*.html.twig',
  ],
  safelist: [
    'anchorjs-link'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: '#163C56',
        gold: '#F2D07F',
        darkblue: '#092F44',
        bluegray: '#7B99A9',
        dark: '#111827',
        darkgray: '#374151',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontSize: '.875rem',
            color: theme('colors.darkblue'),
            'h2 a': {
              fontWeight: 700,
              textDecoration: 'none',
            },
            '.readmore': {
              textDecoration: 'none',
            },
            'h1, h2, h3, h4': {
              color: theme('colors.darkblue'),
            },
            'a, a:hover': {
              color: theme('colors.blue'),
            },
            'a.anchorjs-link, a.anchorjs-link:hover': {
              textDecoration: 'none',
            },
            '.anchorjs-link': {
              color: theme('colors.gray.300'),
            },
            h1: {
              fontWeight: '700',
              paddingBottom: '.3em',
              borderBottom: '1px solid ' + theme('colors.gray.200'),
              marginBottom: 0,
            },
            img: {
              margin: 'auto',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            'h1, h2, h3, h4, code, blockquote, strong': {
              color: theme('colors.gray.300'),
            },
            'a, a:hover, a code': {
              color: theme('colors.gray.300'),
            },
            'thead th': {
              color: theme('colors.gray.300'),
            },
          },
        },
      }),
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1280px',
        xl: '1280px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'markdown',
    }),
  ],
}
