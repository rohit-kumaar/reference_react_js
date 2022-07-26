import React from 'react';
import { addUser } from '../services/userServices';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function SignUp() {
  const navigate = useNavigate();

  const regd = (values) => {
    addUser(values).then(() => {
      alert('Your are registered successfully');
      navigate('/login');
    });

    if (localStorage.getItem('regd')) {
      const regdUser = JSON.parse(localStorage.getItem('regd'));
      regdUser.push(values);
      localStorage.setItem('regd', JSON.stringify(regdUser));
    } else {
      let regdUser = [];
      regdUser.push(values);
      localStorage.setItem('regd', JSON.stringify(regdUser));
    }
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(5, 'Must be 5 characters or greater.')
      .required('Please enter a first name.'),
    lastName: Yup.string().required('Please enter a last name.'),
    emailId: Yup.string().required('Please enter a email id.'),
    password: Yup.string().required('Please enter a  password'),
  });

  return (
    <>
      <div className="container mx-auto px-8">
        <div className="bg-slate-200 p-5">
          <div className="mt-10 mb-4 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Personal Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <Formik
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    emailId: '',
                    password: '',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => regd(values)}
                >
                  <Form>
                    <div className="overflow-hidden shadow sm:rounded-md">
                      <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              First name
                            </label>
                            <Field
                              type="text"
                              name="firstName"
                              autoComplete="firstName"
                              className="sign-up-input"
                            />
                            <div className="text-base  text-red-700">
                              <ErrorMessage name="firstName" />
                            </div>
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Last name
                            </label>
                            <Field
                              type="text"
                              name="lastName"
                              autoComplete="lastName"
                              className="sign-up-input"
                            />

                            <div className="text-base  text-red-700">
                              <ErrorMessage name="lastName" />
                            </div>
                          </div>

                          <div className="col-span-6 ">
                            <label
                              htmlFor="email-address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email address
                            </label>
                            <Field
                              type="text"
                              name="emailId"
                              autoComplete="emailId"
                              className="sign-up-input"
                            />

                            <div className="text-base  text-red-700">
                              <ErrorMessage name="emailId" />
                            </div>
                          </div>

                          <div className="col-span-6">
                            <label
                              htmlFor="password"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Password
                            </label>
                            <Field type="password" name="password" className="sign-up-input" />

                            <div className="text-base  text-red-700">
                              <ErrorMessage name="password" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button type="submit" className="btn">
                          Save
                        </button>
                      </div>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
