const data = {
  tasks: {
    'task1': { id: '1', title: 'Do sth', description: 'Desription of the task'},
    'task2': { id: '2', title: 'Do sth2', description: 'Desription of the task'},
    'task3': { id: '3', title: 'Do sth3', description: 'Desription of the task'},
    'task4': { id: '4', title: 'Do sth4', description: 'Desription of the task'},
    'task5': { id: '5', title: 'Do sth5', description: 'Desription of the task'},
  },
  columns: {
    'column1': {
      id: '1',
      title: 'Flowchart',
      taskIds: ['task1', 'task2', 'task3', 'task4'],
    },
    'column2': {
      id: '2',
      title: 'Wireframes',
      taskIds: ['task5'],
    }
  },
  columnOrder: ['column1', 'column2'],
}

export default data;
