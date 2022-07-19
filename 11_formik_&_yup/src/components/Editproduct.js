import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/Product_Service";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const proSchema = Yup.object().shape({
  pname: Yup.string().required("Pname is required"),
  price: Yup.string().required("Price is required"),
  quantity: Yup.string().required("Quantity is required"),
});

export default function Editproduct() {
  let [state, setState] = useState({});
  let { id } = useParams();

  useEffect(() => {
    getProductById(id).then((res) => {
      console.log(res.data);
      setState(res.data);
    });
  }, []);

  return (
    <div>
      <h2> Edit Product</h2>
      <Formik
        initialValues={{ pname: "", price: "", quantity: "" }}
        validationSchema={proSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <div className="form-group">
            <label> Pname</label>
            <Field type="text" className="form-control" name="pname" />
          </div>
          <div className="form-group">
            <label> Price</label>
            <Field type="text" className="form-control" name="price" />
          </div>
          <div className="form-group">
            <label> Quantity</label>
            <Field type="text" className="form-control" name="quantity" />
          </div>
          <input type="submit" value="Add" className="btn btn-success" />
        </Form>
      </Formik>
    </div>
  );
}
