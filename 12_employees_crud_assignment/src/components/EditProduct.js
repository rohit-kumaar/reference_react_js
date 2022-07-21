import React, { useEffect, useState } from "react";
import { updateProducts } from "../services/productService";
import { Formik, Form, Field } from "formik";

function EditProduct() {
  // const [update, setUpdate] = useState([]);

  // useEffect(() => {
  //   updateProducts().then((res) => {
  //     setUpdate(res.data);
  //     console.log(update);
  //   });
  // }, []);

  return (
    <>
      <Formik
        initialValues={{ name: "", price: "", quantity: "" }}
        onSubmit={(values) => {
          console.log(values);
          alert("Form is validated! Submitting the form...");
        }}
      >
        <Form>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <label htmlFor="productName" className="form-label">
                  <b>Product Name</b>
                </label>
                <Field type="text" className="form-control" />
                <div className="invalid-feedback">Enter product name</div>
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="col-md-6 mt-5">
                <label htmlFor="productPrice" className="form-label">
                  <b>Product Price</b>
                </label>
                <Field type="text" className="form-control" />
                <div className="invalid-feedback">Enter price</div>
                <div className="valid-feedback">Looks good!</div>
              </div>
            </div>

            <div className="mt-3">
              <label htmlFor="productQuantity" className="form-label">
                <b>Product Quantity</b>
              </label>
              <Field type="text" className="form-control" />
              <div className="invalid-feedback">Enter quantity</div>
              <div className="valid-feedback">Looks good!</div>
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Edit
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default EditProduct;
