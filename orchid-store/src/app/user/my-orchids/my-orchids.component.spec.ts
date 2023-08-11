import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrchidsComponent } from './my-orchids.component';

describe('MyOrchidsComponent', () => {
  let component: MyOrchidsComponent;
  let fixture: ComponentFixture<MyOrchidsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOrchidsComponent]
    });
    fixture = TestBed.createComponent(MyOrchidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
