import { styledVariables } from "./../variables.styled";
import styled from "styled-components";

export const PaginatorContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 400px) {
    gap: 1rem;
  }
`;

export const PageList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const PageItem = styled.li<{ active: boolean }>`
  width: 30px;
  height: 30px;
  color: ${({ active }) =>
    active ? styledVariables.$backgroundMainColor : styledVariables.$fontThirdColor};
  background: ${({ active }) => (active ? styledVariables.$primaryColor : "none")};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus,
  &:active,
  &:hover {
    background: ${styledVariables.$primaryColor};
    color: ${styledVariables.$backgroundMainColor};
  }
`;

export const PageDots = styled(PageItem)`
  &:focus,
  &:active,
  &:hover {
    background: none;
    color: ${styledVariables.$fontThirdColor};
  }
`;
