import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import axios from 'axios';

export default class Task extends Component {

  deleteTask() {
    axios.delete(`http://localhost:4000/tasks/${this.props.task._id}`)
    .then(res => {
        console.log(res);
        window.location.reload();
      }
    );
}

  render() {
    return (
      <Draggable draggableId={this.props.task._id} index={this.props.index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div
              className="task-card"
            >
              <div className="task-card-title">
                <p>{this.props.title}</p>
                <h5 className="task-delete-button" onClick={this.deleteTask.bind(this)}> x </h5>
              </div>
              <div className="task-card-description">
                <p>{this.props.description}</p>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    )
  }
}
