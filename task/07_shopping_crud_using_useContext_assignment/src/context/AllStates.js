import { useEffect, useState } from "react";
import { context } from "./context";

function AllStates(props) {
  const [count, setCount] = useState(totalCart);

  function totalCart() {
    if (localStorage.getItem("addtocart")) {
      const cart = JSON.parse(localStorage.getItem("addtocart"));
      return cart.length;
    } else {
      return 0;
    }
  }

  // useEffect(() => {
  //   if (localStorage.getItem("addtocart")) {
  //     const cart = JSON.parse(localStorage.getItem("addtocart"));
  //     setCount(cart.length);
  //   }
  // }, [count]);

  // Add to cart
  const addToCart = (product) => {
    if (localStorage.getItem("addtocart")) {
      const cart = JSON.parse(localStorage.getItem("addtocart"));

      setCount(cart.length);

      let isProduct = false;
      let isProductId = null;

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id) {
          isProduct = true;
          isProductId = i;
        }
      }

      if (isProduct === true) {
        cart[isProductId].quantity += 1;
        localStorage.setItem("addtocart", JSON.stringify(cart));
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: product.quantity,
        });
        localStorage.setItem("addtocart", JSON.stringify(cart));
        setCount(cart.length);
      }
    } else {
      const cart = [];
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      });
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
