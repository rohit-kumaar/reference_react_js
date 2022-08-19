import React from "react";
import { Link } from "react-router-dom";
import { isAdmin, isLoggedIn } from "../services/Auth";

export default function Nav() {
  const logout = () => {
    localStorage.removeItem("_token");
    window.location = "/";
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
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
            {!isLoggedIn() && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sign Up
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Login
                  </Link>
                </li>
              </>
            )}
            {isLoggedIn() && (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/main"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Cart
                  </a>
                </li>
              </>
            )}
            {isLoggedIn() && isAdmin() && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Add Product
                  </a>
                </li>
              </>
            )}
            {isLoggedIn() && (
              <>
                <li className="nav-item">
                  <button className="nav-link" onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
