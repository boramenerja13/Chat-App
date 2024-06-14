const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const messageRoutes = require('./routes/exchangeMessage');
const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());

const authMiddleware = require('./middleware/is-auth');

app.use('/messages', authMiddleware, messageRoutes);
app.use('/auth', authRoutes);

app.use((error, req, res, next) => {
  console.error(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

mongoose.connect('mongodb+srv://boramenerja:bora2000@cluster0.fzoxfay.mongodb.net/chatapp')
  .then(result => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

module.exports = app;