// socket.service.ts in your Angular project
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

  public onMessage(callback: (data: any) => void): void {
    this.socket.on('message', callback);
  }

  // Send messages to the server
  public sendMessage(message: string): void {
    console.log('mesage sent')
    this.socket.emit('message', message);
  }
}
