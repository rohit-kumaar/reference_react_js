import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  name: "Anuj",
  age: 27,
  userData: [],
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase("UPDATE_DATA", (state, action) => {
    state.name = action.payload.name;
    state.age = action.payload.age;
  });
  builder.addCase("USERS", (state, action) => {
    state.userData = action.payload;
  });
});
export default userReducer;
