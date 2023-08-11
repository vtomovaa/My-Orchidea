import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should return Observable', () => {
    let currUser ;
    let loggedUser = {email: 'peter@abv.bg', username: 'asdasd', accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDkzMGRjZGFhNmJhNmE4MTc5NzY5ZWEiLCJlbWFpbCI6InBldGVyQGFidi5iZyIsIm5hbWUiOiJQZXRlciBQYXJrZXIgRU9PRCIsImFkZHJlc3MiOiLQkdCw0L3RgdC60L4sINGD0LsuINCT0LvQsNC30L3QtSAyOSIsInBob25lIjoiKzM1OTg4ODc3NzY2NiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5MDQ1Njk1MSwiZXhwIjoxNjkwNTQzMzUxfQ.3m6egmFUik92P20IwXjT3UvL-zTrUWF1CMahw3hM3Hs', _id: '64930dcdaa6ba6a8179769ea'}
    service.login({email: 'asda@abv.bg', password: '123456'}).subscribe((value) => currUser = value)
  })
});
