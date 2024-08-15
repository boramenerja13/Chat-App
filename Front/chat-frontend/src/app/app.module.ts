import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { ChatComponent } from './chatt/chat/chat.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MessageInputComponent } from './chatt/message-input/message-input.component'; 
import { MessageListComponent } from './chatt/message-list/message-list.component';
import { UserListComponent } from './chatt/user-list/user-list.component';
import { SharedModule } from './shared/shared.module';
import { SocketService } from './services/socket.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { ChatRoomService } from './services/chat-room.service';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    MessageInputComponent,
    MessageListComponent,
    UserListComponent, 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [
    SocketService,
    UserService,
    ChatRoomService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
