const chatRoomService = require('../service/chat-room');

exports.getOrCreateChatRoom = async (req, res, next) => {
  try {
    const { participants, name } = req.body;  
    console.log('Participants received:', participants);

    if (!participants || participants.length !== 2) {
      return res.status(400).json({ message: 'Invalid participants' });
    }

    const chatRoom = await chatRoomService.getOrCreateChatRoomByParticipants(participants, name);
    res.status(200).json({ chatRoom });
  } catch (error) {
    console.error('Error creating or retrieving chat room:', error.message);
    res.status(500).json({ message: 'An error occurred while creating or retrieving the chat room', error: error.message });
  }
};

exports.getChatRoomMessages = async (req, res, next) => {
  try {
    const chatRoomId = req.params.chatRoomId;
    const messages = await chatRoomService.getMessagesByChatRoom(chatRoomId);
    res.status(200).json({ messages });
  } catch (error) {
    next(error);
  }
};
exports.getChatRoomMessages = async (req, res, next) => {
  try {
    const chatRoomId = req.params.chatRoomId;
    const messages = await chatRoomService.getMessagesByChatRoom(chatRoomId);
    res.status(200).json({ messages });
  } catch (error) {
    next(error);
  }
};
