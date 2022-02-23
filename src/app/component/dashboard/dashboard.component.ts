import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservice/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  filteredString: string = '';  // done for search pipe part

  badgecount:any; // done for badge count
  constructor(private route:Router,  private books:BookService) { }

  ngOnInit(): void {
    this.getcartcountforbadge();
    // this.cart();
  }
 bookstore(){
   this.route.navigateByUrl("/dashboard/getallbooks")
 }

 cart(){

  this.books.usergetcartlist().subscribe((response:any) =>{  // here we are doing the API integration of getcartitems done in getcart.component.ts for getting the count of items in cart for badge count part
    console.log(response.result);

    // this.badgecount=response.result.length
    
  })
  this.route.navigateByUrl("/dashboard/getcart")
 }

 getcartcountforbadge(){  //here we are doing the API integration of getcartitems done in getcart.component.ts for getting the count of items in cart for badge count part

  this.books.usergetcartlist().subscribe((response:any) =>{  // here we are doing the API integration of getcartitems done in getcart.component.ts for getting the count of items in cart for badge count part
    console.log(response.result);
    this.badgecount=response.result.length
 })
}


 wishlist(){
  this.route.navigateByUrl("/dashboard/getwishlist")
 }

 
 Logout(){
  localStorage.clear();
  this.route.navigateByUrl('/login')
}
}
