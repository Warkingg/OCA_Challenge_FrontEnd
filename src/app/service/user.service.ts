import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {
}
  register(user: User): Observable<User> {
    return this.http.post<User>(`${API_URL}/api/signup`, user);
  }

  login(user: User):Observable<User>{
    return this.http.post<User>(`${API_URL}/api/login`, user)
  }
}
