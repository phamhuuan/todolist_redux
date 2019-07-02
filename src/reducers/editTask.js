import * as types from './../constants/actionTypes';

var initState = {
  id: '',
  name: '',
  status: true
};
var myReducer = (state = initState, action) => {
  switch (action.type) {
    case types.EDIT_TASK:
      return action.task;
    default: return state;
  }
}

export default myReducer;