const ChatRoom = require('../models/chat-room');
const Message = require('../models/message');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

exports.getOrCreateChatRoomByParticipants = async (participantIds, name) => {

  const objectIds = participantIds.map(id => new mongoose.Types.ObjectId(id))
  
  let chatRoom = await ChatRoom.findOne({
    participants: { $all: objectIds }
  });
  
  if (!chatRoom) {
    chatRoom = new ChatRoom({ participants: objectIds, name });
    await chatRoom.save();
  }
  
  return chatRoom;
};

exports.getMessagesByChatRoom = async (chatRoomId) => {
  return await Message.find({ chatRoom: chatRoomId }).populate('sender').sort('timestamp');
};
