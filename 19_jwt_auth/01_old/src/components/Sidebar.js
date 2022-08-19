import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="list-group">
      <a
        href="#"
        className="list-group-item list-group-item-action active"
        aria-current="true"
      >
        Products
      </a>
      <Link
        to="/dashboard/addproduct"
        className="list-group-item list-group-item-action"
      >
        Add Products
      </Link>
    </div>
  );
}
