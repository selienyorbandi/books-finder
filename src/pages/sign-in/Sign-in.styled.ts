import { styledVariables } from "./../../styled-components/variables.styled";
import styled from "styled-components";

export const LogguedContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  img {
    border: solid 2px ${styledVariables.$grayBorderColor};
    border-radius: 50%;
    width: 100px;
    align-self: center;
  }
  a {
    color: #fff;
  }
`;
