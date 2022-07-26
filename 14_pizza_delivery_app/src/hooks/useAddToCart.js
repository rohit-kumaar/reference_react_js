export const addToCart = (product) => {
  if (localStorage.getItem('cart')) {
    let cartItem = JSON.parse(localStorage.getItem('cart'));
    cartItem.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItem));
    alert('Meal Is Add To Cart');
  } else {
    let cartItem = [];
    cartItem.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItem));
    alert('Meal Is Add To Cart');
  }
};
