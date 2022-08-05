import { updateEmployee, getEmployeesById } from "../services/employeesService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
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
      alert("Employee details is updated");
      navigate("/employees");
    });
  };

  const validationSchema = Yup.object({
    employee_name: Yup.string()
      .min(5, "Must be 5 characters or greater.")
      .required("Please enter a employee name."),
    employee_salary: Yup.string().required("Please enter a employee salary."),
    employee_age: Yup.string().required("Please enter a employee age."),
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
