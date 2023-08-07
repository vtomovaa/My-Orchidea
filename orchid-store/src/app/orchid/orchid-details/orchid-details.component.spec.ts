import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { OrchidDetailsComponent } from './orchid-details.component';

describe('OrchidDetailsComponent', () => {
  let component: OrchidDetailsComponent;
  let fixture: ComponentFixture<OrchidDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrchidDetailsComponent ],
      imports: [HttpClientModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrchidDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
