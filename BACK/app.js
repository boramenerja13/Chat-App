const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const messagesRoutes = require('./routes/exchangeMessage');
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/message');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

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

app.use('/messages', authMiddleware, messagesRoutes);
app.use('/auth', authRoutes);
app.use('/message', messageRoutes);


app.use((error, req, res, next) => {
  console.error(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

//regjistron routet ne entry point 
mongoose.connect('mongodb+srv://boramenerja:bora2000@cluster0.fzoxfay.mongodb.net/chatapp')
  .then(result => {
    io.on('connection', (socket) => {
      console.log('a user connected');

      socket.on('disconnect', () => {
        console.log('user disconnected');
      });

      socket.on('message', (data) => {
        console.log(data);
        io.emit('message', data);
      });

      // Emit chat rooms and users when a client connects
      socket.emit('chat-rooms', ['General', 'Sports', 'Technology']);
      socket.emit('users', ['User1', 'User2', 'User3']);
    });

    server.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.error('Failed to connect to database', err);
  });

module.exports = { app, io };
