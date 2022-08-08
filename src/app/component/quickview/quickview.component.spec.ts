import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';  // this module is used for router-routermodule and also for activated route errpr

import { QuickviewComponent } from './quickview.component';

describe('QuickviewComponent', () => {
  let component: QuickviewComponent;
  let fixture: ComponentFixture<QuickviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickviewComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render mat-icon favorite', () => {
    const fixture = TestBed.createComponent(QuickviewComponent);
    // fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    expect(fixture.debugElement.nativeElement.querySelector('mat-icon').textContent).toContain('favorite');
  });

  
  it('should render add to bag click function', async(() => {
    spyOn(component, 'addtocart');
  
    let button = fixture.debugElement.nativeElement.querySelector('.addtobag');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.addtocart).toHaveBeenCalled();
    });
  }));

  
  it('should  render add to wishlist click function', async(() => {
    spyOn(component, 'addtowishlist');
  
    let button = fixture.debugElement.nativeElement.querySelector('.wishlist');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.addtowishlist).toHaveBeenCalled();
    });
  }));

});
