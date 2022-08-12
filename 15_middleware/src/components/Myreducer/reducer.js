const initialState = {
  count: 10,
  postdata: [],
  userdata: [],
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
    case "postData":
      return { ...state, postdata: actions.payload };
    case "USERS":
      return { ...state, userdata: actions.payload };
    default:
      return state;
  }
}
export default reducer;
