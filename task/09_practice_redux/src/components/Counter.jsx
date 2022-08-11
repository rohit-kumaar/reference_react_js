import { useDispatch, useSelector } from "react-redux/es/exports";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increase = () => dispatch({ type: "INC", payload: 1 });
  const decrease = () => dispatch({ type: "DEC", payload: 1 });
  const reset = () => dispatch({ type: "RESET" });

  return (
    <>
      <h1>Counter : {count}</h1>
      <div>
        <button onClick={increase}>Increment</button>
        <button onClick={decrease}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default Counter;
