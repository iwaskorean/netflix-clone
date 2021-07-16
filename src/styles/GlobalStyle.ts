import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html,body{
    font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;
    background-color: black;
    color:#333333;
    font-size:16px;
  }

`;
