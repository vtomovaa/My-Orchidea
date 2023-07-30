import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private userService: UserService){
      userService.getProfileData().subscribe({
        error: (err) => {
          // console.log(err)
          userService.logout()
        }
      })
  }
}
