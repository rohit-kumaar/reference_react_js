import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userServices';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Login() {
  const navigate = useNavigate();

  const [usersData, setUsersData] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getUsers().then((res) => {
      setUsersData(res.data);
    });
  }, []);

  const login = () => {
    usersData.forEach((user) => {
      email.toLowerCase() === user.emailId &&
        password.toLowerCase() === user.password &&
        navigate('/menu-list');
    });
  };

  const submit = (values) => {
    navigate('/menu-list');
  };

  const validationSchema = Yup.object({
    emailId: Yup.string().required('Please enter a valid email.'),
    password: Yup.string().required('Please enter a valid password'),
  });

  return (
    <>
      <Formik
        initialValues={{
          emailId: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => submit(values)}
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
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
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
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />

            <div className="text-base  text-red-700">
              <ErrorMessage name="password" />
            </div>
          </div>

          <button type="submit" className="btn inline-block" onClick={() => login()}>
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default Login;
