import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { IUser } from '../shared/interfaces/user';
import { IOrchid } from '../shared/interfaces/orchid';

import {environment} from '../../environments/environment'
const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: null | IUser | undefined ;
  userInfo: null | Object = null;
  constructor(private http: HttpClient, private router: Router) {}

  get isLogged(): boolean {
    if(this.user){
      return true
    }else{
      return false
    }
  }

  register(data: {}){
    return this.http.post<IUser>(`${API_URL}/users/register`, data).pipe(
      tap((user) => {
        this.user = user
        localStorage.setItem('token', this.user.accessToken)
      })
    )
  }
  login(data: {}){
    return this.http.post<IUser>(`${API_URL}/users/login`, data).pipe(
      tap((user) => {
        this.user = user
        localStorage.setItem('token', this.user.accessToken)
      })
    )
  }
  logout(){
    this.user = null;
    localStorage.removeItem('token')
    return this.http.delete(`${API_URL}/users/logout`).subscribe()
  }
  getProfileData(){
    return this.http.get<IUser>(`${API_URL}/users/me`).pipe(
      tap((user) => {
        if(user){
          this.user = user;
        }
      })
    )
  }
  getProfileOrchids(){
    return this.http.get<IOrchid[]>(`${API_URL}/orchids/myorchids`);
  }
  getUserIP(){
    return this.http.get<any>("https://api.ipify.org/?format=json", { withCredentials: false });
  }
  getUnknownUserInfo(username: string | null){
    return this.http.get<IUser>(`${API_URL}/user/${username}`)
  }
  getIPaddress(ip: any){
    return this.http.post(`${API_URL}/geolocation`, {ip})
  }
}
