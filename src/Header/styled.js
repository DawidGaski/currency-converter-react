import styled from "styled-components";

export const Headline = styled.header`
  max-width: 1000px;
  background: ${({ theme }) => theme.color.Teal};
  margin: auto 20px;
  padding: 10px;
  border: solid ${({ theme }) => theme.color.SherpaBlue};
  border-bottom: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.WhiteSmoke};
`;
