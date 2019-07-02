import * as types from './../constants/actionTypes';

var initState = {
  by: 'name',
  value: 1
};

var myReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SORT_TASK:
      // state.by = action.sort.by;
      // state.value = action.sort.value;
      // return state;
      return {
        by: action.sort.by,
        value: action.sort.value
      }
    default: return state;
  }
}

export default myReducer;