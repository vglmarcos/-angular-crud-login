import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.url = 'http://localhost:3000/api'
  }

  signUp(user): any {
    return this.http.post<any>(this.url + '/signup', user);
  }

  signIn(user): any {
    return this.http.post<any>(this.url + '/signin', user);
  }

  loggedIn(): boolean {
    if(localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/signIn']);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
