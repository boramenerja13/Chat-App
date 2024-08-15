const ChatRoomService = require('../services/chat-room.service');

exports.getChatRooms = async (req, res) => {
  try {
    const chatRooms = await ChatRoomService.getChatRooms();
    res.json(chatRooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
