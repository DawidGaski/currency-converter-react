import styled from "styled-components";

export const Segment = styled.section`
  max-width: 800px;
  padding: 10px;
  margin: auto 20px;
  background: ${({ theme }) => theme.color.Alto};
  border: solid ${({ theme }) => theme.color.SherpaBlue};
  border-radius: 10px;
`;
