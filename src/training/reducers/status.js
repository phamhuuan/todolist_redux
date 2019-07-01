var initState = false;

var myReducer = (state = initState, action) => {
  if (action.type === 'TOGGLE_STATUS') {
    state = !state;
  }
  return state;
}

export default myReducer;