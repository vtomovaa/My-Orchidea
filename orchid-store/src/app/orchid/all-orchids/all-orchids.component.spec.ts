import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrchidsComponent } from './all-orchids.component';

describe('AllOrchidsComponent', () => {
  let component: AllOrchidsComponent;
  let fixture: ComponentFixture<AllOrchidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOrchidsComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllOrchidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
