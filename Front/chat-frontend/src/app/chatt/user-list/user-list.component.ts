// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatListModule } from '@angular/material/list';
// import { UserService } from '../../services/user.service';

// @Component({
//   selector: 'app-user-list',
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.css'],
//   standalone: true,
//   imports: [
//     CommonModule,
//     MatListModule
//   ]
// })
// export class UserListComponent implements OnInit {
//   users: any[] = [];

//   constructor(private userService: UserService) {}

//   ngOnInit(): void {
//     this.userService.getUsers().subscribe((users: any[]) => {
//       this.users = users;
//     });
//   }
// }
