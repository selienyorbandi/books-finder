import styled from "styled-components";
import { styledVariables } from "../variables.styled";

export const BookItemContainer = styled.li`
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const BookCover = styled.img`
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  align-self: center;
`;

export const BookItemDetailedContainer = styled.li`
  width: calc(100vw - 1rem);
  min-width: 300px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: solid 1px ${styledVariables.$grayBorderColor};
  border-radius: 10px;
  padding: 2rem;

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

export const BookItemDescription = styled.p`
  color: ${styledVariables.$fontMainColor};
  font-weight: 400;
  font-size: 1.1rem;
`;

export const BookItemContent = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: space-between;
`;
