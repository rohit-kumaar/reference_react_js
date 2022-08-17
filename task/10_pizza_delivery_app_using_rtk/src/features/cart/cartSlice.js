import { createSlice } from '@reduxjs/toolkit';
import { toastAlert } from 'utils/toastify';

const initialState = {
  value: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      if (localStorage.getItem('cart')) {
        const cart = JSON.parse(localStorage.getItem('cart'));
        state.value = cart.length;

        let isId = false;
        let index = null;

        for (let i = 0; i < cart.length; i++) {
          if (cart[i].id === product.id) {
            isId = true;
            index = i;
          }
        }

        if (isId === true) {
          cart[index].quantity += 1;
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          cart.push({ ...product });
          localStorage.setItem('cart', JSON.stringify(cart));
          state.value += 1;

          // toastAlert();
        }
      } else {
        const cart = [];
        cart.push({ ...product });
        localStorage.setItem('cart', JSON.stringify(cart));
        state.value += 1;
        // toastAlert();
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
