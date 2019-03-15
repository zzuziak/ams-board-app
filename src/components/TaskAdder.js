import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Draggable } from 'react-draggable';

class TaskAdder extends Component {
  constructor(props) {
     super(props);

     this.state = {
       title: "",
       description: "",
       isHidden: true
     };

     this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
     this.showFrom = this.showForm.bind(this);
   }


  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {

    const task = {
      title: this.state.title,
      description: this.state.description
    }

    axios.post('http://localhost:4000/tasks/create', task)
    .then(res => {
        console.log(res);
        }
      );

      this.setState({
        title: '',
        desctiption: '',
        isHidden: true
      })
  }

  showForm() {
    console.log("hey");
    this.setState(state => ({
      isHidden: !this.state.isHidden
    }));
  }

  render() {
    const display = this.state.isHidden ? {display: 'none', width: '400px !important'} : {};

    return (
      <div className="task-adder">
        <div className="task-adder-label">
          <p>New task </p>
          <button
            className="btn btn-info"
            onClick={this.showForm.bind(this)}> + </button>
        </div>
        <div className="form-group task-adder-form" style={display}>
          <form onSubmit={this.onSubmit}>
            <input
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            type='text'
            placeholder="Task title"
            className="form-control"
          />
            <textarea
            name="description"
            value={this.state.description}
            onChange={this.onChange}
            placeholder="Task description"
            className="form-control form-field"
            rows='5'
            />
          <input type='submit' value="Add task +" className="btn btn-info submit-btn"/>
          </form>
        </div>
      </div>
    )
  }
}

export default TaskAdder;
