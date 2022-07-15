import React from "react";
import advertisement from "../images/shop/advertisement.jpg";

function Advertisement() {
  return (
    <section id="advertisement">
      <div className="container">
        <img loading="lazy" src={advertisement} alt="" title=""/>
      </div>
    </section>
  );
}

export default Advertisement;
