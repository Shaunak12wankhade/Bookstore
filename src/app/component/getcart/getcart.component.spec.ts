import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcartComponent } from './getcart.component';

describe('GetcartComponent', () => {
  let component: GetcartComponent;
  let fixture: ComponentFixture<GetcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
