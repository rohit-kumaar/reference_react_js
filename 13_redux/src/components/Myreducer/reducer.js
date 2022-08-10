const initialState = { count: 10 };
function reducer(state = initialState, actions) {
  switch (actions.type) {
    case "INC":
      return { ...state, count: state.count + actions.payload };
    case "DEC":
      return { ...state, count: state.count - actions.payload };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
}
export default reducer;
