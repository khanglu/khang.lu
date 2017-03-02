const themes = [
  {
    bgColor: '#f9f6ef',
    textColor: '#627a68'
  },
  {
    bgColor: '#eee',
    textColor: '#c75757'
  },
  {
    bgColor: '#fcecb1',
    textColor: '#c56738'
  },
]


/* This is invert themes array with 2 color swapped (bgColor <=> textColor)
const invertThemes = themes.map(
  (theme) => {
    return {bgColor: theme['textColor'],textColor: theme['bgColor']}
  }
)
*/
export const transitionSettings = '.7s'
export const allThemes = themes //.concat(invertThemes)