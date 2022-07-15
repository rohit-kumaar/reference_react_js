import React from "react";
import { NavLink } from "react-router-dom";

function BottomHeader() {
  return (
    <div className="header-bottom">
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="mainmenu pull-left">
              <ul className="nav navbar-nav collapse navbar-collapse">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="dropdown">
                  <a href="#">
                    Shop<i className="fa fa-angle-down"></i>
                  </a>
                  <ul role="menu" className="sub-menu">
                    <li>
                      <NavLink to="/shop">Products</NavLink>
                    </li>
                    <li>
                      <NavLink to="/product-details">Product Details</NavLink>
                    </li>
                    <li>
                      <NavLink to="/checkout">Checkout</NavLink>
                    </li>
                    <li>
                      <NavLink to="/cart">Cart</NavLink>
                    </li>
                    <li>
                      <NavLink to="/login">Login</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">
                    Blog<i className="fa fa-angle-down"></i>
                  </a>
                  <ul role="menu" className="sub-menu">
                    <li>
                      <NavLink to="/blog">Blog List</NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog-single">Blog Single</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="*">404</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="search_box pull-right">
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomHeader;
