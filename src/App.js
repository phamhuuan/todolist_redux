import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './App.css';
import TaskForm from './components/taskForm';
import TaskControl from './components/taskControl';
import TaskList from './components/taskList';
// import _ from 'lodash';//lam nhu the nay se import ca thu vien rat nang
import { findIndex } from 'lodash';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskEditting: null,
      filterShow: {
        name: '',
        status: -1,
        nameSearch: '',
      },
      sort: {
        by: 'name',
        value: 1,
      }
    };
  }

  onToggleForm = () => {
    this.props.onToggleForm();
  }

  onShowForm = () => {
    this.setState({
      isDisplayForm: true,
    });
  }

  // onSubmit = (data) => {
  //   var { tasks } = this.state;
  //   data.status = data.status === 'true' || data.status === true ? true : false;
  //   if (data.id === '') {
  //     data.id = this.generateId();
  //     tasks.push(data);
  //   }
  //   else {
  //     // for(var index = 0; index < tasks.length; index++){//co the dung foreach
  //     //   if(tasks[index].id === data.id){
  //     //     tasks[index].status = data.status;
  //     //     tasks[index].name = data.name;
  //     //   }
  //     // }//co the dung cach tren hoac dung lodash
  //     var index = findIndex(tasks, (task) => {
  //       return task.id === data.id;
  //     });
  //     tasks[index].status = data.status;
  //     tasks[index].name = data.name;
  //   }
  //   this.setState({
  //     tasks: tasks
  //   });
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  //   this.onCloseForm();
  // }

  deleteTask = (data) => {
    var { tasks } = this.state;
    var index = findIndex(tasks, (task) => {
      return task.id === data.id;
    });
    tasks.splice(index, 1);
    this.onCloseForm();
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  editTask = (task) => {
    this.onShowForm();
    this.setState({
      taskEditting: task
    });
  }

  onSearch = (nameSearch) => {
    this.setState({
      filterShow: {
        name: this.state.filterShow.name,
        status: this.state.filterShow.status,
        nameSearch: nameSearch.toLowerCase(),
      },
    }, () => { console.log(this.state.filterShow); });
  }

  onFilter = (filterShowName, filterShowStatus) => {
    filterShowStatus = parseInt(filterShowStatus, 10);//goi +filterShowStatus se tu doi string -> number
    this.setState({
      filterShow: {
        name: filterShowName.toLowerCase(),
        status: filterShowStatus,
        nameSearch: this.state.filterShow.nameSearch,
      }
    }, () => { console.log(this.state.filterShow); });
  }

  onSort = (sortBy, sortValue) => {
    var tasks = this.state.tasks;
    console.log(sortBy, sortValue);
    if (sortBy === 'name') {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sortValue;
        else if (a.name < b.name) return -sortValue;
        return 0;
      });
    }
    else if (sortBy === 'status') {
      tasks.sort((a, b) => {
        if (a.status > b.status) return -sortValue;
        else if (a.status < b.status) return sortValue;
        return 0;
      })
    }
    this.setState({
      tasks: tasks
    });
  }

  render() {
    var { taskEditting, filterShow } = this.state;//var tasks = this.state.tasks;
    var { displayForm } = this.props;
    // console.log(filterShow);
    if (filterShow) {
      // if (filterShow.name) {
      //   tasks = tasks.filterShow((task) => {
      //     return task.name.toLowerCase().indexOf(filterShow.name) !== -1;
      //   });
      // }
      // if(filterShow.nameSearch){
      //   tasks = tasks.filterShow((task) => {
      //     return task.name.toLowerCase().indexOf(filterShow.nameSearch) !== -1;
      //   });
      // }
      // tasks = filter(tasks, (task) => {
      //   return task.name.toLowerCase().indexOf(filterShow.nameSearch) !== -1;
      // });
      // if (filterShow.status !== null || filterShow.status !== undefined) {//neu if(filterShow.status) la dang kiem tra !== null !== undefined !== 0
      //   //o day luc nao filterShow.status cung co gia tri r nen khong can if o day nua
      //   tasks = tasks.filter((task) => {
      //     // return task.status === -1 ? task : task.status === filterShow.status;
      //     if (filterShow.status === -1) return task;
      //     else return task.status === (filterShow.status === 1 ? false : true);
      //   })
      // }
    }
    var elementForm = displayForm ? <TaskForm task={taskEditting}/> : '';
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>Quản lý công việc</h1>
            <hr />
          </div>
          <Row>
            <Col sm={displayForm === true ? 4 : 0}>
              {elementForm}
            </Col>
            <Col sm={displayForm === true ? 8 : 12}>
              <Button type="submit" variant="primary" onClick={this.onToggleForm}>
                <span className="fa fa-plus mr-5"></span>Thêm công việc
              </Button>
              <br />
              <TaskControl onSearch={this.onSearch} onSort={this.onSort} />
              <TaskList 
                deleteTask={this.deleteTask}
                editTask={this.editTask}
                onFilter={this.onFilter} />
            </Col>
          </Row>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    displayForm: state.displayForm
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);