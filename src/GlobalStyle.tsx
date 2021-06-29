import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  body {
    margin: 0;
    font-family: 'Roboto', 'HelveticaNeue', 'Helvetica Neue', sans-serif;
  }
`;

export default GlobalStyle;
