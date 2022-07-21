import React, { useEffect, useState } from "react";
import { updateEmployee, getEmployeesById } from "../services/employeesService";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function EditEmployee() {
  const [update, setUpdate] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getEmployeesById(id).then((res) => {
      console.log(res.data);
      setUpdate(res.data);
    });
  }, []);

  const updateData = (data) => {
    updateEmployee(id, data).then((res) => {
      alert("Product Updated");
      navigate("/employees");
    });
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(5, "Must be 15 characters or less.")
      .required("Please enter a product name."),
    price: Yup.string().required("Please enter a product price."),
    quantity: Yup.string().required("Please enter a product quantity."),
  });

  return (
    <>
      {update !== null && (
        <Formik
          initialValues={update}
          validationSchema={validationSchema}
          onSubmit={(values) => updateData(values)}
        >
          <Form>
            <div className="container">
              <div className="row">
                <div className="col-md-6 mt-5">
                  <label htmlFor="name" className="form-label">
                    <b>Product Name</b>
                  </label>
                  <Field type="text" className="form-control" name="name" />
                  <div className="text-danger">
                    <ErrorMessage name="name" />
                  </div>
                </div>

                <div className="col-md-6 mt-5">
                  <label htmlFor="price" className="form-label">
                    <b>Product Price</b>
                  </label>
                  <Field type="text" className="form-control" name="price" />
                  <div className="text-danger">
                    <ErrorMessage name="price" />
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <label htmlFor="quantity" className="form-label">
                  <b>Product Quantity</b>
                </label>
                <Field type="text" className="form-control" name="quantity" />
                <div className="text-danger">
                  <ErrorMessage name="quantity" />
                </div>
              </div>

              <button type="submit" className="btn btn-primary mt-3">
                Add
              </button>
            </div>
          </Form>
        </Formik>
      )}
    </>
  );
}

export default EditEmployee;
