import React, { useEffect, useState } from "react";
import { updateEmployee, getEmployeesById } from "../services/employeesService";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function EditEmployee() {
  const [update, setUpdate] = useState(null);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    getEmployeesById(id).then((res) => {
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
    employee_name: Yup.string()
      .min(5, "Must be 15 characters or less.")
      .required("Please enter a product name."),
    employee_salary: Yup.string().required("Please enter a product price."),
    employee_age: Yup.string().required("Please enter a product quantity."),
  });

  return (
    <>
      {update != null && (
        <Formik
          initialValues={update}
          validationSchema={validationSchema}
          onSubmit={(values) => updateData(values)}
        >
          <Form>
            <div className="container">
              <div className="row">
                <div className="col-md-6 mt-5">
                  <label htmlFor="employee_name" className="form-label">
                    <b>Employee Name</b>
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="employee_name"
                  />
                  <div className="text-danger">
                    <ErrorMessage name="employee_name" />
                  </div>
                </div>

                <div className="col-md-6 mt-5">
                  <label htmlFor="employee_salary" className="form-label">
                    <b>Employee Salary</b>
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="employee_salary"
                  />
                  <div className="text-danger">
                    <ErrorMessage name="employee_salary" />
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <label htmlFor="employee_age" className="form-label">
                  <b>Employee Age</b>
                </label>
                <Field
                  type="text"
                  className="form-control"
                  name="employee_age"
                />
                <div className="text-danger">
                  <ErrorMessage name="employee_age" />
                </div>
              </div>

              <button type="submit" className="btn btn-primary mt-3">
                Update
              </button>
            </div>
          </Form>
        </Formik>
      )}
    </>
  );
}

export default EditEmployee;
