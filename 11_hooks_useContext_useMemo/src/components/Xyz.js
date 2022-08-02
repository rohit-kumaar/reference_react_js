import React, { useState, useMemo } from "react";
import ReadContext from "./ReadContext";

function squareNum(number) {
  console.log("Square is done");
  return Math.pow(number, 2);
}

export default function Xyz() {
  const [number, setNumber] = useState(0);

  const mySquare = useMemo(() => {
    return squareNum(number);
  }, [number]);

  const [counter, setCounter] = useState(0);

  const handler = (e) => {
    setNumber(e.target.value);
  };

  const counterHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2> Use Memo Example </h2>
      <input
        type="number"
        placeholder="Enter number"
        value={number}
        onChange={handler}
      />{" "}
      <br />
      <div> Square : {mySquare}</div>
      <button onClick={counterHandler}> Counter ++</button>
      <div> Counter : {counter}</div>
      {/* Use context implementation 👇 */}
      <ReadContext />
    </div>
  );
}
