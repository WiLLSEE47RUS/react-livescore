import { FC } from 'react';
import Header from './components/Header';
import { GlobalStyle } from './GlobalStyle';

const App: FC = () => {
  return (
    <>
      <Header />
      <GlobalStyle />
    </>
  );
};
export default App;
