import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
export default class Task extends Component {
  render() {
    const color = `backgroundColor: ${props => (props.isDragging ? 'red' : 'white')}`
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div
              className="task-card"
              style={{color}}
            >
              <div className="task-card-title">
                <h3>{this.props.title}</h3>
                <h3> x </h3>
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
