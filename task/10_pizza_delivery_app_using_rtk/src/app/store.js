import { configureStore } from '@reduxjs/toolkit';
import addToCartReducer from 'features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: addToCartReducer,
  },
});
