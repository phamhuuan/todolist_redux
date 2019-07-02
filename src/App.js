import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './App.css';
import TaskForm from './components/taskForm';
import TaskControl from './components/taskControl';
import TaskList from './components/taskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
  onToggleForm = () => {
    var { editTask } = this.props;
    if (editTask && editTask.id !== '') { this.props.onOpenForm(); console.log(editTask.id); }
    else this.props.onToggleForm();
    this.props.onClear({
      id: '',
      name: '',
      status: true
    });
  }

  render() {
    var { displayForm } = this.props;
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>Quản lý công việc</h1>
            <hr />
          </div>
          <Row>
            <Col sm={displayForm === true ? 4 : 0}>
              <TaskForm />
            </Col>
            <Col sm={displayForm === true ? 8 : 12}>
              <Button type="submit" variant="primary" onClick={this.onToggleForm}>
                <span className="fa fa-plus mr-5"></span>Thêm công việc
              </Button>
              <br />
              <TaskControl/>
              <TaskList/>
            </Col>
          </Row>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onClear: (task) => {
      dispatch(actions.editTask(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);