import { styledVariables } from "../variables.styled";
import styled from "styled-components";

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  text-align: center;
`;

export const H2 = styled.h2<{ type: string; maxwidth?: number }>`
  color: ${({ type }) =>
    type === "main" ? styledVariables.$fontMainColor : styledVariables.$fontAltColor};
  font-size: 1.25rem;
  font-weight: 600;

  @media screen and (min-width: 400px) {
    max-width: ${({ maxwidth }) => maxwidth + "px" || "none"};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: ${({ maxwidth }) => (maxwidth ? "nowrap" : "wrap")};
  }
`;

export const H3 = styled.h3<{ type: string }>`
  color: ${({ type }) =>
    type === "main" ? styledVariables.$primaryColor : styledVariables.$fontAltColor};
  font-size: 1.1rem;
  font-weight: 500;
`;
