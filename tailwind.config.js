module.exports = {
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontSize: '.875rem',
            color: theme('colors.darkblue'),
            'h1, h2, h3, h4': {
              color: theme('colors.darkblue'),
            },
            h1: {
              fontWeight: '700',
              paddingBottom: '.3em',
              borderBottom: '1px solid ' + theme('colors.slate.300'),
              marginBottom: 0,
            },
            img: {
              margin: 'auto',
            },
            hr: {
              marginTop: '2em',
              marginBottom: '2em',
              color: theme('colors.slate.400'),
            },
            dt: {
              color: theme('colors.darkblue'),
            },
            'a, a:hover': {
              color: theme('colors.blue'),
            },
            'h2 a': {
              fontWeight: 700,
              textDecoration: 'none',
            },
            'a.anchorjs-link, a.anchorjs-link:hover': {
              textDecoration: 'none',
            },
            '.readmore': {
              textDecoration: 'none',
            },
            '.anchorjs-link': {
              color: theme('colors.slate.400'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.300'),
            'h1, h2, h3, h4, code, blockquote, strong': {
              color: theme('colors.slate.300'),
            },
            dt: {
              color: theme('colors.slate.300'),
            },
            'a, a:hover, a code': {
              color: theme('colors.slate.300'),
            },
            'thead th': {
              color: theme('colors.slate.300'),
            },
          },
        },
      }),
    }
  }
}
