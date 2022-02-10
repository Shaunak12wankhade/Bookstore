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
 
   
  usergetallnotes(){
     
    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
   return this.httpService.getService('get/book', true,header )
   }
}
