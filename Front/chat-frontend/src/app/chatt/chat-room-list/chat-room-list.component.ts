import { Component, OnInit } from '@angular/core';
import { ChatRoomService } from '../services/chat-room.service';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  chatRooms: any[] = [];

  constructor(private chatRoomService: ChatRoomService, private socketService: SocketService) {}

  ngOnInit(): void {
    this.getChatRooms();

    this.socketService.onChatRoomListUpdate().subscribe((chatRooms: any[]) => {
      this.chatRooms = chatRooms;
    });
  }

  getChatRooms(): void {
    this.chatRoomService.getChatRooms().subscribe((chatRooms: any[]) => {
      this.chatRooms = chatRooms;
    });
  }
}

