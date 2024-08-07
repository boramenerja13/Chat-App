const express = require('express');
const router = express.Router();
const messageController = require('../controller/message');

router.get('/', (req, res) => messageController.getMessages(req, res));
router.post('/', (req, res) => messageController.addMessage(req, res));

module.exports = router;
