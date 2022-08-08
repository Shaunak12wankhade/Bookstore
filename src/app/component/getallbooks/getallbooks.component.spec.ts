import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallbooksComponent } from './getallbooks.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';

import { SearchbookPipe } from '../pipe/searchbook.pipe'; // this module you have to import in declarations as in app.module.ts we have imported in declarations array



describe('GetallbooksComponent', () => {
  let component: GetallbooksComponent;
  let fixture: ComponentFixture<GetallbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallbooksComponent,SearchbookPipe ],
      imports:[HttpClientTestingModule,RouterTestingModule,NgxPaginationModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h2 tag', () => {
    const fixture = TestBed.createComponent(GetallbooksComponent);
    // fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    expect(fixture.debugElement.nativeElement.querySelector('span').textContent).toContain('Books');
  });
  
  it('should test sort by relevance low method', async(() => {
    spyOn(component, 'lowtohigh');
  
    let button = fixture.debugElement.nativeElement.querySelector('mat-option');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.lowtohigh).toHaveBeenCalled();
    });
  }));

});
