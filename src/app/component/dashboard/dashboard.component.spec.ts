import { ComponentFixture,async, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { MatMenuModule } from '@angular/material/menu';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule,MatMenuModule]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
    });;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title in a h2 tag', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    // fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    expect(fixture.debugElement.nativeElement.querySelector('h2').textContent).toContain('Bookstore');
  });
  it('should render title in a .Cart p tag', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.cart p').textContent).toContain('Cart');
  });

  // test case with mat menu
  
  // it('should render title in a h5 tag', () => {
  //   const fixture = TestBed.createComponent(DashboardComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h5').textContent).toContain('To Logout account');
  // });


  //click functions  testing
  it('should', async(() => {
    spyOn(component, 'bookstore');
  
    let button = fixture.debugElement.nativeElement.querySelector('.imgandtext');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.bookstore).toHaveBeenCalled();
    });
  }));


  it('should', async(() => {
    spyOn(component, 'cart');
  
    let button = fixture.debugElement.nativeElement.querySelector('.cart');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.cart).toHaveBeenCalled();
    });
  }));
  

  it('should', fakeAsync(() => {
    spyOn(component, 'bookstore');
  
    let button = fixture.debugElement.nativeElement.querySelector('.imgandtext');
    button.click();
    tick();
    expect(component.bookstore).toHaveBeenCalled();
  
  }));
});
