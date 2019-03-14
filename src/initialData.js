const data = {
  tasks: {
    'task1': { id: 'task1', title: 'Do sth', description: 'Desription of the task'},
    'task2': { id: 'task2', title: 'Do sth2', description: 'Desription of the task'},
    'task3': { id: 'task3', title: 'Do sth3', description: 'Desription of the task'},
    'task4': { id: 'task4', title: 'Do sth4', description: 'Desription of the task'},
    'task5': { id: 'task5', title: 'Do sth5', description: 'Desription of the task'},
  },
  columns: {
    'column1': {
      id: 'column1',
      title: 'Flowchart',
      taskIds: ['task1', 'task2', 'task3', 'task4'],
    },
    'column2': {
      id: 'column2',
      title: 'Wireframes',
      taskIds: ['task5'],
    },
    'column3': {
      id: 'column3',
      title: 'Prototype',
      taskIds: [],
    },
    'column4': {
      id: 'column4',
      title: 'Development',
      taskIds: [],
    },
    'column5': {
      id: 'column5',
      title: 'Test',
      taskIds: [],
    },
    'column6': {
      id: 'column6',
      title: 'Launch',
      taskIds: [],
    }
  },
  columnOrder: ['column1', 'column2', 'column3', 'column4', 'column5', 'column6'],
}

export default data;
