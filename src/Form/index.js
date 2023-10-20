import "./style.css";
import currencies from "../currencies";
import { useState } from "react";

const Form = ({ calculateResult }) => {
  const [currency, setCurrency] = useState("JPY");
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset>
        <legend className="form__legend">Kalkulator walut</legend>
        <p>
          <label className="form__label">
            wybierz walutę:
            <select
              className="form__select"
              onChange={(event) => setCurrency(event.target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.description} value={currency.name}>
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p>
          <label className="form__label">
            kwota w złotówkach<span className="form__label--special">*</span>:
            <input
              className=" form__input"
              placeholder="wpisz kwotę"
              required
              type="number"
              min="0.1"
              step="any"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            ></input>
          </label>
        </p>
        <p>
          <button className="form__button">Przelicz</button>
        </p>
      </fieldset>
    </form>
  );
};

export default Form;
