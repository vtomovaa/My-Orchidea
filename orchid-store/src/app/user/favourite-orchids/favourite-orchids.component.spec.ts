import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteOrchidsComponent } from './favourite-orchids.component';

describe('FavouriteOrchidsComponent', () => {
  let component: FavouriteOrchidsComponent;
  let fixture: ComponentFixture<FavouriteOrchidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteOrchidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteOrchidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
