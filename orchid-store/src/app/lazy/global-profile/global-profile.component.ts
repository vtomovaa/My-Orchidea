import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-global-profile',
  templateUrl: './global-profile.component.html',
  styleUrls: ['./global-profile.component.css']
})
export class GlobalProfileComponent {
  p: Number | any = 1;
  currUser: any;
  isLoading: boolean = true;
  constructor(private userService: UserService, private route: ActivatedRoute){
    let username = '';
    route.params.subscribe((value: any) => username = value.owner)
    userService.getUnknownUserInfo(username).subscribe((value) => {
      this.currUser = value
      this.isLoading = false;
    })
  }
}
