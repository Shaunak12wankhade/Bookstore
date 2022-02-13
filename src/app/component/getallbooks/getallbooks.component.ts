import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservice/book.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {
  book:any;  // used as a variable to store id of books 
  allbooks:any;
  countbooks:any; //we are just binding data using string interpolation between getallbooks.html and getaalbooks.ts
  totalLength:any;
  page:number = 1;

  constructor( private books:BookService, private route:Router) { }

  ngOnInit(): void {
    this.getallbooks();
  }
  
  getallbooks(){
    this.books.usergetallbooks().subscribe((response:any)=>{
      console.log(response.result);
      this.allbooks= response.result

      this.countbooks=response.result.length  //.length is used because the count of number of books is stored inside length we can see that in console at the endof the books array length:20 is written
      this.totalLength=response.result.length  // done for pagination part
    })
  }

  quickview(book:any){  //used as a variable to store id of books used below in localstorage as book._id

    localStorage.setItem('bookId', book._id);  // _id is coming from console means from backend we are setting our _id of book in book variable declared above and in parenthesis of quickview() annd we will get it in quick view.ts component
    this.route.navigateByUrl('/dashboard/quickview/' + book._id) //due to this after clicking on any book image in getallbooks we will be redirected to the quickview of that particular book 
    

  }
}
