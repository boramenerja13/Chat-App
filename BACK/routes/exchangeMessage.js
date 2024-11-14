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
