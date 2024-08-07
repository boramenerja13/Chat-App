// import { Component, OnInit } from '@angular/core';
// import { ChatService } from '../../services/chat.service';

// @Component({
//   selector: 'app-message-list',
//   templateUrl: './message-list.component.html',
//   styleUrls: ['./message-list.component.css']
// })
// export class MessageListComponent implements OnInit {
//   messages: string[] = [];

//   constructor(private chatService: ChatService) { }

//   ngOnInit(): void {
//     this.chatService.onMessage().subscribe(message => {
//       this.messages.push(message);
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class MessageListComponent implements OnInit {
  messages: string[] = [];

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.onMessage((message: string) => {
      this.messages.push(message);
    });
  }
}
