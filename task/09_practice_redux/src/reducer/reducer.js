const initialState = {
  count: 0,
  cart: localStorage.getItem("addToCart")
    ? JSON.parse(localStorage.getItem("addToCart"))
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
    case "CART":
      return { ...state, cart: actions.payload };

    default:
      return state;
  }
}

export default reducer;
