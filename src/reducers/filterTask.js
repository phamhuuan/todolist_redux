import * as types from './../constants/actionTypes';

var initState = {
  name: '',
  status: -1
};

var myReducer = (state = initState, action) => {
  switch (action.type) {
    case types.FILTER_TASK:
      state.name = action.filter.name;
      state.status = parseInt(action.filter.status, 10);
      return state;
    default: return state;
  }
}

export default myReducer;