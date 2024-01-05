import currencies from "../currencies";
import { useState } from "react";
import React from "react";
import {
  Formation,
  Legend,
  Label,
  Special,
  Select,
  Input,
  Button,
} from "./styled";

const Form = ({ calculateResult }) => {
  const [currency, setCurrency] = useState("JPY");
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <Formation onSubmit={onFormSubmit}>
      <fieldset>
        <Legend>Kalkulator walut</Legend>
        <p>
          <Label>
            wybierz walutę:
            <Select onChange={(event) => setCurrency(event.target.value)}>
              {currencies.map((currency) => (
                <option key={currency.description} value={currency.name}>
                  {currency.name}
                </option>
              ))}
            </Select>
          </Label>
        </p>
        <p>
          <Label>
            kwota w złotówkach<Special>*</Special>:
            <Input
              placeholder="wpisz kwotę"
              required
              type="number"
              min="0.1"
              step="any"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            ></Input>
          </Label>
        </p>
        <p>
          <Button>Przelicz</Button>
        </p>
      </fieldset>
    </Formation>
  );
};

export default Form;
