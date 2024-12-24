import React from "react";
import { useCounter } from "./CounterContext";

const CounterDisplay = () => {
  const { count } = useCounter();

  return (
    <div>
      <h1>Counter : {count}</h1>
    </div>
  );
};

export default CounterDisplay;
