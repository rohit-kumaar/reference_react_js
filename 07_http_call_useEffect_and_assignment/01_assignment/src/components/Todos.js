import React, { useEffect, useState } from "react";
import axios from "axios";

function Todos() {
  // {
  //     "userId": 1,
  //     "id": 1,
  //     "title": "delectus aut autem",
  //     "completed": false
  //     },
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const API = "https://jsonplaceholder.typicode.com/todos";

    axios
      .get(API)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container mt-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {todos?.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Todos;
