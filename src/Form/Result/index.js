import { Info, Paragraph } from "./styled";

const Result = ({ result }) => {
  return (
    <Paragraph>
      Kwota po przeliczeniu:{" "}
      <strong>
        {" "}
        {result !== undefined && (
          <>
            {result.sourceAmount.toFixed(2)}
            {"PLN"}
            <strong>
              {" = "}
              {result.targetAmount.toFixed(2)}
              {result.currency}
            </strong>
            <Info>Ostatnia aktualizacja kursów: {result.date}</Info>
          </>
        )}
      </strong>
    </Paragraph>
  );
};

export default Result;
