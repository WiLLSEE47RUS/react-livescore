import { FC } from 'react';
import Header from './components/Header';
import { GlobalStyle } from './styles/GlobalStyle';
import { RouteSwitcher } from './routeSwitcher';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles/flags.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/muiTheme';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <RouteSwitcher />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
};
export default App;

