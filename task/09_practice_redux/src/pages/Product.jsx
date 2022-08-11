import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";

function Product() {
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProduct = async () => {
      const response = await fetch("product.json");
      const data = await response.json();
      setProductData(data.products);
    };
    loadProduct();
  }, []);

  // Add to cart
  const addToCart = (product) => {
    if (localStorage.getItem("addToCart")) {
      const cart = JSON.parse(localStorage.getItem("addToCart"));

      let isProduct = false;
      let currentProductId = null;

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id) {
          isProduct = true;
          currentProductId = i;
        }
      }

      if (isProduct === true) {
        cart[currentProductId].quantity += 1;
        localStorage.setItem("addToCart", JSON.stringify(cart));
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: product.quantity,
        });
        localStorage.setItem("addToCart", JSON.stringify(cart));
        dispatch({ type: "CART", payload: cart });
      }
    } else {
      const cart = [];
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      });
      localStorage.setItem("addToCart", JSON.stringify(cart));
      dispatch({ type: "CART", payload: cart });
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="cards p-4">
          <div className="row">
            {productData?.map((product) => {
              return (
                <div
                  className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-2"
                  key={product.id}
                >
                  <div className="card ">
                    <div className="card-body">
                      <h5 className="card-title">Product : {product.name}</h5>
                      <p className="card-text">
                        <span>Rs. {product.price}</span>
                        <br />
                        <span>Quantity : {product.quantity}</span>
                      </p>
                      <button className="btn btn-primary">Edit</button>
                      <button className="btn btn-danger ms-2">Delete</button>
                      <button
                        className="btn btn-dark ms-2"
                        onClick={() => addToCart(product)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
