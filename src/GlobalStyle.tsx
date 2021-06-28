import { Global, css, GlobalProps } from '@emotion/react';

const GlobalStyle = (props: Omit<GlobalProps, 'styles'>) => {
  return (
    <Global
      {...props}
      styles={css`
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
      `}
    />
  );
};

export default GlobalStyle;
