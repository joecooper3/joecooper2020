import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'TheinReg';
  src: url("../assets/fonts/Theinhardt-Regular.otf");
}

@font-face {
  font-family: 'TheinBold';
  src: url("../assets/fonts/Theinhardt-Bold.otf");
}

@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700');
`;