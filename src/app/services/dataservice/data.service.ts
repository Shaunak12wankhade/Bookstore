import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('');  //THIS IS DONE FOR SEARCH PIPE PART IN GETALLBOOKS AND DASHBOARD this is used for any to any or unrelated data sharing
  receivedData = this.messageSource.asObservable();

  constructor() { }

  sendData(message: any) {  //THIS IS DONE FOR SEARCH PIPE PART IN GETALLBOOKS AND DASHBOARD this is used for any to any or unrelated data sharing
    this.messageSource.next(message)
  }
}
