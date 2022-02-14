import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token:any;

  constructor(private httpService: HttpService) {
    this.token=localStorage.getItem("token")  // this token is taken from backend that is generated & stored in our local storage after we login & we are setting this token in our login.ts as localstorage.setitems
   }
 
   
  usergetallbooks(){
     
    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
   return this.httpService.getService('get/book', true,header )
   }

   useraddtobag( productID:any){  //here we are using product id as it is used in backend API 
         
    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'x-access-token':this.token    // use x-acces-token instead of authorization as it is coming from backend otherwise it will throw error
      })
    }
   return this.httpService.postService('add_cart_item/'+ productID,{}, true,header )  
   }

   useraddtowishlist( productID:any){  //here we are using product id as it is used in backend API 
         
    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'x-access-token':this.token
      })
    }
   return this.httpService.postService('add_wish_list/'+ productID,{}, true,header ) 
  }

  usergetcartlist(){
     
    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'x-access-token':this.token
      })
    }
   return this.httpService.getService('get_cart_items', true,header )
   }

   userupdatequantity(productID:any, req:any){
    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'x-access-token':this.token    // use x-acces-token instead of authorization as it is coming from backend otherwise it will throw error
      })
    }
   return this.httpService.putService('/cart_item_quantity/'+ productID, req, true,header )  
   }

   userremovecartitem(productID:any){
    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'x-access-token':this.token    // use x-acces-token instead of authorization as it is coming from backend otherwise it will throw error
      })
    }
    return this.httpService.deleteService('/remove_cart_item/ + productID',{}, true,header)
   }
}
