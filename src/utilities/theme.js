const themes = [
  {
    bgColor: "#222",
    textColor: "#eee",
  },
  {
    bgColor: "#eee",
    textColor: "#222",
  },
];

/* This is invert themes array with 2 color swapped (bgColor <=> textColor)
const invertThemes = themes.map(
  (theme) => {
    return {bgColor: theme['textColor'],textColor: theme['bgColor']}
  }
)
*/
export const transitionSettings = "1s ease-in-out";
export const allThemes = themes; //.concat(invertThemes)
