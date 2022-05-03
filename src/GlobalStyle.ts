import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --midGray: #222;
    --midGrayTP: #22222220;
    --containerWidth: 1140px;
    --navLinkColor: #ffffff80;
    --activeLinkBackground: #ff9700;
    --white: #fff;
    --lightGray: #e5e5e5;
    --gray: #a2a2a2;
    --darkBlue: #345193;
    --darkOrange: #981c1c;
  }

  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  html {
    font-size: 16px;
  }

  body {
    background: var(--midGray);
  }

  .app-wrapper {

  }

  .app-container {
    max-width: var(--containerWidth);
    margin: 0 auto;
  }

  .datePickerInput {
    background: var(--gray);
    border-radius: 15px;
    width: 180px;
  }
`;
