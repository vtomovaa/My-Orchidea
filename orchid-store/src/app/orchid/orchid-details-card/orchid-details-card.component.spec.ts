import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchidDetailsCardComponent } from './orchid-details-card.component';

describe('OrchidDetailsCardComponent', () => {
  let component: OrchidDetailsCardComponent;
  let fixture: ComponentFixture<OrchidDetailsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrchidDetailsCardComponent]
    });
    fixture = TestBed.createComponent(OrchidDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
