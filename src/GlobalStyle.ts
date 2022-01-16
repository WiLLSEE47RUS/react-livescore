import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --midGray: #222;
    --containerWidth: 1140px;
    --navLinkColor: #4a6494;
  }
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
  html{
    font-size: 16px;
  }
  body{
    background: var(--midGray);
  }
`;
