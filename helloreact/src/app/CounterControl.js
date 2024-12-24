import React from "react";
import { useCounter } from "./CounterContext";

const CounterControl = () => {
  const { increment, decrement, reset } = useCounter();
  return (
    <div>
      <p>CounterControl</p>
      <button onClick={increment}>Inrement</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterControl;
