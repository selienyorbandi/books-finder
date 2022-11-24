import { styledVariables } from "./variables.styled";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body {
    font-family: "Urbanist", sans-serif;
    font-weight: 700;
    background: ${styledVariables.$backgroundMainColor};
    color: ${styledVariables.$fontMainColor};
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
