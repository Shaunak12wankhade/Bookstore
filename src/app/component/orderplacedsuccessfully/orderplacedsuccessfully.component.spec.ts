import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { OrderplacedsuccessfullyComponent } from './orderplacedsuccessfully.component';

describe('OrderplacedsuccessfullyComponent', () => {
  let component: OrderplacedsuccessfullyComponent;
  let fixture: ComponentFixture<OrderplacedsuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderplacedsuccessfullyComponent ],
      imports:[RouterTestingModule]
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
