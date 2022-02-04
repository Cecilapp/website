module.exports = {
  purge: {
    enabled: process.env.CECIL_ENV == 'production',
    mode: 'all',
    content: [
      './layouts/**/*.html.twig',
      './themes/**/layouts/**/*.html.twig',
    ],
  },
  darkMode: 'media',
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
            color: theme('colors.darkblue'),
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
          },
        },
      }),
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1024px',
      }
    }
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'markdown',
    }),
  ],
}
