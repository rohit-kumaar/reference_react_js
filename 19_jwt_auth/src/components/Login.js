import React, { useState } from "react";
import { isAdmin, isLoggedIn, loginUser } from "../services/Auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [state, setState] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handler = (event) => {
    let { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const postData = (event) => {
    event.preventDefault();
    loginUser(state)
      .then((res) => {
        if (res.data.err == 0) {
          localStorage.setItem("_token", res.data.token);
          isLoggedIn();
          isAdmin();
          navigate("/main");
          window.location.reload();
        }
        if (res.data.err == 1) {
          alert(res.data.msg);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2> Login Here</h2>
      <form onSubmit={postData}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            onChange={handler}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            name="password"
            onChange={handler}
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
