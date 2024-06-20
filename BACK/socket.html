<!DOCTYPE html>
<html>
<head>
  <title>Chat App</title>
  <script src="/socket.io/socket.io.js"></script>
</head>
<body>
  <div id="chat"></div>
  <input type="text" id="messageInput" />
  <button id="sendButton">Send</button>

  <script>
    const socket = io();

    document.getElementById('sendButton').addEventListener('click', () => {
      const messageContent = document.getElementById('messageInput').value;
      const senderId = 'exampleSenderId';  // Replace with actual senderId
      const receiverId = 'exampleReceiverId';  // Replace with actual receiverId
      socket.emit('sendMessage', { senderId, receiverId, messageContent });
    });

    socket.on('receiveMessage', (data) => {
      const chatDiv = document.getElementById('chat');
      const messageElement = document.createElement('p');
      messageElement.textContent = data.content;
      chatDiv.appendChild(messageElement);
    });
  </script>
</body>
</html>