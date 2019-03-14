import React, { Component } from 'react';
import List from './List';
import TopBar from './TopBar';
import { Container, Row } from 'react-bootstrap';
import data from '../initialData';
import { DragDropContext } from 'react-beautiful-dnd';
const lists = ["Flowcharts", "Wireframes", "Prototype", "Development", "Test", "Launch"];

export default class Board extends Component {
  state = data;

  onDragEnd = result => {

  };

  render() {
    return (
      <div className="board-container">
        <div className="top-bar-container">
        </div>
        <div className="list-container">
          <Container fluid='true'>
            <Row>
              <DragDropContext onDragEnd={this.onDragEnd}>
              {this.state.columnOrder.map(columnId => {
                  const column = this.state.columns[columnId];
                  const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
                  return <List column={column} key={column.id} tasks={tasks} />
                })
                }
              </DragDropContext>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
