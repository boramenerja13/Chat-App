const ChatRoom = require('../models/chat-room.model');

exports.getChatRooms = async () => {
  return await ChatRoom.find({});
};
