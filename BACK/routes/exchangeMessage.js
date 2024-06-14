const express = require('express');
const exchangeMessageController = require('../controller/exchangeMessages');

const router = express.Router();

router.post('/send', exchangeMessageController.sendMessage);

router.get('/:userId1/:userId2', exchangeMessageController.getMessages);

module.exports = router;