import React, { Component } from 'react';
import Task from './Task';
import { Col } from 'react-bootstrap';
import { Droppable } from 'react-beautiful-dnd';

export default class Column extends Component {

  render(props) {
    return (
      <Col className="column-style">
      <Droppable droppableId={this.props.column.id}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{height: '80vh'}}
          >
                {this.props.tasks.map((task, index) => <Task
                  task={task}
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  index={index}
                  />)}
                {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Col>
    )
  }
}
