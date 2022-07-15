import React, { useEffect, useState } from "react";
import axios from "axios";

function Photos() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const API = "https://jsonplaceholder.typicode.com/photos";

    axios
      .get(API)
      .then((res) => setPhotos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          {photos?.map((user) => (
            <div key={user.id} className="col col-md-6 col-lg-3">
              <div className="card" aria-hidden="true">
                <img loading="lazy" src={user.url} className="card-img-top" />

                <div className="card-body">
                  <h5 className="card-title ">
                    <span className=" col-12">{user.title}</span>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Photos;
