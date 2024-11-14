import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { UserService } from '../../services/user.service';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { ChatRoomService } from '../../services/chat-room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatCardModule
  ]
})
export class UserListComponent implements OnInit {
  users: any[] = [];


  constructor(private userService: UserService, private chatRoomService: ChatRoomService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: any[]) => {
      this.users = users;
    });
  }

  openChatRoom(user: any): void {
    const currentUserId = 'current_user_id_here'; // replace with the actual logged-in user ID
    const participantIds = [currentUserId, user._id];
    const chatRoomName = `${currentUserId}-${user.username}`;

    this.chatRoomService.getOrCreateChatRoom(participantIds, chatRoomName).subscribe(response => {
      const chatRoomId = response.chatRoom._id;
      this.router.navigate([`/chat-room/${chatRoomId}`]);
    });
  }
}
