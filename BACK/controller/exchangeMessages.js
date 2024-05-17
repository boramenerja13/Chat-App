const chatService = require('../service/exchangeMessages');

exports.sendMessage = async (req, res, next) => {
  const { senderId, receiverId, messageContent } = req.body;

  try {
    const message = await chatService.sendMessage(senderId, receiverId, messageContent);
    res.json({ message: 'Message sent successfully', data: message });
  } catch (error) {
    next(error);
  }
};
//betwween two users
exports.getMessages = async (req, res, next) => {
  const { userId1, userId2 } = req.params;

  try {
    const messages = await chatService.getMessages(userId1, userId2);
    res.json({ messages });
  } catch (error) {
    next(error);
  }
};