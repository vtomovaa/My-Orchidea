import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AddOrchidComponent } from './add-orchid.component';

describe('AddOrchidComponent', () => {
  let component: AddOrchidComponent;
  let fixture: ComponentFixture<AddOrchidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrchidComponent ],
      imports: [HttpClientModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrchidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
