// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { io, Socket } from 'socket.io-client';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private socket: Socket;

//   constructor(private httpClient: HttpClient) {
//     this.socket = io('http://localhost:3000'); 
//   }

//   register(data: { email: string, password: string, confirmPassword: string }) {
//     return new Promise((resolve, reject) => {
//       this.socket.emit('register', data);
//       this.socket.on('register_response', (response) => {
//         if (response.error) {
//           reject(response.error);
//         } else {
//           resolve(response);
//         }
//       });
//     });
//   }

//   login(data: { email: string, password: string }) {
//     return new Promise((resolve, reject) => {
//       this.socket.emit('login', data);
//       this.socket.on('login_response', (response) => {
//         if (response.error) {
//           reject(response.error);
//         } else {
//           resolve(response);
//         }
//       });
//     });
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private appUrl = 'http://localhost:3000/auth';

  constructor(private httpClient: HttpClient) {}

  register(data: { email: string; password: string; confirmPassword: string }) {
    return this.httpClient.post(`${this.appUrl}/register`, data).toPromise();
  }

  login(data: { email: string; password: string }) {
    return this.httpClient.post(`${this.appUrl}/login`, data);
  }
}


