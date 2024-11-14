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
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

app.use(bodyParser.json());
app.use(cors());

const authMiddleware = require('./middleware/is-auth');
const socketAuth = require('./middleware/socket-auth');

app.use('/messages', authMiddleware, messagesRoutes);
app.use('/auth', authRoutes);
app.use('/message', messageRoutes);
app.use('/users', userRoutes);
app.use('/chat-rooms', chatRoomRoutes);

app.use((error, req, res, next) => {
  console.error(error);
  const status = error.statusCode || 500;
  res.status(status).json({ message: error.message });
});

const users = {};// List of connected users

mongoose.connect('mongodb+srv://boramenerja:bora2000@cluster0.fzoxfay.mongodb.net/chatapp')//regjistron routet ne entry point 
  .then(result => {
    io.use(socketAuth);

    io.on('connection', async (socket) => {
      console.log('A user connected:', socket.user.username);// Assuming decoded token has 'username'
      users[socket.id] = socket.user.username;
      io.emit('users', Object.values(users));

      socket.on('disconnect', () => {
        console.log('User disconnected:', socket.user.username);
        delete users[socket.id];
        io.emit('users', Object.values(users));
      });

      socket.on('message', async (data) => {//handle mesazhet
        console.log('Message received:', data);

        // Save message to the database
        try {
          const message = await MessageService.saveMessage(data.chatRoomId, data.senderId, data.content);
          io.to(data.chatRoomId).emit('message', message);
        } catch (error) {
          console.error('Error saving message:', error);
        }
      });

      // Send initial chat rooms
      socket.emit('chat-rooms', await ChatRoomService.getAllChatRooms());      // Emit chat rooms and current users
      // Update users list for the current user
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
