import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../reduxstore/counter/counterActions";

const Counter = () => {
  const { count } = useSelector((state) => state.counterReducer);
  const dispatch= useDispatch();
  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button style={{ margin: "5px"}} onClick={()=>dispatch(increment())}>Arttır</button>
      <button style={{ margin: "5px"}} onClick={()=>dispatch(decrement())}>Azalt</button>
      <button style={{ margin: "5px"}} onClick={()=>dispatch(reset())}>Sıfırla</button>
    </div>
  );
};

export default Counter;
