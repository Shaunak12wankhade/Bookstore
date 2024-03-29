import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminupdateComponent } from './adminupdate.component';

describe('AdminupdateComponent', () => {
  let component: AdminupdateComponent;
  let fixture: ComponentFixture<AdminupdateComponent>;
  // const mockDialogRef = { close: jasmine.createSpy('close') };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminupdateComponent ],
      imports: [ReactiveFormsModule, FormsModule,HttpClientTestingModule,RouterTestingModule,MatDialogModule],
      // providers: [ { provide: MatDialogRef, useValue: mockDialogRef } ]
      // providers:[MatDialogRef]
      providers: [
        { 
        provide: MatDialogRef,
        useValue: []
         }, 
        { 
        provide: MAT_DIALOG_DATA, 
        useValue: [] 
        }
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
