import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTask } from '../actions/index';
import axios from 'axios';


class TaskAdder extends Component {
  constructor(props) {
     super(props);

     this.state = {
       title: "",
       description: ""
     };

     this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
   }


  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const task = {
      title: this.state.title,
      description: this.state.description
    }

    axios.post('http://localhost:4000/tasks/create', task)
    .then(res => {
        console.log(res);
        }
      );


    // this.props.createTask(task);
    // save in db

  }

  render() {
    return (
      <div className="task-adder">
        <div className="task-adder-label">
          <p>New task </p>
        </div>
        <div className="form-group task-adder-form">
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
            <input type='submit' value="Add task +" className="btn btn-primary submit-btn"/>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, { createTask })(TaskAdder);
