import React, { useEffect, useState } from "react";
import axios from "axios";

function Albums() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const API = "https://jsonplaceholder.typicode.com/albums";

    axios
      .get(API)
      .then((res) => setAlbums(res.data))
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
            {albums?.map((user) => (
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

export default Albums;
