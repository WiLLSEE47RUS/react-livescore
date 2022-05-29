import { createTheme } from '@mui/material';

const backgroundColor = '#fff';
const textColor = '#fff';
const primaryColor = '#fff';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: backgroundColor
    },
    text: {
      primary: textColor,
    },
    primary: {
      main: primaryColor
    },
  }
});
