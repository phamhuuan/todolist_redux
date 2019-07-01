import { createStore } from 'redux';
import { status, sort } from './actions/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);
//thuc hien cong viec thay doi status
console.log(store.getState());

store.dispatch(status());

console.log(store.getState());
//thuc hien cong viec sap xep name tu z->a

store.dispatch(sort({
  by: 'name',
  value: -1
}));
console.log(store.getState());