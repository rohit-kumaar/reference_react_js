import React, { useEffect, useState } from "react";
import axios from "axios";

function Comments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const API = "https://jsonplaceholder.typicode.com/comments";

    axios
      .get(API)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container mt-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>email</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {comments?.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Comments;
