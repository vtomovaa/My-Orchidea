import { Component } from '@angular/core';
import { IOrchid } from 'src/app/shared/interfaces/orchid';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  orchids: IOrchid[] | any = null;;
  isEmpty: boolean = false;
  isLoading: boolean = false;
  p: Number | any = 1;
  ip: any
  
  constructor(private userService: UserService) {
    this.getMyOrchids();
  }
  getMyOrchids() {
    this.isLoading = true;
    this.userService.getProfileOrchids().subscribe({
      next: (value) => {
        this.isLoading = false;
        this.orchids = value
        if (value.length == 0) {
          this.isEmpty = true;
        }
      },
      error: (err) => console.log(err),

    })
  }
}
