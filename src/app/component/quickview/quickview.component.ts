import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservice/book.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  bookdata:any;

  bookid:any;  // used as a variable to store book id's used in activated route part below

  feedbackArray:any;
  feedback:any;
  value:any;

  book_qty = 1;
  addtobag:boolean=true;
  quantity:boolean=false;

  constructor(private books:BookService, private activatedroute: ActivatedRoute, private route:Router) { }

  ngOnInit(): void {

    // this.bookid=localStorage.getItem("bookId") 

    this.bookid = this.activatedroute.snapshot.paramMap.get("bookId"); // we are getting/storing bookid by using activated route part and not by using local storage as done and commented above
    console.log(this.bookid);

    this.getbook();
    this.getfeedback();
  }
  getbook(){

    this.books.usergetallbooks().subscribe((response:any)=>{  // here even though the method is of getbook() we are calling the api integration of usergetallbooks() that is done previously in getallbooks.ts and then we are storing all books data in element by using forEach loop as below
      response.result.forEach((element:any) => {  // in element we are storing our entire bookdetails 

        if (element._id == this.bookid){  // here we are comparing entire book id (element._id) with one particular book id(this.bookid)
          this.bookdata= element;  // we are storing our entire book details in element and assigning to this.bookdata that is coming from quickview.html (bookdata.bookName, bookdata.author)
        }
        
      });

    });
  }

  addtocart(){
    this.addtobag= false;
    this.quantity=true;
    this.books.useraddtobag(this.bookid).subscribe((response:any) =>{
      console.log(response);
      
    })
     this.route.navigateByUrl('/dashboard/getcart')
  }
  addtowishlist(){
    this.books.useraddtowishlist(this.bookid).subscribe((response:any) =>{
      console.log(response);
      
    })
    this.route.navigateByUrl('/dashboard/getwishlist')
  }

  addfeedback(){
    let req={
      comment:this.feedback,
      rating:this.value
    }
    this.books.useraddfeedback(this.bookid,req).subscribe((response:any)=>{
      console.log(response);
      
    })
  
  }

  getfeedback(){
    this.books.usergetfeedback(this.bookid).subscribe((response:any)=>{
      console.log(response.result);
      this.feedbackArray=response.result;
      this.feedbackArray.reverse();
      
    })
    
  }

  getShortName(fullName:any) { 
    return fullName.split(' ').map((n:any) => n[0]).join('');
  }

  negative() {
    if (this.book_qty > 1) {
      this.book_qty = this.book_qty - 1;
    }
    this.updatequantity()  // to update the quantity of books in browser after clicking on this negative button we have to call this updatequantity() method here with argument, if we didnt call this updatequantity() method quantity will not get updated after clicking on(-) button
  }
  positive() {
    this.book_qty = this.book_qty + 1;
    this.updatequantity()
  }

  updatequantity() {
    let req = {
      "quantityToBuy": this.book_qty  // this quantityToBuy is coming from backend & book_qty is coming from string interpolation done in getcart.html
    }
    this.books.userupdatequantity(this.bookdata._id, req).subscribe((response: any) => {
      console.log(response);

    })
  }
}
