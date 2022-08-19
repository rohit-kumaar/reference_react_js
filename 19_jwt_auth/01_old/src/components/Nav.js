import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [uid, setUid] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") != undefined) {
      let token = localStorage.getItem("token");
      let decode = jwt_decode(token);
      console.log(decode);
      setUid(decode.uid);
    } else {
      navigate("/");
    }
  }, []);

  const signOut = () => {
    if (window.confirm("Do u want to logout ?")) {
      localStorage.removeItem("token");
      navigate("/");
    }
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Dashboard
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Change Password
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Welcome : {uid}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="javascript:void(0)"
                onClick={signOut}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-nav ms-auto">
          <a href="" className="nav-item nav-link">
            {" "}
            Cart
          </a>
        </div>
      </div>
    </nav>
  );
}
