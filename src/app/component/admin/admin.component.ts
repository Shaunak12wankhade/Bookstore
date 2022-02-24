import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BookService } from 'src/app/services/bookservice/book.service';
import { AdminAddandupdateComponent } from '../admin-addandupdate/admin-addandupdate.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  count:any;
  allbooks:any;

  constructor(private books:BookService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getallbooks();
  }


  getallbooks(){
    
    this.books.usergetallbooks().subscribe((response:any)=> {
    console.log(response.result);
    this.allbooks= response.result
   
    this.count=response.result.length //.length is used because the count of number of books is stored inside length we can see that in console at the endof the books array length:20 is written
   
    
    // localStorage.setItem('bookId', book._id);
    
  })
}

 // this below code is used to update the note i.e.,updatecomponent
 AddBook(): void {
  const dialogRef = this.dialog.open(AdminAddandupdateComponent, {
    width: '450px',
    height:'600px',     
    data: {Book:null}
  });

  dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed');
    // this.title=result;
    // this.description=result;
    
  });
  
}

// UpdateBook(note1object: any): void {
//   const dialogRef = this.dialog.open(UpdateComponent, {
//     width: '650px',     
//     data: note1object,
//   });

//   dialogRef.afterClosed().subscribe(result => {
//      console.log('The dialog was closed');
//     // this.title=result;
//     // this.description=result;
    
//   });
  
}




