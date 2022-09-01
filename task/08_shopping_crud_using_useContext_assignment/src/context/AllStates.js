import { useState } from "react";
import { context } from "./context";

function AllStates(props) {
  const [count, setCount] = useState(totalCart);

  function totalCart() {
    if (localStorage.getItem("addtocart")) {
      const cart = JSON.parse(localStorage.getItem("addtocart"));
      return cart.length;
    } else return 0;
  }

  // Add to cart
  const addToCart = (product) => {
    if (localStorage.getItem("addtocart")) {
      const cart = JSON.parse(localStorage.getItem("addtocart"));
      setCount(cart.length);

      let isProduct = false;
      let currentProductId = null;

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id) {
          isProduct = true;
          currentProductId = i;
        }
      }

      if (isProduct === true) {
        cart[currentProductId].quantity += 1;
        localStorage.setItem("addtocart", JSON.stringify(cart));
      } else {
        cart.push({ ...product });
        localStorage.setItem("addtocart", JSON.stringify(cart));
        setCount(cart.length);
      }
    } else {
      const cart = [];
      cart.push({ ...product });
      localStorage.setItem("addtocart", JSON.stringify(cart));
      setCount(cart.length);
    }
  };

  return (
    <context.Provider value={{ addToCart, count }}>
      {props.children}
    </context.Provider>
  );
}

export default AllStates;
