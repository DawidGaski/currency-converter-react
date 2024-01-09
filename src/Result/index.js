import { Paragraph } from "./styled";

const Result = ({ result }) => (
  <Paragraph>
    Kwota po przeliczeniu:{" "}
    <strong>{result ? result.resultElement.toFixed(2) : "0.00"} PLN</strong>
  </Paragraph>
);

export default Result;
