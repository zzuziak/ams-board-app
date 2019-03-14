import React, { Component } from 'react';
import List from './List';
import TopBar from './TopBar';
import { Container, Row } from 'react-bootstrap';
import data from '../initialData';
import { DragDropContext } from 'react-beautiful-dnd';

export default class Board extends Component {
  state = data;

  onDragEnd = result => {
    const {destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {

      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      }

      this.setState(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    this.setState(newState);
  };

  render() {
    return (
      <div className="board-container">
        <div className="top-bar-container">
          <TopBar data={this.state} />
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
