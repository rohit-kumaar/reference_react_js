import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";

export default function Mydata() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> Redux Implementation</h2>
      <p> The redux counter is {count}</p>
      <button onClick={() => dispatch({ type: "INC", payload: 2 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DEC", payload: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}> Reset</button>
    </div>
  );
}
