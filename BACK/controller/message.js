const messageService = require('../service/message');

class MessageController {
  async getMessages(req, res) {
    const messages = await messageService.getMessages();
    res.json(messages);
  }

  async addMessage(req, res) {
    const { content } = req.body;
    const message = await messageService.addMessage(content);
    res.status(201).json(message);
  }
}

module.exports = new MessageController();

exports.saveMessage = async (req, res, next) => {
  try {
    const { chatRoomId, senderId, content } = req.body;
    const message = await messageService.saveMessage(chatRoomId, senderId, content);
    res.status(201).json({ message });
  } catch (error) {
    next(error);
  }
};
