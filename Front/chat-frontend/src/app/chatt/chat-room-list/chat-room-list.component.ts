import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ChatRoomService } from '../../services/chat-room.service';

@Component({
  selector: 'app-chat-room-list',
  templateUrl: './chat-room-list.component.html',
  styleUrls: ['./chat-room-list.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class ChatRoomListComponent implements OnInit {
  chatRooms: any[] = [];

  constructor(private chatRoomService: ChatRoomService) {}

  ngOnInit(): void {
    this.chatRoomService.getChatRooms().subscribe((rooms: any[]) => {
      this.chatRooms = rooms;
    });
  }
}
