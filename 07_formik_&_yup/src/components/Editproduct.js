import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../services/Product_Service";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const proSchema = Yup.object().shape({
  pname: Yup.string().required("Pname is required"),
  price: Yup.string().required("Price is required"),
  quantity: Yup.string().required("Quanitity is required"),
});
export default function Editproduct() {
  let [state, setState] = useState(null);
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    getProductById(id).then((res) => {
      console.log(res.data);
      setState(res.data);
    });
  }, []);

  const postData = (data) => {
    updateProduct(id, data).then((res) => {
      alert("Product Updated");
      navigate("/products");
    });
  };

  return (
    <div>
      <h2> Edit Product</h2>
      {state != null && (
        <Formik
          initialValues={state}
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
      )}
    </div>
  );
}
