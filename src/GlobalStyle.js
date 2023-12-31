import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  background-color: #eee;
  font-family: "Montserrat", sans-serif;
  max-width: 1000px;
  margin: auto;
}
`;


