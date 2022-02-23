import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookservice/book.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  count:any;
  allbooks:any;

  constructor(private books:BookService) { }

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
}
