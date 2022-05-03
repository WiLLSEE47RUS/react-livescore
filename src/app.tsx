import { FC } from 'react';
import Header from './components/Header';
import { GlobalStyle } from './GlobalStyle';
import {RouteSwitcher} from './routeSwitcher';
import {Provider} from 'react-redux';
import {store} from './store';
import './flags.css';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <RouteSwitcher />
      <GlobalStyle />
    </Provider>
  );
};
export default App;
