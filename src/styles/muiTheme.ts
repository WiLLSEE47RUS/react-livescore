import { createTheme } from '@mui/material';

const backgroundColor = '#fff';
const paperBackgroundColor = '#333';
const textColor = '#fff';
const primaryColor = '#fff';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: backgroundColor,
      paper: paperBackgroundColor
    },
    text: {
      primary: textColor,
    },
    primary: {
      main: primaryColor
    },
  }
});
