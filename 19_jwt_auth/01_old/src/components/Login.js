import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../config/Myservice";

export default function Login() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
    check: "",
    errMsg: "",
  });

  const handler = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const postLogin = (event) => {
    event.preventDefault();
    const formData = { email: state.email, password: state.password };
    login(formData).then((res) => {
      if (res.data.err === 0) {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      }
      if (res.data.err === 1) {
        setState({ ...state, errMsg: res.data.msg });
      }
    });
  };

  return (
    <main className="container">
      <header className="p-5 my-4 bg-light rounded-3">
        <h1> Admin Panel</h1>
      </header>
      <section>
        <form onSubmit={postLogin}>
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
          <div className="form-group">
            <input type="checkbox" name="check" onChange={handler} />
            <label> Remember Me</label>
          </div>
          <input type="submit" value="Login" className="btn btn-success" />
          <input
            type="button"
            value="Register"
            className="btn btn-primary"
            onClick={() => navigate("/register")}
          />
        </form>
      </section>
    </main>
  );
}
