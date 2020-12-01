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
        'blue': '#163C56',
        'gold': '#F2D07F',
        'darkblue': '#092F44',
        'mediumblue': '#092F44',
        'ultralightblue': '#7B99A9',
        'lightblue': '#47657A',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      }
    }
  },
  darkMode: 'media',
}
