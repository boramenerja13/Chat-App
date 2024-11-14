import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomService {
  private baseUrl = 'http://localhost:3000/api/chat-rooms'; // Adjust the base URL as per your backend API

  constructor(private http: HttpClient) { }

  getMessages(roomId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${roomId}/messages`);
  }

  getOrCreateChatRoom(participants: string[], name: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/find`, { participants, name });
  }
}
