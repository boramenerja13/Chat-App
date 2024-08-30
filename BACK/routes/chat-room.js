const express = require('express');
const chatRoomController = require('../controller/chat-room');
const isAuth = require ('../middleware/is-auth')
const router = express.Router();

router.post('/find', isAuth, chatRoomController.getOrCreateChatRoom); //kjo duhet bazuar tek participantet
router.get('/:chatRoomId/', chatRoomController.getChatRoomMessages);//get message

module.exports = router;
