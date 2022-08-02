import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addProduct } from "../services/Product_Service";
import { useNavigate } from "react-router-dom";

const proSchema = Yup.object().shape({
  pname: Yup.string().required("Pname is required"),
  price: Yup.string().required("Price is required"),
  quantity: Yup.string().required("Quanitity is required"),
});

export default function Addproduct() {
  const navigate = useNavigate();

  const postData = (values) => {
    addProduct(values)
      .then((res) => {
        alert("Product Added");
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2> Add Product</h2>
      <Formik
        initialValues={{ pname: "", price: "", quantity: "" }}
        validationSchema={proSchema}
        onSubmit={(values) => postData(values)}
      >
        <Form>
          <div className="form-group">
            <label> Pname</label>
            <Field type="text" className="form-control" name="pname" />
            <ErrorMessage
              name="pname"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div className="form-group">
            <label> Price</label>
            <Field type="text" className="form-control" name="price" />
            <ErrorMessage
              name="price"
              component="div"
              className="alert alert-danger"
            />
          </div>

          <div className="form-group">
            <label> Quantity</label>
            <Field type="text" className="form-control" name="quantity" />
            <ErrorMessage
              name="quantity"
              component="div"
              className="alert alert-danger"
            />
          </div>

          <input type="submit" value="Add" className="btn btn-success" />
        </Form>
      </Formik>
    </div>
  );
}
