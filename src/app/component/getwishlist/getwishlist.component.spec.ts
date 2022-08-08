import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetwishlistComponent } from './getwishlist.component';

describe('GetwishlistComponent', () => {
  let component: GetwishlistComponent;
  let fixture: ComponentFixture<GetwishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetwishlistComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetwishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render my cart', () => {
  //   const fixture = TestBed.createComponent(GetwishlistComponent);
  //   // fixture.detectChanges();
  //   // const compiled = fixture.debugElement.nativeElement;
  //   expect(fixture.debugElement.nativeElement.querySelector('span').textContent).toContain('My Wishlist');
  // });
});
