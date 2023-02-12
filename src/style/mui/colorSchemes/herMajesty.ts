import type { CssVarsThemeOptions } from '../types';

const herMajesty: CssVarsThemeOptions = {
  spacing: 4,
  colorSchemes: {
    dark: {
      palette: {
        text: {
          primary: '#ece0e0',
        },
        primary: {
          main: '#910032',
          contrastText: '#ffd9dc',
        },
        secondary: {
          main: '#5e411b',
          contrastText: '#ffddb7',
        },
        error: {
          main: '#ffb4ab',
          contrastText: '#690005',
        },
        background: {
          default: '#201a1b',
          paper: '#201a1b',
        },
        divider: '#9f8c8d',
      },
    },
  },
};

export default herMajesty;
