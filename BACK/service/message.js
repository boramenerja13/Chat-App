const Message = require('../models/message');

class MessageService {
  async getMessages() {
    return await Message.find();
  }

  // async addMessage(content) {
  //   const message = new Message({ content });
  //   await message.save();
  //   return message;
  // }

  async saveMessage(chatRoomId, senderId, content) {
    const message = new Message({ chatRoom: chatRoomId, sender: senderId, content });
    await message.save();
    return message;
  }
}

module.exports = new MessageService();
