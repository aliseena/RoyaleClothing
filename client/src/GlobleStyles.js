import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    padding: 1.5rem 3rem;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
    overflow-y: auto;
    @media screen and (max-width:800px) {
        padding: 20px;
    }
  }
  a {
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
 .container{
  //  padding:10px;
 }
`;
