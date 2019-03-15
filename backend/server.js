const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const taskRoutes = express.Router();

let Task = require('./task.model');

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

taskRoutes.route('/create').post(function(req,res) {
  let task = new Task(req.body);
  task.save()
    .then(task => {
      res.status(200).json({'task': 'task created successfully'});
    })
    .catch(err => {
      console.log(err);
      res.status(400).send('Failed to create a task')
    })
})


app.use('/tasks', taskRoutes);


app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
})
