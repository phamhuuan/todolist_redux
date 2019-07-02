import { combineReducers } from 'redux';
import tasks from './tasks';
import displayForm from './displayForm';
import editTask from './editTask';
import filterTask from './filterTask';
import searchTask from './searchTask';
import sortTask from './sortTask';

const myReducers = combineReducers({
  tasks,//tasks: tasks
  displayForm,
  editTask,
  filterTask,
  searchTask,
  sortTask,
});

export default myReducers;