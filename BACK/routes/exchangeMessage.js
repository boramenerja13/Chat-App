// const express = require('express');
// const exchangeMessageController = require('../controller/exchangeMessages');
// const isAuth = require('../middleware/is-auth')

// const router = express.Router();

// router.post('/send', isAuth, exchangeMessageController.sendMessage);

// router.get('/:userId1/:userId2', exchangeMessageController.getMessages);

// module.exports = router;

const express = require('express');
const router = express.Router();

// Mock data
const chatRooms = ['General', 'Sports', 'Technology'];
const users = ['User1', 'User2', 'User3'];

// Endpoint to get chat rooms
router.get('/rooms', (req, res) => {
  res.json(chatRooms);
});

// Endpoint to get users
router.get('/users', (req, res) => {
  res.json(users);
});

module.exports = router;
