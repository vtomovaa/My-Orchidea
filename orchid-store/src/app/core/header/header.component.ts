import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  view: boolean = false;
  get isLogged(): boolean{
    if(this.userService.user){
      return true
    }else {
      return false
    }
  }
  constructor(private userService: UserService, private router: Router){}

  logout(){
      this.userService.logout()
      this.router.navigate(['/'])

  }
  menuClick(){
    this.view = !this.view
  }
  clicking(){
    this.view = false;
  }
}
