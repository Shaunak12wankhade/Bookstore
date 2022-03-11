import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservice/book.service';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-getcart',
  templateUrl: './getcart.component.html',
  styleUrls: ['./getcart.component.scss']
})
export class GetcartComponent implements OnInit {
  book:any; // this is used inside nextstep() for cartcount as if(this.book.cartcount){}
  cartcount: any;
  cartbooks: any; // coming from getcart.html from ngFor
  orderlist: any = []; //use to store list of orders & is done below in ordersummary()
  book_qty = 1;

  // step = 0;

  customerForm!: FormGroup;
  submitted = false;
  // iscustomercontinue=false;

  step1:any;
  step1button:boolean=true;
  step2:any;
  step2button:boolean=true;

  address:any;
  fullName:any;
  mobileNo:any;
  disabled:boolean=true;
  
  constructor(private books: BookService, private formbuilder: FormBuilder, private user: UserService, private route:Router) {
    // this is done for patch value in customer details part
    this.fullName=localStorage.getItem('fullName');
    this.mobileNo=localStorage.getItem('phone');
   }

  ngOnInit(): void {
    this.getcartlist();
    this.customerForm = this.formbuilder.group({
      fullName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],

    })
  }

  getcartlist() {
    this.books.usergetcartlist().subscribe((response: any) => {
      console.log(response);
      this.cartcount = response.result.length
      this.cartbooks = response.result;

      for(this.book of this.cartbooks){

        this.address={
            "fullName": this.book.user_id.fullName,
            "mobileNo": this.book.user_id.phone
        }

        this.customerForm.patchValue({
          "fullName": this.address.fullName,
          "mobileNo": this.address.mobileNo
        });
        console.log(this.address);
        
      }

    })
  }

  negative(book: any) {
    if (this.book_qty > 1) {
      this.book_qty = this.book_qty - 1;
    }
    this.updatequantity(book)  // to update the quantity of books in browser after clicking on this negative button we have to call this updatequantity() method here with argument, if we didnt call this updatequantity() method quantity will not get updated after clicking on(-) button
  }
  positive(book: any) {
    this.book_qty = this.book_qty + 1;
    this.updatequantity(book)
  }

  updatequantity(book: any) {
    let req = {
      "quantityToBuy": this.book_qty  // this quantityToBuy is coming from backend & book_qty is coming from string interpolation done in getcart.html
    }
    this.books.userupdatequantity(book.product_id._id, req).subscribe((response: any) => {
      console.log(response);

    })
  }

  setStep(index: any) {
    if (index == 1) {
      if(this.cartcount>=1){
      this.disabled=false;
      this.step1 = true;
      this.step1button = false;
     
    }
    }
    else if (index == 2) {
      if (this.customerForm.valid){
      this.step2 = true;
      this.step2button = false;
    }
    }
  }

  // enable(){
  //   if(this.cartcount>=1){
  //     this.disabled=true;
  //   }
  // }

  // setStep(index: number) {
  //   // if(this.book.cartcount>=1){
  //     this.step = index;
  //   // }  
  // }

  // nextStep() {
  //   // if(this.book.cartcount>=1){

  //   //  if (this.customerForm.valid) {
  //     // this.submitted = true;

  //   //  this.iscustomercontinue=true;
  //   this.step++;
    
  //   //  }

  //   // }
  
  // }

  // prevStep() {
  //   this.step--;
  // }

  removecartitem(book: any) {
    this.books.userremovecartitem(book._id).subscribe((response: any) => {
      console.log(response);

    })
    this.getcartlist();
  }

  onSubmit() {
    this.submitted = true;
    

    if (this.customerForm.valid) {
      console.log(this.customerForm.value);

      let payload = {
        addressType: "Home",
        fullAddress: this.customerForm.value.address,
        city: this.customerForm.value.city,
        state: this.customerForm.value.state,

      }
      this.user.useraddress(payload).subscribe((response: any) => {
        console.log(response);

      })
    }
    else {
      console.log("Please fill the form");
    }


  }

  ordersummary() {

    if(this.cartcount>=1){

    this.cartbooks.forEach((element: any) => {  //whatever data we have inside cartBooks we are assigning to element by using forEach 
      console.log(element);
      this.orderlist.push({     // push method adds the element at the end of an array
        "product_id": element.product_id._id,  // here we are accessing the particular product id's id, bookname, quantity, price from element(where tha data of all books is stored)
        "product_name": element.product_id.bookName,
        "product_quantity": element.product_id.quantityToBuy,
        "product_price": element.product_id.price
      })
    });
    let data = {
      "orders": this.orderlist
    }

    this.books.usercheckout(data).subscribe((response: any) => {
      console.log(response);


    })
    this.route.navigateByUrl("/dashboard/orderplacedsuccessfully")
  }
}

}
