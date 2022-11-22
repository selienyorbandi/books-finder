import { styledVariables } from "./../../../styled-components/variables.styled";
import styled from "styled-components";

export const SearchInput = styled.input.attrs({ type: "search" })`
  width: 75vw;
  max-width: 860px;
  padding: 10px;
  border: solid 1px ${styledVariables.$grayBorderColor};
  border-radius: 5px;
  outline: none;
  height: 40px;
  &:active,
  &:focus {
    box-shadow: 1px 1px 4px 0px rgba(118, 118, 118, 0.25);
    -webkit-box-shadow: 1px 1px 4px 0px rgba(118, 118, 118, 0.25);
    -moz-box-shadow: 1px 1px 4px 0px rgba(118, 118, 118, 0.25);
  }

  @media screen and (min-width: 650px) {
    width: 80vw;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
