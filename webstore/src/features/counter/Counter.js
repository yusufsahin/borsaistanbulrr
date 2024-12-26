import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> Counter : {count} </h1>
      <button onClick={() => dispatch(increment())}>Inc</button>
      <button onClick={() => dispatch(decrement())}>Dec</button>
      <button onClick={() => dispatch(reset())}>Res</button>
    </div>
  );
};

export default Counter;
