import React from "react";

export default function ProList(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.product.pname}</h5>
        <p className="card-text">Price : Rs.{props.product.price}</p>
        <a href="#" className="btn btn-primary">
          Add to Cart
        </a>
      </div>
    </div>
  );
}
