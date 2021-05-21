import {EventEmitter, Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user';
import {map} from "rxjs/operators";
import {UserToken} from "../model/usertoken";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})

export class UserService {
  currentUserSubject: BehaviorSubject<UserToken>;
  currentUser: Observable<UserToken>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserToken {
    return this.currentUserSubject.value;
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${API_URL}/api/signup`, user);
  }

  login(user: User):Observable<User>{
    return this.http.post<User>(`${API_URL}/api/login`, user).pipe(map(user=>{
      localStorage.setItem("user", JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }))
  }

  getProfile(id:number):Observable<User>{
    return this.http.get<User>(`${API_URL}/api/users/${id}`)
  }

  logout(){
    localStorage.removeItem('user');

  }
}
