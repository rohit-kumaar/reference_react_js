import { useSelector, useDispatch } from "react-redux/es/exports";

export default function App() {
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
      <hr />
      <h3> Saga Middleware Implementation</h3>
      <button onClick={() => dispatch({ type: "GET_USERS" })}>
        Fetch Users
      </button>
      <ul>
        {state.userData?.map((user) => (
          <li key={user.id}> {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
