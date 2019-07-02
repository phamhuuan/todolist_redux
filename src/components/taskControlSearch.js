import React, {Component} from 'react';
import {Col, Form, Button} from 'react-bootstrap';
import '../App.css';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskControlSearch extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: ''
    };
  }
  
  onSearch = () => {
    this.props.onSearch(this.state.name);
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  }

  render(){
    var {name} = this.state;
    return (
      <Col sm={6}>
        <div className="input-group">
          <Form.Control type="text" 
                        placeholder="Search" 
                        name="name"
                        value={name} 
                        onChange={this.onChange}/>
          <span className="input-group-btn">
            <Button type="button" variant="primary" onClick={this.onSearch}>
              <span className="fa fa-search mr-5"></span>Tìm
            </Button>
          </span>
        </div>
      </Col>
    );
  };
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (filter) => {
      dispatch(actions.searchTask(filter));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskControlSearch);