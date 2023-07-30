import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isEmpty: boolean = false;
  isLoading: boolean = false;
  
  constructor(private userService: UserService) {
  }
  
}
