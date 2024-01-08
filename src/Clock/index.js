import { Timer } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const formatDate = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const date = useCurrentDate();

  return (
    <Timer>
      {" "}
      Dzisiaj jest {date.toLocaleDateString(undefined, formatDate)}
    </Timer>
  );
};

export default Clock;
