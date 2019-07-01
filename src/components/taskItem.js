import React, {Component} from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component{
  showStatus(){
    return (
      <span className={this.props.task.status === true ? "label label-danger" : "label label-success"}
            onClick={this.changeStatus}>
        {this.props.task.status === true ? 'Quan trọng' : 'Không quan trọng'}
      </span>
    );
  }

  changeStatus = () => {
    this.props.changeStatus(this.props.task.id);
  }

  deleteTask = () => {
    this.props.deleteTask(this.props.task);
  }

  editTask = () => {
    this.props.editTask(this.props.task);
  }

  render(){
    var {task, index} = this.props;
    return (
      <tr>
        <td>{index+1}</td>
        <td>{task.name}</td>
        <td className="text-center"> 
          {this.showStatus()}
        </td>
        <td className="text-center">
          <Button variant="warning" onClick={this.editTask}>
            <span className="fa fa-pencil mr-5"/>Sửa
          </Button>&nbsp;
          <Button variant="danger" onClick={this.deleteTask}>
            <span className="fa fa-trash mr-5"/>Xóa
          </Button>
        </td>
      </tr>
    );
  };
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    changeStatus: (id) => {
      dispatch(actions.changeStatus(id));
    },
    deleteTask: (id) => {
      dispatch(actions.deleteTask(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);