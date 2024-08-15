import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000'); 
  }

  // Listen for individual messages
  public onMessage(callback: (data: any) => void): void {
    this.socket.on('message', callback);
  }

  // Send messages to the server
  public sendMessage(message: string): void {
    console.log('message sent');
    this.socket.emit('message', message);
  }

  // Listen for user list updates
  public onUserListUpdate(callback: (users: any[]) => void): void {
    this.socket.on('userListUpdate', callback);
  }

  // Listen for chat room list updates
  public onChatRoomListUpdate(callback: (chatRooms: any[]) => void): void {
    this.socket.on('chatRoomListUpdate', callback);
  }
}
