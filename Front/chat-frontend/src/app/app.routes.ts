import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChatComponent } from './chatt/chat/chat.component';
import { HeaderComponent } from './shared/header/header.component';
import { MessageInputComponent } from './chatt/message-input/message-input.component';
import { UserListComponent } from './chatt/user-list/user-list.component';
import { ChatRoomComponent } from './chatt/chat-room/chat-room.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'header', component: HeaderComponent},
  { path: 'message', component: MessageInputComponent },
  { path: 'users', component: UserListComponent },
  { path: 'chat-room/:roomId', component: ChatRoomComponent },
  { path: '**', redirectTo: '/users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { routes };