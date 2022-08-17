import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const cartSlice = createReducer(initialState, (builder) => {
  builder.addCase('addToCart', (state, action) => {
    state.value += action.payload.value;
  });
});

export default cartSlice;
