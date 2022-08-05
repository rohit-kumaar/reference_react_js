import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";

function Navbar() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("addtocart")) {
      const cart = JSON.parse(localStorage.getItem("addtocart"));
      setCount(cart.length);
    }
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid ">
          <Link to="#" className="navbar-brand text-light">
            CRUD
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <NavLink
                  to="/"
                  className="nav-link text-light"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="/products"
                  className="nav-link text-light"
                  aria-current="page"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="/add-product"
                  className="nav-link text-light"
                  aria-current="page"
                >
                  Add Product
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="#" className="nav-link text-light">
                  <div className="position-relative">
                    <MdAddShoppingCart className="text-white fs-5" />
                    <span
                      className="text-dark position-absolute rounded-circle"
                      style={{
                        background: "yellow",
                        color: "black",
                        width: "22px",
                        height: "22px",
                        textAlign: "center",
                        fontSize: "15px",
                        fontWeight: 700,
                      }}
                    >
                      {count}
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
