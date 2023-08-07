import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { OrchidService } from './orchid.service';

describe('OrchidService', () => {
  let service: OrchidService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(OrchidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
