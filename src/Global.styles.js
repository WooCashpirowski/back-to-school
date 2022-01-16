import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: ${({ theme }) => theme.fonts.main};
    overflow-x: hidden;
  }

`;

export default GlobalStyles;
