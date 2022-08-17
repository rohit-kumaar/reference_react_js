import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  name: "Anuj",
  age: 27,
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase("UPDATE_DATA", (state, action) => {
    state.name = action.payload.name;
    state.age = action.payload.age;
  });
});

export default userReducer;
