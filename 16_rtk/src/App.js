import { useSelector, useDispatch } from "react-redux/es/exports";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> Redux toolkit implementation</h2>
      <p>
        Name is {state.name} and age is {state.age}
      </p>
      <button
        onClick={() =>
          dispatch({ type: "UPDATE_DATA", payload: { name: "sumit", age: 34 } })
        }
      >
        Update Data
      </button>
    </div>
  );
}

export default App;
