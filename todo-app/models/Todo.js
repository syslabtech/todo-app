const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  completed: Boolean
});

module.exports = mongoose.model('Todo', TodoSchema);
