import { styledVariables } from "./../../styled-components/variables.styled";
import styled from "styled-components";

export const BookWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media screen and (min-width: 900px) {
    margin-top: 2rem;
    flex-wrap: nowrap;
  }
`;

export const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  max-width: 90vw;

  @media screen and (min-width: 900px) {
    max-width: 1000px;
  }
`;

export const BookTitle = styled.h1`
  font-size: 3rem;
`;

export const BookAuthors = styled.h2`
  font-size: 1.4rem;
  color: ${styledVariables.$fontAltColor};

  span {
    font-size: 1.8rem;
    color: ${styledVariables.$fontThirdColor};
  }
`;

export const BookDescription = styled.section`
  display: flex;
  flex-direction: column;
  max-height: 200px;
  border: solid 1px ${styledVariables.$grayBorderColor};
  border-radius: 5px;
  overflow: auto;

  div {
    padding: 1rem;
  }

  h3 {
    background: ${styledVariables.$grayBorderColor};
    font-size: 1.5;
    padding: 1.3rem 1rem;
  }

  br {
    display: block;
    content: "";
    margin: 0.5rem;
  }

  p {
    font-weight: 500;
  }

  i {
    color: ${styledVariables.$fontAltColor};
  }
`;

export const BookCategories = styled.section`
  display: flex;
  flex-direction: column;
  border: solid 1px ${styledVariables.$grayBorderColor};
  border-radius: 5px;
  overflow: auto;

  h3 {
    background: ${styledVariables.$grayBorderColor};
    font-size: 1.5;
    padding: 1.3rem 1rem;
  }
  ul {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const BookCategory = styled.li`
  color: ${styledVariables.$secondaryColor};
  border: solid 1px ${styledVariables.$secondaryColor};
  border-radius: 5px;
  padding: 5px;

  a {
    color: ${styledVariables.$secondaryColor};
  }

  &:hover,
  &:active {
    background: ${styledVariables.$secondaryColor};
  }

  &:hover a,
  &:active a {
    color: ${styledVariables.$backgroundMainColor};
  }
`;

export const BookExtraDetails = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const BookExtraDetail = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px ${styledVariables.$grayBorderColor};
  border-radius: 5px;

  h3 {
    background: ${styledVariables.$grayBorderColor};
    font-size: 1.5;
    padding: 0.5rem 1rem;
  }

  p {
    padding: 0.5rem 1rem;
    font-weight: 500;
  }
`;

export const BookButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  padding-top: 1rem;

  a {
    color: ${styledVariables.$backgroundMainColor};
  }

  button {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a,
  img {
    align-self: center;
  }
`;
