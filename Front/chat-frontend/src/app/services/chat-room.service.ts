import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomService {
  private baseUrl = 'http://localhost:3000/api/chat-rooms'; // Adjust the base URL as per your backend API

  constructor(private http: HttpClient) { }

  // Method to get messages for a specific chat room
  getMessages(roomId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${roomId}/messages`);
  }

  // Add more methods for creating chat rooms, sending messages, etc.
}
