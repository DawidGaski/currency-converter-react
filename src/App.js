import { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Result from "./Result";
import currencies from "./currencies";
import Clock from "./Clock";

function App() {
  const [result, setResult] = useState(0);

  const calculateResult = (currency, amount) => {
    const selectedCurrency = currencies.find(({ name }) => name === currency);
    const conversionRate = selectedCurrency.rate;

    setResult({
      from: selectedCurrency,
      to: "PLN",
      resultElement: +amount * conversionRate,
    });
  };

  return (
    <Container>
      <Header title={"Kalkulator USD, EUR, JPY"} />
      <Section>
        <Clock />
        <Form calculateResult={calculateResult} />
        <Result result={result} />
      </Section>
    </Container>
  );
}

export default App;
