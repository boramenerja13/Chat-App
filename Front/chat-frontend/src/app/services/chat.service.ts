import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private socket: Socket) { }

  sendMessage(message: string): void {
    this.socket.emit('message', message);
  }

  onMessage(): Observable<string> {
    return this.socket.fromEvent<string>('message');
  }

  getChatRooms(): Observable<string[]> {
    return this.socket.fromEvent<string[]>('chat-rooms');
  }

  getUsers(): Observable<string[]> {
    return this.socket.fromEvent<string[]>('users');
  }
}
