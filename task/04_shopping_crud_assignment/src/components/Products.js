import React, { useEffect, useState } from "react";
import { getProducts, deleteProducts } from "../services/productService";
import { useNavigate } from "react-router-dom";

function Products() {
  const [productsData, setProductsData] = useState([]);
  const navigate = useNavigate();

  // Get all products
  useEffect(() => {
    getProducts().then((res) => setProductsData(res.data));
  }, []);

  // Edit Product
  const editProduct = (id) => {
    navigate(`/edit-product/${id}`);
  };

  // Delete product
  const deleteProduct = (id) => {
    if (window.confirm("Do you want to delete this product")) {
      deleteProducts(id).then((res) => {
        if (res) {
          alert("Product is deleted");
          const remainProduct = productsData.filter(
            (product) => product.id !== id
          );
          setProductsData(remainProduct);
        }
      });
    }
  };

  // Add to cart
  const addToCart = (product) => {
    if (localStorage.getItem("addtocart")) {
      const cart = JSON.parse(localStorage.getItem("addtocart"));

      /* 

        This is checking if the product is already in the cart. If it is, it will increase the quantity by 1. If it is not, it will add the product to the cart. 

      */

      let bool = false;
      let pId = null;

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id) {
          bool = true;
          pId = i;
        }
      }

      if (bool === true) {
        cart[pId].quantity += 1;
        localStorage.setItem("addtocart", JSON.stringify(cart));
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: product.quantity,
        });
        localStorage.setItem("addtocart", JSON.stringify(cart));
      }
    } else {
      const cart = [];
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      });
      localStorage.setItem("addtocart", JSON.stringify(cart));
    }
  };

  return (
    <>
      <div className="container">
        <div className="cards p-4">
          <div className="row">
            {productsData?.map((product) => {
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
                      <button
                        className="btn btn-primary"
                        onClick={() => editProduct(product.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => deleteProduct(product.id)}
                      >
                        Delete
                      </button>
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

export default Products;
