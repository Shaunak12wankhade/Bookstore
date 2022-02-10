import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any;

  constructor(private httpService: HttpService) { }

  userSignup(data:any){

    let header={
    headers:new HttpHeaders({    
    'Content-Type': 'application/json'  //request and response are in the format of json means key-value pair
    })
    }
    return this.httpService.postService('registration', data, false, header)
  }

  userlogin(data:any){

    let header={
    headers:new HttpHeaders({    
    'Content-Type': 'application/json'  //request and response are in the format of json means key-value pair
    })
    }
    return this.httpService.postService('login', data, false, header)
  }
  
  
}

