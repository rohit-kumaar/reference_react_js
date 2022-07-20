import React from "react";
import {
  enterProductName,
  enterProductQuantity,
  enterProductPrice,
  submitForm,
} from "./validation";

function AddProduct() {
  return (
    <>
      <form onSubmit={submitForm}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <label htmlFor="productName" className="form-label">
                <b>Product Name</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                onBlur={enterProductName}
              />
              <div className="invalid-feedback">Enter product name</div>
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-6 mt-5">
              <label htmlFor="productPrice" className="form-label">
                <b>Product Price</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="productPrice"
                onBlur={enterProductPrice}
              />
              <div className="invalid-feedback">Enter price</div>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>

          <div className="mt-3">
            <label htmlFor="productQuantity" className="form-label">
              <b>Product Quantity</b>
            </label>
            <input
              type="number"
              className="form-control"
              id="productQuantity"
              onBlur={enterProductQuantity}
            />
            <div className="invalid-feedback">Enter quantity</div>
            <div className="valid-feedback">Looks good!</div>
          </div>

          <button type="button" id="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default AddProduct;
