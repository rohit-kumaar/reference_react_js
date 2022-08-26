import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "routes/publicRoutes";

const NotFound = () => {
  return (
    <>
      <h1>404 NotFound</h1>
      <Link to={ROUTE_PATH.SignUp}>Go to home page</Link>
    </>
  );
};

export default NotFound;
