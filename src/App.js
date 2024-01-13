import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Clock from "./Clock";

function App() {
  return (
    <Container>
      <Header title={"Kalkulator Walut"} />
      <Section>
        <Clock />
        <Form />
      </Section>
    </Container>
  );
}

export default App;
