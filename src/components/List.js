import React, { Component } from 'react';
import Task from './Task';
import { Col } from 'react-bootstrap';
import { Droppable } from 'react-beautiful-dnd';

export default class List extends Component {
  render(props) {
    return (
      <Droppable droppableId={this.props.column.id}>
        {provided => (
          <Col className="list-column"
            ref={provided.innerRef}
            innerRef={provided.innerRef}
            {...provided.droppableProps}
            >
            <p>{this.props.column.title}</p>
              {this.props.tasks.map((task, index) => <Task
                task={task}
                title={task.title}
                description={task.description}
                index={index}
                />)}
              {provided.placeholder}
          </Col>
        )}
      </Droppable>
    )
  }
}
