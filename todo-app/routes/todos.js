const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Create a new todo
router.post('/', (req, res) => {
  const newTodo = new Todo({
    userId: req.body.userId,
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed
  });
  newTodo.save()
    .then(todo => res.json(todo))
    .catch(err => res.status(400).json(err));
});

// Fetch all todos for a specific user
router.get('/:userId', (req, res) => {
  Todo.find({ userId: req.params.userId })
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json(err));
});

// Fetch a specific todo
router.get('/:userId/:todoId', (req, res) => {
  Todo.findOne({ userId: req.params.userId, _id: req.params.todoId })
    .then(todo => res.json(todo))
    .catch(err => res.status(400).json(err));
});

// Update a todo
router.put('/:userId/:todoId', (req, res) => {
  Todo.findOneAndUpdate(
    { userId: req.params.userId, _id: req.params.todoId },
    req.body,
    { new: true }
  )
    .then(todo => res.json(todo))
    .catch(err => res.status(400).json(err));
});

// Delete a todo
router.delete('/:userId/:todoId', (req, res) => {
  Todo.findOneAndDelete({ userId: req.params.userId, _id: req.params.todoId })
    .then(() => res.json({ success: true }))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
