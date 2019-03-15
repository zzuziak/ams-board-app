import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
export default class Task extends Component {
  render() {
    console.log(this.props.task.id);
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
                <h5> x </h5>
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
