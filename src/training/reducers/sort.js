var initState = {
  by: 'name',
  value: 1,
}

var myReducer = (state = initState, action) => {
  if (action.type === 'SORT') {
    var {by, value} = action.sort;
    state = {
      by,
      value,
    };
  }
  return state;
}

export default myReducer;