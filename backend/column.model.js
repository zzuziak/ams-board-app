const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Column = new Schema({
  title: {
    type: String
  },
  taskIds: {
    type: Array
  }
})

module.exports = mongoose.model('Column', Column);
