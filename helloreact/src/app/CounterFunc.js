import React, { useState } from "react";

const CounterFunc = () => {
  const [count, setCount] = useState(0);

  const increment=()=>setCount(count+1);
  const decrement=()=>setCount(count-1);
  const reset=()=>setCount(0);
  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter Functional Component</h1>
      <h1>Counter : {count}</h1>
      <button onClick={increment} style={{marginRight:'10px'}}>Increment</button>
      <button onClick={decrement} style={{marginRight:'10px'}}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterFunc;
