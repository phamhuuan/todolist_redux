import * as types from './../constants/actionTypes';

var initState = '';

var myReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SEARCH_TASK:
      state = action.keyword;
      return state;
    default: return state;
  }
}

export default myReducer;