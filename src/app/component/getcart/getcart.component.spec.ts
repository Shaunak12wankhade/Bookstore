import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { GetcartComponent } from './getcart.component';

describe('GetcartComponent', () => {
  let component: GetcartComponent;
  let fixture: ComponentFixture<GetcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcartComponent ],
      imports:[HttpClientTestingModule,ReactiveFormsModule, FormsModule,RouterTestingModule]
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

  it('should render my cart', () => {
    const fixture = TestBed.createComponent(GetcartComponent);
    // fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    expect(fixture.debugElement.nativeElement.querySelector('mat-icon').textContent).toContain('place');
  });

  it('should render mat-panel title order summary', () => {
    const fixture = TestBed.createComponent(GetcartComponent);
    // fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    expect(fixture.debugElement.nativeElement.querySelector('.panel3 mat-panel-title').textContent).toContain('Order Summary');
  });

  
  it('should', async(() => {
    spyOn(component, 'ordersummary');
  
    let button = fixture.debugElement.nativeElement.querySelector('.checkoutbutton');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.ordersummary).toHaveBeenCalled();
    });
  }));

  
});
