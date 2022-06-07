import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --midGray: #222;
    --darkGray: #111;
    --midGrayTP: #22222220;
    --containerWidth: 1140px;
    --navLinkColor: #bbb;
    --activeLinkBackground: #ff9700;
    --white: #fff;
    --lightGray: #e5e5e5;
    --gray: #a2a2a2;
    --darkBlue: #345193;
    --blue: #5989ff;
    --darkBlueTP: #34519320;
    --darkOrange: #981c1c;
    --lightGreen: #49ff00;
    --green: #007c06;
    --lightRed: #ff000d;
    --lightCyan: #00fff0;
    --color-scrollbar: #bdbdbd;
    --color-scrollbar-hover: #b3b3b3;
  }

  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;

    &::-webkit-scrollbar-thumb {
      background: var(--color-scrollbar);
    }

    &::-webkit-scrollbar-thumb:hover {
      background: var(--color-scrollbar-hover);
    }

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 15px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
    }
  }

  html {
    font-size: 16px;
  }

  body {
    background: var(--darkGray);
  }

  .app-wrapper {

  }

  .app-container {
    max-width: var(--containerWidth);
    margin: 0 auto;
  }

  .datePickerInput {
    width: 180px;

    input {
      pointer-events: none;
      position: relative;

      &:after {
        pointer-events: none;
        position: absolute;
        left: 0;
        top: 0;
        width: 200px;
        height: 40px;
        content: ' ';
      }
    }
  }

`;
