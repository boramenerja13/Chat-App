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
