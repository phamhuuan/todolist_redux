import * as types from './../constants/actionTypes';
import { findIndex } from 'lodash';
import randomString from 'random-string';

var generateId = () => {
  return randomString({ length: 20 }) + '-' + randomString({ length: 20 }) + '-' + randomString({ length: 20 }) + '-' + randomString({ length: 20 });
}

var data = JSON.parse(localStorage.getItem('tasks'));
var initState = data ? data : [];

var myReducer = (state = initState, action) => {
  var index;
  switch (action.type) {
    case types.LIST_ALL: return state;
    case types.ADD_TASK:
      var newTask = {
        id: generateId(),
        name: action.task.name,
        status: (action.task.status === 'true' || action.task.status === true) ? true : false,
      };
      state.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    case types.CHANGE_STATUS:
      index = findIndex(state, (task) => {
        return task.id === action.id;
      });
      state[index].status = !state[index].status;
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    case types.DELETE_TASK:
      index = findIndex(state, (task) => {
        return task.id === action.id;
      });
      state.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    case types.SAVE_TASK:
      index = findIndex(state, (task) => {
        return task.id === action.task.id;
      });
      state[index].name = action.task.name;
      state[index].status = action.task.status;
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    default: 
      return state;
  }
}

export default myReducer;