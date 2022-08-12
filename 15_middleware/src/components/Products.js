import React, { useState, useEffect } from "react";
import ProList from "./ProList";

export default function Products() {
  const [proData, setProData] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProData(data.products);
      });
  }, []);

  return (
    <div>
      <h2> Products</h2>
      <div className="row container">
        {proData?.map((pro) => (
          <div key={pro.id} className="col-sm-4">
            <ProList product={pro} />
          </div>
        ))}
      </div>
    </div>
  );
}
