import { useDispatch, useSelector } from "react-redux";

export default function Users() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> Users</h2>
      <button onClick={() => dispatch({ type: "GET_USERS" })}>Get Users</button>
      <ul>
        {state.userdata?.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
    </div>
  );
}
