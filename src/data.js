const columns = {
  '1': {
    id: '1',
    title: 'Flowchart',
    taskIds: ['1', '2', '3', '4'],
  },
  '2': {
    id: '2',
    title: 'Wireframes',
    taskIds: [],
  },
  '3': {
    id: '3',
    title: 'Prototype',
    taskIds: [],
  },
  '4': {
    id: '4',
    title: 'Development',
    taskIds: [],
  },
  '5': {
    id: '5',
    title: 'Test',
    taskIds: [],
  },
  '6': {
    id: '6',
    title: 'Launch',
    taskIds: [],
  }
}

const tasks = {
  "1": { _id: '1', title: 'Do sth', description: 'Desription of the task'},
  "2": { _id: '2', title: 'Do sth2', description: 'Desription of the task, longer in this case. Checking how element is growing. If works fine the card will extend appropriately.'},
  "3": { _id: '3', title: 'Do sth3', description: 'Desription of the task'},
  "4": { _id: '4', title: 'Do sth4', description: 'Desription of the task'},
  "5": { _id: '5', title: 'Do sth5', description: 'Desription of the task'}
}

const columnOrder =  ['1', '2', '3', '4', '5', '6']

export { columns, tasks, columnOrder };
