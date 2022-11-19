import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: "Urbanist", sans-serif;
`;

export const MainContainer = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 80px;

  @media screen and (min-width: 650px) {
    margin-top: 80px;
    margin-bottom: 0;
  }
`;

export const SectionContainer = styled.section``;
