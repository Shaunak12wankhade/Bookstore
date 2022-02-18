import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderplacedsuccessfullyComponent } from './orderplacedsuccessfully.component';

describe('OrderplacedsuccessfullyComponent', () => {
  let component: OrderplacedsuccessfullyComponent;
  let fixture: ComponentFixture<OrderplacedsuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderplacedsuccessfullyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderplacedsuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
