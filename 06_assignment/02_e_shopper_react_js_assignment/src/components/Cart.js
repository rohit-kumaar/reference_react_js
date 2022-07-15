import React from "react";
import CartItems from "./CartItems";
import DoAction from "./DoAction";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function Cart() {
  return (
    <>
      <Header />
      <main>
        <CartItems />
        <DoAction />
      </main>
      <Footer />
    </>
  );
}

export default Cart;
