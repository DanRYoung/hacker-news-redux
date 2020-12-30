
import { createMuiTheme, Theme } from '@material-ui/core';
import { teal, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: blue,
    secondary: teal,
    background: {
      default: "#1a1c20"
    },
    text: {
      primary: "#e8e8e8"
    }
  },
  overrides: {
  },
});

theme.shadows = ([] as unknown) as Theme['shadows'];

export default theme;

export const MAX_PAGE_WIDTH = 1000;;