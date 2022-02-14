import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/bookservice/book.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  bookdata:any;

  bookid:any;  // used as a variable to store book id's

  constructor(private books:BookService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {

    // this.bookid=localStorage.getItem("bookId") 

    this.bookid = this.activatedroute.snapshot.paramMap.get("bookId"); // we are getting/storing bookid by using activated route part and not by using local storage as done and commented above
    console.log(this.bookid);

    this.getbook();
  }
  getbook(){

    this.books.usergetallbooks().subscribe((response:any)=>{
      response.result.forEach((element:any) => {  // in element we are storing our entire bookdetails 

        if (element._id == this.bookid){  // here we are comparing entire book id (element._id) with one particular book id(this.bookid)
          this.bookdata= element;  // we are storing our entire book details in element and assigning to this.bookdata that is coming from quickview.html (bookdata.bookName, bookdata.author)
        }
        
      });

    });
  }

  addtocart(){
    this.books.useraddtobag(this.bookid).subscribe((response:any) =>{
      console.log(response);
      
    })
  }
  addtowishlist(){
    this.books.useraddtowishlist(this.bookid).subscribe((response:any) =>{
      console.log(response);
      
    })
  }
}
