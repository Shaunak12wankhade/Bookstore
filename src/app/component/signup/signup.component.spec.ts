import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
  // animation module
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports:[ReactiveFormsModule,FormsModule,HttpClientTestingModule,MatSelectModule, MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
