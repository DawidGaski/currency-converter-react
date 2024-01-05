import styled from "styled-components";
import moneyBackground from "./images/moneyBackground.jpg";

export const Main = styled.main`
  min-height: 100vh;
  background-image: url("${moneyBackground}");
  background-position: center;
  background-size: cover;
  margin: auto;
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: minmax(680px, auto);

  @media (max-width: 776px) {
    grid-template-columns: auto;
  }
`;
