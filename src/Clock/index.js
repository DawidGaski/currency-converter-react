import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const formatDate = (date) => {
    const day = date.toLocaleDateString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const time = date.toLocaleTimeString();

    return `${day}, godzina: ${time}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(() => new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock">
      <p>Dzisiaj jest {formatDate(date)}</p>
    </div>
  );
};

export default Clock;
