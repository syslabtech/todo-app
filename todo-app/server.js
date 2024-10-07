require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/users', require('./routes/users'));
app.use('/todos', require('./routes/todos'));

app.get('/', (req, res) => {
  res.send('Welcome to TO-APP');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
