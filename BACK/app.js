const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const messageRoutes = require('./routes/exchangeMessage');
const authRoutes = require('./routes/auth');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    credentials: true
  }
});

app.use(bodyParser.json());
app.use(cors());

const authMiddleware = require('./middleware/is-auth');

app.use('/messages', authMiddleware, messageRoutes);
app.use('/auth', authRoutes);

app.use((error, req, res, next) => {
  console.error(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

// app.use(express.static(path.join(__dirname, 'path-to-your-angular-build-directory')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'path-to-your-angular-build-directory', 'index.html'));
// });

// mongoose.connect('mongodb+srv://boramenerja:bora2000@cluster0.fzoxfay.mongodb.net/chatapp')
//   .then(result => {
    io.on('connection', (socket) => {
      console.log('a user connected');

      socket.on('disconnect', () => {
        console.log('user disconnected');
      });

      socket.on('message', (data) => {
        console.log(data)
        // Broadcast the message to other users
        // io.emit('message', data);
      });
    });
    server.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  // })
  // .catch(err => {
  //   console.error('Failed to connect to MongoDB', err);
  // });

module.exports = { app, io };

