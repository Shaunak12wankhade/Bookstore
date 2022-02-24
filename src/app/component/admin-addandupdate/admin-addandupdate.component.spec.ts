import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddandupdateComponent } from './admin-addandupdate.component';

describe('AdminAddandupdateComponent', () => {
  let component: AdminAddandupdateComponent;
  let fixture: ComponentFixture<AdminAddandupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddandupdateComponent ]
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
