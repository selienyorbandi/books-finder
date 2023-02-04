import { styledVariables } from "./variables.styled";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
  height: 100%;
  min-height: 100vh;
}

body {
    font-family: "Urbanist", sans-serif;
    font-weight: 700;
    background: ${styledVariables.$backgroundMainColor};
    color: ${styledVariables.$fontMainColor};
    height: 100%;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
    font-weight: 700;
}
 
p, div {
    font-weight: 500;
}

  `;
