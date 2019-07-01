import { createStore } from 'redux'

var initState = {
  status: false,
  sort: {
    sortBy: 'name',
    value: 1,
  }
}

var myReducer = (state = initState, action) => {
  if (action.type === 'TOGGLE_STATUS') {
    state.status = !state.status;
  }
  if (action.type === 'SORT') {
    console.log(action);
    state = {
      status: state.status,
      sort: {
        by: action.sort.by,
        value: action.sort.value
      }
    }
  }
  return state;
}

const store = createStore(myReducer);
//thuc hien cong viec thay doi status
console.log(store.getState());

var action = {
  type: 'TOGGLE_STATUS',
};
store.dispatch(action);

console.log(store.getState());
//thuc hien cong viec sap xep name tu z->a
var sortAction = {
  type: 'SORT',
  sort: {
    by: 'name',
    value: -1
  }
}

store.dispatch(sortAction);
console.log(store.getState());