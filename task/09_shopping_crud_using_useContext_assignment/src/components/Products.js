import { getProducts, deleteProducts } from "../services/productService";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "../context/context";

function Products() {
  const navigate = useNavigate();
  const [productsData, setProductsData] = useState([]);
  const { addToCart } = useContext(context);

  // Get all products
  useEffect(() => {
    getProducts().then((res) => setProductsData(res.data));
  }, []);

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
  // Edit Product
  const editProduct = (id) => {
    navigate(`/edit-product/${id}`);
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
