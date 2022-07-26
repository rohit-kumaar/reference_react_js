import { toast } from 'react-toastify';

export const addToCart = (product) => {
  if (localStorage.getItem('cart')) {
    let cartItem = JSON.parse(localStorage.getItem('cart'));
    cartItem.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItem));
    toast.dark('Hey 👋, Your meal is added!');
  } else {
    let cartItem = [];
    cartItem.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItem));
    toast.dark('Hey 👋, Your meal is added!');
  }
};
