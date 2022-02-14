import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookservice/book.service';

@Component({
  selector: 'app-getcart',
  templateUrl: './getcart.component.html',
  styleUrls: ['./getcart.component.scss']
})
export class GetcartComponent implements OnInit {
  cartcount:any;
  cartbooks:any; // coming from getcart.html from ngFor
  book_qty =1;
  step=0;

  constructor(private books:BookService) { }

  ngOnInit(): void {
    this.getcartlist();
  }

  getcartlist(){
    this.books.usergetcartlist().subscribe((response:any)=>{
      console.log(response);
      this.cartcount= response.result.length
      this.cartbooks= response.result
      
    })
  }

  negative(book:any){
    if(this.book_qty > 1){
      this.book_qty = this.book_qty - 1;
    }
    this.updatequantity(book)  // to update the quantity of books in browser after clicking on this negative button we have to call this updatequantity() method here with argument, if we didnt call this updatequantity() method quantity will not get updated after clicking on(-) button
  }
  positive(book:any){
    this.book_qty = this.book_qty +1;
    this.updatequantity(book)
  }

  updatequantity(book:any){
    let req ={
      "quantityToBuy": this.book_qty  // this quantityToBuy is coming from backend & book_qty is coming from string interpolation done in getcart.html
    }
    this.books.userupdatequantity(book.product_id._id,req).subscribe((response:any)=>{
      console.log(response);
      
    })
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  removecartitem(book:any){
    this.books.userremovecartitem(book._id).subscribe((response:any)=>{
      console.log(response);
      
    })
    this.getcartlist();
  }
}
