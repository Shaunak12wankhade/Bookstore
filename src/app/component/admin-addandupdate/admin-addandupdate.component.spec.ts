import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminAddandupdateComponent } from './admin-addandupdate.component';

describe('AdminAddandupdateComponent', () => {
  let component: AdminAddandupdateComponent;
  let fixture: ComponentFixture<AdminAddandupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddandupdateComponent ],
      imports: [ReactiveFormsModule, FormsModule,HttpClientTestingModule,RouterTestingModule,MatDialogModule],
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
    fixture = TestBed.createComponent(AdminAddandupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
