import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userServices';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Login() {
  const navigate = useNavigate();

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsers().then((res) => {
      setUsersData(res.data);
    });
  }, []);

  const login = (values) => {
    navigate('/menu-list');
  };

  const validationSchema = Yup.object({
    emailId: Yup.string().required('Please enter a email id.'),
    password: Yup.string().required('Please enter a  password'),
  });

  return (
    <>
      <Formik
        initialValues={{
          emailId: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => login(values)}
      >
        <Form className="container mx-auto px-8">
          <h1 className="mb-4 text-4xl font-medium">Login</h1>
          <div>
            <Field
              name="email"
              type="email"
              autoComplete="email"
              className="login-input p-3"
              placeholder="Email address"
            />

            <div className="text-base  text-red-700">
              <ErrorMessage name="emailId" />
            </div>
          </div>
          <div className="mt-4 mb-7">
            <Field
              name="password"
              type="password"
              autoComplete="current-password"
              className="login-input p-3"
              placeholder="Password"
            />

            <div className="text-base  text-red-700">
              <ErrorMessage name="password" />
            </div>
          </div>

          <button type="submit" className="btn inline-block">
            Save
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default Login;
