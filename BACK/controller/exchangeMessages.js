const chatService = require('../service/exchangeMessages');
const io = require('../app').io;

exports.sendMessage = async (req, res, next) => {
  const { senderId, receiverId, messageContent } = req.body;

  try {
    const message = await chatService.sendMessage(senderId, receiverId, messageContent);
    io.emit('receiveMessage', message); // Emit the message to all connected clients
    res.json({ message: 'Message sent successfully', data: message });
  } catch (error) {
    next(error);
  }
};

exports.getMessages = async (req, res, next) => {
  const { userId1, userId2 } = req.params;

  try {
    const messages = await chatService.getMessages(userId1, userId2);
    res.json({ messages });
  } catch (error) {
    next(error);
  }
};