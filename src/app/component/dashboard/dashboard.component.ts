import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservice/book.service';
import { DataService } from 'src/app/services/dataservice/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // filteredString: string = '';  // done for search pipe part
   isSearch =false; // done for search pipe part
  badgecount: any; // done for badge count

  fullName:any;

  constructor(private route: Router, private books: BookService, private dataservice: DataService) {
    // this.fullName=localStorage.getItem("fullName");
   this.fullName=localStorage.getItem('fullName');
    //  this.fullName=localStorage.getItem('email');

   }

  ngOnInit(): void {
    this.getcartcountforbadge();
    // this.cart();



  }
  bookstore() {
    this.route.navigateByUrl("/dashboard/getallbooks")
  }

  cart() {

    this.books.usergetcartlist().subscribe((response: any) => {  // here we are doing the API integration of getcartitems in dashboard.ts for getting the count of items in cart for badge count part which is already once done in getcart.component.ts 
      console.log(response.result);

      // this.badgecount=response.result.length

    })
    this.route.navigateByUrl("/dashboard/getcart")
  }

  getcartcountforbadge() {  //here we are doing the API integration of getcartitems done in getcart.component.ts for getting the count of items in cart for badge count part

    this.books.usergetcartlist().subscribe((response: any) => {  // here we are doing the API integration of getcartitems done in getcart.component.ts for getting the count of items in cart for badge count part
      console.log(response.result);
      this.badgecount = response.result.length
    })
  }


  wishlist() {
    this.route.navigateByUrl("/dashboard/getwishlist")
  }


  Logout() {
    localStorage.clear();
    this.route.navigateByUrl('/login')
  }

  clearFilter(search: any) {  // THIS IS DONE FOR SEARCH PIPE PART IN GETALLBOOKS AND DASHBOARD
    console.log(search);  //this .target.value is coming from console

    this.dataservice.sendData(search) // done for search pipe & this .target.value is coming from console
  }

}
