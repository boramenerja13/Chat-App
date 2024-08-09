const ChatRoom = require('../models/chat-room.model');

class ChatRoomService {
  async getChatRooms() {
    return await ChatRoom.find();
  }

  async addChatRoom(name) {
    const chatRoom = new ChatRoom({ name });
    await chatRoom.save();
    return chatRoom;
  }
}

module.exports = new ChatRoomService();

