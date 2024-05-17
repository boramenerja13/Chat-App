const Message = require('../models'); //do krijoj nje model per mesazhet 

exports.sendMessage = async (senderId, receiverId, messageContent) => {
  try {
    const message = new Message({
      sender: senderId,
      receiver: receiverId,
      content: messageContent,
      timestamp: new Date(),
    
    });

    await message.save();
    return message;
  } catch (error) {
    throw error;
  }
};

// in between
exports.getMessages = async (userId1, userId2) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: userId1, receiver: userId2 },
        { sender: userId2, receiver: userId1 }
      ]
    }).sort({ timestamp: 1 });

    return messages;
  } catch (error) {
    throw error;
  }
};