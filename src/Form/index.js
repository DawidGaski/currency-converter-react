import { useState } from "react";
import Result from "./Result";
import {
  StyledForm,
  Legend,
  Label,
  Special,
  Select,
  Input,
  Button,
  Loading,
  Failure,
} from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const [result, setResult] = useState();
  const { rates, state, date } = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = rates[currency].value;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
      date: new Date(date).toLocaleDateString("pl-PL"),
    });
  };

  const [currency, setCurrency] = useState("ADA");
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <fieldset>
        <Legend>Kalkulator walut</Legend>
        {state === "loading" ? (
          <Loading>
            Chwileczkę... <br /> Ładuję kursy walut z zewnętrznych źródeł.
          </Loading>
        ) : state === "error" ? (
          <Failure>
            Wygląda na to, że coś poszło nie tak. Sprawdź swoje połączenie z
            internetem, jeśli masz połączenie wygląda na to, że błąd leży po
            naszej stronie, spróbuj ponownie za chwilę.
          </Failure>
        ) : (
          <>
            <p>
              <Label>
                wybierz walutę:
                <Select onChange={({ target }) => setCurrency(target.value)}>
                  {Object.keys(rates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
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
                  step="0.01"
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                ></Input>
              </Label>
            </p>
            <p>
              <Button>Przelicz</Button>
            </p>
          </>
        )}
      </fieldset>
      <Result result={result} />
    </StyledForm>
  );
};

export default Form;
