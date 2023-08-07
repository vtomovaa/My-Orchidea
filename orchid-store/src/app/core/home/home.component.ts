import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { IOrchid } from 'src/app/shared/interfaces/orchid';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent{
  orchids: IOrchid[] | undefined;
  get isLogged() {
    if (this.userService.user) {
      return true
    } else {
      return false
    }
  }
  constructor(private userService: UserService) { 
  }
 
}
