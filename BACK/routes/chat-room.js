const express = require('express');
const router = express.Router();
const chatRoomController = require('../controllers/chat-room');

router.get('/', (req, res) => chatRoomController.getChatRooms(req, res));
router.post('/', (req, res) => chatRoomController.addChatRoom(req, res));

module.exports = router;
