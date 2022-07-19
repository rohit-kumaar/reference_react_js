import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/home/logo.png";
import notFound from "../images/404/404.png";

function NotFound() {
  return (
    <>
      <div className="container text-center">
        <div className="logo-404">
          <Link to="/">
            <img loading="lazy" src={logo} alt="" title="" />
          </Link>
        </div>
        <div className="content-404">
          <img
            className="img-responsive"
            loading="lazy"
            src={notFound}
            alt=""
            title=""
          />

          <h1>
            <b>OPPS!</b> We Couldn't Find this Page
          </h1>
          <p>
            Uh... So it looks like you brock something. The page you are looking
            for has up and Vanished.
          </p>
          <h2>
            <Link to="/">Bring me back Home</Link>
          </h2>
        </div>
      </div>
    </>
  );
}

export default NotFound;
