import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 1000px;
`;

export const Legend = styled.legend`
  color: ${({ theme }) => theme.color.SherpaBlue};
  font-size: 40px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.SherpaBlue};
  font-size: 25px;
`;

export const Special = styled.span`
  color: ${({ theme }) => theme.color.Crimson};
`;

export const Select = styled.select`
  font-size: large;
  max-width: 410px;
  width: 100%;
  border-radius: 5px;
  border: solid 1px ${({ theme }) => theme.color.CodGrey};
  padding: 2px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Input = styled.input`
  font-size: large;
  max-width: 345px;
  width: 100%;
  border-radius: 5px;
  border: solid 1px ${({ theme }) => theme.color.CodGrey};
  padding: 2px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 6px;
  background: ${({ theme }) => theme.color.Teal};
  color: ${({ theme }) => theme.color.WhiteSmoke};
  font-size: 20px;

  &:hover {
    background: ${({ theme }) => theme.color.PersianGreen};
    color: ${({ theme }) => theme.color.Black};
  }
`;
