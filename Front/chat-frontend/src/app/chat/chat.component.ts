import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Socket.IO Client Example</h1>
      <p>{{ message }}</p>
    </div>
  `
})
export class ChatComponent implements OnInit {
  private socket!: io.Socket;
  message!: string;

  ngOnInit() {
    // Connect to socket.io server
    this.socket = io.connect('http://localhost:3000');

    // Listen for 'message' event from server
    this.socket.on('message', (data: any) => {
      this.message = data;
    });

    // Example: Emit a 'chat message' event to the server
    this.socket.emit('chat message', 'Hello from Angular client!');
  }
}