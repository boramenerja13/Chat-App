// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const messagesRoutes = require('./routes/exchangeMessage');
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/message');
const userRoutes = require('./routes/user');
const chatRoomRoutes = require('./routes/chat-room');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // Adjust as needed for your frontend
    methods: ['GET', 'POST'],
    credentials: true
  }
});

app.use(bodyParser.json());
app.use(cors());

const authMiddleware = require('./middleware/is-auth');
const socketAuth = require('./middleware/socket-auth'); // New Socket.io middleware

app.use('/messages', authMiddleware, messagesRoutes);
app.use('/auth', authRoutes);
app.use('/message', messageRoutes);
app.use('/users', userRoutes);
app.use('/chat-rooms', chatRoomRoutes);

app.use((error, req, res, next) => {
  console.error(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

// List of connected users
const users = {};

//regjistron routet ne entry point 
mongoose.connect('mongodb+srv://boramenerja:bora2000@cluster0.fzoxfay.mongodb.net/chatapp')
  .then(result => {
    // Use the new Socket.io middleware
    io.use(socketAuth);

    io.on('connection', (socket) => {
      console.log('A user connected:', socket.user.username); // Assuming decoded token has 'username'

      // Add user to the list
      users[socket.id] = socket.user.username;
      io.emit('users', Object.values(users));

      // Handle user disconnect
      socket.on('disconnect', () => {
        console.log('User disconnected:', socket.user.username);
        delete users[socket.id];
        io.emit('users', Object.values(users));
      });

      // Handle messages
      socket.on('message', (data) => {
        console.log('Message received:', data);
        io.emit('message', data);
      });

      // Emit chat rooms and current users
      socket.emit('chat-rooms', ['General', 'Sports', 'Technology']);
      io.emit('users', Object.values(users));
    });

    server.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.error('Failed to connect to database', err);
  });

module.exports = { app, io };
