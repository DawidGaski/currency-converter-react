import styled from "styled-components";

export const Formation = styled.form`
  max-width: 1000px;
`;

export const Legend = styled.legend`
  color: rgb(0, 77, 77);
  font-size: 40px;
`;

export const Label = styled.label`
  color: rgb(0, 77, 77);
  font-size: 25px;
`;

export const Special = styled.span`
  color: crimson;
`;

export const Select = styled.select`
  font-size: large;
  max-width: 410px;
  width: 100%;
  border-radius: 5px;
  border: solid 1px rgb(19, 19, 19);
  padding: 2px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Input = styled.input`
  font-size: large;
  max-width: 345px;
  width: 100%;
  border-radius: 5px;
  border: solid 1px rgb(19, 19, 19);
  padding: 2px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 6px;
  background-color: rgb(0, 77, 77);
  color: whitesmoke;
  font-size: 20px;

  &:hover {
    background-color: rgb(0, 160, 160);
    color: black;
  }
`;
