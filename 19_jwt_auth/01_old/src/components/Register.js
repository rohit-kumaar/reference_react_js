import React, { useState } from "react";
import { register } from "../config/Myservice";

export default function Register() {
  const [state, setState] = useState({
    email: "",
    password: "",
    errMsg: "",
    succMsg: "",
  });

  const handler = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const postRegister = (event) => {
    event.preventDefault();
    const formData = { email: state.email, password: state.password };
    register(formData).then((res) => {
      if (res.data.err == 0) {
        setState({ ...state, succMsg: res.data.msg });
      }
      if (res.data.err == 1) {
        setState({ ...state, errMsg: res.data.msg });
      }
    });
  };
  
  return (
    <main className="container">
      <header className="p-5 my-4 bg-light rounded-3">
        <h1> Register Hereee</h1>
      </header>
      <section>
        <form onSubmit={postRegister}>
          {state.succMsg != "" && (
            <div className="alert alert-success">{state.succMsg}</div>
          )}
          {state.errMsg != "" && (
            <div className="alert alert-danger">{state.errMsg}</div>
          )}
          <div className="form-group">
            <label> Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handler}
            />
          </div>
          <div className="form-group">
            <label> Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={handler}
            />
          </div>

          <input type="submit" value="Regis" className="btn btn-success" />
        </form>
      </section>
    </main>
  );
}
