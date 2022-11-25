import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: "Urbanist", sans-serif;
  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 80px;
  max-width: 1420px;
  margin: 80px auto 0 auto;

  @media screen and (min-width: 650px) {
    margin-top: 80px;
    margin-bottom: 0;
    margin: 80px auto 0 auto;
  }
`;

export const SectionContainer = styled.section``;
