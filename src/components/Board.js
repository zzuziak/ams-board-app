import React, { Component } from 'react';
import Column from './Column';
import TopBar from './TopBar';
import TaskAdder from './TaskAdder';
import { Container, Row } from 'react-bootstrap';
import { DragDropContext } from 'react-beautiful-dnd';
import { columns, columnOrder } from '../data.js';
import axios from 'axios';

export default class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: columns,
      tasks: {},
      columnOrder: columnOrder
    }
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:4000/tasks/')
      .then(res => {
        let jsonTasks = res.data;
        let fetchedTasks = {};
        let fetchedTasksIds = [];
        jsonTasks.forEach(task => {
          fetchedTasks[`${task._id}`] = task;
          fetchedTasksIds.push(task._id);
        })

        const firstColumn = this.state.columns[1];
        const updatedColumn = {
          ...firstColumn,
          taskIds: fetchedTasksIds
        }

        const newState = {
          ...this.state,
          tasks: fetchedTasks,
          columns: {
            ...this.state.columns,
            [updatedColumn.id]: updatedColumn,
          },
        }
        this.setState(newState);

        // this.setState(newState, () => console.log(this.state));
      })
      .catch(function(err) {
        console.log(err);
      })
  }
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
        <div className="column-container">
          <Container fluid='true'>
            <Row>
              <DragDropContext onDragEnd={this.onDragEnd}>
              {this.state.columnOrder.map(columnId => {
                  const column = this.state.columns[columnId];
                  const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
                  return <Column column={column} key={column.id} tasks={tasks} />
                })
                }
              </DragDropContext>
            </Row>
          </Container>
        </div>
        <TaskAdder />
      </div>
    )
  }
}
