import React, {Component} from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';

class TaskItem extends Component{
  showStatus(){
    return (
      <span className={this.props.task.status === true ? "label label-danger" : "label label-success"}
            onClick={this.changeStatus}>
        {this.props.task.status === true ? 'Quang trọng' : 'Không quan trọng'}
      </span>
    );
  }

  changeStatus = () => {
    this.props.task.status = !this.props.task.status;
    this.props.changeStatus(this.props.task);
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
        <td width='5%'>{index+1}</td>
        <td width='45%'>{task.name}</td>
        <td width='20%' className="text-center"> 
          {this.showStatus()}
        </td>
        <td width='30%' className="text-center">
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

export default TaskItem;