import React from "react";

function Breadcrumbs(props) {
  return (
    <>
      <div className="breadcrumbs">
        <ol className="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li className="active">{props.active}</li>
        </ol>
      </div>
    </>
  );
}

export default Breadcrumbs;
