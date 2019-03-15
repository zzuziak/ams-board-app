const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const taskRoutes = express.Router();

let Task = require('./task.model');
let Column = require('./column.model');

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/tasks', {useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB database connection established succesfully");
})

taskRoutes.route('/').get(function(req,res) {
  Task.find(function(err, tasks) {
    if (err) {
      return console.log(err);
    } else {
      return res.json(tasks);
    }
  })
})


taskRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  Task.findById(id, function(err, task) {
    res.json(task);
  });
})

taskRoutes.route('/:id').delete(function(req, res) {
  let id = req.params.id;
  Task.findById(id, function(err, task) {
    Task.remove(task)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send('Failed to delete the task')
    })
  });
})

taskRoutes.route('/create').post(function(req,res) {
  let task = new Task();
  task.title = req.body.title;
  console.log(req.body);
  task.description = req.body.description;
  task.save()
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send('Failed to create a task')
    })
})

taskRoutes.route('/column/update/:id').post(function(req, res) {
  Column.findById(req.params.id, function(err, column) {
    if (!column) {
      res.status(404).send("Column doesns't exist");
    } else {
      column.taskIds = req.body.taskIds;
    }

    column.save()
      .then(column => {
        res.json("Column updated");
      })
      .catch(err => {
        res.status(400).send("Update didn't succeed");
      })
  })
})

app.use('/tasks', taskRoutes);


app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
})
