import { Paragraph } from "./styled";

const Result = ({ result }) => {
  return (
    <Paragraph>
      Kwota po przeliczeniu:{" "}
      <strong>
        {" "}
        {result !== undefined && (
          <>
            {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
            <strong>
              {result.targetAmount && result.targetAmount.toFixed(2)}&nbsp;
              {result.currency}
            </strong>
            <p>{result.date}</p>
          </>
        )}
      </strong>
    </Paragraph>
  );
};

export default Result;
