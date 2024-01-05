import { useState, useEffect } from "react";
import React from "react";
import { Timer } from "./styled";

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
    <Timer>
      <p>Dzisiaj jest {formatDate(date)}</p>
    </Timer>
  );
};

export default Clock;
