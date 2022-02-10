import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookservice/book.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {
  book:any;
  allbooks:any;

  constructor( private books:BookService) { }

  ngOnInit(): void {
    this.getallbooks();
  }
  
  getallbooks(){
    this.books.usergetallnotes().subscribe((response:any)=>{
      console.log(response.result);
      this.allbooks= response.result
      
    })
  }
}
