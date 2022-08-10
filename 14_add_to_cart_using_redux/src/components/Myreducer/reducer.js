const initialState = {
  count: 10,
  cart:
    localStorage.getItem("mycart") != undefined
      ? JSON.parse(localStorage.getItem("mycart"))
      : [],
};
function reducer(state = initialState, actions) {
  switch (actions.type) {
    case "INC":
      return { ...state, count: state.count + actions.payload };
    case "DEC":
      return { ...state, count: state.count - actions.payload };
    case "RESET":
      return { ...state, count: 0 };
    case "UPDATE_CART":
      return { ...state, cart: actions.payload };

    default:
      return state;
  }
}
export default reducer;
