import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

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
    return this.httpClient.post<{ token: string }>(`${this.appUrl}/login`, data)
      .pipe(
        tap(response => {
          localStorage.setItem('access_token', response.token);
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
  
}


