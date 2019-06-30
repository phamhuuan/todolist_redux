import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import '../App.css';
import TaskControlSearch from './taskControlSearch';
import TaskControlSort from './taskControlSort';

class TaskControl extends Component{
  render(){
    return (
      <Row className="mt-10">
        <TaskControlSearch onSearch={this.props.onSearch}/>
        <TaskControlSort onSort={this.props.onSort}/>
      </Row>
    );
  };
}

export default TaskControl;
