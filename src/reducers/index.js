import { combineReducers } from 'redux';
import tasks from './tasks';
import displayForm from './displayForm';

const myReducers = combineReducers({
  tasks,//tasks: tasks
  displayForm
});

export default myReducers;