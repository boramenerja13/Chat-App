const express = require('express');
const router = express.Router();
const ChatRoomController = require('../controllers/chat-room.controller');

router.get('/chat-rooms', ChatRoomController.getChatRooms);

module.exports = router;
