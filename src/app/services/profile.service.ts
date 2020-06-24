import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url: string = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getProfile(): any {
    return this.http.get<any>(this.url + '/profile');
  }

  deleteUser(id: string): any {
    localStorage.removeItem('token');
    this.router.navigate(['/signIn']);
    return this.http.post<any>(this.url + '/deleteUser', {id});
  }
}
