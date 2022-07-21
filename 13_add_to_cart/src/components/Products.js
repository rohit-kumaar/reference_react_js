import React, { useState, useEffect } from "react";
import { delProduct, getProducts } from "../services/Product_Service";
import { Link, useNavigate } from "react-router-dom";
export default function Products() {
  const [proData, setProData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getProducts().then((res) => {
      console.log(res.data);
      setProData(res.data);
    });
  }, []);
  const delPro = (id) => {
    if (window.confirm("DO u want to delete?")) {
      delProduct(id).then((res) => {
        if (res) {
          alert("Product Deleted");
          let data = proData.filter((pro) => pro.id != id);
          setProData(data);
        }
      });
    }
  };
  const edit = (id) => {
    navigate(`/editproduct/${id}`);
  };

  // Add to cart
  const addCart = (id) => {
    if (localStorage.getItem("mycart") != undefined) {
      let arr = JSON.parse(localStorage.getItem("mycart"));
      arr.push({ pid: id, quantity: 1 });
      localStorage.setItem("mycart", JSON.stringify(arr));
      alert("Product Add To Cart");
    } else {
      let arr = [];
      arr.push({ pid: id, quantity: 1 });
      localStorage.setItem("mycart", JSON.stringify(arr));
      alert("Product Add To Cart");
    }
  };

  return (
    <div className="container">
      <h2> Products</h2>
      <Link to="/addproduct" className="btn btn-danger">
        {" "}
        Add Product
      </Link>
      <div className="row">
        {proData?.map((pro) => (
          <div className="col-sm-4" key={pro.id}>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{pro.pname}</h5>
                <p className="card-text">
                  {" "}
                  Price : Rs.{pro.price} <br />
                  Quantity : {pro.quantity}
                </p>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => edit(pro.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => addCart(pro.id)}
                >
                  Add Cart
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => delPro(pro.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
