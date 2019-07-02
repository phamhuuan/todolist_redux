import React, { Component } from 'react';
import { Table, Form } from 'react-bootstrap';
import '../App.css';
import TaskItem from './taskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import { filter, reverse, sortBy } from 'lodash';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    var filter = {
      name: name === 'filterName' ? value : this.state.filterName,
      status: name === 'filterStatus' ? value : this.state.filterStatus
    }
    this.props.onFilter(filter);
    this.setState({
      [name]: value,
    });
  }
  render() {
    var { tasks, filterTask, searchTask, sortTask } = this.props;//var tasks = this.props.task;
    var { filterName, filterStatus } = this.state;
    //filter
    if (filterTask.name) {
      tasks = filter(tasks, (task) => {
        return task.name.toLowerCase().indexOf(filterTask.name.toLowerCase()) !== -1;
      });
    }
    tasks = filter(tasks, (task) => {
      if (filterTask.status === -1) return task;
      else return task.status === (filterTask.status === 1 ? false : true);
    });
    //search
    tasks = filter(tasks, (task) => {
      return task.name.toLowerCase().indexOf(searchTask.toLowerCase()) !== -1;
    });
    //sort
    if (sortTask.by === 'name') {
      tasks = sortBy(tasks, ['name', 'status']);
      if(sortTask.value === -1) tasks = reverse(tasks);
    }
    else {
      tasks = sortBy(tasks, ['status', 'value']);
      if(sortTask.value === 1) tasks = reverse(tasks);
    }
    var elementTask = tasks.map((task, index) => {
      return <TaskItem
        key={task.id}
        index={index}
        task={task} />
    });
    return (
      <Table className="mt-10" striped bordered hover>
        <thead>
          <tr>
            <th width='5%' className="text-center">STT</th>
            <th width='45%' className="text-center">Tên</th>
            <th width='20%' className="text-center">Độ quan trọng</th>
            <th width='30%' className="text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width='5%'></td>
            <td width='45%'>
              <Form.Control type="text" name="filterName" value={filterName} onChange={this.onChange}></Form.Control>
            </td>
            <td width='20%'>
              <Form.Control as="select" name="filterStatus" value={filterStatus} onChange={this.onChange}>
                <option value={-1}>Tất cả</option>
                <option value={0} >Quan trọng</option>
                <option value={1} >Không quan trọng</option>
              </Form.Control>
            </td>
            <td width='30%'></td>
          </tr>
          {elementTask}
        </tbody>
      </Table>
    );
  };
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilter: (filter) => {
      dispatch(actions.filterTask(filter));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);