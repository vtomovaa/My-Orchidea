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
    let loggedUser = {email: 'eriktdrv@gmail.com', username: 'todorowwww', accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M…E1M30.yUFeQrBWdR0INl4YvwuPTIu0HGmq0RdIA-uAaEEskgg', _id: '638f60d66da3e38a9d9bb507'}
    service.login({email: 'eriktdrv@gmail.com', password: '123456'}).subscribe((value) => currUser = value)
  })
});
