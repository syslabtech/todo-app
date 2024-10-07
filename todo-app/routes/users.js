const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a new user
router.post('/', async (req, res) => {
  try {
    const { name, email, username, password } = req.body;

    // Validate request data
    if (!name || !email || !username || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the email or username already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Email or username already exists' });
    }

    const newUser = new User({ name, email, username, password });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: 'Duplicate key error', keyValue: err.keyValue });
    }
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Delete a user and their todos
router.delete('/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Delete the user
    await User.findByIdAndDelete(userId);

    // Check if the Todo model is available
    if (typeof Todo !== 'undefined') {
      // Delete associated todos
      const deleteResult = await Todo.deleteMany({ userId: userId });

      // Optionally, check if any todos were deleted
      if (deleteResult.deletedCount === 0) {
        console.warn('No todos were deleted for user:', userId);
      }
    } else {
      console.log('Todo model not available, skipping todo deletion.');
    }

    // Respond with a success message
    return res.status(200).json({ success: true, msg: 'User and associated todos deleted' });
  } catch (err) {
    // Handle the error and respond with a 400 status code
    console.error('Error deleting user:', err);
    return res.status(400).json({ msg: 'Error occurred while deleting user', error: err.message });
  }
});



module.exports = router;
