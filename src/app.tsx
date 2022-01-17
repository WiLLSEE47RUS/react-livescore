import { FC } from 'react';
import Header from './components/Header';
import { GlobalStyle } from './GlobalStyle';
import {RouteSwitcher} from './routeSwitcher';

const App: FC = () => {
  return (
    <>
      <Header />
      <RouteSwitcher />
      <GlobalStyle />
    </>
  );
};
export default App;
