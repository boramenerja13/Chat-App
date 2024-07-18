import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatListModule],
  standalone: true
})
export class ChatComponent implements OnInit {
  messages: string[] = [];
  newMessage = new FormControl('');

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.onMessage((message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage(): void {
    const message = this.newMessage.value;
    if (message && message.trim()) {
      this.socketService.sendMessage(message.trim());
      this.newMessage.setValue('');
    }
  }
}
