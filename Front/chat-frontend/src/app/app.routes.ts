import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChatComponent } from './chatt/chat/chat.component';
import { HeaderComponent } from './shared/header/header.component';
import { MessageInputComponent } from './chatt/message-input/message-input.component';
// import { ProfileComponent } from './shared/profile/profile.component';
// import { SettingsComponent } from './shared/settings/settings.component';
// import { MessageListComponent } from './chatt/message-list/message-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'header', component: HeaderComponent},
  { path: 'message', component: MessageInputComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'settings', component: SettingsComponent },
  // { path: 'message/list', component: MessageListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { routes };
