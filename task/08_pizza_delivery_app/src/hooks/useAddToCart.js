import { toastAlert } from '../utils/toastify';

export const addToCart = (product) => {
  if (localStorage.getItem('cart')) {
    let cart = JSON.parse(localStorage.getItem('cart'));

    let isId = false;
    let idx = null;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) {
        isId = true;
        idx = i;
      }
    }

    if (isId === true) {
      cart[idx].quantity += 1;
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      cart.push({
        id: product.id,
        quantity: product.quantity,
        name: product.name,
        price: product.price,
      });
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    toastAlert();
  } else {
    let cart = [];
    cart.push({
      id: product.id,
      quantity: product.quantity,
      name: product.name,
      price: product.price,
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    toastAlert();
  }
};
