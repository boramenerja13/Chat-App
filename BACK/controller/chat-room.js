const chatRoomService = require('../services/chat-room.service');

class ChatRoomController {
  async getChatRooms(req, res) {
    try {
      const chatRooms = await chatRoomService.getChatRooms();
      res.json(chatRooms);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async addChatRoom(req, res) {
    try {
      const { name } = req.body;
      const chatRoom = await chatRoomService.addChatRoom(name);
      res.status(201).json(chatRoom);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ChatRoomController();
