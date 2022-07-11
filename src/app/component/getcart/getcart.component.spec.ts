import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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
});
