import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { SocketService } from '../../services/socket.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [
    MatCardModule,
    MatIconModule,
    MatListModule
  ], 
  standalone: true
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService, private socketService: SocketService) {}

  ngOnInit(): void {
    this.getUsers();

    this.socketService.onUserListUpdate((users: any[]) => {
      this.users = users;
    });
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users: any[]) => {
      this.users = users;
    });
  }
}
