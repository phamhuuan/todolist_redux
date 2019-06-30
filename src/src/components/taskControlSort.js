import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import '../App.css';

class TaskControlSort extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: 0
    }
  }
  onClick = (sortBy, sortValue, value) => {
    this.setState({
      value: value,
    });
    this.props.onSort(sortBy, sortValue);
  }
  render(){
    var {value} = this.state;
    return (
      <Col sm={6}>
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" 
                  type="button" 
                  id="triggerId" 
                  data-toggle="dropdown" 
                  aria-haspopup="true"
                  aria-expanded="true">
            Sắp xếp
            <span className="fa fa-caret-square-o-down ml-5"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="triggerId">
            <li onClick={() => this.onClick('name', 1, 0)}>
              {/* eslint-disable-next-line */}
              <a role="button" className={value === 0 ? 'sort-selected' : ''}>
                <span className="fa fa-sort-alpha-asc pr-5">
                  Tên A-Z
                </span>
              </a>
            </li>
            <li onClick={() => this.onClick('name', -1, 1)}>
              {/* eslint-disable-next-line */}
              <a role="button" className={value === 1 ? 'sort-selected' : ''}>
                <span className="fa fa-sort-alpha-asc pr-5">
                  Tên Z-A
                </span>
              </a>
            </li>
            <li role="separator" className="divider"></li>
            <li onClick={() => this.onClick('status', 1, 2)}>
              {/* eslint-disable-next-line */}
              <a role="button" className={value === 2 ? 'sort-selected' : ''}>
                Quang trọng
              </a>
            </li>
            <li onClick={() => this.onClick('status', -1, 3)}>
              {/* eslint-disable-next-line */}
              <a role="button" className={value === 3 ? 'sort-selected' : ''}>
                Không quan trọng
              </a>
            </li>
          </ul>
        </div>
      </Col>
    );
  };
}

export default TaskControlSort;