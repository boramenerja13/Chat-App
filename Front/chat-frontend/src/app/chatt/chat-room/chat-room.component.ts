import { Component, OnInit } from '@angular/core';
import { ChatRoomService } from '../../services/chat-room.service';
import { ActivatedRoute } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
  standalone: true, 
  imports: [MatListModule, CommonModule] 
})
export class ChatRoomComponent implements OnInit {
  roomId: string = '';
  messages: any[] = [];
  constructor(
    private chatRoomService: ChatRoomService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Get the roomId from the route parameters
    this.roomId = this.route.snapshot.paramMap.get('roomId') || '';
    this.getMessages();
  }

  getMessages(): void {
    this.chatRoomService.getMessages(this.roomId).subscribe((messages) => {
      this.messages = messages;
    });
  }

  // Add more methods as needed, e.g., to send messages
}


