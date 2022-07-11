import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { BookService } from 'src/app/services/bookservice/book.service';
import { DataService } from 'src/app/services/dataservice/data.service';

import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {
  book: any;  // used as a variable to store id of books 

  allbooks: any[] = []; // this [] is done for added to bag button part

  countbooks: any; //we are just binding data using string interpolation between getallbooks.html and getaalbooks.ts
  totalLength: any;
  page: number = 1;

  bookid: any;  // used as a variable to store book id's used in activated route part below

  searchword: any;  // done for search pipe part
  cartbooks: any;
  cartBooksIdList: any[] = []; // this is done for added to bag button part and we are taking array[] because below we are using push function and push function works on array only

  public destroyed = new Subject<any>();
  constructor(private books: BookService, private activatedroute: ActivatedRoute, private route: Router, private dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.receivedData.subscribe((response: any) => {  //this is done for search pipe part & this received Data is coming from data service.ts for unrelated data sharing as our dashboard.ts and getall books don't have any relationship
      console.log(response)

      this.searchword = response;
      console.log(this.searchword);


      // console.log(this.filteredString);

      //  this.getallbooks();

    });

    this.bookid = this.activatedroute.snapshot.paramMap.get("bookId"); // we are getting/storing bookid by using activated route part and is done for addtocart and addto wishlist methods done below as sir asked to add cart and wishlist buttons below each book in getall books
    console.log(this.bookid);

    this.getcartlist(); // this is done for added to bag button part

    this.getallbooks();
    this.booksandcart();
  }
  getallbooks() {

    this.books.usergetallbooks().subscribe((response: any) => {
      console.log(response.result);
      this.allbooks = response.result;

      this.allbooks.map((b: any) => b.isAddedToCart = false);
      console.log(this.allbooks);

      // this.cartbooks.map((element:any)=>element.isAddedToCart=true);
      // console.log(this.allbooks);

      this.countbooks = response.result.length  //.length is used because the count of number of books is stored inside length we can see that in console at the endof the books array length:20 is written
      this.totalLength = response.result.length  // done for pagination part

      // localStorage.setItem('bookId', book._id);
      console.log(this.cartBooksIdList);

      this.allbooks.forEach((element: any) => {  // in element we are storing our entire bookdetails 
        console.log(element._id);

        // console.log(this.cartBooksIdList.indexOf(element._id));

        if (this.cartBooksIdList.indexOf(element._id) > -1) {

          if (this.cartBooksIdList.indexOf(element._id) >= 0) {
            element.isAddedToCart = true;
          }

          // if (this.allbooks == this.cartBooksIdList) {
          //   element.isAddedToCart = true;
          // }
        }
        else {
          element.isAddedToCart = false;
        }

      });
      console.log(this.allbooks);

      // this.allbooks=this.allbooks.filter((result:any)=>{ // done for added to bag part using filter method
      //   console.log(result.isAddedToCart);
      //   return result.isAddedToCart ===false;   
      // });


    });

    // this.allbooks.result.forEach((element:any) => {  // in element we are storing our entire bookdetails 

    //   if (this.cartBooksIdList.indexOf(element._id)>=0){  
    //     element.isAddedToCart=true;
    //   }

    // });

  }

  getcartlist() {  //We are again calling this getcartlist api here in getall books.ts for this added to bag and map function part done above

    this.books.usergetcartlist().subscribe((response: any) => {
      console.log(response);

      this.cartbooks = response.result;
      response.result.forEach((element: any) => {

        // if(element._id == this.bookid){
        //   // this.cartBooksIdList=element
        //   element.isAddedToCart=true;
        // }
        // else{
        //   // this.allbooks=element
        //   element.isAddedToCart=false;
        // }

        this.cartBooksIdList.push(element["product_id"]._id)  // this[product_id] we are taking because in browser in console we can see whatever the bookid we want it is stored inside element(i.e., 0,1,2,3...) inside product_id and inside that there is our desired bookid
        element.isAddedToCart = true;
      })
    })


  }

  booksandcart() {
    var isAddedToCart = true;
    this.allbooks.forEach((element: any) => {
      console.log(element._id);
      this.cartBooksIdList.forEach((element: any) => {
        console.log((element._id));
        if (isAddedToCart) {
          // if (this.allbooks == this.cartBooksIdList) {
          if (element._id == element["product_id"]._id) {
            this.book.isAddedToCart = true;
          }
          else {
            this.book.isAddedToCart = false;
          }
        }

      })

    })
  }


  quickview(book: any) {  //used as a variable to store id of books used below in localstorage as book._id

    localStorage.setItem('bookId', book._id);  // _id is coming from console means from backend we are setting our _id of book in book variable declared above and in parenthesis of quickview() annd we will get it in quick view.ts component
    this.route.navigateByUrl('/dashboard/quickview/' + book._id) //due to this after clicking on any book image in getallbooks we will be redirected to the quickview of that particular book 


  }


  addtocart(book: any) {
    book.isAddedToCart = true;

    // let reqdata={
    // isAddedToCart:true,
    // }

    this.books.useraddtobag(book._id).subscribe((response: any) => {
      console.log(response);

    })

    // this.route.navigateByUrl('/dashboard/getcart' )

    // this.getcartlist(); // this is done for added to bag button part
    // this.getallbooks(); // this is done for added to bag button part

    // window.location.reload();

  }
  addtowishlist(book: any) {
    this.books.useraddtowishlist(book._id).subscribe((response: any) => {
      console.log(response);

    })
    // this.route.navigateByUrl('/dashboard/getwishlist')

    // this.getcartlist(); // this is done for added to bag button part
    // this.getallbooks(); // this is done for added to bag button part

    //  window.location.reload();
  }
  lowtohigh() {
    this.allbooks = this.allbooks.sort((low: any, high: any) => low.price - high.price); //.price is coming from backend api
  }
  hightolow() {
    this.allbooks = this.allbooks.sort((low: any, high: any) => high.price - low.price);
  }
  newestarrivals() {
    this.allbooks.reverse();
  }
}

