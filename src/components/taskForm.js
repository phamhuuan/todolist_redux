import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import '../App.css';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      status: true,
    };
  }

  componentWillMount(){
    if(this.props.editTask && this.props.editTask.id !== null){
      this.setState({
        id: this.props.editTask.id,
        name: this.props.editTask.name,
        status: this.props.editTask.status
      });
    }else{
      this.onClear();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps && nextProps.editTask){
      this.setState({
        id: nextProps.editTask.id,
        name: nextProps.editTask.name,
        status: nextProps.editTask.status
      });
    }else{
      this.onClear();
    }
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.state.id === '' ? this.props.onAddTask(this.state) : this.props.onSaveTask(this.state);
    this.onCloseForm();
    this.onClear();
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  }

  onClear = () => {
    this.setState({
      name: '',
      status: true,
    });
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  render(){
    if(this.props.displayForm === false) return '';//return null
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {!this.state.id ? 'Thêm công việc' : 'Cập nhật công việc'}
            <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}></span>
          </h3>
        </div>
        <div className="panel-body">
          <Form onSubmit={this.onHandleSubmit}>
            <Form.Group controlId="jobName">
              <Form.Label>Tên</Form.Label>
              <Form.Control type="text" 
                            placeholder="Nhập tên công việc"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}/>
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Label>Mức độ quan trọng</Form.Label>
              <Form.Control as="select"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}>
                <option value={true}>Quan trọng</option>
                <option value={false}>Không quan trọng</option>
              </Form.Control>
              <br/>
              <div className="text-center">
                <Button type="submit" variant="warning">
                  <span className="fa fa-plus mr-5"></span>
                  Lưu lại
                </Button>&nbsp;
                <Button type="button" variant="danger" onClick={this.onClear}>
                  <span className="fa fa-close mr-5"></span>
                  Hủy bỏ
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {//chuyen state tren store thanh props
  return state;
};

const mapDispatchToProps = (dispatch, props) => {//chuyen dispatch thanh props de thuc thi 1 action
  return{
    onAddTask: (task) => {
      dispatch(actions.addTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onSaveTask: (task) => {
      dispatch(actions.saveTask(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);//tham so thu 2 la action