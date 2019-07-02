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
    this.props.deleteTask(this.props.task.id);
    this.props.onCloseForm();
  }

  editTask = () => {
    this.props.onOpenForm();
    this.props.editTask(this.props.task);
  }

  render(){
    return (
      <tr>
        <td>{this.props.index+1}</td>
        <td>{this.props.task.name}</td>
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
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    editTask: (task) => {
      dispatch(actions.editTask(task));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);